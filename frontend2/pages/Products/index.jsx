// pages/products/index.jsx
import React, { useState, useEffect } from 'react';
import ProductService from '../../src/services/ProductService';
import ProductCard from '../../src/components/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProducts = await ProductService.fetchAllProducts();
            setProducts(fetchedProducts);
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
