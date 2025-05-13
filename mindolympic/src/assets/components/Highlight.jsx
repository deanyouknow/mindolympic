import React from "react";
import { Link } from "react-router-dom";

const Highlight = () => {
  const main = {
    title: "Highlight 1",
    subtitle:
      "Lorem Ipsum",
    img: "https://cdn.sanity.io/images/zoz4y99f/production/63fe73d90694450859da70fe142d72e445a0a9cc-1600x900.jpg",
    date: "May 2, 2025",
    author: "nama anda",
    url: "",
  };

  const sideCards = [
    {
      title:
        "Esport",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/LGD_Gaming_at_the_2015_LPL_Summer_Finals.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "Esport",
    },
    {
      title: "Catur",
      img: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_BA65213_9707769704500326_49933.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "Catur",
    },
    {
      title:
        "Bridge",
      img: "https://static.republika.co.id/uploads/images/inpicture_slide/olahraga-bridge-ilustrasi-_140522170832-502.jpg",
      date: "May 2, 2025",
      author: "nama anda",
      url: "Bridge",
    },
  ];

  return (
    <div className="p-7 max-w-7xl mx-auto">
      <h2 className="text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6">
        BERITA ESPORT, CATUR, BRIDGE TERBARU
      </h2>

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

export default Highlight;
