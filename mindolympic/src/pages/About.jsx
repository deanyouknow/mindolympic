import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'

const About = () => {
  return (
    <>
    <Navbar />
    <div className='p-7 max-w-7xl mx-auto'>
        <h1 className='text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6'>Tentang Kami</h1>
        <p>Mind Olympic adalah platform yang menyediakan informasi terkini seputar berita olahraga, khususnya dalam bidang catur, bridge, dan esport. Kami berkomitmen untuk memberikan berita yang akurat dan terpercaya kepada para pembaca kami.</p>
        <p>Dengan tim jurnalis yang berpengalaman dan sumber informasi yang terpercaya, kami berusaha untuk menyajikan berita yang menarik dan bermanfaat bagi para penggemar olahraga.</p>
    </div>
    <Footer />
    </>
  )
}

export default About