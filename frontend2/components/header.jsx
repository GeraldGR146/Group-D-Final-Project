import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-gray-100">
            <div className="max-w-7xl mx-auto h-[60px] flex items-center justify-between px-4 lg:px-8 border-b border-gray-200 bg-white">
                <div className="flex items-center space-x-4 lg:space-x-8">
                    <img src="/assets/logo.png" alt="Logo" className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover" />
                    <h1 className="text-lg lg:text-2xl font-bold text-gray-800">Localnect</h1>
                    <nav className="hidden lg:flex space-x-4 lg:space-x-6 text-gray-600">
                        <Link href="/" className="hover:text-gray-800">
                            Home
                        </Link>
                        <div className="relative group">
                            <Link href="/products" className="hover:text-gray-800 flex items-center">
                                Product <i className="fas fa-chevron-down ml-1 text-xs"></i>
                            </Link>
                        </div>
                        <Link href="/shopping_cart" className="hover:text-gray-800">
                            Shopping Cart
                        </Link>
                        <Link href="/me" className="hover:text-gray-800">
                            Profile
                        </Link>
                        <Link href="#" className="hover:text-gray-800">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="hidden lg:block">
                    <SearchBar />
                </div>
                <div className="flex items-center space-x-4 lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
                <div className="hidden lg:flex items-center space-x-4 text-blue-600">
                    <Link href="/register" className="hover:underline">
                        Login / Register
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-blue-600">
                        <i className="fas fa-search"></i>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-blue-600">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-blue-600">
                        <i className="fas fa-heart"></i>
                    </Link>
                </div>
            </div>
            <div className="block lg:hidden px-4 py-2">
                <SearchBar />
            </div>
            {menuOpen && (
                <nav className="lg:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-2 space-y-2">
                        <Link href="/" className="block text-gray-800 hover:bg-gray-100 rounded py-2">
                            Home
                        </Link>
                        <Link href="/products" className="block text-gray-800 hover:bg-gray-100 rounded py-2">
                            Product
                        </Link>
                        <Link href="/shopping_cart" className="block text-gray-800 hover:bg-gray-100 rounded py-2">
                            Shopping Cart
                        </Link>
                        <Link href="/me" className="block text-gray-800 hover:bg-gray-100 rounded py-2">
                            Profile
                        </Link>
                        <Link href="#" className="block text-gray-800 hover:bg-gray-100 rounded py-2">
                            Contact
                        </Link>
                        <Link href="/register" className="block text-gray-800 hover:bg-gray-100 rounded py-2">
                            Login / Register
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;

