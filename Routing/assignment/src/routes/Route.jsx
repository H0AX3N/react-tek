import React from 'react'
import ErrorBoundary from '../pages/ErrorBoundary'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Recipes from '../pages/Recipes'
import RecipeDetails from '../pages/RecipeDetails'
import App from '../App'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <App />, 
        errorElement: <ErrorBoundary />, 
        children : [
            {path : '/home', element: <Home />},
            {path : '/about', element: <About />},
            {path : '/contact', element: <Contact />},
            {path : '/recipes', element: <Recipes />},
            {path : '/recipes/:id', element : <RecipeDetails />}
        ] 
    }, 
])

export default router
