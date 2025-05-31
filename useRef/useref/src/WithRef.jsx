import React, { useEffect, useState, useRef } from 'react'

function WithRef() {
    const [count, setCount] = useState(0)
    let a = useRef(0)
    useEffect(() => {
        a.current = a.current + 1;
        console.log(`The value of a is ${a.current}`)
    })
    
    return (
        <div className='flex flex-col justify-center items-center gap-7'>
            <p className='border rounded px-5 py-1'>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)} className='bg-blue-500 text-white px-4 py-2 rounded'>Increment</button>
        </div>
    )
}

export default WithRef
