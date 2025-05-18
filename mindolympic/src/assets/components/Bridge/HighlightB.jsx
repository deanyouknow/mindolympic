import React from "react";
import { Link } from "react-router-dom";

const HighlightB = () => {
  const main = {
    title: "Bulan Mei 2025 Bulannya Asia Pacific Bridge Federation (APBF)",
    subtitle:
      "Bulan Mei 2025 akan menjadi bulan tersibuk dari Asia Pacific Bridge Federation (APBF).",
    img: "https://assets.kompasiana.com/items/album/2025/04/22/apbf-youth-6806f35134777c490a7eda42.jpg",
    date: "May 2, 2025",
    author: "maula",
    url: "B1",
  };

  const sideCards = [
    {
      title:
        "Bridge Mulai Digemari Pemuda Indonesia",
      img: "https://cdn.rri.co.id/berita/Manado/o/1746969753153-IMG_20250511_211406/3fg0dv86i9fmnl3.jpeg",
      date: "May 2, 2025",
      author: "thifaal",
      url: "B6",
    },
    {
      title: "Bridge Porprov Jabar 2025: Enam Nomor Diusulkan",
      img: "https://cdn.rri.co.id/berita/Bogor/o/1740013623918-DSC04490.jpg/sufhjbotejafj2v.webp",
      date: "May 2, 2025",
      author: "dean",
      url: "B2",
    },
    {
      title:
        "Mengenal Cabang Olahraga Bridge di PON Aceh-Sumut",
      img: "https://cdn.rri.co.id/berita/Takengon/o/1720175519271-SuperMixedTeamSemifinalINAVSCHN_DSC_0111/qxqtt4dsh0wcfk3.jpeg",
      date: "May 2, 2025",
      author: "dean",
      url: "B5",
    },
  ];

  return (
    <div className="p-7 max-w-7xl mx-auto">
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
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

        {/* Side Cards */}
        
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

export default HighlightB;
