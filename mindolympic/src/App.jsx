import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Highlight from './assets/components/Highlight'
import Footer from './assets/components/Footer'
import Home from './pages/Home'
import Esport from './pages/Esport'
import Catur from './pages/Catur'
import Bridge from './pages/Bridge'
import About from './pages/About'
import Contact from './pages/Contact'
import E1 from './pages/Article/Esport/E1'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/esport" element={<Esport />} />
          <Route path="/catur" element={<Catur />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/esport/E1" element={<E1 />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
