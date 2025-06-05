import React, { useEffect, useState } from "react";

const sampleProducts = [
    { id: 1, name: "iPhone 13" },
    { id: 2, name: "Samsung Galaxy" },
    { id: 3, name: "OnePlus 11" },
    { id: 4, name: "Google Pixel" },
    { id: 5, name: "Nokia 3310" },
];

const DebouncedSearch = () => {
    //for input
    const [searchTerm, setSearchTerm] = useState("");
    //debounce
    const [debouncedValue, setDebouncedValue] = useState("");

    //setting the filtered data after debouce
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        const results = sampleProducts.filter((item) =>
            item.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setFilteredData(results);
    }, [debouncedValue]);

    return (
        <div style={{ padding: 20 }}>
            <h2> Debounced Product Search</h2>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: 8, width: "300px" }}
            />

            <ul style={{ marginTop: 20 }}>
                {filteredData.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            {filteredData.length === 0 && debouncedValue && (
                <p>No products found for "{debouncedValue}"</p>
            )}
        </div>
    );
};

export default DebouncedSearch;