import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState ('') 
  
  

  return (
    <>
    <h1 className='bg-red-400'> Setup  </h1>
     
    </>
  )
}

export default App
