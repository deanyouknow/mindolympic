import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'

const About = () => {
  return (
    <>
    <Navbar />
        <div>
            <h1>About Us</h1>
            <p>Mindolympic adalah platform yang menyediakan berita terkini seputar olahraga, termasuk berita catur dan esport. Kami berkomitmen untuk memberikan informasi yang akurat dan terpercaya kepada pembaca kami.</p>
            <p>Tim kami terdiri dari jurnalis dan penggemar olahraga yang berdedikasi untuk menyajikan konten berkualitas tinggi. Kami percaya bahwa olahraga adalah bagian penting dari kehidupan dan kami ingin berbagi semangat itu dengan Anda.</p>
            <p>Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungi kami melalui halaman kontak.</p>
        </div>
    <Footer />
    </>
  )
}

export default About