import React, { useState, useEffect } from 'react';
import ProductService from '../../components/Services/ProductService';
import ProductCard from '../../components/Card/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [locationFilter, setLocationFilter] = useState('All');
    const [nameFilter, setNameFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProducts = await ProductService.fetchAllProducts();
            setProducts(fetchedProducts);
        };
        
        fetchData();
        
    }, []);
    



    
    const handleCategoryFilterClick = (filter) => {
        setCategoryFilter(filter);
    };

    const handleLocationFilterChange = (event) => {
        setLocationFilter(event.target.value);
    };

    const handleNameFilterChange = (event) => {
        setNameFilter(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        (categoryFilter === 'All' || product.product_type === categoryFilter) &&
        (locationFilter === 'All' || product.location === locationFilter) &&
        (nameFilter === '' || product.name.toLowerCase().includes(nameFilter.toLowerCase()))
    );


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            {/* Name Filter Input */}
            <div className="mb-4">
                <label htmlFor="nameFilter" className="mr-2">Product Name:</label>
                <input 
                    type="text" 
                    id="nameFilter" 
                    value={nameFilter} 
                    onChange={handleNameFilterChange} 
                    className="border p-2"
                    placeholder="Search by product name..."
                />
            </div>
            
            {/* Filter Buttons and Location Filter */}
            <div className="mb-4 flex space-x-4">
                <button 
                    className={`px-4 py-2 ${categoryFilter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleCategoryFilterClick('All')}
                >
                    All
                </button>
                <button 
                    className={`px-4 py-2 ${categoryFilter === 'standard' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleCategoryFilterClick('standard')}
                >
                    Standard
                </button>
                <button 
                    className={`px-4 py-2 ${categoryFilter === 'premium' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleCategoryFilterClick('premium')}
                >
                    Premium
                </button>
            </div>

            <div className="mb-4">
                <label htmlFor="locationFilter" className="mr-2">Location:</label>
                <select id="locationFilter" value={locationFilter} onChange={handleLocationFilterChange} className="border p-2">
                    <option value="All">All</option>
                    <option value="Location1">Jakarta</option>
                    <option value="Location2">Location2</option>
                </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;