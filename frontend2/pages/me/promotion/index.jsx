import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const PromotionsTable = () => {
    const [promotions, setPromotions] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storeId = sessionStorage.getItem('store_id');
        
        if (storeId) {
            axios.get(`http://127.0.0.1:5000/stores/${storeId}/promotions`)
                .then(response => {
                    console.log('Fetched promotions:', response.data);
                    setPromotions(response.data);
                })
                .catch(error => console.error('Error fetching promotions:', error));
        } else {
            console.error('No store_id found in sessionStorage');
        }
    }, []);

    const handleCreateNewPromotion = () => {
        router.push('/me/promotion/create_new_promotion');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Store Promotions</h2>
                <button 
                    onClick={handleCreateNewPromotion} 
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    New Promotion Code
                </button>
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Promotion ID</th>
                        <th className="py-2 px-4 border-b">Code</th>
                        <th className="py-2 px-4 border-b">Discount (%)</th>
                        <th className="py-2 px-4 border-b">Start Date</th>
                        <th className="py-2 px-4 border-b">End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {promotions.map((promotion) => (
                        <tr key={promotion.promotion_id}>
                            <td className="py-2 px-4 border-b">{promotion.promotion_id}</td>
                            <td className="py-2 px-4 border-b">{promotion.code}</td>
                            <td className="py-2 px-4 border-b">{promotion.discount_percentage}</td>
                            <td className="py-2 px-4 border-b">{promotion.start_date}</td>
                            <td className="py-2 px-4 border-b">{promotion.end_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PromotionsTable;