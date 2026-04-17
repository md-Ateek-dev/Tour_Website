import React from 'react';

const TravelPackage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Grand Wonders Of Europe</h1>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl text-gray-600">10 days</span>
            <span className="text-xl">•</span>
            <div className="flex text-yellow-500">
              <span className="text-2xl">★★★★★</span>
              <span className="text-2xl text-gray-700 ml-2">5.38 reviews</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-gray-600 text-xl">From</span>
            <span className="text-blue-800 text-4xl font-bold">₹22980</span>
          </div>
        </div>
      </div>

      {/* Tags and Action Buttons */}
      <div className="flex flex-wrap justify-between mb-6">
        <div className="flex gap-3">
          <span className="px-6 py-2 border-2 border-blue-800 text-blue-800 rounded-full font-medium">Cruises</span>
          <span className="px-6 py-2 border-2 border-blue-800 text-blue-800 rounded-full font-medium">Wildlife</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border-2 border-blue-400 text-blue-800 rounded-md flex items-center gap-2">
            Add to my wishlist 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="px-4 py-2 bg-blue-800 text-white rounded-md">View dates and book</button>
        </div>
      </div>

      {/* Main Image and Gallery - Adjusted Layout */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        {/* Main large image - takes about 70% width on desktop */}
        <div className="w-full md:w-8/12 h-80 md:h-96 rounded-lg overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg?ga=GA1.1.1061593853.1725865221&semt=ais_hybrid&w=740" 
            alt="Golden Gate Bridge" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Four smaller images on right - takes about 30% width on desktop */}
        <div className="w-full md:w-4/12">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="h-36 md:h-44 rounded-lg overflow-hidden">
              <img src="https://img.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg?ga=GA1.1.1061593853.1725865221&semt=ais_hybrid&w=740" alt="Golden Gate Bridge" className="w-full h-full object-cover" />
            </div>
            <div className="h-36 md:h-44 rounded-lg overflow-hidden">
              <img src="https://img.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg?ga=GA1.1.1061593853.1725865221&semt=ais_hybrid&w=740" alt="Golden Gate Bridge" className="w-full h-full object-cover" />
            </div>
            <div className="h-36 md:h-44 rounded-lg overflow-hidden">
              <img src="https://img.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg?ga=GA1.1.1061593853.1725865221&semt=ais_hybrid&w=740" alt="Golden Gate Bridge" className="w-full h-full object-cover" />
            </div>
            <div className="h-36 md:h-44 rounded-lg overflow-hidden">
              <img src="https://img.freepik.com/free-photo/beautiful-aerial-shot-florence-italy-architecture-evening_181624-2203.jpg?ga=GA1.1.1061593853.1725865221&semt=ais_hybrid&w=740" alt="Golden Gate Bridge" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-4 text-gray-600 border-b border-gray-300 pb-2">
        <button className="hover:text-blue-800 font-medium">Overview</button>
        <button className="hover:text-blue-800 font-medium">Why you'll love this trip</button>
        <button className="hover:text-blue-800 font-medium">Boats</button>
        <button className="hover:text-blue-800 font-medium">Itinerary</button>
        <button className="hover:text-blue-800 font-medium">Inclusions</button>
        <button className="hover:text-blue-800 font-medium">Is this trip right for you?</button>
        <button className="hover:text-blue-800 font-medium">Dates and availability</button>
        <button className="hover:text-blue-800 font-medium">Important notes</button>
        <button className="hover:text-blue-800 font-medium">Essential Trip Information</button>
        <button className="hover:text-blue-800 font-medium">Reviews</button>
      </div>
    </div>
  );
};

export default TravelPackage;