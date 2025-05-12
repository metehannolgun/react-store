import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import Loading from '../components/Loading';
import request from '../api/apiClient';
import { useCartContext } from '../context/CartContext'; // <-- EKLENDİ

const ProductsDetailsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null); // product state'ini tanımlıyoruz. Başlangıçta boş bir nesne olarak ayarlıyoruz.
  const {cart,setCart} = useCartContext(); // CartContext'ten cart ve setCart fonksiyonunu alıyoruz.
  const [isAdding, setIsAdding] = useState(false); // Ürün ekleme işlemi için bir state tanımlıyoruz.]
  const cartItem = cart?.cartItems.find(i => i.product.productId === product?.id);
  
  
  function handleAddItem(productId) {
    setIsAdding(true);
    request.cart
      .addItem(productId,1)
      .then(cart => setCart(cart))
      .catch(error => console.log(error))
      .finally(() => setIsAdding(false));

  }

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await request.products.details(id) // API'den ürün detaylarını alıyoruz.
        setProduct(data); // gelen veriyi product state'ine atıyoruz.
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // loading state'ini false yapıyoruz. Bu sayede loading durumu sona eriyor.
      }
    }

    fetchProductDetails(); // yazdığımız fonksiyonu çağırıyoruz
  }, [id]);

  if (loading) return <Loading/>

  if(!product) return <div>Ürün bulunamadı</div> // Eğer product yoksa hata mesajı gösteriyoruz.

  return (
    <ProductItem product={product} handleAddItem={handleAddItem} cartItem={cartItem} isAdding={isAdding} /> // product state'ini ProductItem bileşenine gönderiyoruz.
  // ProductItem bileşeni, product state'ini alarak ürünü görüntüleyecek.
   
  );
};

export default ProductsDetailsPage;