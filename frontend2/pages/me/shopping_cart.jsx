import React, { useEffect, useState } from 'react';
import CartItem from '../../components/Card/CartItemCard';

const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    const shipping = 5.00; // Fixed shipping cost
    const grandTotal = subtotal + shipping;

    return (
        <div className="max-w-3xl mx-auto py-12">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="text-xl font-semibold mb-4">Shopping Cart</div>
                
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="font-semibold text-gray-700 border-b">
                            <th className="py-2 text-left">Product Details</th>
                            <th className="py-2 text-center">Price</th>
                            <th className="py-2 text-center">Quantity</th>
                            <th className="py-2 text-center">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </tbody>
                </table>

                <div className="border-t mt-6 pt-4">
                    <div className="flex justify-between text-lg font-medium">
                        <p>Sub Total</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                        <p>Shipping</p>
                        <p>${shipping.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                        <p>Grand Total</p>
                        <p>${grandTotal.toFixed(2)}</p>
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    <button className="text-blue-500 hover:text-blue-700">Continue Shopping</button>
                    <button className="bg-green-500 text-white px-6 py-3 rounded">Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
