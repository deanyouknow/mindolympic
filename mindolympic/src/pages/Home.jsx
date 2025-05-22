import React from 'react'
import Navbar from '../assets/components/Navbar'
import Highlight from '../assets/components/Highlight'
import Footer from '../assets/components/Footer'
import SideCards from '../assets/components/SideCards'

const Home = () => {
  return (
    <>
    <div className='bg-white dark:bg-[#030712] transition-colors duration-300'>
    <Navbar />
    <Highlight />
    <div className='p-7 max-w-7xl mx-auto'>
        <h1 className='text-2xl josefin-sans inline-block border-b-2 border-black pb-1 text-black dark:text-white dark:border-white'>Berita Pilihan Terbaru</h1>
    </div>
    <SideCards />
    <Footer />
    </div>
    </>
  )
}

export default Home