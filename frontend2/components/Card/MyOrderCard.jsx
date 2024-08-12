import React from 'react';

const MyOrderCard = ({ orderNumber, orderDate, deliveryDate, orderStatus, paymentMethod, productImage, productName, color, qty, total }) => {
    return (
        <div className="bg-white p-4 mb-4 rounded-lg shadow">
        <div className="flex justify-between mb-4">
            <div>
            <p className="text-sm font-semibold">Order no: #{orderNumber}</p>
            <p className="text-sm text-gray-500">Order Date: {orderDate}</p>
            <p className="text-sm text-gray-500">Estimated Delivery Date: {deliveryDate}</p>
            </div>
            <div className="text-right">
            <p className="text-sm text-gray-500">Order Status: {orderStatus}</p>
            <p className="text-sm text-gray-500">Payment Method: {paymentMethod}</p>
            </div>
        </div>
        <div className="flex items-center space-x-4">
            <img src={productImage} alt="Product" className="w-16 h-16 object-cover rounded" />
            <div className="flex-grow">
            <p className="text-sm font-semibold">{productName}</p>
            <p className="text-sm text-gray-500">Colour: {color}</p>
            <p className="text-sm text-gray-500">Qty: {qty}</p>
            <p className="text-sm text-gray-500">Total: ${total}</p>
            </div>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-full">View Detail</button>
        </div>
        </div>
    );
};

export default MyOrderCard;
