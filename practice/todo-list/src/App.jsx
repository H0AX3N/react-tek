import { useState } from 'react'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center h-screen'>
      <Todo />
    </div>
  )
}

export default App
