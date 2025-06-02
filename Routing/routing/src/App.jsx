import { useState } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className='flex justify-center min-h-screen bg-gray-300'>
        <Outlet/>
      </main>
    </>
  )
}

export default App
