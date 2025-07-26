import { useState } from 'react'
import Fetch from './components/Fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fetch />
    </>
  )
}

export default App
