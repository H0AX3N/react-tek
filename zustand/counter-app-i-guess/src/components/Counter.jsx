import React from 'react'
import { useCounter } from '../store/store'

function Counter({count}) {
    const increment = useCounter(state => state.increment)
    const decrement = useCounter(state => state.decrement)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
