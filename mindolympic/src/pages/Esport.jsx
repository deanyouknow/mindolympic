import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import HighlightE from '../assets/components/Esport/HighlightE'
import BeritaE from '../assets/components/Esport/BeritaE'

const Esport = () => {
  return (
    <>
    <div className='bg-white dark:bg-[#030712] transition-colors duration-300'>
    <Navbar />
        <div className='p-7 max-w-7xl mx-auto'>
            <h1 className='text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6 text-black dark:text-white dark:border-white' >Berita Esport</h1>
            <p className='text-lg poppins-regular text-black dark:text-white'>Berita eSport Terkini dan Terpercaya</p>
        </div>
        <HighlightE />
        <BeritaE />
    <Footer />
    </div>
    </>
  )
}

export default Esport