// components/NewsList.tsx
import React from "react";
import backend_url from "@/config";

type NewsItem = {
  id: number;
  attributes: {
    Title: string;
    Content: any[];
    Date_Published: string;
    Author: string;
    Image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
};

export default function NewsList({ news }: { news: NewsItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => {
        const { Title, Date_Published, Author, Content, Image } = item.attributes;
        const imageUrl = Image?.data?.[0]?.attributes?.url;

        return (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            {imageUrl && (
              <img
                src={`${backend_url}${imageUrl}`}
                alt={Title}
                className="w-full h-48 object-cover rounded mb-3"
              />
            )}
            <h2 className="text-lg font-semibold">{Title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {Date_Published} • {Author}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {Content?.[0]?.children?.[0]?.text?.slice(0, 200)}...
            </p>
          </div>
        );
      })}
    </div>
  );
}
