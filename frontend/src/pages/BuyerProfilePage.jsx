import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BuyerCard from '../components/Card/BuyerCard';

const Sidebar = ({ setSelectedSection }) => {
    return (
        <div className="w-1/4 bg-gray-200 h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul>
                <li className="mb-2">
                    <button className="text-blue-500 hover:underline" onClick={() => setSelectedSection('profile')}>
                        Profile
                    </button>
                </li>
                <li className="mb-2">
                    <button className="text-blue-500 hover:underline" onClick={() => setSelectedSection('shopping_cart')}>
                        Shopping Cart
                    </button>
                </li>
                <li className="mb-2">
                    <button className="text-blue-500 hover:underline" onClick={() => setSelectedSection('wishlist')}>
                        Wishlist
                    </button>
                </li>
            </ul>
        </div>
    );
};

const MainBody = ({ selectedSection, userProfile }) => {
    switch (selectedSection) {
        case 'profile':
            return (
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">User Profile</h1>
                    <p><strong>User ID:</strong> {userProfile.user_id}</p>
                    <p><strong>Username:</strong> {userProfile.username}</p>
                    <p><strong>Email:</strong> {userProfile.email}</p>
                    <p><strong>Role:</strong> {userProfile.role}</p>
                </div>
            );
        case 'shopping_cart':
            return (
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {userProfile.shopping_cart.map((item, index) => (
                            <BuyerCard key={index} title={item} content={`Description of ${item}`} />
                        ))}
                    </div>
                </div>
            );
        case 'wishlist':
            return (
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Wishlist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {userProfile.wishlist.map((wish, index) => (
                            <BuyerCard key={index} title={wish} content={`Description of ${wish}`} />
                        ))}
                    </div>
                </div>
            );
        default:
            return <div className="p-4">Select a section from the menu.</div>;
    }
};

const BuyerProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [selectedSection, setSelectedSection] = useState('profile');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                // Mocking the API response for testing
                const mockResponse = {
                    data: {
                        user_id: "12345",
                        username: "john_doe",
                        email: "john@example.com",
                        role: "buyer",
                        shopping_cart: [
                            "item1",
                            "item2",
                            "item3"
                        ],
                        wishlist: [
                            "wish1",
                            "wish2"
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

    if (!userProfile) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    return (
        <div className="flex">
            <Sidebar setSelectedSection={setSelectedSection} />
            <div className="w-3/4">
                <MainBody selectedSection={selectedSection} userProfile={userProfile} />
            </div>
        </div>
    );
};

export default BuyerProfile;
