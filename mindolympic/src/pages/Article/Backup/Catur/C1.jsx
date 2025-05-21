import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../assets/components/Navbar'
import Footer from '../../../assets/components/Footer'
import SideCardsC from '../../../assets/components/Catur/SideCardsC'

const C1 = () => {

  return (
    <>
      <Navbar />
      {/* Artikel dan sisi rekomendasi */}
      <div className="w-full p-7 overflow-y-auto bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">


            {/* Arikel utama */}
            <div className="lg:w-2/3 bg-gray-75 shadow-md rounded-lg p-6">
              {/* Judul */}
              <h1 className="josefin-sans text-4xl font-bold mb-4">Tim Catur Bangkalan Berhasil Lolos ke Porprov Jatim 2025</h1>
              {/* Subjudul */}
              <h2 className="poppins-regular text-sm text-gray-700 mb-6">
                Atlet Catur Putra Bangkalan (pakaian putih) Saat Bertanding di Pra-Porprov Jatim 2025 di Kediri
              </h2>
              {/* Gambar */}
              <img
                src="https://cdn.rri.co.id/berita/Sumenep/o/1745813366936-atlet_catur_bangkalan_di_pra_porprovv_kediri/5ckfnfvs86tt0lv.webp"
                alt="Catur"
                className="w-full h-auto rounded-lg mb-6"
              />
              {/* Isi */}
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Kabar membanggakan datang dari dunia olahraga catur Kabupaten Bangkalan. Tim catur asal Kota Salak berhasil memastikan diri lolos ke Pekan Olahraga Provinsi (Porprov) Jawa Timur 2025, setelah tampil impresif dalam ajang Pra- Porprov.
              </p>
              <p className="poppins-regular text-base text-gray-700 mb-6">
                Bertanding di zona penyisihan yang berlangsung di Kota Kediri, tim catur Bangkalan menunjukkan performa konsisten sejak awal hingga akhir. Mereka berhasil mengungguli beberapa daerah unggulan dan menempati posisi yang mengamankan tiket ke ajang Porprov Juni mendatang di Malang Raya.
              </p>
              <p className='poppins-regular text-base text-gray-700 mb-6'>
                Ketua Persatuan Catur Seluruh Indonesia (Percasi) Kabupaten Bangkalan  Mohammad Zakir mengungkapkan rasa syukurnya atas pencapaian ini. Bahkan salah satu atlet putranya meraih point tertinggi. Sedangkan yang putri mendapat poin tertinggi ketiga.
              </p>
              {/* Author */}
              <div className="poppins-regular text-sm text-gray-600">
                <p>Author: Thifaal</p>
                <p>Date: May 12, 2025</p>
              </div>
            </div>
            <SideCardsC />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default C1