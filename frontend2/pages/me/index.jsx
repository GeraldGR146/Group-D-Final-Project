import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SellerCard from '../../components/Card/SellerCard';
import ProductForm from './product_form';
import Transaction from './transactions_list';
import ProfilePage from './profile';
import Dashboard from './dashboard/dasboard';
import HandleLogout from './Logout';
import WishlistPage from './wishlist';
import MyOrders from './my_orders';
import ShoppingCartPage from './shopping_cart/shopping_cart';

const Profile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [selectedSection, setSelectedSection] = useState('my_info');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const access_token = sessionStorage.getItem('access_token');

                if (!access_token) {
                    throw new Error("Access token is missing");
                }

                const { data } = await axios.get('http://127.0.0.1:5000/me', {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });

                // Store necessary user data in sessionStorage
                sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('role', data.role);
                sessionStorage.setItem('userProfile', JSON.stringify(data));

                // Set the user profile state with the actual data
                setUserProfile(data);
            } catch (error) {
                setError("Failed to fetch user profile. Please try again later.");
                console.error("Error fetching user profile:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const addProduct = (storeIndex) => {
        // Implement add product logic here
        console.log(`Add product to store index: ${storeIndex}`);
    };

    if (loading) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-20 text-red-500">{error}</div>;
    }

    return (
        <div className="flex">
            <Sidebar
                username={userProfile.username}
                setSelectedSection={setSelectedSection}
                selectedSection={selectedSection}
                userProfile={userProfile}
            />
            <div className="w-3/4">
                <MainBody selectedSection={selectedSection} userProfile={userProfile} addProduct={addProduct} />
            </div>
        </div>
    );
};

const Sidebar = ({ username, setSelectedSection, selectedSection, userProfile }) => (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Hello {username}</h2>
            <p className="text-gray-500">Welcome to your Account</p>
        </div>
        <ul className="space-y-4">
            {[
                { label: '👤 My Info', section: 'my_info' },
                { label: '📊 Dashboard', section: 'dashboard' },
                { label: '📦 My Orders', section: 'my_orders' },
                { label: '❤️ Wishlist', section: 'wishlist' },
                { label: '🛒 Shopping Cart', section: 'shopping_cart' },
                { label: '💸 Transactions', section: 'transactions' },
            ].map(({ label, section }) => (
                <li key={section}>
                    <button
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${
                            selectedSection === section ? 'font-bold' : ''
                        }`}
                        onClick={() => setSelectedSection(section)}
                    >
                        <span className="mr-2">{label.split(' ')[0]}</span> {label.split(' ')[1]}
                    </button>
                </li>
            ))}
            {userProfile.stores.map((store, index) => (
                <li key={index}>
                    <button
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${
                            selectedSection === `store_${index}` ? 'font-bold' : ''
                        }`}
                        onClick={() => setSelectedSection(`store_${index}`)}
                    >
                        <span className="mr-2">🏪</span> {store.store_name}
                    </button>
                </li>
            ))}
            <li>
                <button
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() => setSelectedSection('logout')}
                >
                    <span className="mr-2">🔓</span> Sign out
                </button>
            </li>
        </ul>
    </div>
);

const MainBody = ({ selectedSection, userProfile, addProduct }) => {
    if (selectedSection.startsWith('store_')) {
        const storeIndex = parseInt(selectedSection.split('_')[1]);
        const store = userProfile.stores[storeIndex];
        return (
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{store.store_name} - Products</h2>
                    <button
                        className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
                        onClick={() => addProduct(storeIndex)}
                    >
                        Add Product
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {store.products.map((product, index) => (
                        <SellerCard key={index} title={product} content={`Description of ${product}`} />
                    ))}
                </div>
            </div>
        );
    }

    switch (selectedSection) {
        case 'my_info':
            return <ProfilePage />;
        case 'dashboard':
            return <Dashboard />;
        case 'transactions':
            return <Transaction transactions={userProfile.transactions} />;
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
