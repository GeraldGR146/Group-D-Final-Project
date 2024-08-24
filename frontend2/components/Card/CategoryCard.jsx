import React from 'react';

const CategoryCard = ({ 
    name, 
    description, 
    image_url, 
    onAddToCart, 
    onAddToWishlist, 
    location, 
    store_name 
}) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 max-w-xs sm:max-w-sm mx-auto">
            <div className="text-center sm:text-left">
                <p className="text-gray-500 text-xs sm:text-sm">{location}</p>
                <h2 className="text-lg sm:text-2xl font-bold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-500 mt-2">{description}</p>
                <a href="products" className="text-xs sm:text-sm text-blue-500 mt-4 inline-block">Explore Items</a>
            </div>
            <img 
                src={image_url || "assets/Duren.jpg"} 
                alt={name} 
                className="w-20 sm:w-24 h-24 sm:h-32 object-contain"
            />
        </div>
    );
};

export default CategoryCard;
