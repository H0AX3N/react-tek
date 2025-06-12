import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()
    console.log(count)

    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100'>
            <div class="bg-linear-65 from-purple-500 to-pink-500 px-4 py-2 rounded-lg shadow-xl text-center text-white">
                <h1>Count : {count}</h1>
            </div>

            <div className='flex space-x-4 mt-4'>
                <button className='text-white bg-linear-to-r/decreasing from-indigo-500 to-teal-400 px-4 py-2 rounded-lg shadow-xl' onClick={() => dispatch(increment())}>Increment</button>
                <button className='text-white bg-linear-to-r/decreasing from-indigo-500 to-teal-400 px-4 py-2 rounded-lg shadow-xl' onClick={() => dispatch(decrement())}>Decrement</button>
                <button className='text-white bg-linear-to-r/decreasing from-indigo-500 to-teal-400 px-4 py-2 rounded-lg shadow-xl' onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}

export default Counter