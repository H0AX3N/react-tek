import { createContext, useState } from 'react'
import './App.css'
import CompOne from './components/CompOne'
import CompTwo from './components/CompTwo'

export const FirstNameContext = createContext()
export const LastNameContext = createContext()
function App() {
  const [name, setName] = useState("Sandipan")
  const [name2, setName2] = useState("Deb")

  return (
    <>
      <FirstNameContext.Provider value={name}>
        <CompOne />
      </FirstNameContext.Provider>
      <LastNameContext.Provider value={name2}>
        <CompTwo />
      </LastNameContext.Provider>
    </>
  )
}

export default App
