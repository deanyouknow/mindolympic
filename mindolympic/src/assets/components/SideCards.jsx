import React from 'react';
import { Link } from 'react-router-dom';

const SideCard = ({ title, img, date, about, url }) => (
  <Link
    to={url}
    className="relative w-640 h-50 rounded-lg overflow-hidden block group"
  >
    <img
      src={img}
      alt={title}
      className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute bottom-2 left-3 text-white">
      <h4 className="text-sm font-semibold leading-snug">{title}</h4>
      <p className="text-[8px] opacity-50 mt-0.5">{date}</p>
    </div>
  </Link>
);

const SideCards = () => {
  const sideCards = [
    {
      title: 'PSSI dan Konami resmi selenggarakan eFootball Indonesia Cup 2025',
      img: 'https://cdn.antaranews.com/cache/1200x800/2025/04/08/1000009306.jpg.webp',
      date: 'May 12, 2025',
      url: '/Esport/E1',
    },
    {
      title: 'Tim Catur Bangkalan Berhasil Lolos ke Porprov Jatim 2025',
      img: 'https://cdn.rri.co.id/berita/Sumenep/o/1745813366936-atlet_catur_bangkalan_di_pra_porprovv_kediri/5ckfnfvs86tt0lv.webp',
      date: 'May 12, 2025',
      about: 'Berita Catur Terbaru',
      url: '/Catur/C1',
    },
    {
      title: 'Bridge Porprov Jabar 2025: Enam Nomor Diusulkan',
      img: 'https://cdn.rri.co.id/berita/Bogor/o/1740013623918-DSC04490.jpg/sufhjbotejafj2v.webp',
      date: 'May 12, 2025',
      about: 'Berita Bridge Terbaru',
      url: '/Bridge/B1',
    },
  ];

  return (
    <div className="flex flex-row space-x-6 justify-center p-7 max-w-7xl mx-auto">
      {sideCards.map((card, idx) => (
        <SideCard key={idx} {...card} />
      ))}
    </div>
  );
};

export default SideCards;
