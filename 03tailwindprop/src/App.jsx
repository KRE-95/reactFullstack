import './App.css'
import Card from './components/Card'

function App() {
 
let myObj = {
      name: 'Azmat',
      age: 32,
      address: {
        city: 'Oslo',
        state: 'Oslo',
        country: 'Norway'
    }
}
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
    <Card username="Azmat" myObj={newArr} />
    <Card username="Petter" post=" Finance " />
    <Card />
     
    </>
  )
}

export default App
