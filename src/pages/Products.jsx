import React, { use } from 'react'

const ProductsPage = () => {
  const [loadedProducts, setLoadedProducts] = useState([])
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setLoadedProducts(data);
    }
    fetchProducts();
  }, [])
  return (
    <h1>ProductsPage</h1>
  )
}

export default ProductsPage