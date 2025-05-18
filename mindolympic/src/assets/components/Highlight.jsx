import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Highlight = () => {
  // Multiple main highlights for the slideshow
  const mainHighlights = [
    {
      id: 1,
      title: "GTA VI: Detail karakter, lokasi, dan alur cerita",
      subtitle: "Petualangan heboh baru menanti…",
      img: "https://cdn.oneesports.id/cdn-data/sites/2/2025/05/GTAVI_Jason_Duval_03-1024x576.jpg",
      date: "May 12, 2025",
      author: "Dean",
      url: "/Esport/E4",
    },
    {
      id: 2,
      title: "Remaja 16 Tahun Asal Sleman Lolos Piala Dunia Catur Sekaligus Raih Gelar Woman International Master!",
      subtitle: "Lorem Ipsum",
      img: "https://images.chesscomfiles.com/uploads/v1/news/1652318.5fba5617.668x375o.54778ff67b4c.png",
      date: "May 12, 2025",
      author: "Thifaal",
      url: "/Catur/C4",
    },
    {
      id: 3,
      title: "Bulan Mei 2025 Bulannya Asia Pacific Bridge Federation (APBF)",
      subtitle: "Bulan Mei 2025 akan menjadi bulan tersibuk dari Asia Pacific Bridge Federation (APBF).",
      img: "https://assets.kompasiana.com/items/album/2025/04/22/apbf-youth-6806f35134777c490a7eda42.jpg",
      date: "May 12, 2025",
      author: "Maula",
      url: "/Bridge/B1",
    }
  ];

  const sideCards = [
    {
      title: "Esport",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/LGD_Gaming_at_the_2015_LPL_Summer_Finals.jpg",
      date: "May 12, 2025",
      about: "Berita Esport Terbaru",
      url: "Esport",
    },
    {
      title: "Catur",
      img: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_BA65213_9707769704500326_49933.jpg",
      date: "May 12, 2025",
      about: "Berita Catur Terbaru",
      url: "Catur",
    },
    {
      title: "Bridge",
      img: "https://static.republika.co.id/uploads/images/inpicture_slide/olahraga-bridge-ilustrasi-_140522170832-502.jpg",
      date: "May 12, 2025",
      about: "Berita Bridge Terbaru",
      url: "Bridge",
    },
  ];

  // State to track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainHighlights.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [mainHighlights.length]);

  // Manual navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mainHighlights.length) % mainHighlights.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainHighlights.length);
  };

  return (
    <div className="p-7 max-w-7xl mx-auto">
      <h1 className="text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6">
        BERITA ESPORT, CATUR, BRIDGE TERBARU
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Slideshow */}
        <div className="relative lg:col-span-2 h-96 rounded-lg overflow-hidden">
          {/* Slideshow controls */}
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition"
            onClick={goToPrevSlide}
          >
            &#10094;
          </button>
          
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition"
            onClick={goToNextSlide}
          >
            &#10095;
          </button>

          {/* Slides */}
          {mainHighlights.map((highlight, idx) => (
            <Link
              key={highlight.id}
              to={highlight.url}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={highlight.img}
                alt={highlight.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white max-w-xl">
                <h3 className="text-2xl font-bold leading-tight">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm">{highlight.subtitle}</p>
                <p className="mt-3 text-xs opacity-70">
                  {highlight.date} | {highlight.author}
                </p>
              </div>
            </Link>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-2 right-4 flex space-x-2">
            {mainHighlights.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>

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
                  {card.about}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlight;