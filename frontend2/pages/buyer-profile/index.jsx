import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfilePage from './ProfilePage';
import WishlistPage from '../me/wishlist';
import MyOrders from '../me/my_orders';
import ShoppingCartPage from '../me/shopping_cart/shopping_cart';
import handleLogout from './Logout';

const Sidebar = ({ username, setSelectedSection, selectedSection }) => {
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
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${selectedSection === 'my_orders' ? 'font-bold' : ''}`}
                        onClick={() => setSelectedSection('my_orders')}
                    >
                        <span className="mr-2">📦</span> My Orders
                    </button>
                </li>
                <li>
                    <button
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${selectedSection === 'wishlist' ? 'font-bold' : ''}`}
                        onClick={() => setSelectedSection('wishlist')}
                    >
                        <span className="mr-2">❤️</span> Wishlist
                    </button>
                </li>
                <li>
                    <button
                        className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${selectedSection === 'shopping_cart' ? 'font-bold' : ''}`}
                        onClick={() => setSelectedSection('shopping_cart')}
                    >
                        <span className="mr-2">🛒</span> Shopping Cart
                    </button>
                </li>
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

const MainBody = ({ selectedSection, userProfile }) => {
    switch (selectedSection) {
        case 'my_info':
            return <ProfilePage userProfile={userProfile} />;
        case 'my_orders':
            return <MyOrders userProfile={userProfile} />;
        case 'wishlist':
            return <WishlistPage userProfile={userProfile} />;
        case 'shopping_cart':
            return <ShoppingCartPage userProfile={userProfile} />;
        case 'logout':
            return <handleLogout />;

        default:
            return <div className="p-4">Select a section from the menu.</div>;
    }
};

const BuyerProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [selectedSection, setSelectedSection] = useState('my_info');

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
                        shopping_cart: ["item1", "item2", "item3"],
                        wishlist: ["wish1", "wish2"],
                    },
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
            <Sidebar 
                username={userProfile.username} 
                setSelectedSection={setSelectedSection} 
                selectedSection={selectedSection} 
            />
            <div className="w-3/4">
                <MainBody selectedSection={selectedSection} userProfile={userProfile} />
            </div>
        </div>
    );
};

export default BuyerProfile;
