import { useState } from 'react'
import './App.css'
import InputForm from './Component/InputForm'
import NavBar from './Component/Nabar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className='formBody'> 
    <InputForm/>
    </div>
    
    </>
  )
}

export default App
