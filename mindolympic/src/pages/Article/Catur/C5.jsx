import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsC from '../../../assets/components/Catur/SideCardsC'

const C5 = () => {
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Yosep Taher segel gelar juara kategori blitz JAPFA FIDE Rated</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Dari kanan - IM Nayaka Budhidharma, IM Mohamad Ervan, dan IM Yosep Theolifus Taher saat menerima hadiah juara pada kategori catur cepat JAPFA FIDE Rated 2025 di Gedugn Serbaguna
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.antaranews.com/cache/1200x800/2025/05/16/IMG-20250516-WA0001.jpg.webp"
                alt="Catur"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Pecatur IM Yosep Theolifus Taher menyegel gelar juara kategori blitz atau catur cepat turnamen JAPFA FIDE Rated 2025.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Dalam turnamen yang berlangsung di Gedung Serbaguna Senayan, Jakarta, Kamis, Yoseph menjadi jawara setelah mengoleksi 8,5 VP dari sembilan babak.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                "Untuk JAPFA FIDE Rated 2025 ini semakin kompetitif ya. Saya pikir banyak pemain-pemain baru, pemain muda yang muncul dan mewarnai turnamen yang ada," kata Wakil Ketua Umum Pengurus Besar Persatuan Catur Seluruh Indonesia (PB Percasi) Laksamana TNI Abdul Rivai Ras dalam keterangan resmi dikutip Jumat.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Maula</p>
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

export default C5