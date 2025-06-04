import { useState } from 'react'
import Navbar from './components/Navbar'
import Recipes from './pages/Recipes'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
