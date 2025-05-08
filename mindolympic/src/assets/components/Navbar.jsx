import React from 'react'
import Esport from '../../pages/Berita/Esport'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-100 p-3 poppins-regular">
            <div className="container mx-auto flex justify-center items-center">
            <div>
                <Link class="text-2xl text-black font-bold" className="text-black text-lg font-bold" to="/">MindOlympic</Link>
            </div>
            </div>
            <div className="p-1 container mx-auto flex justify-between items-center">
            <ul className="flex space-x-3">
                <li><Link className='text-black hover:text-gray-300' to="/berita/esport" >Esport</Link></li>
                <li><Link className='text-black hover:text-gray-300' to="/berita/catur" >Catur</Link></li>
                <li><Link className='text-black hover:text-gray-300' to="/berita/bridge" >Bridge</Link></li>
            </ul>
            <ul className="flex space-x-2">
                    <li><Link className='text-black hover:text-gray-300' to="/about" >About</Link></li>
                    <li><Link className='text-black hover:text-gray-300' to="/contact" >Contact</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar