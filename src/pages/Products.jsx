import React, { useState,useEffect } from 'react'
import ProductList from '../components/ProductList'
import Loading from '../components/Loading'
import request from '../api/apiClient' // API'den veri çekmek için kullanacağımız fonksiyonları içe aktarıyoruz.

  const ProductsPage = () => {
  const [loadedProducts, setLoadedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await request.products.list(); // API'den ürün listesini alıyoruz.
        
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
      return <Loading /> // Loading bileşenini burada kullanıyoruz. Loading bileşeni, loading state'i true olduğunda gösterilecek.
    }
    return (
      <ProductList products={loadedProducts} />
  )
}

export default ProductsPage