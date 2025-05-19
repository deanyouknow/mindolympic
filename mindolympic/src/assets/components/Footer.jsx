import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-3 poppins-regular">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <Link className=" josefin-sans text-black text-lg font-bold" to="/">MindOlympic</Link>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                    <Link className='poppins-regular text-black hover:text-gray-300' to="/contact">Contact</Link>
                    <Link className='poppins-regular text-black hover:text-gray-300' to="/about">About</Link>
                </div>
            </div>

            <div className="poppins-regular text-center mt-4 text-sm">
                &copy; 2025 MindOlympic. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;