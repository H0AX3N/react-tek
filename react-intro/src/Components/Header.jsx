import React from 'react'

export default function Header() {
    return (
        <>
            <div>
                <ul className="flex justify-evenly items-center bg-gray-800 text-white p-4 text-xl h-20">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
            </div>
        </>
    )
}
