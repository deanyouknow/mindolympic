import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import HighlightC from '../assets/components/Catur/HighlightC'
import BeritaC from '../assets/components/Catur/BeritaC'

const Catur = () => {
  return (
    <>
    <div className='bg-white dark:bg-[#030712] transition-colors duration-300'>
    <Navbar />
    <div className='p-7 max-w-7xl mx-auto'>
        <h1 className='text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6 text-black dark:text-white dark:border-white'>Berita Catur</h1>
        <p className='text-lg poppins-regular text-black dark:text-white dark:border-white'>Update Dunia Catur Hari Ini</p>
    </div>
    <HighlightC />
    <BeritaC />
    <Footer />
    </div>
    </>
  )
}

export default Catur