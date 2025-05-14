import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'

const E3 = () => {
  // Side cards data from Highlight.jsx
  const sideCards = [
     {
      title:
        "Highlight 1",
      img: "https://www.sotrender.com/blog/wp-content/uploads/2017/06/a3c3b4c9c9.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "/esport/E1",
    },
    {
      title: "Highlight 2",
      img: "https://www.sotrender.com/blog/wp-content/uploads/2017/06/a3c3b4c9c9.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "/esport/E2",
    },
    {
      title:
        "Highlight 3",
      img: "https://www.sotrender.com/blog/wp-content/uploads/2017/06/a3c3b4c9c9.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "/esport/E4",
    },
     {
      title:
        "Highlight 4",
      img: "https://www.sotrender.com/blog/wp-content/uploads/2017/06/a3c3b4c9c9.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "/esport/E5",
    },
     {
      title:
        "Highlight 5",
      img: "https://www.sotrender.com/blog/wp-content/uploads/2017/06/a3c3b4c9c9.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "/esport/E6",
    },
  ];

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
              <h1 className="josefin-sans text-4xl font-bold mb-4">Esport</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h2>
              {/* Gambar */}
              <img
                src="https://www.openaccessgovernment.org/wp-content/uploads/2024/09/hand-box-dummy-1068x801.jpg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Dadang</p>
                <p>Date: May 12, 2025</p>
              </div>
            </div>

            {/* rekomendasi kanan - Jangan di ubah */}
            <div className="lg:w-1/3">
              <h2 className="josefin-sans text-2xl font-bold mb-4 border-b-2 border-black pb-1">Berita Terkait</h2>
              <div className="flex flex-col space-y-4 mt-4">
                {sideCards.map((card, idx) => (
                  <Link
                    key={idx}
                    to={card.url}
                    className="relative h-32 rounded-lg overflow-hidden block group"
                  >
                    <img
                      src={card.img}
                      alt=""
                      className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-2 left-3 text-white">
                      <h4 className="text-sm font-semibold leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-[10px] opacity-75 mt-1">
                        {card.date} | {card.author}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default E3