// pages/products/[id].jsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductService from '../../src/services/ProductService';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const fetchedProduct = await ProductService.fetchProductById(id);
                setProduct(fetchedProduct);
            };

            fetchData();
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                <div className="md:ml-4">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-900 font-semibold text-xl mb-4">${product.price}</p>
                    <p className="text-gray-700">Available Quantity: {product.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
