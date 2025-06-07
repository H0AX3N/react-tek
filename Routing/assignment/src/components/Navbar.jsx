import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearch.trim()) {
            console.log("Search Query:", debouncedSearch); // replace with actual search/filter logic
        }
    }, [debouncedSearch]);

    return (
        <div className='flex justify-center items-center h-24'>
            <div className='flex justify-between items-center bg-gray-800 text-[#FAF7F5] font-semibold p-4 shadow-lg list-none fixed top-5 w-[80vw] z-20 bg-white/10 backdrop-blur-sm rounded-full'>

                {/* Logo */}
                <div className="flex items-center mr-6">
                    <Link to="/home">
                        <img
                            src="https://marketplace.canva.com/EAGOADQey2g/1/0/1600w/canva-brown-simple-circle-restaurant-logo-BiB84MUi2zQ.jpg"
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </Link>
                </div>

                {/* Links */}
                <ul className='flex justify-center flex-grow gap-10'>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/recipes">Recipes</Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
