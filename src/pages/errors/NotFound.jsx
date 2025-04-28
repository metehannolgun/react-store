import { Alert, Paper, Typography, Button } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    const {state} = useLocation();
  return (
    <Paper sx={{p:3}}>
        <Typography variant='h4' gutterBottom>
            404 - Not Found
        </Typography>
        <Alert severity='error'>
            Aradığınız sayfa bulunamadı.
        </Alert>
        <Button component={Link} to="/" variant="contained" sx={{mt:2}} color="secondary">
                    Anasayfaya Dön
        </Button>
    </Paper>
  )
}

export default NotFoundPage