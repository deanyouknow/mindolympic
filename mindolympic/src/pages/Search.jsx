import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'
import DataEsport from '../data/DataEsport'
import DataCatur from '../data/DataCatur'
import DataBridge from '../data/DataBridge'

const Search = () => {
  const { id } = useParams(); // Get the search query from URL params
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Combine all data sources
      const allData = [
        ...DataEsport.map(item => ({ ...item, category: 'Esport' })),
        ...DataCatur.map(item => ({ ...item, category: 'Catur' })),
        ...DataBridge.map(item => ({ ...item, category: 'Bridge' }))
      ];

      // Filter results based on search query
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
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Search Results for: "{decodeURIComponent(id)}"</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <p>Loading results...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((article) => (
              <div key={`${article.category}-${article.id}`} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{article.category} | {article.date}</p>
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-700 mb-4">{article.summary}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {article.author}</span>
                    <Link 
                      to={article.url} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <p className="text-lg">No results found for "{decodeURIComponent(id)}"</p>
            <p className="mt-2 text-gray-600">Try different keywords or check your spelling</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Search