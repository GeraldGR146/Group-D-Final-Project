import React, { useEffect, useState } from 'react';
import { fetchUserProfile, fetchStores, fetchProductsByStore, deleteProduct } from '../../components/Services/UserService';
import SellerCard from '../../components/Card/SellerCard';
import Transaction from './transactions_list';
import ProfilePage from './profile';
import HandleLogout from './Logout';
import WishlistPage from './wishlist';
import MyOrders from './my_orders';
import ShoppingCartPage from '../shopping_cart';
import Sidebar from './sidebarRev';
import { useRouter } from 'next/router';

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [selectedSection, setSelectedSection] = useState('my_info');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const loadUserProfile = async () => {
            try {
                const data = await fetchUserProfile();
                setUserProfile(data);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch user profile. Please try again later.");
                setLoading(false);
            }
        };

        loadUserProfile();
    }, []);

    const loadStores = async () => {
        try {
            const storesData = await fetchStores();
            setStores(storesData);
            console.log("Fetched stores:", storesData);
        } catch (error) {
            setError("Failed to fetch stores. Please try again later.");
        }
    };

    const fetchProductsForStore = async (storeIndex) => {
        try {
            const storeId = stores[storeIndex].id; // Assuming each store has an `id` field
            const products = await fetchProductsByStore(storeId);
            const updatedStores = [...stores];
            updatedStores[storeIndex].products = products; // Update the specific store's products
            setStores(updatedStores);
            console.log(`Fetched products for store ${storeId}:`, products);
        } catch (error) {
            setError("Failed to fetch products for this store. Please try again later.");
        }
    };

    useEffect(() => {
        if (selectedSection.startsWith('store_')) {
            const storeIndex = parseInt(selectedSection.split('_')[1]);
            fetchProductsForStore(storeIndex); // Fetch products whenever a store is selected
        }
    }, [selectedSection]);

    if (loading) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-20 text-red-500">{error}</div>;
    }

    if (!userProfile) {
        return <div className="text-center mt-20">User profile not found.</div>;
    }

    return (
        <div className="flex">
            <Sidebar
                username={userProfile.username}
                role={userProfile.role}
                setSelectedSection={setSelectedSection}
                selectedSection={selectedSection}
                stores={stores}
                fetchStores={loadStores}
            />
            <div className="w-3/4">
                <MainBody selectedSection={selectedSection} stores={stores} />
            </div>
        </div>
    );
};

const MainBody = ({ selectedSection, stores, onDeleteProduct }) => {
    const router = useRouter();

    const handleAddProduct = (store_id) => {
        sessionStorage.setItem('store_id', store_id);
        router.push('/me/new_product'); 
    };

    const handleCreatePromotion = (store_id) => {
        router.push('/me/promotion');
    };

    const handleEditProduct = (product_id) => {
        sessionStorage.setItem('product_id', product_id); 
        router.push('/me/update_product'); 
    };

    const handleDeleteProduct = async (product_id) => {
        try {
            sessionStorage.setItem('product_id', product_id);
            await deleteProduct(product_id);
            console.log(`Product with ID ${product_id} deleted successfully.`);
            alert('Product deleted successfully!');
    
            // Refresh the page
            router.reload();  // This will reload the current page
            sessionStorage.removeItem('product_id');
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    if (selectedSection.startsWith('store_')) {
        const storeIndex = parseInt(selectedSection.split('_')[1]);
        const store = stores[storeIndex];

        return (
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{store.store_name} - Products</h2>
                    <div className="flex space-x-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                            onClick={() => handleAddProduct(store.id)} // Pass the store ID
                        >
                            + Add New Product
                        </button>
                        <button
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                            onClick={() => handleCreatePromotion(store.id)} // Pass the store ID
                        >
                            + Create Promotion
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {store.products && store.products.length > 0 ? (
                        store.products.map((product, index) => (
                            <SellerCard 
                                key={index} 
                                product_id={product.product_id}
                                seller_id={product.seller_id}
                                store_id={product.store_id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                quantity={product.quantity}
                                product_type={product.product_type}
                                image_url={product.image_url}
                                onDelete={() => handleDeleteProduct(product.product_id)}
                                onEdit={() => handleEditProduct(product.product_id)} 
                            />
                        ))
                    ) : (
                        <div className="text-center mt-4">You don't have any product.</div>
                    )}
                </div>
            </div>
        );
    }


    switch (selectedSection) {
        case 'my_info':
            return <ProfilePage />;
        // case 'dashboard':
        //     return <Dashboard />;
        case 'transactions':
            return <Transaction transactions={stores.transactions} />;
        case 'wishlist':
            return <WishlistPage />;
        case 'logout':
            return <HandleLogout />;
        case 'shopping_cart':
            return <ShoppingCartPage />;
        case 'my_orders':
            return <MyOrders />;
        default:
            return <div className="p-4">Select a section from the menu.</div>;
    }
};

export default Profile;
``
