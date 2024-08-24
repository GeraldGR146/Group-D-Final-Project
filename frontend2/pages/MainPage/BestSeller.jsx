import React from 'react';
import BestSellerCard from '../../components/Card/BestSellerCard';

const products = [
    {
        imgSrc: 'assets/Duren.jpg',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },
    
];

const BestSeller = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto p-6 flex flex-col lg:flex-row lg:space-x-8">
                {/* Left Category Section */}
                <div className="bg-yellow-500 rounded-lg p-6 flex flex-col justify-between lg:w-1/4 mb-6 lg:mb-0">
                    <div>
                        <p className="text-sm text-gray-700 font-bold">FURNITURE</p>
                        <p className="text-xs text-gray-600 mt-1">5 Items</p>
                    </div>
                    <img src="assets/chair.jpg" alt="Furniture" className="rounded-lg mt-6 object-cover w-full h-48"/>
                </div>

                {/* Right Bestseller Products Section */}
                <div className="flex-1">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <h2 className="text-lg font-bold text-gray-800">BESTSELLER PRODUCTS</h2>
                        <div className="flex space-x-4 mt-4 lg:mt-0">
                            <a href="products" className="text-gray-500 hover:text-blue-500">Category1</a>
                            <a href="products" className="text-gray-500 hover:text-blue-500">Category2</a>
                            <a href="products" className="text-gray-500 hover:text-blue-500">Category3</a>
                            <a href="products" className="text-gray-500 hover:text-blue-500">Category4</a>
                        </div>
                        <div className="flex space-x-2 mt-4 lg:mt-0">
                            <button className="text-gray-500 hover:text-gray-800">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className="text-gray-500 hover:text-gray-800">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {products.map((product, index) => (
                            <BestSellerCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
