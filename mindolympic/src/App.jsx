import { useState } from 'react'
import './App.css'
import { About, Bridge, Catur, Contact, Esport, Home, Search, Notfound } from './pages/'
import { ArtikelEsport, ArtikelBridge, ArtikelCatur } from './pages/Article'
import Darkmode from './pages/Darkmode'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/esport" element={<Esport />} />
          <Route path="/catur" element={<Catur />} />
          <Route path="/bridge" element={<Bridge />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path='/dark' element={<Darkmode />} />
          <Route path="/artikel-esport/:id" element={<ArtikelEsport />} />
          <Route path="/artikel-catur/:id" element={<ArtikelCatur />} />
          <Route path="/artikel-bridge/:id" element={<ArtikelBridge />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
