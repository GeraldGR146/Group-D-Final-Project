import React from 'react';

const BestSellerCard = ({ product }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
        <img src={product.imgSrc} alt={product.title} className="w-full h-24 object-cover" />
        <h3 className="text-md font-bold text-gray-800 mt-4">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center space-x-2 mt-2">
            <p className="text-xs text-gray-500 line-through">{product.originalPrice}</p>
            <p className="text-md text-green-500">{product.discountPrice}</p>
        </div>
        </div>
    );
};

export default BestSellerCard;