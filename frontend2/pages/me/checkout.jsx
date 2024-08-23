import React, { useState } from 'react';

const Checkout = () => {
    const [shippingAddress, setShippingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');

    const handleConfirmOrder = () => {
        // Handle order confirmation logic here
        alert('Order confirmed!');
    };

    return (
        <div className="max-w-3xl mx-auto py-12">
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
            
            {/* Order Summary */}
            <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-lg font-medium">
                <p>Subtotal</p>
                <p>$280.00</p>
            </div>
            <div className="flex justify-between text-lg font-medium">
                <p>Shipping</p>
                <p>$5.00</p>
            </div>
            <div className="flex justify-between text-lg font-semibold">
                <p>Grand Total</p>
                <p>$285.00</p>
            </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
            <select 
                className="w-full border rounded p-2" 
                value={shippingAddress} 
                onChange={(e) => setShippingAddress(e.target.value)}
            >
                <option value="">Select Address</option>
                <option value="address1">123 Main St, Springfield</option>
                <option value="address2">456 Elm St, Shelbyville</option>
                {/* Add more addresses as needed */}
            </select>
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
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
                {/* Add more payment methods as needed */}
            </select>
            </div>

            {/* Delivery Method */}
            <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Delivery Method</h3>
            <select 
                className="w-full border rounded p-2" 
                value={deliveryMethod} 
                onChange={(e) => setDeliveryMethod(e.target.value)}
            >
                <option value="">Select Delivery Method</option>
                <option value="standard">Standard - 5-7 business days</option>
                <option value="express">Express - 2-3 business days</option>
                <option value="overnight">Overnight - 1 business day</option>
                {/* Add more delivery methods as needed */}
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
