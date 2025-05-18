import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsE from '../../../assets/components/Esport/SideCardsE'

const E6 = () => {

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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Di luar nalar, prize pool EWC 2025 lebih dari Rp1,1 triliun!</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Riyadh siap menggelar pesta esports paling akbar di muka bumi.
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.oneesports.id/cdn-data/sites/2/2025/04/EWC2025_Prizepool.jpg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Esports World Cup Foundation (EWCF) mengumumkan prize pool pemecah rekor senilai lebih dari USD70 juta (Rp1.173.900.000.000 dengan kurs saat artikel diterbitkan) untuk Esports World Cup (EWC) 2025, turnamen esports terbesar di dunia yang akan digelar lagi di Riyadh, Arab Saudi, pada 7 Juli hingga 24 Agustus 2025.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Dengan hadiah yang fantastis ini, EWC semakin mengukuhkan diri sebagai ajang kompetisi esports paling prestisius di muka bumi.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Maula</p>
                <p>Date: May 12, 2025</p>
              </div>
            </div>
            <SideCardsE />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default E6