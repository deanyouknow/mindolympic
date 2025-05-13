import React from "react";
import { Link } from "react-router-dom";

const HighlightB = () => {
  const main = {
    title: "Highlight 1",
    subtitle:
      "Lorem Ipsum",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bridge-Gro%C3%9Fschlemm.JPG",
    date: "May 2, 2025",
    author: "nama anda",
    url: "B1",
  };

  const sideCards = [
    {
      title:
        "Highlight 2",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bridge-Gro%C3%9Fschlemm.JPG",
      date: "May 2, 2025",
      author: "nama anda",
      url: "B2",
    },
    {
      title: "Highlight 3",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bridge-Gro%C3%9Fschlemm.JPG",
      date: "May 2, 2025",
      author: "nama anda",
      url: "B3",
    },
    {
      title:
        "Highlight 4",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bridge-Gro%C3%9Fschlemm.JPG",
      date: "May 2, 2025",
      author: "nama anda",
      url: "B4",
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
