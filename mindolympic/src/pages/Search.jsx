import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import DataEsport from '../data/DataEsport'
import DataCatur from '../data/DataCatur'
import DataBridge from '../data/DataBridge'

const Search = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const allData = [
        ...DataEsport.map(item => ({ ...item, category: 'Esport' })),
        ...DataCatur.map(item => ({ ...item, category: 'Catur' })),
        ...DataBridge.map(item => ({ ...item, category: 'Bridge' }))
      ];

      const query = decodeURIComponent(id).toLowerCase();
      const results = allData.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.summary.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query)
      );

      setSearchResults(results);
      setIsLoading(false);
    }
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="josefin-sans text-2xl font-bold mb-6">
          Hasil Pencarian dari: "{decodeURIComponent(id)}"
        </h1>

        {isLoading ? (
          <div className="poppins-regular flex justify-center items-center h-32">
            <p>Memuat Pencarian...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((article) => (
              <Link
                key={`${article.category}-${article.id}`}
                to={article.url}
                className="relative h-64 rounded-lg overflow-hidden block group"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white max-w-xs">
                  <p className="text-xs opacity-75 mb-1">{article.category}</p>
                  <h2 className="text-lg font-semibold leading-snug">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm opacity-75">{article.date} | {article.author}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg text-center">
            <p className="poppins-regular text-lg">
              Tidak ada hasil pencarian dari "{decodeURIComponent(id)}"
            </p>
            <p className="poppins-regular mt-2 text-gray-600">
              Coba keyword lain
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Search
