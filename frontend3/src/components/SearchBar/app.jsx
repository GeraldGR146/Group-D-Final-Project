import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
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
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="results mt-4">
        {results.map((result) => (
          <div key={result.id} className="p-4 border border-gray-200 rounded-lg mb-2">
            <h3 className="text-lg font-bold">{result.name}</h3>
            <p className="text-gray-600">Store: {result.store}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;