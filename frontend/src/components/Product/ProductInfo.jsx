import React from 'react';
import Product from './Product';

class ProductInfo extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Location: {product.location}</p>
      </div>
    );
  }
}

export default ProductInfo;