import React from "react";
import { Link } from "react-router-dom";

const HighlightC = () => {
  const main = {
    title: "Remaja 16 Tahun Asal Sleman Lolos Piala Dunia Catur Sekaligus Raih Gelar Woman International Master!",
    subtitle:
      "Lorem Ipsum",
    img: "https://images.chesscomfiles.com/uploads/v1/news/1652318.5fba5617.668x375o.54778ff67b4c.png",
    date: "May 12, 2025",
    author: "thifaal",
    url: "C4",
  };

  const sideCards = [
    {
      title:
        "Zacky Dhia Ulhaq segel juara JAPFA FIDE Rated 2025",
      img: "https://cdn.antaranews.com/cache/1200x800/2025/05/15/IMG-20250514-WA0055.jpg.webp",
      date: "May 2, 2025",
      author: "dean",
      url: "C6",
    },
    {
      title: "Catur Indonesia Target Empat Emas di SEA Games 2025",
      img: "https://akcdn.detik.net.id/community/media/visual/2021/03/17/ilustrasi-catur-1.jpeg?w=700&q=90",
      date: "May 2, 2025",
      author: "maula",
      url: "C2",
    },
    {
      title:
        "Yosep Taher segel gelar juara kategori blitz JAPFA FIDE Rated",
      img: "https://cdn.antaranews.com/cache/1200x800/2025/05/16/IMG-20250516-WA0001.jpg.webp",
      date: "May 2, 2025",
      author: "maula",
      url: "C5",
    },
  ];

  return (
    <div className="p-7 max-w-7xl mx-auto">
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link
          to={main.url}
          className="relative lg:col-span-2 h-96 rounded-lg overflow-hidden block group"
          >
        <div className="relative lg:col-span-2 h-96 rounded-lg overflow-hidden">
          <img
            src={main.img}
            alt=""
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white max-w-xl">
            <h3 className="text-2xl font-bold leading-tight">
              {main.title}
            </h3>
            <p className="mt-2 text-sm">{main.subtitle}</p>
            <p className="mt-3 text-xs opacity-70">
              {main.date} | {main.author}
            </p>
          </div>
        </div>
        </Link>

        
         <div className="flex flex-col space-y-4">
          {sideCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.url}
              className="relative h-32 rounded-lg overflow-hidden block group"
            >
              <img
                src={card.img}
                alt=""
                className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-2 left-3 text-white">
                <h4 className="text-sm font-semibold leading-snug">
                  {card.title}
                </h4>
                <p className="text-[10px] opacity-75 mt-1">
                  {card.date} | {card.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightC;
