import { useState } from 'react'
import Parent from './Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
      <Parent />
    </div>
  )
}

export default App
