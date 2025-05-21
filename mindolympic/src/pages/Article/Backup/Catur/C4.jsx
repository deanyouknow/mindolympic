import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsC from '../../../assets/components/Catur/SideCardsC'

const C4 = () => {
  
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Remaja 16 Tahun Asal Sleman Lolos Piala Dunia Catur Sekaligus Raih Gelar Woman International Master!</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              {/* Gambar */}
              <img
                src="https://images.chesscomfiles.com/uploads/v1/news/1652318.5fba5617.668x375o.54778ff67b4c.png"
                alt="Catur"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Turnamen Asian Zone 3.3 Chess Championship 2025 resmi berakhir pada 1 Mei. Pecatur kebanggaan Indonesia, Shafira Devi Herfesa yang berusia 16 tahun asal Sleman tampil sebagai juara kategori Wanita. Ia lolos ke Piala Dunia Catur Wanita FIDE 2025 sekaligus meraih gelar baru yaitu Woman International Master (WIM). Tak hanya itu, ia juga membawa pulang hadiah $1215 dan mencatat kenaikan 172 poin rating FIDE!
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Shafira (1983) mencatat perjalanan luar biasa sepanjang 9 babak turnamen. Ia mengoleksi 7 poin, membukukan 5 kemenangan, 2 hasil remis, dan hanya 1 kekalahan. Di antara lawan-lawannya terdapat dua WGM, dua WIM, satu WFM, dan tiga WCM. Shafira tampil konsisten sejak awal dan menutup turnamen dengan kemenangan yang mengangkatnya dari posisi keempat ke peringkat pertama di babak terakhir.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                “Saat babak kedelapan aku masih di posisi keempat. Tapi babak terakhir jadi momen favoritku. Rasanya seperti keajaiban,” ujar Shafira dalam wawancara usai pertandingan
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Thifaal</p>
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

export default C4