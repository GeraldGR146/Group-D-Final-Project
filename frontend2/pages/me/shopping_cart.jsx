import React from 'react';
import CartItem from '../../components/Card/CartItemCard';

const ShoppingCartPage = () => {
    const cartItems = [
        {
        id: 1,
        name: 'Blue Flower Print Crop Top',
        image: 'image-url',
        color: 'Color: Blue',
        size: 'Size: M',
        price: 29.00,
        quantity: 1,
        subtotal: 29.00,
        },
        {
        id: 2,
        name: 'Lavender Hoodie',
        image: 'image-url',
        color: 'Color: Lavender',
        size: 'Size: XXL',
        price: 119.00,
        quantity: 1,
        subtotal: 119.00,
        },
        {
        id: 3,
        name: 'Black Sweatshirt',
        image: 'image-url',
        color: 'Color: Black',
        size: 'Size: XXL',
        price: 132.00,
        quantity: 1,
        subtotal: 132.00,
        },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.subtotal, 0);
    const shipping = 5.00; // Fixed shipping cost
    const grandTotal = subtotal + shipping;

    return (
        <div className="max-w-3xl mx-auto py-12">
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-xl font-semibold mb-4">Shopping Cart</div>
            
            {/* Table Format */}
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

            <div className="mt-6">
            <label className="block text-sm font-medium mb-2">Discount Codes</label>
            <div className="flex space-x-4">
                <input type="text" className="flex-1 border rounded p-2" placeholder="Enter your coupon code" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Coupon</button>
            </div>
            </div>

            {/* Cart Summary Inside CartPage */}
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
