import { useState } from 'react'
import './App.css'

function App() {

  // declare variable
  //let counter = 15
  const [counter, setCounter] = useState(15)

  // declare method 
  const addValue = () => {

   setCounter((prevCounter)=> prevCounter + 1)
   //setCounter((prevCounter)=> prevCounter + 1) // adds value twice
  }

  // declare method
  const removeValue = () => {

    setCounter((prevCounter)=> prevCounter - 1)
  } 


  return (
    <>
      <h1>React stage{counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}
      >Add value</button> {" "}
      <button onClick={removeValue}
      >Remove value</button>
      <p>footer:{counter} </p>
    </>
  )
}

export default App
