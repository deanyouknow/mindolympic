import React from "react";

const Highlight = () => {
  const main = {
    title: "Highlight 1",
    subtitle:
      "Lorem Ipsum",
    img: "src/assets/bg/1.webp",
    date: "May 2, 2025",
    author: "nama anda",
  };

  const sideCards = [
    {
      title:
        "Esport",
      img: "src/assets/bg/1.webp",
      date: "May 2, 2025",
      author: "nama anda",
    },
    {
      title: "Catur",
      img: "src/assets/bg/1.webp",
      date: "May 2, 2025",
      author: "nama anda",
    },
    {
      title:
        "Bridge",
      img: "src/assets/bg/1.webp",
      date: "May 2, 2025",
      author: "nama anda",
    },
  ];

  return (
    <div className="p-7 max-w-7xl mx-auto">
      <h2 className="text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6">
        BERITA ESPORT, CATUR, BRIDGE TERBARU
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
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

        {/* Side Cards */}
        <div className="flex flex-col space-y-4">
          {sideCards.map((card, i) => (
            <div
              key={i}
              className="relative h-32 rounded-lg overflow-hidden"
            >
              <img
                src={card.img}
                alt=""
                className="object-cover w-full h-full"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
