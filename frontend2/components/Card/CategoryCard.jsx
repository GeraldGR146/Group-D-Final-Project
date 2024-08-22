import React from 'react';

const CategoryCard = ({ 
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
        <div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6 max-w-sm">
                <div>
                    <p className="text-gray-500 text-sm">Comodity</p>
                    <h2 className="text-2xl font-bold text-gray-800">Type Product</h2>
                    <a href="#" className="text-sm text-gray-500 mt-4 inline-block">Explore Items</a>
                </div>
                {/* Update the src to point to duck.png */}
                <img src="assets/detergent.png" alt="Detergent" className="w-24 h-32 object-contain"/>
            </div>
        </div>
    );
};

export default CategoryCard;
