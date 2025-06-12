import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("")
  let products = [
    { id: 1, item: "Baseball" },
    { id: 2, item: "Cricket" },
    { id: 3, item: "football" },
    { id: 4, item: "F1" },
    { id: 5, item: "Tennis" },
    { id: 6, item: "Badminton" },
    { id: 7, item: "Hockey" },
    { id: 8, item: "MMA" },
    { id: 9, item: "Boxing" },
    { id: 10, item: "Kyoukushin Karate" },
    { id: 11, item: "Systema" },
    { id: 12, item: "Judo" }
  ]

  const filteredProducts = products.filter(prod =>
    prod.item.toLowerCase().includes(search)
  )

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search items..."
      />
      
      <ul>
        {filteredProducts.map(prod => (
          <li key={prod.id}>{prod.item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
