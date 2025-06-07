import { useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
    switch (action.type) {
      case "Increment" : 
        return state + 1;
      case "Decrement" : 
        if (state < 1) {
          return 0; 
        }
        return state - 1;
      case "Reset" :
        return 0;
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => {dispatch({type : "Decrement"})}}>-</button>
      <button onClick={() => {dispatch({type : "Reset"})}}>Reset</button>
      <button onClick={() => {dispatch({type : "Increment"})}}>+</button>
    </>
  )
}

export default App
