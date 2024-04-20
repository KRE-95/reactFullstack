import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  // State variables to manage password generation options and generated password
  const [length, setLength] = useState(8) // Default password length is 8
  const [numberAllowed, setNumberAllowed] = useState(false) // Boolean to allow numbers in password
  const [charAllowed, setCharAllowed] = useState(false) // Boolean to allow special characters in password
  const [password, setPassword] = useState('') // State to store generated password

  const passwordRef = useRef(null) // Reference to the password input element

  // Function to generate a password
  const generatePassword = useCallback(() => {
    let pass = "" // Initialize password variable
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Define character set for password

    // If numbers are allowed, add numbers to the character set
    if(numberAllowed) str += "0123456789"
    // If special characters are allowed, add them to the character set
    if(charAllowed) str += "!@#$%^&*()_+"

    // Loop to generate password of specified length
    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1) // Generate random index to pick character from character set
      pass += str.charAt(char) // Add character to password
    }

    setPassword(pass) // Set generated password in state

  }, [length, numberAllowed, charAllowed]) // Dependencies for useCallback hook

  // Function to copy generated password to clipboard
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password) // Copy password to clipboard
    passwordRef.current?.select() // Select password input field
    
  }
  // Effect hook to generate password whenever length or options change
  useEffect(()=>{
    generatePassword() // Call generatePassword function
  }, [length, numberAllowed, charAllowed]) // Dependencies for useEffect hook

  // JSX to render the password generator UI
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      {/* Password Input */}
      <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
      />
      {/* Copy Button */}
      <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >
        copy
      </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      {/* Password Length Slider */}
      <div className='flex items-center gap-x-1'>
        <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
        />
        <label htmlFor="length">Length: {length}</label>
      </div>
      {/* Numbers Checkbox */}
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
          name=""
          id="" 
        />
        <label htmlFor="number">Numbers</label>
      </div>
      {/* Characters Checkbox */}
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
        />
        <label htmlFor="charInput">Character</label>
      </div>
    </div>
  </div>
     
    </>
  )
}

export default App
