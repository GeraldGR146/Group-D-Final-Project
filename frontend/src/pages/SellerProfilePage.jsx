import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SellerCard from '../components/Card/SellerCard';

const Sidebar = ({ setSelectedSection, userProfile }) => {
    return (
        <div className="w-1/4 bg-gray-200 h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul>
                <li className="mb-2">
                    <button className="text-blue-500 hover:underline" onClick={() => setSelectedSection('profile')}>
                        Dashboard
                    </button>
                </li>
                <li className="mb-2">
                    <button className="text-blue-500 hover:underline" onClick={() => setSelectedSection('transactions')}>
                        Transactions
                    </button>
                </li>
                {userProfile.stores.map((store, index) => (
                    <li className="mb-2" key={index}>
                        <button className="text-blue-500 hover:underline" onClick={() => setSelectedSection(`store_${index}`)}>
                            {store.store_name}
                        </button>
                    </li>
                ))}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {store.products.map((product, index) => (
                        <SellerCard key={index} title={product} content={`Description of ${product}`} />
                    ))}
                </div>
            </div>
        );
    }

    switch (selectedSection) {
        case 'profile':
            return (
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Seller Profile</h1>
                    <p><strong>User ID:</strong> {userProfile.user_id}</p>
                    <p><strong>Username:</strong> {userProfile.username}</p>
                    <p><strong>Email:</strong> {userProfile.email}</p>
                    <p><strong>Role:</strong> {userProfile.role}</p>
                </div>
            );
        case 'transactions':
            return (
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Transactions</h2>
                    <ul className="list-disc pl-5">
                        {userProfile.transactions.map((transaction, index) => (
                            <li key={index}>{transaction}</li>
                        ))}
                    </ul>
                </div>
            );
        default:
            return <div className="p-4">Select a section from the menu.</div>;
    }
};

const SellerProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [selectedSection, setSelectedSection] = useState('profile');

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
                            "transaction1",
                            "transaction2",
                            "transaction3"
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
    };

    if (!userProfile) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    return (
        <div className="flex">
            <Sidebar setSelectedSection={setSelectedSection} userProfile={userProfile} />
            <div className="w-3/4">
                <MainBody selectedSection={selectedSection} userProfile={userProfile} addProduct={addProduct} />
            </div>
        </div>
    );
};

export default SellerProfile;
