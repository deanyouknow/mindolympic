import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-100 p-3 poppins-regular">
            <div className="container mx-auto flex justify-center items-center">
            <div>
                <Link className="josefin-sans text-black text-lg font-bold" to="/">MindOlympic</Link>
            </div>
            </div>
            <div className="p-1 container mx-auto flex justify-between items-center">
            <ul className="flex space-x-3">
                <li><Link className='poppins-regulartext-black hover:text-gray-300' to="/esport" >Esport</Link></li>
                <li><Link className='poppins-regular text-black hover:text-gray-300' to="/catur" >Catur</Link></li>
                <li><Link className='text-black hover:text-gray-300' to="/bridge" >Bridge</Link></li>
            </ul>
            <div>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                     </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari apa?" required />
                    <a href="search" type='submit' className='button text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-1'>Cari</a>
                 </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar