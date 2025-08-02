import { createContext, useState } from 'react'
import './App.css'
import CompOne from './components/CompOne'
import CompTwo from './components/CompTwo'
import CompThree from './components/CompThree'
import CompFour from './components/CompFour'

export const FirstNameContext = createContext()
export const LastNameContext = createContext()
export const TheContext = createContext()
export const GoatContext = createContext()
function App() {
  const [name, setName] = useState("Sandipan")
  const [name2, setName2] = useState("Deb")
  const [name3, setName3] = useState("The")
  const [name4, setName4] = useState("Goat")

  return (
    <>
      <FirstNameContext.Provider value={name}>
        <CompOne />
      </FirstNameContext.Provider>
      <LastNameContext.Provider value={name2}>
        <CompTwo />
      </LastNameContext.Provider>
      <TheContext.Provider value={name3}>
        <CompThree />
      </TheContext.Provider>
      <GoatContext.Provider value={name4}>
        <CompFour />
      </GoatContext.Provider>
    </>
  )
}

export default App
