import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Highlight from './assets/components/Highlight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Highlight />
    </>
  )
}

export default App
