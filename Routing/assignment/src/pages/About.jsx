import React from 'react';
import Blobs from '../components/Blobs';

function About() {
    return (
        <div className="relative min-h-screen bg-[#fdfaf7] text-gray-800 px-6 py-16 flex flex-col justify-center items-center overflow-hidden">

            {/* === Blurred Floating Background Shapes === */}
            <Blobs />

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#5C3A21] mb-8 z-10">
                About Us
            </h1>

            {/* Mission Statement */}
            <div className="max-w-3xl text-center mb-12 z-10">
                <p className="text-lg leading-relaxed">
                    At <span className="font-semibold text-[#b67d58]">FlavorNest</span>, we believe cooking is a universal language of love and creativity.
                    Our goal is to make delicious recipes accessible to everyone—from beginners to seasoned chefs.
                </p>
            </div>

            {/* Team / Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full z-10">
                <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                    <p>
                        To be the go-to platform for home cooks and food enthusiasts looking for
                        inspiration, simplicity, and authenticity in everyday cooking.
                    </p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
                    <h3 className="text-2xl font-semibold mb-2">What We Offer</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Handpicked global recipes</li>
                        <li>Step-by-step cooking instructions</li>
                        <li>Community-driven submissions</li>
                        <li>Modern UI and user-friendly interface</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
