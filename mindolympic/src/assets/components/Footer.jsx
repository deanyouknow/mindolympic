import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeProvider';

const Footer = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <footer className="bg-gray-100 dark:bg-[#1F1F1F] text-black dark:text-white py-3 poppins-regular transition-colors duration-300">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-row space-x-6 mt-4 md:mt-0">
                    <Link className='poppins-regular text-black dark:text-white hover:text-gray-300' to="/contact">Contact</Link>
                    <Link className='poppins-regular text-black dark:text-white hover:text-gray-300' to="/about">About</Link>
                </div>
                <Link className="josefin-sans text-black dark:text-white text-lg font-bold" to="/">MindOlympic</Link>
                <button
                    onClick={toggleDarkMode}
                    className={`poppins-regular flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-full shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition`}
                    aria-label="Toggle dark mode"
                >
                    <span className="inline-block w-5 h-5">
                        {darkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                                <path stroke="currentColor" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
                            </svg>
                        )}
                    </span>
                    <span>
                        {darkMode ? 'Light' : 'Dark'} Mode
                    </span>
                </button>
            </div>

            <div className="poppins-regular text-center mt-4 text-sm">
                &copy; 2025 MindOlympic. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;