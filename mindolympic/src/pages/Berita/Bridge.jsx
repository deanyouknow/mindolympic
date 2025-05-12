import React from 'react'
import Navbar from '../../assets/components/Navbar'
import Footer from '../../assets/components/Footer'

const Bridge = () => {
  return (
    <>
    <Navbar />
    <div>
        <div className='p-7 max-w-7xl mx-auto'>
            <h1 className='text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6'>Berita Bridge</h1>
            <p>Berita Bridge akan ditampilkan disini</p>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Bridge