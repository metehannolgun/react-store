import React from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/Main.jsx'
import HomePage from './pages/Home.jsx'
import ProductsPage from './pages/Products.jsx'
import CartPage from './pages/Cart.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import ProductsDetailsPage from './pages/ProductsDetails.jsx'
import ErrorPage from './pages/errors/Error.jsx'
import ServerErrorPage from './pages/errors/ServerError.jsx'
import NotFoundPage from './pages/errors/NotFound.jsx'

export const router = createBrowserRouter([
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
      {
        path:"errors",
        children:[
          {index:true, element:<ErrorPage/>},
          {path:"server-error", element: <ServerErrorPage/>},
          {path:"not-found", element: <NotFoundPage/>}
        ],
      },
      {path:"*", element:<NotFoundPage/>}, //404 page

    ],
   },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App