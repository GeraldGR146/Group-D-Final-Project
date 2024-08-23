import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                className="rounded-md bg-green-500 hover:bg-green-600 text-white px-4 py-2"
                onClick={toggleDropdown}
            >
                Product
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/product/vegetable">
                        Vegetable
                    </Link>
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/product/fruit">
                        Fruit
                    </Link>
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/product/fish-meat">
                        Fish & Meat
                    </Link>
                    <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/product/seasoning">
                        Seasoning
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;