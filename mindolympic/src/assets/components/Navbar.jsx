import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gray-100 dark:bg-[#1F1F1F] text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link className="josefin-sans text-black text-xl font-bold dark:text-white" to="/">
            MindOlympic
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center w-full">
          <div className="flex-1" />
          <div className="px-4">
            <form onSubmit={handleSearch}>
              <label htmlFor="default-search-desktop" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search-desktop"
                  className="block w-100 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-[#030712] dark:border-gray-700 dark:text-white transition-colors duration-300"
                  placeholder="Cari apa?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute end-2.5 bottom-1.25 bg-black text-white hover:bg-gray-800 hover:text-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  Cari
                </button>
              </div>
            </form>
          </div>
          
          <div className="flex justify-end flex-1 space-x-6">
            <Link className="poppins-regular text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" to="/esport">
              Esport
            </Link>
            <Link className="poppins-regular text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" to="/catur">
              Catur
            </Link>
            <Link className="poppins-regular text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300" to="/bridge">
              Bridge
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-[#1F1F1F] py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="mb-4">
              <label htmlFor="default-search-mobile" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search-mobile"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-[#030712] dark:border-gray-700 dark:text-white transition-colors duration-300"
                  placeholder="Cari apa?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute end-2.5 bottom-1 bg-black text-white hover:bg-gray-800 hover:text-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 transition-colors duration-300"
                >
                  Cari
                </button>
              </div>
            </form>

            <div className="flex flex-col space-y-3">
              <Link
                className="poppins-regular text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                to="/esport"
                onClick={() => setIsOpen(false)}
              >
                Esport
              </Link>
              <Link
                className="poppins-regular text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                to="/catur"
                onClick={() => setIsOpen(false)}
              >
                Catur
              </Link>
              <Link
                className="poppins-regular text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-300 py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                to="/bridge"
                onClick={() => setIsOpen(false)}
              >
                Bridge
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;