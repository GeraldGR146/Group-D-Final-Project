import React from 'react';

const BuyerCard = ({ 
    product_id, 
    seller_id, 
    store_id, 
    name, 
    description, 
    price, 
    quantity, 
    product_type, 
    image_url 
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image_url} alt={name} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-2">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-500">Rp{price}</span>
                    <span className="text-sm text-gray-500">Qty: {quantity}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Product Type: {product_type}</span>
                    <span className="text-sm text-gray-500">Seller ID: {seller_id}</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">Store ID: {store_id}</div>
            </div>
        </div>
    );
};


export default BuyerCard;
