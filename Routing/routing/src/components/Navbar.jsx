import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <ul className='flex justify-around bg-gray-800 text-white p-4 shadow-lg'> 
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </ul>
    </div>
  )
}

export default Navbar
