import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router

const Sidebar = ({ username, role, setSelectedSection, selectedSection, stores, fetchStores }) => {
    const router = useRouter(); // Initialize useRouter hook

    const commonSections = [
        { label: '👤 MyInfo', section: 'my_info' },
    ];

    const sellerSections = [
        { label: '📊 Dashboard', section: 'dashboard' },
        { label: '🏪 Stores', section: 'stores_dropdown' },
    ];

    const consumerSections = [
        { label: '📦 MyOrders', section: 'my_orders' },
        { label: '❤️ Wishlist', section: 'wishlist' },
        { label: '💸 Transactions', section: 'transactions' },
    ];

    const sections = role === 'seller' 
        ? [...commonSections, ...sellerSections]
        : [...commonSections, ...consumerSections];

    sections.push({ label: '🔓 Logout', section: 'logout' });

    const handleDropdownClick = () => {
        fetchStores();
    };

    const handleCreateStoreClick = () => {
        router.push('/me/create_store_form'); // Redirect to the create store form
    };

    return (
        <div className="w-64 bg-white p-4 rounded-lg shadow-md">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Hello {username}</h2>
                <p className="text-gray-500">Welcome to your Account</p>
            </div>
            <ul className="space-y-4">
                {sections.map(({ label, section }) => (
                    section === 'stores_dropdown' ? (
                        <li key={section}>
                            <button
                                className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors`}
                                onClick={handleDropdownClick}
                            >
                                <span className="mr-2">{label.split(' ')[0]}</span> {label.split(' ')[1]}
                            </button>
                            {stores.length === 0 ? (
                                <div className="pl-4 mt-2">
                                    <button
                                        className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
                                        onClick={handleCreateStoreClick}
                                    >
                                        Create New Store
                                    </button>
                                </div>
                            ) : (
                                <ul className="pl-4 space-y-2">
                                    {stores.map((store, index) => (
                                        <li key={index}>
                                            <button
                                                className={`flex items-center text-gray-700 hover:text-gray-900 transition-colors ${
                                                    selectedSection === `store_${index}` ? 'font-bold' : ''
                                                }`}
                                                onClick={() => setSelectedSection(`store_${index}`)}
                                            >
                                                {store.store_name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
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
                    )
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
