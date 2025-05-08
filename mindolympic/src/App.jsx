import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Highlight from './assets/components/Highlight'
import Footer from './assets/components/Footer'
import Home from './pages/Home'
import Esport from './pages/Berita/Esport'
import Catur from './pages/Berita/Catur'
import Bridge from './pages/Berita/Bridge'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita/esport" element={<Esport />} />
          <Route path="/berita/catur" element={<Catur />} />
          <Route path="/berita/bridge" element={<Bridge />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
