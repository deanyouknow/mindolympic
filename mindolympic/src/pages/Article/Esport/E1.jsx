import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'

const E1 = () => {
  // Side cards data from Highlight.jsx
  const sideCards = [
     {
      title:
        "Highlight 1",
      img: "https://www.sotrender.com/blog/wp-content/uploads/2017/06/a3c3b4c9c9.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "/esport/E2",
    },
    {
      title: "Highlight 2",
      img: "https://www.sotrender.com/blog/wp-content/uploads/2017/06/a3c3b4c9c9.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "/esport/E3",
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
              <h1 className="josefin-sans text-4xl font-bold mb-4">PSSI dan Konami resmi selenggarakan eFootball Indonesia Cup 2025</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Jakarta (ANTARA) - PSSI bekerja sama dengan pengembang dan penerbit gim asal Jepang, Konami resmi menyelenggarakan kompetisi esport bertajuk eFootball Indonesia Cup 2025.
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.antaranews.com/cache/1200x800/2025/04/08/1000009306.jpg.webp"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Peluncuran turnamen ini adalah salah satu bagian dari kerjasama antara PSSI dan Konami untuk melisensikan Tim Nasional Indonesia di fim sepak bola, eFootball.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                "Turnamen ini akan terbuka untuk semua level pemain dari berbagai macam kalangan, mulai dari kategori mobile dan konsol bisa bermain dalam turnamen ini," kata Junichi Taya, General Producer dari Konami dalam konferensi pers di Jakarta pada Selasa.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Sementara itu, Direktur Garuda Sepakbola Indonesia (GSI) Marsal Masita sebagai perwakilan PSSI menyebut kompetisi ini bisa menjaring talenta-talenta baru di dunia esport untuk menorehkan prestasi di kancah internasional.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Indonesia berhasil meraih gelar juara dunia di Piala Dunia eFootball 2024 untuk kategori konsol.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Timnas Indonesia yang diwakili oleh Elga Cahya Putra, Rizky Faidan, dan Akbar Paudie berhasil menang melawan Brasil di final.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Ketiga atlet gim elektronik sepak bola Indonesia tersebut berhasil meneruskan prestasi apik mereka setelah menjuarai AFC eAsian Cup 2024 di Qatar pada Februari 2024.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Gelar juara dunia ini adalah yang kedua bagi Indonesia secara beruntun setelah pada September 2024 merebut trofi FIFAe World Cup 2024 Football Manager.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Dean</p>
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

export default E1