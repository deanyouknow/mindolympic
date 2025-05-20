import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="bg-gray-100 text-black flex items-center justify-center py-16">
        <div className="text-center px-6">
          <h1 className="josefin-sans text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="poppins-regular text-lg md:text-xl">
            Kami siap membantu. Kirimkan pertanyaan atau masukan Anda melalui formulir di bawah.
          </p>
        </div>
      </section>

      <section className="flex-grow bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="poppins-regular block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="poppins-regular block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="poppins-regular block text-sm font-medium text-gray-700">Pesan</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="josefin-sans px-6 py-2 bg-black text-white font-semibold rounded-full shadow hover:bg-white hover:text-black transition"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="josefin-sans text-xl font-semibold mb-2">Alamat</h3>
            <p className="poppins-regular text-gray-600 text-center">Jl. Contoh No.123, Jakarta, Indonesia</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="josefin-sans text-xl font-semibold mb-2">Telepon</h3>
            <p className="poppins-regular text-gray-600">+62 21 1234 5678</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact;
