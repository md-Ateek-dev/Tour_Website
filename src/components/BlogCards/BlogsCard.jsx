
import React from 'react';

const BlogCard = ({ image, title, description, date }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-fit" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-gray-400 text-xs">{date}</p>
        <button className="mt-3 text-blue-600 hover:underline text-sm">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
