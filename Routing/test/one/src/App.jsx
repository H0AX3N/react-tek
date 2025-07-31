import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const  navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate('/')}>Route to Home Page</button>
      <button onClick={() => navigate('/about')}>Route to About Page</button>
      <button onClick={() => navigate('/services')}>Route to Services Page</button>
      <Outlet />
    </>
  )
}

export default App