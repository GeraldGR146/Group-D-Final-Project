import React from 'react';

class Product {
  constructor(name, description, price, quantity) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

const ProductComponent = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Harga: Rp {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Total Harga: Rp {product.getTotalPrice()}</p>
    </div>
  );
};

export { Product, ProductComponent };