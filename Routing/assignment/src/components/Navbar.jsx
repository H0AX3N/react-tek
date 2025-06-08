import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (debouncedSearch.trim()) {
            console.log("Search Query:", debouncedSearch);
        }
    }, [debouncedSearch]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='flex justify-center items-center'>
            <div className='flex justify-between items-center text-[brown] font-semibold p-4 shadow-lg/3 list-none fixed top-5 w-[80vw] z-20 bg-white/10 backdrop-blur-sm rounded-full'>

                {/* Logo */}
                <div className="flex items-center mr-6">
                    <Link to="/home" className='flex items-center gap-2 text-[brown] font-semibold'>
                        <img
                            src="https://marketplace.canva.com/EAGOADQey2g/1/0/1600w/canva-brown-simple-circle-restaurant-logo-BiB84MUi2zQ.jpg"
                            alt="Logo"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    <h1 className='text-3xl font-semibold'>FlavorNest</h1>
                    </Link>
                </div>

                {/* Desktop Links */}
                <ul className='hidden md:flex justify-center gap-20'>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/recipes">Recipes</Link>
                </ul>

                {/* Hamburger Button with Animation */}
                <button
                    className='md:hidden text-[brown] z-30 transition-transform duration-300 ease-in-out'
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <div className="relative w-6 h-6">
                        <Menu
                            className={`absolute transition-all duration-300 ease-in-out transform ${
                                isOpen ? 'opacity-0 scale-90 rotate-90' : 'opacity-100 scale-100'
                            }`}
                            size={24}
                        />
                        <X
                            className={`absolute transition-all duration-300 ease-in-out transform ${
                                isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-90'
                            }`}
                            size={24}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu with Slide + Fade Transition */}
            <div
                className={`md:hidden fixed top-24 w-[80vw] bg-[#30212ec6] backdrop-blur-sm text-white rounded-xl shadow-lg py-4 z-10 transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
            >
                <ul className="flex flex-col items-center gap-4">
                    <Link to="/home" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    <Link to="/recipes" onClick={toggleMenu}>Recipes</Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
