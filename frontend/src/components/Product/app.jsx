import React from 'react';
import ProductInfo from './components/ProductInfo';
import Product from './models/Product';

function App() {
  const sampleProduct = new Product(
    'Example Product',
    'This is a short description of the product.',
    'Standard',
    10,
    29.99,
    'New York, USA'
  );

  return (
    <div className="App">
      <ProductInfo product={sampleProduct} />
    </div>
  );
}

export default App;