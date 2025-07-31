import React, { useState } from 'react'

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodos = () => {
        if (input.trim() === '') return;
        setTodos([...todos, input]);
        setInput('')
    }

    const handleDelete = (index) => {
        let updatedTodos = todos.filter((todo, idx) => idx !== index);
        setTodos(updatedTodos);
    }

    return (
        <div className='flex flex-col items-center p-5 mt-20 w-100 rounded-xl border-neutral-500/40 border'>
            <div className='flex gap-3 items-center justify-center w-full'>
                <input
                    type="text"
                    className='border border-neutral-400 rounded h-full flex-1 px-3'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') addTodos();
                    }}
                />
                <button
                    className='bg-blue-500 text-white rounded px-3 py-2'
                    onClick={addTodos}
                >
                    Add Todo
                </button>
            </div>
            <div className='flex flex-col mt-4 gap-4 w-full'>
                {todos.map((todo, idx) => (
                    <div className='flex justify-between items-center' key={idx}>
                        <div className='flex items-center rounded bg-neutral-200/70 mr-3 pl-3 w-full h-full'>
                            <p key={idx} >{todo}</p>
                        </div>
                        <button className='bg-red-500 rounded px-3 py-2 text-white' onClick={() => handleDelete(idx)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo
