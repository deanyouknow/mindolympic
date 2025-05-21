import React from 'react';
import { Link } from 'react-router-dom';
import DataEsport from '../../data/DataEsport';
import DataCatur from '../../data/DataCatur';
import DataBridge from '../../data/DataBridge';

const SideCard = ({ title, img, date, url, author }) => (
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
      <p className="text-[8px] opacity-50 mt-0.5">{date} | {author}</p>
    </div>
  </Link>
);

const SideCards = () => {
  const sideCards = [
    {
      title: DataEsport[0].title,
      img: DataEsport[0].img,
      date: DataEsport[0].date,
      url: DataEsport[0].url,
      author: DataEsport[0].author,
    },
    {
      title: DataCatur[0].title,
      img: DataCatur[0].img,
      date: DataCatur[0].date,
      url: DataCatur[0].url,
      author: DataCatur[0].author,
    },
    {
      title: DataBridge[1].title,
      img: DataBridge[1].img,
      date: DataBridge[1].date,
      url: DataBridge[1].url,
      author: DataBridge[1].author,
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
