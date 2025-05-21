import React from "react";
import { Link } from "react-router-dom";
import DataEsport from "../../../data/DataEsport";

const HighlightE = () => {
  const main = {
    title: DataEsport[3].title,
    summary:
      DataEsport[3].summary,
    img: DataEsport[3].img,
    date: DataEsport[3].date,
    author: DataEsport[3].author,
    url: DataEsport[3].url,
  };

  const sideCards = [
    {
      title:
        DataEsport[5].title,
      img: DataEsport[5].img,
      date: DataEsport[5].date,
      author: DataEsport[5].author,
      url: DataEsport[5].url,
    },
    {
      title: DataEsport[4].title,
      img: DataEsport[4].img,
      date: DataEsport[4].date,
      author: DataEsport[4].author,
      url: DataEsport[4].url,
    },
    {
      title:
        DataEsport[1].title,
      img: DataEsport[1].img,
      date: DataEsport[1].date,
      author: DataEsport[1].author,
      url: DataEsport[1].url,
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
            <p className="mt-2 text-sm">{main.summary}</p>
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
