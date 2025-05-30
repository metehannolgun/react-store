import React, { useEffect, useState } from 'react'
import requests from '../api/apiClient';
import { CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import { currenyTRY } from '../utils/format';
import { Add, Delete } from '@mui/icons-material';
import Loading from '../components/Loading';
import { useCartContext } from '../context/CartContext';
import  AddCircleOutlineIcon  from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartPage = () => {

  const {cart, setCart} = useCartContext();
  const [status, setStatus] = useState({loading:false, id:""});

    if (!cart || cart.cartItems.length === 0) 
      return <Typography component="h4">Sepetinizde ürün yok </Typography>

  function handleAddItem(productId, id) {
      setStatus({loading: true, id: id}); // <-- DÜZELTİLDİ
      requests.cart.addItem(productId, 1)
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error))
      .finally(() => setStatus({loading: false, id: ""}));
  }
  function handleRemoveItem(productId, id, quantity = 1){
    setStatus({loading: true, id: id});
      requests.cart.deleteItem(productId, quantity)
      .then((cart) => setCart(cart))
      .catch((error) => console.log(error))
       .finally(() => setStatus({loading: false, id: ""}));
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}}>
        <TableHead>
          <TableRow>
            <TableCell sx={{width: 100}}></TableCell>
            <TableCell >Ürün</TableCell>
            <TableCell sx={{width: 120}}>Fiyat</TableCell>
            <TableCell sx={{width: 170}}>Adet</TableCell>
            <TableCell sx={{width: 120}}>Toplam</TableCell>
            <TableCell sx={{width: 50}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {cart.cartItems.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={`http://localhost:5000/images/${item.product.image}`} style={{width: "100%"}}/>
                </TableCell>
                <TableCell>{item.product.title}</TableCell>
                <TableCell>{currenyTRY.format(item.product.price)}</TableCell>
                <TableCell>
                  <Button onClick={() => handleAddItem(item.product.productId, "add" + item.product.productId)}>
                  { status.loading && status.id === "add" + item.product.productId ? (
                    <CircularProgress size="20px" />
                  ) : (
                  <AddCircleOutlineIcon/>
                  )}
                  </Button >
                  {item.product.quantity}
                  <Button onClick={() => handleRemoveItem(item.product.productId, "remove" + item.product.productId)}>
                  {status.loading && status.id === "remove" + item.product.productId ? (
                    <CircularProgress size="20px" />
                  ) : (
                    <RemoveCircleOutlineIcon/>
                  )}
                  </Button>

                </TableCell>
                <TableCell>{currenyTRY.format(item.product.price * item.product.quantity)}
                </TableCell>
                <TableCell>
                  <Button  
                      color='error'
                      onClick={() => handleRemoveItem(item.product.productId, "remove_all" + item.product.productId, item.product.quantity)}
                  >
                    {status.id === "remove_all" + item.product.productId ? (<CircularProgress size="20px" />
                  ) : (
                    <Delete/>
                  )}
                  </Button>
                </TableCell>
              </TableRow>

            ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default CartPage