import React from 'react';

const WishlistCard = ({ imgSrc, title, color, quantity, price }) => {
    return (
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 mr-4">
                    <i className="fas fa-times"></i>
                </button>
                <img src={imgSrc} alt="Product Image" className="w-16 h-16 rounded-lg object-cover mr-4" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500">Color: {color}</p>
                    <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                </div>
            </div>
            <div className="flex items-center">
                <span className="text-lg font-semibold text-gray-800 mr-6">Rp. {price}</span>
                <button className="bg-green-500 hover:bg-green-300 text-white font-medium py-2 px-4 rounded-lg">Add to cart</button>
            </div>
        </div>
    );
};

export default WishlistCard;