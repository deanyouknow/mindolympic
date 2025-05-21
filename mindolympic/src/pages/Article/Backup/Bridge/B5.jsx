import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsB from '../../../assets/components/Bridge/SideCardsB'

const B5 = () => {
  
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Mengenal Cabang Olahraga Bridge di PON Aceh-Sumut</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Olahraga bridge dan cara bermainnya.
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.rri.co.id/berita/Takengon/o/1720175519271-SuperMixedTeamSemifinalINAVSCHN_DSC_0111/qxqtt4dsh0wcfk3.jpeg"
                alt="Bridge"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Dalam Pekan Olahraga Nasional (PON) Ke-XXI Aceh-Sumut, terdapat salah satu cabang olahraga (Cabor) bernama Bridge. Cabor ini akan dilaksanakan di Kabupaten Aceh Tengah, Provinsi Aceh bersama 2 cabang lainnya, yakni Berkuda – Pacuan dan Triathlon.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Sebenarnya apa itu Bridge? Dikutip dari situs Zalora, Bridge adalah permainan kartu yang dimainkan dengan satu deck kartu (52 kartu) oleh empat pemain dalam dua pasangan. Pemain-pemain ini duduk berseberangan satu sama lain di meja.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Tujuan utama dari permainan ini adalah untuk memenangkan sejumlah trik berdasarkan tawaran yang dibuat di awal permainan. Ini membutuhkan komunikasi yang efektif antar pasangan, pemahaman strategi yang mendalam, serta kemampuan analitis dan matematis yang tajam.
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

export default B5