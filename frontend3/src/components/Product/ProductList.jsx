// src/components/ProductList.js

import React from 'react';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    if (!products.length) {
      return <div>No products available.</div>;
    }

    return (
      <div className="max-w-lg mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <ul className="space-y-4">
          {products.map(product => (
            <li key={product.product_id} className="p-4 bg-white shadow-md rounded">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              <p><strong>Category:</strong> {product.product_type}</p>
              <p><strong>Location:</strong> {product.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
