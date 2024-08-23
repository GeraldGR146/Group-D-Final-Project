import React, { useEffect, useState } from 'react';
import CartItem from '../../components/Card/CartItemCard';
import axios from 'axios';
import { useRouter } from 'next/router';

const ShoppingCartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shippingMethod, setShippingMethod] = useState('Delivery'); // Default to Delivery
    const [shippingCost, setShippingCost] = useState(5000); // Default to Delivery cost
    const router = useRouter();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const token = sessionStorage.getItem('access_token');
                console.log('Fetching cart items with token:', token);
                const cartResponse = await axios.get('http://127.0.0.1:5000/cart/item', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('Fetched cart items:', cartResponse.data);
                
                setCartItems(cartResponse.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const handleShippingMethodChange = (event) => {
        const method = event.target.value;
        setShippingMethod(method);
        setShippingCost(method === 'Pickup' ? 0 : 5000); // Set cost based on method
    };

    const handleCheckout = async () => {
        const token = sessionStorage.getItem('access_token');
        if (!token) {
            router.push('/login');
            return;
        }
    
        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/orders',
                {
                    delivery_method: shippingMethod,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
    
            console.log('Order created:', response.data);
            
            // Store the order_id in sessionStorage
            const orderId = response.data.order_id;
            const totalAmount = response.data.total_amount;
            sessionStorage.setItem('order_id', orderId);
            sessionStorage.setItem('total_amount',totalAmount);
    
            // Redirect to the checkout page
            router.push('/checkout');
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    if (loading) {
        console.log('Loading cart items...');
        return <div>Loading...</div>;
    }

    if (!cartItems || cartItems.length === 0 || cartItems.message) {
        console.log('Cart is empty or contains a message:', cartItems);
        return <div>{cartItems.message || "Your cart is empty"}</div>;
    }

    // Calculate subtotal for all items using purchase_quantity
    const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.product.product_price) * item.cart_item.purchase_quantity), 0);
    const grandTotal = subtotal + shippingCost;

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
                            <CartItem key={item.cart_item.cart_item_id} item={item} />
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

                {/* Shipping Method Dropdown */}
                <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Shipping Method</label>
                    <select
                        value={shippingMethod}
                        onChange={handleShippingMethodChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="Pickup">Pickup</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                </div>

                {/* Cart Summary Inside CartPage */}
                <div className="border-t mt-6 pt-4">
                    <div className="flex justify-between text-lg font-medium">
                        <p>Sub Total</p>
                        <p>Rp {subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                        <p>Shipping</p>
                        <p>Rp {shippingCost.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                        <p>Grand Total</p>
                        <p>Rp {grandTotal.toFixed(2)}</p>
                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    <button className="text-blue-500 hover:text-blue-700">Continue Shopping</button>
                    <button
                        onClick={handleCheckout}
                        className="bg-green-500 text-white px-6 py-3 rounded"
                    >
                        Proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
