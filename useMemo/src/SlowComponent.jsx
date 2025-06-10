import React, { useEffect, useMemo, useState } from 'react';

export default function SlowComponent() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // This is a slow calculation
    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += num;
        }
        return result;
    };

    // useMemo will only recalculate when `count` changes
    const expensiveResult = useMemo(() => {
        console.log(count)
        return expensiveCalculation(count);
    }, [count]);
    // expensiveResult()

    useEffect(() => {
        console.log("Other changed:", other);
    }, [other]);

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h2>Expensive Result: {expensiveResult}</h2>
            <h2>Memoized value: {other}</h2>
            <button className='bg-blue-500 px-4 py-2 m-2 rounded-lg text-white' onClick={() => setCount(count + 1)}>Increment Count</button>
            <button className='bg-green-500 px-4 py-2 m-2 rounded-lg text-white' onClick={() => setOther(other + 1)}>Change Other</button>
        </div>
    );
}
