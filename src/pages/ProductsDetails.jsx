import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null); // product state'ini tanımlıyoruz. Başlangıçta boş bir nesne olarak ayarlıyoruz.

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch("http://localhost:5000/products/" + id); // API'den ürün detaylarını alıyoruz.
        const data = await response.json(); // gelen veriyi JSON formatına çeviriyoruz.
        setProduct(data); // gelen veriyi product state'ine atıyoruz.
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // loading state'ini false yapıyoruz. Bu sayede loading durumu sona eriyor.
      }
    }

    fetchProductDetails(); // yazdığımız fonksiyonu çağırıyoruz
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <ProductItem product={product} /> // product state'ini ProductItem bileşenine gönderiyoruz.
  // ProductItem bileşeni, product state'ini alarak ürünü görüntüleyecek.
   
  );
};

export default ProductsDetailsPage;