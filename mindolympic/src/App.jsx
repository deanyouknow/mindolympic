import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Highlight from './assets/components/Highlight'
import Footer from './assets/components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Highlight />
      <Footer />
    </>
  )
}

export default App
