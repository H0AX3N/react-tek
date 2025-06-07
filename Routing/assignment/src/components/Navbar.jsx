import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='flex justify-center items-center h-20'>
            <ul className='flex justify-around  bg-gray-800 text-[#FAF7F5] font-semibold p-4 shadow-lg list-none fixed top-5 w-[80vw] z-20 bg-white/10 backdrop-blur-sm rounded-full'>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/recipes">Recipes</Link>
            </ul>
        </div>
    )
}

export default Navbar