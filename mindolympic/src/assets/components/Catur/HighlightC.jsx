import React from "react";
import { Link } from "react-router-dom";
import DataCatur from "../../../data/DataCatur";

const HighlightC = () => {
  const main = {
    title: DataCatur[3].title,
    summary:
      DataCatur[3].summary,
    img: DataCatur[3].img,
    date: DataCatur[3].date,
    author: DataCatur[3].author,
    url: DataCatur[3].url,
  };

  const sideCards = [
    {
      title:
        DataCatur[5].title,
      img: DataCatur[5].img,
      date: DataCatur[5].date,
      author: DataCatur[5].author,
      url: DataCatur[5].url,
    },
    {
      title: DataCatur[1].title,
      img: DataCatur[1].img,
      date: DataCatur[1].date,
      author: DataCatur[1].author,
      url: DataCatur[1].url,
    },
    {
      title:
        DataCatur[4].title,
      img: DataCatur[4].img,
      date: DataCatur[4].date,
      author: DataCatur[4].author,
      url: DataCatur[4].url,
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

export default HighlightC;
