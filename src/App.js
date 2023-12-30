
import './App.css';
import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import ImportProducts from './ImportProducts';
import ProductsTable from './ProductsTable';

function App() {

  const [products, setProducts] = useState([]);
  const [displayFields, setDisplayFields] = useState(['Title', 'Price', 'Popularity']);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://s3.amazonaws.com/open-to-cors/assignment.json');
      const sortedData = Object.values(response.data.products).sort((a, b) => b.popularity - a.popularity);
      setProducts(sortedData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Import Products</h1>
      <ImportProducts displayFields={displayFields} setDisplayFields={setDisplayFields} />
      <ProductsTable products={products} displayFields={displayFields} />
    </div>
  );
}

export default App;
