import { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Counter />
    </div>
  )
}

export default App
