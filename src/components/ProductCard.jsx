import { CardMedia, Card, CardContent, Typography, CardActions, IconButton, Button, CardActionArea } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'
import { currenyTRY } from '../utils/format'


const ProductCard = ({product}) => {
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
            <Button>Sepete Ekle</Button>
        </CardActions>
    </Card>
  )
}

export default ProductCard