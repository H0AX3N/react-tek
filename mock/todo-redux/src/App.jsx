import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'

function App() {
  const [input, setInput] = useState("")
  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (input.trim("")) {
      dispatch(addTodo({ id: Date.now(), text: input }))
      setInput("")
    }
  }

  return (
    <div className="flex flex-col items-center mt-4 h-screen gap-4">
      <h1>Todo App</h1>
      <div className="flex flex-col gap-4">
        <input
          className="border rounded w-80 p-2"
          type="text"
          placeholder = "Add a todo"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleAdd} className="bg-blue-500 px-3 py-2 rounded-lg text-white">Add</button>
        <ul>
          {todos.map(todo => {
            return <li key={todo.id} className="flex justify-between items-center">
              {todo.text}
              <button onClick={() => dispatch(removeTodo({ id: todo.id }))} className="bg-red-500 mx-4 my-1.5 px-2 py-2 rounded text-white">Remove</button>
            </li>
          })}
        </ul>
      </div>


    </div>
  )
}

export default App