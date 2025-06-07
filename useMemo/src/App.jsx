import { useState } from 'react'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p>count : {count}</p>
      <button 
        className='bg-blue-500 text-white px-2.5 py-1.5 rounded-sm' 
        onClick={() => { setCount((prev) => prev + 1) }}
      >Increment</button>
      <Child name = "Sandipan"/>
    </div>
  )
}

export default App