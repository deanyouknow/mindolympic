import React from 'react';
import { Link } from 'react-router-dom';
import DataCatur from '../../../data/DataCatur';

const SideCardsE = () => {
  return (
    <div className="lg:w-1/3">
      <h2 className="josefin-sans text-2xl font-bold mb-4 border-b-2 border-black pb-1">Berita Terkait</h2>
      <div className="flex flex-col space-y-4 mt-4">
        {DataCatur.map((card, idx) => (
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
  );
};

export default SideCardsE;