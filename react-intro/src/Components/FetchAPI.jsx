import React, { useEffect, useState } from "react";
import Card from "./Card";

function FetchAPI() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setData(data.products);
        }
        catch (err) {
            console.error("Error fetching data:", err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {
                data.map((product) => {
                    return (
                        <div>
                            <Card key={product.id} product={product}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FetchAPI;
