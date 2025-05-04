import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-3 poppins-regular">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-lg font-bold">
                    MindOlympic
                </div>

                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-300">
                        Contact
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        About
                    </a>
                </div>
            </div>

            <div className="text-center mt-4 text-sm">
                &copy; 2025 MindOlympic. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;