import './App.css'
import Counter from './components/Counter'
import { useCounter } from './store/store'

function App() {
  const count = useCounter(state => state.count)
  return (
    <>
      <Counter count = {count}/>
    </>
  )
}

export default App