import { CardMedia, Card, CardContent, Typography, CardActions, IconButton, Button, CardActionArea, CircularProgress } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'
import { currenyTRY } from '../utils/format'
import requests from '../api/apiClient'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'


const ProductCard = ({product}) => {
    const [loading, setLoading] = useState(false);
    const {setCart} = useCartContext();
    function handleAddItem(productId) {
        setLoading(true);
        requests.cart.addItem(productId,1)
            .then(cart => setCart(cart))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        }

  return (
    <Card>
        <CardActionArea component={Link} to={'/products/' + product.id}>
            <CardMedia 
                sx={{height:160, WebkitBackgroundSize: 'contain'}} 
                image={`http://localhost:5000/images/${product.image}`}
            />
            <CardContent>
            <Typography 
                gutterBottom 
                variant='h6' 
                component='h2' 
                color='primary.dark'>
                {product.title}

            </Typography>
            <Typography
                variant='body1' 
                color='secondary.dark'>
                {currenyTRY.format(product.price)}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
            <IconButton>
                <FavoriteBorderIcon/>
            </IconButton>
            <Button onClick={() => handleAddItem(product.id)}>
                {loading ? <CircularProgress size="20px" /> : 'Add to Cart'}
            </Button>
        </CardActions>
    </Card>
  )
}

export default ProductCard