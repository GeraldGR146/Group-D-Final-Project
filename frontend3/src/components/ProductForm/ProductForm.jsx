// src/components/ProductForm.js

import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      location: '',
      category: 'Standard',
      quantity: 0,
      image: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleImageChange(event) {
    this.setState({ image: event.target.files[0] });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('price', this.state.price);
    formData.append('location', this.state.location);
    formData.append('product_type', this.state.category);
    formData.append('quantity', this.state.quantity);
    if (this.state.image) {
      formData.append('image', this.state.image);
    }

    try {
      const newProduct = await ProductService.createProduct(formData);
      console.log('Product created successfully:', newProduct);

      if (this.props.onProductCreated) {
        this.props.onProductCreated(newProduct);
      }

      // Reset form
      this.setState({
        name: '',
        description: '',
        price: '',
        location: '',
        category: 'Standard',
        quantity: 0,
        image: null,
      });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Available Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Image:</label>
          <input
            type="file"
            onChange={this.handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default ProductForm;
