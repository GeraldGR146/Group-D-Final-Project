import React from 'react';
import BestSellerCard from '../../components/Card/BestSellerCard';

const products = [
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },    
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    },
    {
        imgSrc: 'https://placehold.co/100x150',
        title: 'Product Name',
        description: 'Product Category',
        originalPrice: '$16.48',
        discountPrice: '$6.48'
    }
  // Add more products as needed
];

const BestSeller = () => {
    return (
        <div className="bg-gray-100">
        <div className="container mx-auto p-6 flex space-x-8">
            {/* Left Category Section */}
            <div className="bg-yellow-500 rounded-lg p-6 flex flex-col justify-between w-1/4">
            <div>
                <p className="text-sm text-gray-700 font-bold">FURNITURE</p>
                <p className="text-xs text-gray-600 mt-1">5 Items</p>
            </div>
            <img src="https://placehold.co/150x300" alt="Furniture" className="rounded-lg mt-6" />
            </div>

            {/* Right Bestseller Products Section */}
            <div className="flex-1">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">BESTSELLER PRODUCTS</h2>
                <div className="flex space-x-5 text-gray-500">
                <a href="#" className="hover:text-blue-500">Category1</a>
                <a href="#" className="hover:text-blue-500">Category2</a>
                <a href="#" className="hover:text-blue-500">Category3</a>
                <a href="#" className="hover:text-blue-500">Category4</a>
                </div>
                <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-800">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="text-gray-500 hover:text-gray-800">
                    <i className="fas fa-chevron-right"></i>
                </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-6">
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