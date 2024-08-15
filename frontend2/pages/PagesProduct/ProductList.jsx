import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Product from './Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: 'All',
      locationFilter: 'All',
      nameFilter: '',  // State for filtering by product name
    };
  }

  handleCategoryFilterClick = (filter) => {
    this.setState({ categoryFilter: filter });
  };

  handleLocationFilterChange = (event) => {
    this.setState({ locationFilter: event.target.value });
  };

  handleNameFilterChange = (event) => {
    this.setState({ nameFilter: event.target.value });
  };

  render() {
    const { products } = this.props; // Destructure the correct prop name
    const { categoryFilter, locationFilter, nameFilter } = this.state;
  
    // Ensure products is an array
    const filteredProducts = Array.isArray(products) ? products.filter(product => 
      (categoryFilter === 'All' || product.category === categoryFilter) &&
      (locationFilter === 'All' || product.location === locationFilter) &&
      (nameFilter === '' || product.name.toLowerCase().includes(nameFilter.toLowerCase()))  // Implement name filter
    ) : [];
  
    if (!filteredProducts.length) {
      return <div>No products available.</div>;
    }
  
    return (
      <div className="max-w-lg mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
  
        {/* Name Filter Input */}
        <div className="mb-4">
          <label htmlFor="nameFilter" className="mr-2">Product Name:</label>
          <input 
            type="text" 
            id="nameFilter" 
            value={nameFilter} 
            onChange={this.handleNameFilterChange} 
            className="border p-2"
            placeholder="Search by product name..."
          />
        </div>
        
        {/* Filter Buttons and Location Filter */}
        <div className="mb-4">
          <button 
            className={`mr-2 px-4 py-2 ${categoryFilter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => this.handleCategoryFilterClick('All')}
          >
            All
          </button>
          <button 
            className={`mr-2 px-4 py-2 ${categoryFilter === 'Standard' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => this.handleCategoryFilterClick('Standard')}
          >
            Standard
          </button>
          <button 
            className={`px-4 py-2 ${categoryFilter === 'Premium' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => this.handleCategoryFilterClick('Premium')}
          >
            Premium
          </button>
        </div>
  
        <div className="mb-4">
          <label htmlFor="locationFilter" className="mr-2">Location:</label>
          <select id="locationFilter" value={locationFilter} onChange={this.handleLocationFilterChange}>
            <option value="All">All</option>
            <option value="Location1">Location1</option>
            <option value="Location2">Location2</option>
          </select>
        </div>
  
        <ul className="space-y-4">
          {filteredProducts.map(product => (
            <li key={product.product_id} className="p-4 bg-white shadow-md rounded">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Location:</strong> {product.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Define prop types
ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    product_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductList;
