import React from 'react'
import { IconButton, Toolbar, Box, AppBar, Button, Badge } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'

const links = [
    {title: 'Home', path: '/'},
    {title: 'Products', path: '/products'},
    {title: "Error", path: '/errors'},
]
const authLinks = [
    {title: 'Login', path: '/login'},
    {title: 'Register', path: '/register'},
]

const Navbar = () => {
  return (
    <AppBar position='static' sx={{backgroundColor: 'secondary.light'}}>
        <Toolbar>
            <Box sx={{display:'flex', flexGrow: 1, alignItems: 'center'}}>
                <IconButton color='inherit'>
                    <StorefrontIcon/>
                </IconButton>
                {links.map((link) => (
                    <Button key={link.path} component={NavLink} to={link.path} color="inherit">
                        {link.title}
                    </Button>
                ))}
            </Box>
            <Box sx={{display:'flex',  alignItems: 'center'}}>
                <IconButton 
                color='inherit'
                component={Link} to="/cart"
                size="large"
                edge="start"
                >
                    <Badge badgeContent="2" color='secondary'>
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
                {authLinks.map((link) => (
                    <Button key={link.path} component={NavLink} to={link.path} color="inherit">
                        {link.title}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar