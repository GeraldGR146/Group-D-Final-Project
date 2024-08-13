import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SellerCard from '../../components/Card/SellerCard';
import ProductForm from './ProductForm';
import Transaction from './Transactions';
import ProfilePage from './ProfilePage';
import Dashboard from './Dashboard';

const Sidebar = ({ username, setSelectedSection, selectedSection, userProfile }) => {
    return (
        <div className="w-64 bg-white p-4 rounded-lg shadow-md">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Hello {username}</h2>
                <p className="text-gray-500">Welcome to your Account</p>
            </div>
            <ul className="space-y-4">
                <li>
                    <button
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${selectedSection === 'my_info' ? 'font-bold' : ''}`}
                        onClick={() => setSelectedSection('my_info')}
                    >
                        <span className="mr-2">👤</span> My Info
                    </button>
                </li>
                <li>
                    <button
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${selectedSection === 'dashboard' ? 'font-bold' : ''}`}
                        onClick={() => setSelectedSection('dashboard')}
                    >
                        <span className="mr-2">📊</span> Dashboard
                    </button>
                </li>
                <li>
                    <button
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${selectedSection === 'transactions' ? 'font-bold' : ''}`}
                        onClick={() => setSelectedSection('transactions')}
                    >
                        <span className="mr-2">💸</span> Transactions
                    </button>
                </li>
                {userProfile.stores.map((store, index) => (
                    <li key={index}>
                        <button
                            className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${selectedSection === `store_${index}` ? 'font-bold' : ''}`}
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
};

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
            return (
                <ProfilePage/>
            );
        case 'dashboard':
            return (
                <Dashboard/>
            );
        case 'transactions':
            return (
                <Transaction transactions={userProfile.transactions} />
            );
        default:
            return <div className="p-4">Select a section from the menu.</div>;
    }
};


const SellerProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [selectedSection, setSelectedSection] = useState('my_info');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // Mocking the API response for testing
                const mockResponse = {
                    data: {
                        user_id: "67890",
                        username: "jane_doe",
                        email: "jane@example.com",
                        role: "seller",
                        transactions: [
                            {
                                orderId: "12345",
                                consumerId: "98765",
                                totalAmount: "$100",
                                deliveryMethod: "Standard Shipping",
                            },
                            {
                                orderId: "67890",
                                consumerId: "54321",
                                totalAmount: "$250",
                                deliveryMethod: "Express Shipping",
                            }
                        ],
                        stores: [
                            {
                                store_name: "Jane's Store 1",
                                products: [
                                    "product1",
                                    "product2",
                                    "product3"
                                ]
                            },
                            {
                                store_name: "Jane's Store 2",
                                products: [
                                    "product4",
                                    "product5",
                                    "product6"
                                ]
                            }
                        ]
                    }
                };
                // Simulating an API call with a delay
                setTimeout(() => {
                    setUserProfile(mockResponse.data);
                }, 1000);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        fetchUserProfile();
    }, []);

    const addProduct = (storeIndex) => {
        setUserProfile(prevProfile => {
            const updatedStores = [...prevProfile.stores];
            updatedStores[storeIndex].products.push(`product${updatedStores[storeIndex].products.length + 1}`);
            return { ...prevProfile, stores: updatedStores };
        });

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!userProfile) {
        return <div className="text-center mt-20">Loading...</div>;
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

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Product Form Modal"
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 z-40"
            >
                <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                    <button 
                        onClick={closeModal} 
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        &times;
                    </button>
                    <ProductForm />
                </div>
            </Modal>
        </div>
    );
};

export default SellerProfile;
