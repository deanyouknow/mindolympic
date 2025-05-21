import React from "react";
import { Link } from "react-router-dom";
import DataBridge from "../../../data/DataBridge";

const HighlightB = () => {
  const main = {
    title: DataBridge[0].title,
    summary:
      DataBridge[0].summary,
    img: DataBridge[0].img,
    date: DataBridge[0].date,
    author: DataBridge[0].author,
    url: DataBridge[0].url,
  };

  const sideCards = [
    {
      title:
        DataBridge[5].title,
      img: DataBridge[5].img,
      date: DataBridge[5].date,
      author: DataBridge[5].author,
      url: DataBridge[5].url,
    },
    {
      title: DataBridge[1].title,
      img: DataBridge[1].img,
      date: DataBridge[1].date,
      author: DataBridge[1].author,
      url: DataBridge[1].url,
    },
    {
      title:
        DataBridge[4].title,
      img: DataBridge[4].img,
      date: DataBridge[4].date,
      author: DataBridge[4].author,
      url: DataBridge[4].url,
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
            <p className="mt-2 text-sm">{main.summary}</p>
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
