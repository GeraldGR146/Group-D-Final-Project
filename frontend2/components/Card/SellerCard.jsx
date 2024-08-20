import React from 'react';

const SellerCard = ({ 
    product_id, 
    seller_id, 
    store_id, 
    name, 
    description, 
    price, 
    quantity, 
    product_type, 
    image_url, 
    onDelete, 
    onEdit 
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image_url || '/default-image.jpg'} alt={name} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-2">{description || 'No description available'}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-500">Rp{price}</span>
                    <span className="text-sm text-gray-500">Qty: {quantity}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Product Type: {product_type}</span>
                    <span className="text-sm text-gray-500">Seller ID: {seller_id}</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">Store ID: {store_id}</div>
                <div className="flex justify-between mt-4">
                    <button 
                        onClick={() => onEdit(product_id)} 
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Edit
                    </button>
                    <button 
                        onClick={() => onDelete(product_id)} 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerCard;
