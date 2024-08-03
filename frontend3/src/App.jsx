import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product';
import ProductForm from './components/ProductForm/ProductForm';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductInfo from './components/Product/ProductInfo';
import SearchBar from './components/SearchBar/SearchBar';

function MyRoutes() {
  const sampleProduct = new Product(
    'Example Product',
    'This is a short description of the product.',
    'Standard' && 'Premium',
    10,
    29.99,
    'New York, USA'
  );

  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Logika pencarian akan ditambahkan di sini
    console.log('Searching for:', query);
    // Contoh data hasil pencarian
    const exampleResults = [
      { id: 1, name: 'Product 1', store: 'Store A' },
      { id: 2, name: 'Product 2', store: 'Store B' },
    ];
    setResults(exampleResults);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <SearchBar onSearch={handleSearch} />
      <div className="results mt-4">
        {results.map((result) => (
          <div key={result.id} className="p-4 border border-gray-200 rounded-lg mb-2">
            <h3 className="text-lg font-bold">{result.name}</h3>
            <p className="text-gray-600">Store: {result.store}</p>
          </div>
        ))}
      </div>
      <Routes>
        <Route path='/ProductInfo' element={<ProductInfo product={sampleProduct} />} />
        <Route path='/ProductForm' element={<ProductForm />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

function App() {
  <router>
    <MyRoutes />
  </router>
}

export default App;

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}