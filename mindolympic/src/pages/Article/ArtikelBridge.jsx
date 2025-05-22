import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../assets/components/Navbar'
import Footer from '../../assets/components/Footer'
import SideCardsB from '../../assets/components/Bridge/SideCardsB'
import DataBridge from '../../data/DataBridge'

const ArtikelBridge = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundArticle = DataBridge.find(item => item.id === parseInt(id))
    
    if (foundArticle) {
      setArticle(foundArticle)
    } else {
      navigate('/*')
    }
    
    setLoading(false)
  }, [id, navigate])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (!article) {
    return null
  }

  return (
    <>
      <Navbar />
      {/* Artikel dan sisi rekomendasi */}
      <div className="w-full p-7 overflow-y-auto bg-white dark:bg-[#030712] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Artikel utama */}
            <div className="lg:w-2/3 bg-gray-100 shadow-md rounded-lg p-6 dark:bg-[#1F1F1F]">
              {/* Judul */}
              <h1 className="josefin-sans text-4xl font-bold mb-4 text-dark dark:text-white">{article.title}</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6 dark:text-gray-500">
                {article.summary}
              </h2>
              {/* Gambar */}
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi Artikel */}
              {article.content.map((paragraph, index) => (
                <p key={index} className="poppins-regular text-base text-gray-700 mb-6 dark:text-gray-500">
                  {paragraph}
                </p>
              ))}
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600 dark:text-gray-500">
                <p>Author: {article.author}</p>
                <p>Date: {article.date}</p>
              </div>
            </div>

            {/* rekomendasi kanan - Jangan di ubah */}
            <SideCardsB />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ArtikelBridge