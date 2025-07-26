import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemDetails() {
    const { id } = useParams()
    console.log(id)
    const [product, setProduct] = useState([])

    const handleFetch = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            console.log(data)
            setProduct(data)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        handleFetch();
    }, [id])
    

    return (
        <div>
            <h2>{product.id}</h2>
            {/* <p>{product.description}</p> */}
        </div>
    )
}

export default ItemDetails
