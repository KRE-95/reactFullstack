import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#111827')
  // using set color , then use backcall {() => setColor('green')}

  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
    <h1 className="text-5xl font-extrabold dark:text-white">Background changer<small className="ms-2 font-semibold text-gray-500 dark:text-gray-400"> done with Vite</small>
    </h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >Green</button>
          
          </div>
      </div>
    </div>
      

    </>
  )
}

export default App
