import React from 'react';

function HowToOrder() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">HOW TO ORDER</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center">
                    <img 
                        src="assets/people.png" 
                        alt="Register/Login" 
                        className="w-full h-32 object-contain rounded-lg mb-4" 
                    />
                    <h3 className="text-lg font-bold mb-2">1. Register/Login</h3>
                    <p className="text-sm text-center">Please register or log in if you already have an account.</p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center">
                    <img 
                        src="assets/cart1.png" 
                        alt="Add to Cart" 
                        className="w-full h-32 object-contain rounded-lg mb-4" 
                    />
                    <h3 className="text-lg font-bold mb-2">2. Add to Cart</h3>
                    <p className="text-sm text-center">Add items to your cart.</p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center">
                    <img 
                        src="assets/pay.jpeg" 
                        alt="Pay" 
                        className="w-full h-32 object-contain rounded-lg mb-4" 
                    />
                    <h3 className="text-lg font-bold mb-2">3. Make Payment</h3>
                    <p className="text-sm text-center">Pay using any available payment method.</p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg flex flex-col items-center">
                    <img 
                        src="assets/ship.png" 
                        alt="Shipping" 
                        className="w-full h-32 object-contain rounded-lg mb-4" 
                    />
                    <h3 className="text-lg font-bold mb-2">4. Shipping</h3>
                    <p className="text-sm text-center">Your order will be shipped. Please wait for delivery.</p>
                </div>
            </div>
        </div>
    );
}

export default HowToOrder;
