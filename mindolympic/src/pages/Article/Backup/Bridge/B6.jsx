import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsB from '../../../assets/components/Bridge/SideCardsB'

const B6 = () => {

  return (
    <>
      <Navbar />
      {/* Artikel dan sisi rekomendasi */}
      <div className="w-full p-7 overflow-y-auto bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">


            {/* Arikel utama */}
            <div className="lg:w-2/3 bg-gray-75 shadow-md rounded-lg p-6">
              {/* Judul */}
              <h1 className="josefin-sans text-4xl font-bold mb-4">Bridge Mulai Digemari Pemuda Indonesia</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Pemain Junior turut ambil bagian di Kejurnas Bridge yang berlangsung di Jakarta beberapa waktu lalu
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.rri.co.id/berita/Manado/o/1746969753153-IMG_20250511_211406/3fg0dv86i9fmnl3.jpeg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Kemenangan timnas Junior U31 atas China di babak final pada 25th APBF Youth Championships 2025  yang berlangsung di The Cavalli Casa Resort di Ayutthaya, Thailand telah menghebohkan jagat bridge Indonesia.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Apalagi kemudian tim ini akan menuju 19th The World Youth Team Championships yang akan berlangsung pada 11-17 Juli 2025 di Salsomaggiore Italia.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Berbagai pertanyaan muncul antara lain, bagaimana sebenarnya sejarah berkembangnya permainan bridge dikalangan remaja.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Thifall</p>
                <p>Date: May 12, 2025</p>
              </div>
            </div>
            <SideCardsB />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default B6