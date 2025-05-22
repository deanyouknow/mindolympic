import React from 'react'  
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import HighlightB from '../assets/components/Bridge/HighlightB'
import BeritaB from '../assets/components/Bridge/BeritaB'

const Bridge = () => {
  return (
    <>
    <div className='bg-white dark:bg-[#030712] transition-colors duration-300'>
    <Navbar />
    <div>
        <div className='p-7 max-w-7xl mx-auto'>
            <h1 className='text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6 text-black dark:text-white dark:border-white'>Berita Bridge</h1>
            <p className='text-lg poppins-regular text-black dark:text-white dark:border-white'>Kabar Terkini Seputar Bridge</p>
        </div>
    </div>
    <HighlightB />
    <BeritaB />
    <Footer />
    </div>
    </>
  )
}

export default Bridge