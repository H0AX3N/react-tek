import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Fetch() {
    const [datas, setDatas] = useState([])
    const fetchDetails = async() => {
        const response = await axios.get('https://dummyjson.com/carts');
        setDatas(response.data.carts)
        // console.log(response.data)
    }
    useEffect(() => {
        fetchDetails()
    }, [])
    console.log(datas)

    return (
        <div>
            {datas.map((item) => {
                return <ul key={item.id}>{item.products.map((prod) => {
                    return <li key={prod.id}>{prod.title}</li>
                })}</ul>
            })}
        </div>
    )
}

export default Fetch;   