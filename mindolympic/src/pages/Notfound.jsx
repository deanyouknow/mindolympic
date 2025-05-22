import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'

const Notfound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow bg-gray-100 text-black flex items-center justify-center dark:bg-[#1F1F1F] transition-colors duration-300">
        <div className="text-center px-6 py-16">
          <h1 className="text-6xl font-bold mb-4 text-black dark:text-white">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black dark:text-white">Halaman Tidak Ditemukan</h2>
          <p className="text-lg mb-6 text-black dark:text-white">Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.</p>
          <a
            href="/"
            className="inline-block px-6 py-2 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-100 transition dark:bg-black dark:text-white"
          >
            Kembali ke Beranda
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Notfound