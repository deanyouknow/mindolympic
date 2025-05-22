import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
        <nav className="bg-gray-100 dark:bg-[#1F1F1F] text-black dark:text-white py-3 poppins-regular transition-colors duration-300">
            <div className="container mx-auto flex justify-center items-center">
            <div>
                <Link className="josefin-sans text-black text-lg font-bold dark:text-white" to="/">MindOlympic</Link>
            </div>
            </div>
            <div className="p-1 container mx-auto flex justify-between items-center">
            <ul className="flex space-x-3">
                <li><Link className='poppins-regular text-black hover:text-gray-300 dark:text-white' to="/esport" >Esport</Link></li>
                <li><Link className='poppins-regular text-black hover:text-gray-300 dark:text-white' to="/catur" >Catur</Link></li>
                <li><Link className='text-black hover:text-gray-300 dark:text-white' to="/bridge" >Bridge</Link></li>
            </ul>
            <div>
                <form onSubmit={handleSearch}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        </div>
                        <input 
                            type="search" 
                            id="default-search" 
                            className="block w-50 p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                            placeholder="Cari apa?" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            required 
                        />
                        <button 
                            type="submit" 
                            className='text-white hover:text-black absolute end-2.5 bottom-2.5 bg-black hover:bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-1'
                        >
                            Cari
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar