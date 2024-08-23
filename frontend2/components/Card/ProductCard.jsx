import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    const handleViewDetailsClick = () => {
        sessionStorage.setItem('product_id', product.id);
    };

    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-gray-900 font-semibold mt-2">Rp {product.price}</p>
            <p className="text-gray-700 mt-2">{product.product_type}</p>
            <Link href={`/products/${product.id}`}>
                <span className="text-blue-500 mt-2 block" onClick={handleViewDetailsClick}>
                    View Details
                </span>
            </Link>
        </div>
    );
};

export default ProductCard;
