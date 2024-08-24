import React from 'react';

const BestSellerCard = ({ product }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto sm:max-w-none sm:w-full">
            <img
                src="assets/wayang.jpg"
                alt={product.title}
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-md"
            />
            <h3 className="text-sm sm:text-md md:text-lg font-bold text-gray-800 mt-4">
                {product.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-md text-gray-500 mt-2">
                {product.description}
            </p>
            <div className="flex items-center space-x-2 mt-2">
                <p className="text-xs sm:text-sm text-gray-500 line-through">
                    {product.originalPrice}
                </p>
                <p className="text-sm sm:text-md text-green-500">
                    {product.discountPrice}
                </p>
            </div>
        </div>
    );
};

export default BestSellerCard;

