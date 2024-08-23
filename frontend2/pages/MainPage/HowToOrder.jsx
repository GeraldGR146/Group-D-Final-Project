import React from 'react';

function HowToOrder() {

    return (
        <div className="container mx-auto px-4">
            <h1 className="flex justify-center text-3xl font-bold mb-4">HOW TO ORDER</h1>

            <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Register/Login" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">1. Register/Login</h3>
                    <p className="text-sm">Please register or if you already have an account, please log in.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Easy to use" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">2. Easy to use</h3>
                    <p className="text-sm">Things on every small that you have.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Easy to use" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">3. Easy to use</h3>
                    <p className="text-sm">Things on a very small that you have any direct.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="https://via.placeholder.com/150" alt="Easy to use" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">4. Easy to use</h3>
                    <p className="text-sm">Things on a very small that you have any direct.</p>
                </div>
            </div>
        </div>
    )
}

export default HowToOrder;