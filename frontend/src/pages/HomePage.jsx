import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SellerProfile from './SellerProfilePage';
import BuyerProfile from './BuyerProfilePage';
import LoginPage from './LoginPage';
import Register from './../components/Auth/Register';
import MainPage from './MainPage';
// import './../index.css';

const HomePage = () => {
    return (
        <BrowserRouter>
            <h1>App Name</h1>
            <nav className="bg-gray-100 p-4 flex space-x-4">
                <li className="flex space-x-4">
                    <div className="rounded-md bg-green-500 hover:bg-green-600 text-white px-4 py-2">
                        <Link className="text-white hover:text-gray-300" to="/">Home</Link>
                    </div>
                </li>
                <li className="flex space-x-4">
                    <div className="rounded-md bg-green-500 hover:bg-green-600 text-white px-4 py-2">
                        <Link className="text-white hover:text-gray-300"  to="/register">Register</Link>
                    </div>
                </li>
                <li className="flex space-x-4">
                    <div className="rounded-md bg-green-500 hover:bg-green-600 text-white px-4 py-2">
                        <Link className="text-white hover:text-gray-300" to="/login">Login</Link>
                    </div>
                </li>
            </nav>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/seller-profile" element={<SellerProfile />} />
                    <Route path="/buyer-profile" element={<BuyerProfile />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
    );
};

export default HomePage;