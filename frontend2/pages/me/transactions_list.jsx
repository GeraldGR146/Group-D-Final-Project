import React, { useState } from "react";
import axios from "axios";

const Transaction = ({ transactions }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCreateOrder = async (transaction) => {
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('delivery_method', transaction.deliveryMethod);

            const response = await axios.post('http://127.0.0.1:5000/orders', formData, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
                },
            });

            if (response.status === 201) {
                alert('Order created successfully!');
            } else {
                alert('Failed to create order.');
            }
        } catch (err) {
            setError(err.response ? err.response.data.error : 'Error creating order');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-x-auto">
            <h1 className="text-xl font-semibold mb-6">Transactions</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200 text-left">Order ID</th>
                        <th className="py-2 px-4 bg-gray-200 text-left">Consumer ID</th>
                        <th className="py-2 px-4 bg-gray-200 text-left">Total Amount</th>
                        <th className="py-2 px-4 bg-gray-200 text-left">Delivery Method</th>
                        <th className="py-2 px-4 bg-gray-200 text-left">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index} className="border-b">
                            <td className="py-2 px-4">{transaction.orderId}</td>
                            <td className="py-2 px-4">{transaction.consumerId}</td>
                            <td className="py-2 px-4">{transaction.totalAmount}</td>
                            <td className="py-2 px-4">{transaction.deliveryMethod}</td>
                            <td className="py-2 px-4">
                                <button
                                    onClick={() => handleCreateOrder(transaction)}
                                    className={`bg-blue-500 text-white px-3 py-1 rounded ${loading ? 'opacity-50' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Processing...' : 'Details'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default Transaction;
