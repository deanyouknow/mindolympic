import React from "react";
import { Link } from "react-router-dom";

const BeritaC = () => {

  const articles = [
    {
      id: 1,
      title: "Berita 1",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://media.kasperskydaily.com/wp-content/uploads/sites/37/2023/08/15105553/playing-chess-safely-featured.jpg",
      date: "May 12, 2025",
      author: "dadang",
      url: "C1",
    },
    {
      id: 2,
      title: "Berita 2",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://media.kasperskydaily.com/wp-content/uploads/sites/37/2023/08/15105553/playing-chess-safely-featured.jpg",
      date: "May 12, 2025",
      author: "nasi",
      url: "C2",
    },
    {
      id: 3,
      title: "Berita 3",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://media.kasperskydaily.com/wp-content/uploads/sites/37/2023/08/15105553/playing-chess-safely-featured.jpg",
      date: "May 10, 2025",
      author: "padang",
      url: "C3",
    },
    {
      id: 4,
      title: "Berita 4",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://media.kasperskydaily.com/wp-content/uploads/sites/37/2023/08/15105553/playing-chess-safely-featured.jpg",
      date: "May 10, 2025",
      author: "indomie",
      url: "C4",
    },
    {
      id: 6,
      title: "Berita 6",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://media.kasperskydaily.com/wp-content/uploads/sites/37/2023/08/15105553/playing-chess-safely-featured.jpg",
      date: "May 10, 2025",
      author: "abcsh",
      url: "C6",
    },
  ];

  return (
    <>
    
    
    <div className="p-7 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6">
        Artikel Terbaru
      </h2>

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map(({ id, title, summary, img, date, author, url }) => (
          <Link
            key={id}
            to={url}
            className="flex items-start space-x-4 pb-4 border-b hover:bg-gray-50 transition"
          >
            {/* Thumbnail */}
            <img
              src={img}
              alt={title}
              className="w-32 h-20 object-cover rounded"
            />

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold leading-snug hover:text-purple-600 transition">
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {summary}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                {date} | {author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    </>
  );
};

export default BeritaC;
