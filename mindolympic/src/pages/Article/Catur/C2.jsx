import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsC from '../../../assets/components/Catur/SideCardsC'

const C2 = () => {

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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Catur Indonesia Target Empat Emas di SEA Games 2025</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Catur Indonesia memasang target empat medali emas SEA Games 2025 Thailand. Salah satunya mereka percaya diri merebut dua emas dari nomor tradisional tuan rumah.
              </h2>
              {/* Gambar */}
              <img
                src="https://akcdn.detik.net.id/community/media/visual/2021/03/17/ilustrasi-catur-1.jpeg?w=700&q=90"
                alt="Catur"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Sekretaris Jenderal Pengurus Besar Persatuan Catur Seluruh Indonesia (PB Percasi) Henry Hendratno yang menyampaikan target tersebut.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                "Kami target empat medali emas. Dua emas diharapkan dari catur internasional dan regional salah satunya nomor catur cepat. Sedangkan dua lainnya dari nomor catur tradisional milik tuan rumah," kata Henry saat ditemui di Wisma Kemenpora, Senayan, Minggu (16/3/2025).
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

export default C2