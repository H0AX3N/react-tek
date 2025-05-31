import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [input, setInput] = useState("")
    const [count, setCount] = useState(0)
    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [count])

    return (
        <div className='flex justify-center items-center flex-col'>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='border rounded'/>
            <h1 className='border px-4 m-4 rounded'>{count}</h1>
            <Child fun = {increment}/>
        </div>
    )
}

export default Parent
