import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/Home.jsx'
import ProductsPage from './pages/Products.jsx'
import CartPage from './pages/Cart.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import ProductsDetailsPage from './pages/ProductsDetails.jsx'

const router = createBrowserRouter([
  {path: '/', element: <MainLayout />, 
    children: [
      {index:true, element:<HomePage/>},
      {path:"home", element:<HomePage/>},
      {
        path: "products",
        children: [
          {index:true, element:<ProductsPage/>}, //default products page
          {path:":id", element:<ProductsDetailsPage/>},// dynamic route for product details
        ]
      },
      {path:"cart", element:<CartPage/>},
      {path:"login", element:<LoginPage/>},
      {path:"register", element:<RegisterPage/>},

    ],
   },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App