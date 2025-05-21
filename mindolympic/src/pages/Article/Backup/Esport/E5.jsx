import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsE from '../../../assets/components/Esport/SideCardsE'

const E5 = () => {

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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Tanggal rilis Dune Awakening, adaptasi game dari film dengan rating IMDB nyaris sempurna</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Inilah semua yang perlu kalian ketahui tentang Dune Awakening.
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.oneesports.id/cdn-data/sites/2/2024/03/Games_DuneAwakening_OfficialImage_1-1024x576-1.jpg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Dune Awakening bakal membawa kita ke petualangan epik di planet Arrakis yang penuh gurun. Game ini menawarkan pemain pengalaman Open World yang luas dan berbeda dari yang lain.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Mengusung genre Action Survival MMO, game ini diluncurkan oleh Funcom selama Gamescom 2022, mereka menjanjikan perpaduan intensitas permainan bertahan hidup dan dinamika sosial yang mendalam dari dunia multipemain berskala besar.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Artikel ini akan mengulas semua yang perlu kalian ketahui tentang Dune Awakening, mulai dari mekanisme gameplay hingga pendaftaran closed beta.
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

export default E5