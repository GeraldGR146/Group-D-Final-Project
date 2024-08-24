import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [grandTotal, setGrandTotal] = useState(0);
    const router = useRouter();

    useEffect(() => {
        // Retrieve the grand total from session storage
        const totalAmount = sessionStorage.getItem('total_amount');
        if (totalAmount) {
            setGrandTotal(parseFloat(totalAmount));
        }
    }, []);

    const handleConfirmOrder = async () => {
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }

        try {
            // Send a POST request to the backend to create a transaction
            const response = await axios.post(
                'http://127.0.0.1:5000/transactions',
                {
                    payment_method: paymentMethod,
                    // Include additional necessary data if needed
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 201) {
                alert('Order confirmed!');

                // Remove total_amount and order_id from session storage
                sessionStorage.removeItem('total_amount');
                sessionStorage.removeItem('order_id');

                router.push('/me'); // Redirect to /me after successful order confirmation
            }
        } catch (error) {
            console.error('There was an error creating the transaction:', error);
            alert('Failed to confirm order. Please try again.');
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-12">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
                
                {/* Order Summary */}
                <div className="mb-6">
                    <div className="flex justify-between text-lg font-semibold">
                        <p>Grand Total</p>
                        <p>Rp {grandTotal.toFixed(2)}</p>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
                    <select 
                        className="w-full border rounded p-2" 
                        value={paymentMethod} 
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                        <option value="">Select Payment Method</option>
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank_transfer">Bank Transfer</option>
                        <option value="cash">Cash</option>
                        <option value="cod">Cash on Delivery (COD)</option>
                        {/* Add more payment methods as needed */}
                    </select>
                </div>

                {/* Confirm Order Button */}
                <div className="text-right">
                    <button 
                        className="bg-green-500 text-white px-6 py-3 rounded" 
                        onClick={handleConfirmOrder}
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
