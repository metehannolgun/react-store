import React from 'react'
import { IconButton, Toolbar, Box, AppBar, Button } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { NavLink } from 'react-router-dom'

const links = [
    {title: 'Home', path: '/'},
    {title: 'Products', path: '/products'},
]

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Box>
                <IconButton color='inherit'>
                    <StorefrontIcon/>
                </IconButton>
                {links.map((link)=>(
                    <Button component={NavLink} to={link.to} color="inherit">
                        {link.title}
                    </Button>
                ))}
                

                
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar