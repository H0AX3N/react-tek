import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            // console.log(data.products);
            setProducts(data.products);
        }
        catch (err) {
            console.error("Error fetching products:", err);
        }
    }

    useEffect(() => {
        fetchProducts(); 
    })

    return (
        <div className='flex flex-col items-center justify-center gap-2 bg-gray-100 p-4 m-2 w-[80vw] rounded-xl'>
            {products.map((product) => (
                <ul key={product.id} className='flex flex-col items-center justify-center bg-gray-200 p-4 m-2 w-2xl rounded-xl shadow-lg'>
                    <li><img src={product.thumbnail} alt={product.title} className='w-32 h-32 object-cover' /></li>
                    <li>{product.title}</li>
                    <li>${product.price}</li>
                    <button onClick={() => navigate(`/products/${product.id}`)} className='bg-blue-500 text-white px-3 py-1.5 rounded-md mt-5 mb-3'>Click to view item</button>
                </ul>
            ))}
        </div>
    )
}

export default Products
