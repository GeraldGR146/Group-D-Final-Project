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
    image_url,
    onAddToCart,
    onAddToWishlist,
    location,
    store_name
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={image_url} alt={name} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">name{name}</h2>
                {/* <p className="text-gray-700 mb-2">desc{description}</p> */}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-green-500">Rp{price}</span>
                    {/* <span className="text-sm text-gray-500">Qty: {quantity}</span> */}
                </div>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">Product Type: {product_type}</span>
                    {/* <span className="text-sm text-gray-500">Seller ID: {seller_id}</span> */}
                </div>
                <div className="text-sm text-gray-500 mt-2">Store name: {store_name}</div>
                <div className="text-sm text-gray-500 mt-2">Location: {location}</div>
                <div className="flex justify-between mt-4">
                    {/* <button 
                        onClick={() => onAddToCart(product_id)} 
                        className="bg-blue-500 text-white py-1 px-4 rounded"
                    >
                        Add to Cart
                    </button>
                    <button 
                        onClick={() => onAddToWishlist(product_id)} 
                        className="bg-red-500 text-white py-1 px-4 rounded"
                    >
                        Add to Wishlist
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default BuyerCard;
