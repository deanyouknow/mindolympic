import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsB from '../../../assets/components/Bridge/SideCardsB'

const B3 = () => {
 
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Zaenal Mutaqin Terpilih Aklamasi Pimpin Gabungan Bridge Kota Tasimalaya 2025-2029</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Ketua Gabrikotas Zaenal Mutaqin (kanan) saat berfoto dengan Epi Mulyana salah satu pengurus KONI Kota Tasikmalaya usai pelaksanaan Muscab.
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn-1.timesmedia.co.id/images/2025/04/20/Musyawarah.jpg"
                alt="Bridge"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Suasana penuh semangat dan kekeluargaan menyelimuti kegiatan Musyawarah Cabang (Muscab) Gabungan Bridge Kota Tasikmalaya (GABRIKOTAS) Tahun 2025 yang digelar di sekretariat Gabrikotas, Jalan Kolonel Utuy Sobandi No. 110, Kecamatan Cipedes, Kota Tasikmalaya. 
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Kegiatan strategis ini menjadi momen penting dalam menentukan arah pembinaan olahraga bridge di Kota Tasikmalaya ke depan.
              </p>
              <p className=' poppins-regular text-base text-gray-700 mb-6'>
                Sebanyak 12 klub bridge yang aktif di wilayah Kota Tasikmalaya secara resmi hadir dan terlibat dalam proses Muscab. Dalam forum yang berlangsung secara musyawarah dan mufakat tersebut, Drs. Zaenal Mutaqin, M.Pd terpilih secara aklamasi sebagai Ketua GABRIKOTAS untuk masa bakti 2025–2029. 
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Thifaal</p>
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

export default B3