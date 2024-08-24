import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const transactionSummary = [
    {
        category: 'Done',
        count: 120,
        totalAmount: 15000,
    },
    {
        category: 'Processed',
        count: 80,
        totalAmount: 10000,
    },
    {
        category: 'Unprocessed',
        count: 50,
        totalAmount: 5000,
    },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const SummaryCard = ({ category, count, totalAmount }) => (
    <div className="bg-white shadow rounded-lg p-6 m-4">
        <h3 className="text-lg font-semibold">{category}</h3>
        <p className="text-sm text-gray-500">Transactions: {count}</p>
        <p className="text-sm text-gray-500">Total Amount: ${totalAmount}</p>
    </div>
);

const Dashboard = () => (
        <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Transaction Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {transactionSummary.map((item) => (
            <SummaryCard key={item.category} {...item} />
        ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={transactionSummary}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalAmount" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
            <Pie
                data={transactionSummary}
                dataKey="totalAmount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
            >
                {transactionSummary.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        </div>
    </div>
);

export default Dashboard;