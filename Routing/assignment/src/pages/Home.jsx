import React from 'react';
import { Link } from 'react-router-dom';
import Blobs from '../components/Blobs';

function Home() {
    return (
        <div className="relative min-h-screen bg-[#fdfaf7] flex flex-col justify-center items-center px-4 text-center overflow-hidden">

            <Blobs />

            {/* Hero Section */}
            <div className="max-w-3xl z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-6">
                    Welcome to FlavorNest 🍽️
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Discover delicious recipes, share your own creations, and enjoy the joy of cooking with our handpicked dishes from around the world.
                </p>
                <Link to="/recipes">
                    <button className="bg-[#b67d58] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#a16945] transition duration-300">
                        Explore Recipes
                    </button>
                </Link>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full z-10">
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                    <h3 className="text-xl font-semibold mb-2">Easy to Cook</h3>
                    <p className="text-gray-600">Step-by-step guides that make cooking simple for everyone.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                    <h3 className="text-xl font-semibold mb-2">Global Cuisine</h3>
                    <p className="text-gray-600">Recipes from Indian, Italian, Chinese, and more!</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                    <h3 className="text-xl font-semibold mb-2">Share Yours</h3>
                    <p className="text-gray-600">Submit your own recipe and inspire others to try it.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
