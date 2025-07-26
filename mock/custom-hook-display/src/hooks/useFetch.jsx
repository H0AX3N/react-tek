import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [datas, setDatas] = useState([]);
    const handlFetch = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setDatas(data.products)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        handlFetch();
    }, [])
    
    return {datas}
}

export default useFetch