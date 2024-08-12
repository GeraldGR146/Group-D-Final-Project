import React from "react";

const Transaction= ({ transactions }) => {
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
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        Details
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transaction;