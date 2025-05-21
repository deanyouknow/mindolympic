import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsE from '../../../assets/components/Esport/SideCardsE'

const E3 = () => {
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Esports World Cup 2025 – teams, games, dates, and more</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.escharts.com/media/quick-upload/2024/11/EWC25-424e85520ce272c54a15685bf5c2d246.jpeg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                The second edition has tentatively been given the same timeframe as the 2024 esports series, with competitions scheduled to take place between July and August in 2025. Although the exact dates have not been revealed, it is expected that it will follow a similar schedule to the inaugural iteration.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Details about the prize pool, which was the highest ever for an esports series or event at the 2024 edition, have also not been disclosed, although the amount should witness a hike. The robust trophy system that rewarded the best club in the world (Club Championship) based on cumulative points from each team's overall performance across the two months of action should also be retained.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Speaking of the Club Championship, the list of participants for the Esports World Cup Foundation (EWCF) Club Partner Program expanded to 40 organizations in 2025, with sides selected set to receive six-figure funding in dollars to strengthen their brand and activate their fan base ahead of the EWC 2025.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Maula</p>
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

export default E3