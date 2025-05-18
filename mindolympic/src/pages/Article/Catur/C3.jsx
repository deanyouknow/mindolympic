import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsC from '../../../assets/components/Catur/SideCardsC'

const C3 = () => {
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Pecatur Indonesia Ikuti Asian Individual Chess Championships 2025: Perebutkan Tiket ke Piala Dunia!</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              {/* Gambar */}
              <img
                src="https://images.chesscomfiles.com/uploads/v1/news/1660712.69bd40ef.668x375o.75a12410c7a5.png"
                alt="CAtur"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Sebanyak 11 pecatur Indonesia resmi bertanding di Asian Individual Chess Championships 2025, yang digelar mulai 7 hingga 15 Mei di Danat Hotel & Resorts, Al Ain, Uni Emirat Arab. Kejuaraan ini merupakan salah satu kompetisi catur paling prestisius di Asia, dengan lebih dari 250 peserta dari sekitar 33 negara yang ikut berpartisipasi.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Turnamen ini bukan sekadar ajang perebutan gelar juara Asia, tetapi juga menjadi salah satu jalur kualifikasi menuju Piala Dunia FIDE 2025. Sepuluh pemain terbaik dari kategori Terbuka serta dua pemain teratas dari kategori Wanita akan memperoleh tiket ke kejuaraan dunia tersebut.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Sebelumnya, Indonesia telah memastikan satu tempat di Piala Dunia Wanita FIDE 2025 melalui keberhasilan Shafira Devi Herfesa yang tampil sebagai juara di kategori Wanita Asian Zone 3.3. Melalui keikutsertaan di turnamen ini, diharapkan kita bisa menambah jumlah wakil Indonesia yang lolos ke Piala Dunia FIDE 2025.
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

export default C3