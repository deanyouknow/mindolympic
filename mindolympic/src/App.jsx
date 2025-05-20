import { useState } from 'react'
import './App.css'
import Search from './pages/Search'
import { About, Bridge, Catur, Contact, Esport, Home } from './pages/'
import { E1, E2, E3, E4, E5, E6 } from './pages/Article/Esport'
import { C1, C2, C3, C4, C5, C6 } from './pages/Article/Catur' 
import { B1, B2, B3, B4, B5, B6 } from './pages/Article/Bridge'
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
          <Route path="/esport/E2" element={<E2 />} />
          <Route path="/esport/E3" element={<E3 />} />
          <Route path="/esport/E4" element={<E4 />} />
          <Route path="/esport/E5" element={<E5 />} />
          <Route path="/esport/E6" element={<E6 />} />
          <Route path="/catur/C1" element={<C1 />} />
          <Route path="/catur/C2" element={<C2 />} />
          <Route path="/catur/C3" element={<C3 />} />
          <Route path="/catur/C4" element={<C4 />} />
          <Route path="/catur/C5" element={<C5 />} />
          <Route path="/catur/C6" element={<C6 />} />
          <Route path="/bridge/B1" element={<B1 />} />
          <Route path="/bridge/B2" element={<B2 />} />
          <Route path="/bridge/B3" element={<B3 />} />
          <Route path="/bridge/B4" element={<B4 />} />
          <Route path="/bridge/B5" element={<B5 />} />
          <Route path="/bridge/B6" element={<B6 />} />
          <Route path="/search/:id" element={<Search />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
