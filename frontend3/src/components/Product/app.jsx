// src/App.js

import React, { Component } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.handleProductCreated = this.handleProductCreated.bind(this);
  }

  async componentDidMount() {
    try {
      const products = await ProductService.getAllProducts();
      this.setState({ products });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  handleProductCreated(newProduct) {
    this.setState(prevState => ({
      products: [...prevState.products, newProduct],
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center text-3xl font-bold my-8">Product Management</h1>
        <ProductForm onProductCreated={this.handleProductCreated} />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
