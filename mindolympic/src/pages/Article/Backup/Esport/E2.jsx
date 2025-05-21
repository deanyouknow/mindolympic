import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsE from '../../../assets/components/Esport/SideCardsE'

const E2 = () => {
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Tidak main-main, investasi esports Honor of Kings 2025 sebesar US$15 juta!</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Semakin besar hadiah, semakin semangat!
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.oneesports.id/cdn-data/sites/2/2025/03/HonorOfKings_InvitationalS3_NongshimRedforce_PunchPose-1024x576-1.jpg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Di hari grand final Honor of Kings Invitational Season 3, James Yang, Direktur Senior Level Infinite Global, mengumumkan rencana besar untuk esports Honor of Kings (HOK) sepanjang tahun 2025.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Pengembang game ini dipastikan bakal menginvestasikan total US$15.000.000 (Rp248,7 miliar) untuk mengembangkan ekosistem esports HOK, termasuk menyelenggarakan tiga turnamen global, tujuh liga pro regional, dan berbagai turnamen grassroots yang terbuka untuk komunitas amatir dan pelajar.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Thifaal</p>
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

export default E2