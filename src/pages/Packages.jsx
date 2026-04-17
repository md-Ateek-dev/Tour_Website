import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { Search } from "lucide-react";
import img1 from "../assets/images/rajasthan.jpg";
import img2 from "../assets/images/varanasi.jpg";
import img3 from "../assets/images/Lucknow.avif";
import img4 from "../assets/images/rajasthan2.jpg";

const Packages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState(10000);

  // Sample package data
  const packageData = [
    {
      id: 1,
      title: "Rajasthan Historical Places Tour Package",
      image: img1,
      price: 1999,
      duration: "7D4N",
      rating: 4.4,
      ratingCount: 156
    },
    {
      id: 2,
      title: "Golden Triangle with Varanasi Tour Package",
      image: img2,
      price: 2999,
      duration: "7D4N",
      rating: 4.4,
      ratingCount: 178
    },
    {
      id: 3,
      title: "Traditional Lucknow Travel Tour Package",
      image: img3,
      price: 4999,
      duration: "7D4N",
      rating: 4.4,
      ratingCount: 142
    },
    {
      id: 4,
      title: "Experience Religious Pilgrimage Tour Package",
      image: img4,
      price: 3999,
      duration: "7D4N",
      rating: 4.4,
      ratingCount: 189
    }
  ];

  // Duration options
  const durations = [
    { id: 1, name: "7 Day 4 Night", count: 20 },
    { id: 2, name: "2 Day 1 Night", count: 24 },
    { id: 3, name: "5 Day 3 Night", count: 25 }
  ];

  // Destination options
  const destinations = [
    { id: 1, name: "Mumbai", count: 20 },
    { id: 2, name: "Delhi", count: 8 },
    { id: 3, name: "Bengaluru", count: 28 },
    { id: 4, name: "Jaipur", count: 40 },
    { id: 5, name: "Lucknow", count: 30 },
    { id: 6, name: "Bhopal", count: 43 },
    { id: 7, name: "Visakhapatnam", count: 65 }
  ];

  // Generate star rating
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-3 h-3 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Package card component with flip effect
  const PackageCard = ({ pack }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <div
        className="rounded-lg  overflow-hidden shadow-md max-w-xs cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1000px" }}
      >
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative w-full h-96 transition-transform duration-500 ${isFlipped ? "rotateY(180deg)" : ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front side of the card */}
          <div
            className="absolute backface-hidden w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative">
              <img
                src={pack.image || `/api/placeholder/400/300`}
                alt={pack.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-100 bg-opacity-50"></div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 text-sm mb-1">{pack.title}</h3>
              <div className="flex items-center mb-3">
                {renderStars(pack.rating)}
                <span className="text-gray-500 text-xs ml-1">({pack.rating} Rating)</span>
              </div>
              <div className="flex items-center mb-3">
                <span className="text-gray-800 text-sm">₹</span>
                <span className="text-gray-800 text-sm font-semibold">{pack.price}</span>
                <span className="text-gray-500 text-xs ml-1">/Person</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-500 text-sm">{pack.duration}</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Back side of the card with the provided background */}
          <div
            className="absolute w-full h-full rotateY(180deg) bg-white flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...')`, // Replace with the base64 of the uploaded image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-center text-gray-600 p-4">
              Flip back to see package details!
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <Breadcrumb />

      <div
        className="pt-8 pb-12 px-4 md:px-8 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/api/placeholder/1920/1080')`,
          backgroundColor: "rgba(191, 219, 254, 0.95)",
        }}
      >
        <div className="absolute inset-0 bg-blue-100 bg-opacity-90"></div>
        <div className="absolute top-10 left-6 z-10">
          <div
            className="h-12 w-16 rounded-md transform rotate-6 bg-cover bg-center"
            style={{ backgroundImage: `url('/api/placeholder/64/48')` }}
          ></div>
        </div>
        <div className="absolute top-4 right-12 z-10">
          <div
            className="h-12 w-12 rounded-md transform -rotate-6 bg-cover bg-center"
            style={{ backgroundImage: `url('/api/placeholder/48/48')` }}
          ></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-dashed border-blue-200 rounded-full opacity-60 z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
              Choose your destination
            </h1>
            <p className="text-blue-700">Travel and explore your dream destination with us!</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4">
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Packages"
                    className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 text-blue-700" size={20} />
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  Filter By Price
                </h3>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Price</span>
                    <span className="text-sm">₹0-{priceRange}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Duration</h3>
                <div className="border-t border-gray-200 pt-2">
                  {durations.map((duration) => (
                    <div key={duration.id} className="flex items-center justify-between py-1">
                      <div className="flex items-center">
                        <input type="checkbox" id={`duration-${duration.id}`} className="mr-2" />
                        <label htmlFor={`duration-${duration.id}`} className="text-sm">
                          {duration.name}
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">({duration.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">All Destinations</h3>
                <div className="border-t border-gray-200 pt-2">
                  {destinations.map((destination) => (
                    <div key={destination.id} className="flex items-center justify-between py-1">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`destination-${destination.id}`}
                          className="mr-2"
                        />
                        <label htmlFor={`destination-${destination.id}`} className="text-sm">
                          {destination.name}
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">({destination.count})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {packageData.map((pack) => (
                  <PackageCard key={pack.id} pack={pack} />
                ))}
                {packageData.map((pack) => (
                  <PackageCard key={`clone-${pack.id}`} pack={pack} />
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <nav className="inline-flex rounded-md shadow-sm">
                  {[1, 2, 3, 4].map((page) => (
                    <button
                      key={page}
                      className={`px-3 py-1 ${
                        currentPage === page ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                      } text-sm border border-gray-300 hover:bg-blue-50`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-3 py-1 bg-white text-blue-500 text-sm border border-gray-300 hover:bg-blue-50">
                    Next
                  </button>
                  <button className="px-3 py-1 bg-white text-blue-500 text-sm border border-gray-300 hover:bg-blue-50">
                    »
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-12 z-10">
          <div
            className="h-16 w-16 transform -rotate-12 bg-cover bg-center"
            style={{ backgroundImage: `url('/api/placeholder/64/64')` }}
          ></div>
        </div>
        <div className="absolute bottom-4 right-16 z-10">
          <div
            className="h-20 w-16 transform rotate-12 bg-cover bg-center"
            style={{ backgroundImage: `url('/api/placeholder/64/80')` }}
          ></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Packages;