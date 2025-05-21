import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsE from '../../../assets/components/Esport/SideCardsE'

const E1 = () => {
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">PSSI dan Konami resmi selenggarakan eFootball Indonesia Cup 2025</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Jakarta (ANTARA) - PSSI bekerja sama dengan pengembang dan penerbit gim asal Jepang, Konami resmi menyelenggarakan kompetisi esport bertajuk eFootball Indonesia Cup 2025.
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.antaranews.com/cache/1200x800/2025/04/08/1000009306.jpg.webp"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Peluncuran turnamen ini adalah salah satu bagian dari kerjasama antara PSSI dan Konami untuk melisensikan Tim Nasional Indonesia di fim sepak bola, eFootball.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                "Turnamen ini akan terbuka untuk semua level pemain dari berbagai macam kalangan, mulai dari kategori mobile dan konsol bisa bermain dalam turnamen ini," kata Junichi Taya, General Producer dari Konami dalam konferensi pers di Jakarta pada Selasa.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Sementara itu, Direktur Garuda Sepakbola Indonesia (GSI) Marsal Masita sebagai perwakilan PSSI menyebut kompetisi ini bisa menjaring talenta-talenta baru di dunia esport untuk menorehkan prestasi di kancah internasional.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Dean</p>
                <p>Date: May 12, 2025</p>
              </div>
            </div>

            {/* rekomendasi kanan - Jangan di ubah */}
           <SideCardsE />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default E1