import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsB from '../../../assets/components/Bridge/SideCardsB'

const B2 = () => {
 
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Bridge Porprov Jabar 2025: Enam Nomor Diusulkan</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Pengprov GABSI Jawa Barat mengusulkan enam nomor pertandingan bridge di Babak Kualifikasi (BK) Pekan Olahraga Provinsi (Porprov) Jawa Barat 2025 di Kota Bandung
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.rri.co.id/berita/Bogor/o/1740013623918-DSC04490.jpg/sufhjbotejafj2v.webp"
                alt="Bridge"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Usulan ini menambah satu nomor dari PON XXI/2024 dan sama dengan jumlah nomor di PON XVIII/2012. 
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                "Pengprov GABSI Jabar dan Kota Bandung sepakat menambah satu nomor," jelas Sekretaris Umum Pengprov GABSI Jabar, Kurnia Praja, Kamis (20/2/2025).
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Nomor yang diusulkan meliputi patkawan putra, putri, dan campuran, serta pasangan putra, putri, dan campuran. 
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Dean</p>
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

export default B2