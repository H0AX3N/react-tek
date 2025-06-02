import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorBoundary from '../pages/ErrorBoundary'
import Products from '../pages/Products'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import App from '../App'
import ProductDetails from '../pages/ProductDetails'

const Route = createBrowserRouter([
    { 
        path: '/', 
        element: <App />, 
        errorElement: <ErrorBoundary />, 
        children : [
            {path : '/home', element: <Home />},
            {path : '/about', element: <About />},
            {path : '/contact', element: <Contact />},
            {path : '/products', element: <Products />},
            {path : '/products/:id', element : <ProductDetails/>}
        ] 
    }, 
])

export default Route
