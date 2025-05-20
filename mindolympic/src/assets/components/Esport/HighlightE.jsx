import React from "react";
import { Link } from "react-router-dom";

const HighlightE = () => {
  const main = {
    title: "GTA VI: Detail karakter, lokasi, dan alur cerita",
    subtitle:
      "Petualangan heboh baru menanti…",
    img: "https://cdn.oneesports.id/cdn-data/sites/2/2025/05/GTAVI_Jason_Duval_03-1024x576.jpg",
    date: "May 12, 2025",
    author: "dean",
    url: "E4",
  };

  const sideCards = [
    {
      title:
        "Di luar nalar, prize pool EWC 2025 lebih dari Rp1,1 triliun!",
      img: "https://cdn.oneesports.id/cdn-data/sites/2/2025/04/EWC2025_Prizepool.jpg",
      date: "May 12, 2025",
      author: "maula",
      url: "E6",
    },
    {
      title: "Tanggal rilis Dune Awakening, adaptasi game dari film dengan rating IMDB nyaris sempurna",
      img: "https://cdn.oneesports.id/cdn-data/sites/2/2024/03/Games_DuneAwakening_OfficialImage_1-1024x576-1.jpg",
      date: "May 12, 2025",
      author: "thifaal",
      url: "E5",
    },
    {
      title:
        "Tidak main-main, investasi esports Honor of Kings 2025 sebesar US$15 juta!",
      img: "https://cdn.oneesports.id/cdn-data/sites/2/2025/03/HonorOfKings_InvitationalS3_NongshimRedforce_PunchPose-1024x576-1.jpg",
      date: "May 12, 2025",
      author: "thifaal",
      url: "E2",
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

export default HighlightE;
