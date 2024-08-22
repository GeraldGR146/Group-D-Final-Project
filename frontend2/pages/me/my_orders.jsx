import { useEffect,useState } from 'react';
import React from 'react';
import MyOrderCard from '../../components/Card/MyOrderCard';
import axios from 'axios';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/orders', {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`, // Jika menggunakan JWT untuk otentikasi
                    },
                });
                setOrders(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);
    <div>{JSON.stringify(orders)}</div>
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    // const orders = [
    //     {
    //     orderNumber: '123456789',
    //     orderDate: '6 June 2023 04:50 PM',
    //     deliveryDate: '8 June 2023',
    //     orderStatus: 'In progress',
    //     paymentMethod: 'Cash on delivery',
    //     productImage: 'https://placehold.co/100x100',
    //     productName: 'Black Printed T-shirt',
    //     color: 'Black',
    //     qty: 1,
    //     total: 12.00,
    //     },
    //     {
    //     orderNumber: '123456789',
    //     orderDate: '6 June 2023 04:50 PM',
    //     deliveryDate: '8 June 2023',
    //     orderStatus: 'Shipped',
    //     paymentMethod: 'Cash on delivery',
    //     productImage: 'https://placehold.co/100x100',
    //     productName: 'Printed blue & white Case Cover',
    //     color: 'Blue',
    //     qty: 1,
    //     total: 14.00,
    //     },
    //     {
    //     orderNumber: '123456789',
    //     orderDate: '6 June 2023 04:50 PM',
    //     deliveryDate: '8 June 2023',
    //     orderStatus: 'In progress',
    //     paymentMethod: 'Cash on delivery',
    //     productImage: 'https://placehold.co/100x100',
    //     productName: 'Blue Shirt',
    //     color: 'Blue',
    //     qty: 1,
    //     total: 19.00,
    //     },
    // ];

    return (
        <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-xl font-semibold mb-6">My Orders</h1>
        <div className="flex space-x-4 mb-4">
            <button className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-full">Active</button>
            <button className="px-6 py-2 text-sm font-semibold text-gray-500 bg-white rounded-full">Cancelled</button>
            <button className="px-6 py-2 text-sm font-semibold text-gray-500 bg-white rounded-full">Completed</button>
        </div>
        {orders.map((order, index) => (
            <MyOrderCard key={index} {...order} />
        ))}
        </div>
    );
    };

export default MyOrders;