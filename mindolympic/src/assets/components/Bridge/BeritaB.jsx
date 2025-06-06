import React from "react";
import { Link } from "react-router-dom";
import DataBridge from "../../../data/DataBridge";

const BeritaBridge = () => {
  return (
    <>
    <div className="p-7 max-w-7xl mx-auto">
      <h2 className="text-2xl josefin-sans inline-block border-b-2 border-black pb-1 mb-6 text-black dark:text-white dark:border-white">
        Artikel Terbaru
      </h2>

      <div className="space-y-4">
        {DataBridge.map(({ id, title, summary, img, date, author, url }) => (
          <Link
            key={id}
            to={url}
            className="flex items-start space-x-4 pb-4 border-b border-black hover:bg-gray-50 transition dark:border-w dark:hover:bg-gray-900 dark:border-white"
          >
            <img
              src={img}
              alt={title}
              className="w-32 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="text-lg font-semibold leading-snug hover:text-purple-600 transition text-black dark:text-white">
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

export default BeritaBridge;