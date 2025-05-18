import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsB from '../../../assets/components/Bridge/SideCardsB'

const B4 = () => {

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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Diikuti Atlet PON, 22 Tim Bertanding di Bridge League Jatim</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Sebanyak 22 tim bridge dari enam kabupaten/kota dan tiga kampus di Jatim bertanding di Bridge League series I yang digelar di Balai Sahabat Surabaya, Minggu
              </h2>
              {/* Gambar */}
              <img
                src="https://harianbhirawa.co.id/wp-content/uploads/2025/05/19-wwn-bridge.jpg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Sebanyak 22 tim bridge dari enam kabupaten/kota dan tiga kampus di Jatim bertanding di Bridge League series I yang digelar di Balai Sahabat Surabaya, Minggu (18/5). Event ini rencanannya digelar sebanyak enam series dan akan digelar di beberapa daerah.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Sekretaris Gabungan Bridge Seluruh Indonesia (Gabsi) Jatim Raf Radiant Agung SGJ mengatakan, Bridge League merupakan salah satu upaya dari pengurus Gabsi Jatim untuk melakukan pembinaan terutama bagi para atlet muda.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Sebab di kejuaraan tersebut diikuti oleh para atlet senior, bahkan beberapa atlet Jatim yang turun di Pekan Olahraga Nasional (PON) XXI Aceh-Medan 2024 juga turun untuk membela klub masing-masing. “Jadi ini kesempatan bagi para atlet muda untuk mengasah kemampuan karena banyak atlet senior yang turun di event ini,” kata Raf Radiant saat ditemui di lokasi lomba.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Maula</p>
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

export default B4