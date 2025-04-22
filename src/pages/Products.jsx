import React, { useState,useEffect } from 'react'
import ProductList from '../components/ProductList'

  const ProductsPage = () => {
  const [loadedProducts, setLoadedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setLoadedProducts(data);
      }
      catch (error) {
        console.error('Error fetching products:', error);
      }
      finally
      {

      }setLoading(false);
     
    }
    fetchProducts();
  }, [])
    if (loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <ProductList products={loadedProducts} />
  )
}

export default ProductsPage