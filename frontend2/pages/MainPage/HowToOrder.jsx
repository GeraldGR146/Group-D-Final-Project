import React from 'react';

function HowToOrder() {

    return (
        <div className="container mx-auto px-4">
            <h1 className="flex justify-center text-3xl font-bold mb-4">HOW TO ORDER</h1>

            <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="assets/people.png" alt="Register/Login" className="w-full h-32 object-contain rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">1. Register/Login</h3>
                    <p className="text-sm">Please register or if you already have an account, please log in.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="assets/cart1.png" alt="add to cart" className="w-full h-32 object-contain rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">2. add to cart</h3>
                    <p className="text-sm">add to the cart.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="assets/pay.jpeg" alt="pay with best price" className="w-full h-32 object-contain rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">3. pay with best price</h3>
                    <p className="text-sm">pay with any methode.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                    <img src="assets/ship.png" alt="shiping" className="w-full h-32 object-contain rounded-lg mb-4" />
                    <h3 className="text-lg font-bold mb-2">4. shiping your order</h3>
                    <p className="text-sm">ship and wait.</p>
                </div>
            </div>
        </div>
    )
}

export default HowToOrder;