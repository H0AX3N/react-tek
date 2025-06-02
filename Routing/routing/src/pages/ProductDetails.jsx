import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router';

function ProductDetails() {
    const [product, setProduct] = useState([])
    const {id} = useParams(); //it will return an object with the id property
    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`); // use the id that i grabbed from the URL using useParams
            const data = await response.json();
            setProduct(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    useEffect(() => {
        fetchDetails();
    }, [id]);

    return (
        <div>
            <h1 className='bg-gray-100 p-4 m-2 rounded-xl shadow-lg'>{product.title}</h1>
        </div>
    )
}
export default ProductDetails
