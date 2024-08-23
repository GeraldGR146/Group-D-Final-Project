import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    return (
        <header className="bg-gray-100">
        <div className="w-[1200px] mx-auto h-[60px] flex items-center justify-between border-b border-gray-200 bg-white">
            <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-800">App Name</h1>
            <nav className="flex space-x-6 text-gray-600">
                <Link href="/" className="hover:text-gray-800">
                Home
                </Link>
                <div className="relative group">
                <Link href="/product-info" className="hover:text-gray-800 flex items-center">
                    Product <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </Link>
                </div>
                <Link href="#" className="hover:text-gray-800">
                About
                </Link>
                <Link href="#" className="hover:text-gray-800">
                Blog
                </Link>
                <Link href="#" className="hover:text-gray-800">
                Contact
                </Link>
                <Link href="#" className="hover:text-gray-800">
                Pages
                </Link>
            </nav>
            </div>
            <SearchBar />
            <div className="flex items-center space-x-4 text-blue-600">
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
        </header>
    );
};

export default Header;
