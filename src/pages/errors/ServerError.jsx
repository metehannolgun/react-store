import { Alert, Paper, Typography, Button } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServerErrorPage = () => {
    const {state} = useLocation();
  return (
    <Paper sx={{p:3}}>
        {state?.error ? (
            <>
                <Typography variant='h4' gutterBottom>
                    {state.error.message} - {state.status}
                </Typography>
                <Alert severity='error'>
                    {state.error.details || "Bilinmeyen bir hata oluştu"}
                </Alert>
            </>
        ):(
            <>
                <Typography variant='h4'>
                    Server Error
                </Typography>
                <Alert variant='h4'>
                    Bilinmeyen bir hata
                </Alert>
                
            </>
            
        )}
        <Button component={Link} to="/" variant="contained" sx={{mt:2}} color="secondary">
                    Anasayfaya Dön
        </Button>
    </Paper>
  )
}

export default ServerErrorPage