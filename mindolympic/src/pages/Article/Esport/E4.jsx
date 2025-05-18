import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsE from '../../../assets/components/Esport/SideCardsE'

const E4 = () => {
 
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">GTA VI: Detail karakter, lokasi, dan alur cerita</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Petualangan heboh baru menanti…
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.oneesports.id/cdn-data/sites/2/2025/05/GTAVI_Jason_Duval_03-1024x576.jpg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Rockstar Games akhirnya merilis trailer kedua dari game yang paling dinanti: Grand Theft Auto VI (GTA VI).
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Trailer ini hadir hanya beberapa hari setelah pengumuman penundaan rilis. Pada awalnya GTA VI berencana diluncurkan pada 2025 namun pengembang game memutuskan untuk memundurkan jadwal ke Mei 2025.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Meski demikian kabar ini bisa menjadi angin segar karena fans dapat berharap detail yang lebih mendalam yang dapat memperkuat posisi GTA VI sebagai proyek paling ambisius Rockstar sejauh ini.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Dean</p>
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

export default E4