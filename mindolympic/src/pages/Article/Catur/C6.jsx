import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsC from '../../../assets/components/Catur/SideCardsC'

const C6 = () => {
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Zacky Dhia Ulhaq segel juara JAPFA FIDE Rated 2025</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Pecatur FM Zacky Dhia Ulhaq (kiri) saat menghadapi IM Abdul Hafiz (kanan) dalam pertandingan babak kesembilan kategori open JAPFA FIDE Rated 2025 yang berlangsung di Gedung Serbaguna Gelora Bung Karno, Senayan, Jakarta
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.antaranews.com/cache/1200x800/2025/05/15/IMG-20250514-WA0055.jpg.webp"
                alt="Catur"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Jakarta (ANTARA) - Pecatur FM Zacky Dhia Ulhaq meraih gelar juara kategori open JAPFA FIDE Rated 2025 yang berlangsung di Gedung Serbaguna Gelora Bung Karno, Senayan, Jakarta.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Zacky menyegel juara usai tampil konsisten sepanjang sembilan babak dan mengoleksi total 7,5 VP.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                "Alhamdulillah bisa menang dan merebut juara JAPFA Fide Rated 2025 ini, karena sempat tertekan di pembukaan namun bisa mengamankan kemenangan setelah menemui performa pada pertengahan babak 9,"ungkap Zacky dalam keterangan resmi PB Percasi, Kamis.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Dean</p>
                <p>Date: May 12, 2025</p>
              </div>
            </div>
            <SideCardsC />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default C6