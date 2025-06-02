import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/route.jsx'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={Route}>

  </RouterProvider>
)
// If you want to start measuring performance in your app, pass a function