import React from 'react'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
const E1 = () => {
  return (
    <>
    <Navbar />
    <div>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
            <div className="bg-gray-75 shadow-md rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Esport</h2>
            <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <img
                src="https://www.openaccessgovernment.org/wp-content/uploads/2024/09/hand-box-dummy-1068x801.jpg"
                alt="Esport"
                className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-600">Author: Dadang</p>
            <p className="text-gray-600">Date: May 12, 2025</p>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default E1