import React from 'react'
import Navbar from '../assets/components/Navbar'
import Highlight from '../assets/components/Highlight'
import Footer from '../assets/components/Footer'
import SideCards from '../assets/components/SideCards'

const Home = () => {
  return (
    <>
    <Navbar />
    <Highlight />
    <div className='p-7 max-w-7xl mx-auto'>
        <h1 className='text-2xl josefin-sans inline-block border-b-2 border-black pb-1'>Berita Pilihan Terbaru</h1>
    </div>
    <SideCards />
    <Footer />
    </>
  )
}

export default Home