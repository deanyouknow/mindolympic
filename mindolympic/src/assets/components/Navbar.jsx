import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-100 p-3 poppins-regular">
            <div className="container mx-auto flex justify-center items-center">
            <div>
                <h1 class="text-2xl text-black font-bold" className="text-black text-lg font-bold">MindOlympic</h1>
            </div>
            </div>
            <div className="p-1 container mx-auto flex justify-between items-center">
            <ul className="flex space-x-3">
                <li><a href="#" className="text-black hover:text-gray-300">Esport</a></li>
                <li><a href="#" className="text-black hover:text-gray-300">Catur</a></li>
                <li><a href="#" className="text-black hover:text-gray-300">Bridge</a></li>
            </ul>
            <ul className="flex space-x-2">
                    <li><a href="#" className="text-black hover:text-gray-300">Contact</a></li>
                    <li><a href="#" className="text-black hover:text-gray-300">About</a></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar