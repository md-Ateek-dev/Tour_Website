import React from 'react';
// import BlogsCards from '../src/components/BlogCards/BlogsCard';
import BlogCard from '../BlogCards/BlogsCard'
import img1 from '/src/assets/images/saudi_Arabia.avif';
import img2 from '/src/assets/images/UAE.avif';
import img3 from '/src/assets/images/UK.avif';
const Blog = () => {
  const blogPosts = [
    {
        image: img1,
        title: 'Explore the Himalayas',
      description: 'Discover the beauty of snow-capped peaks, monasteries, and serene landscapes in the Himalayas.',
      date: 'May 6, 2025'
    },
    {
      image: img2,
      title: 'Top Beaches in Bali',
      description: 'Your ultimate guide to the best beaches, nightlife, and food in Bali, Indonesia.',
      date: 'April 28, 2025'
    },
    {
        image: img3,
        title: 'A Journey Through the Sahara',
      description: 'Experience the endless dunes, camel rides, and desert camps like never before.',
      date: 'April 20, 2025'
    },
    {
      image: img1,
      title: 'A Journey Through the Sahara',
      description: 'Experience the endless dunes, camel rides, and desert camps like never before.',
      date: 'April 20, 2025'
    },
    {
        image: img2,
        title: 'Top Beaches in Bali',
        description: 'Your ultimate guide to the best beaches, nightlife, and food in Bali, Indonesia.',
        date: 'April 28, 2025'
      },
      {
        image: img3,
        title: 'A Journey Through the Sahara',
        description: 'Experience the endless dunes, camel rides, and desert camps like never before.',
        date: 'April 20, 2025'
      },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Travel Blog</h1>
        <p className="text-center text-gray-600 mb-12">Explore stories, guides, and travel tips from around the world.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
