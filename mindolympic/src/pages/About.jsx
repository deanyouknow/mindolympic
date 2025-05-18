import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-grow bg-gray-100 text-black flex items-center justify-center">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="josefin-sans text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="poppins-regular text-lg md:text-xl">
            Mind Olympic adalah platform berita olahraga inovatif yang
            berfokus pada catur, bridge, dan esport. Kami hadir untuk
            menyajikan informasi terkini, analisis mendalam, dan cerita
            inspiratif bagi para penggemar di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="josefin-sans text-2xl font-semibold mb-3">Misi Kami</h2>
            <p className="poppins-regular text-gray-700 leading-relaxed">
              Menyediakan berita yang akurat dan terpercaya, dilengkapi
              dengan analisis profesional untuk membantu komunitas
              olahraga membuat keputusan yang tepat dan terus berkembang.
            </p>
          </div>
          <div>
            <h2 className="josefin-sans text-2xl font-semibold mb-3">Visi Kami</h2>
            <p className="poppins-regular text-gray-700 leading-relaxed">
              Menjadi platform olahraga terdepan di Asia Tenggara yang
              dikenal atas inovasi, integritas, dan kontribusi positif
              dalam memajukan olahraga.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="josefin-sans text-3xl font-semibold text-center mb-8">
            Nilai Inti
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="josefin-sans text-xl font-medium mb-2">Integritas</h3>
              <p className="poppins-regular text-gray-600">
                Menjunjung tinggi keakuratan dan kejujuran dalam setiap
                berita yang disajikan.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="josefin-sans text-xl font-medium mb-2">Inovasi</h3>
              <p className="poppins-regular text-gray-600">
                Terus beradaptasi dengan tren terbaru untuk memberikan
                pengalaman membaca yang menarik.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="josefin-sans text-xl font-medium mb-2">Komunitas</h3>
              <p className="poppins-regular text-gray-600">
                Membangun hubungan erat dengan pembaca dan atlet melalui
                interaksi aktif.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About;
