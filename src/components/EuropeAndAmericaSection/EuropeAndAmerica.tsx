import React from 'react';
import imageDemo1 from '../../assets/destinations/img1.png';
import bgImage from '../../assets/europandamerica/bg.png'; 

const EuropeAndAmerica = () => {
  return (
    <>
      <div 
        className="relative  py-16 px-6 flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }} // Background Image
      >
        {/* Background Overlay for better visibility */}
        <div className="absolute inset-0 "></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Image - Europe */}
          <div className="relative w-64 h-72">
            <img
              src={imageDemo1} // Replace with actual Europe image
              alt="Europe"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform rotate-6"></div>
          </div>

          {/* Center Text */}
          <div className="text-center relative z-10">
            <h2 className="text-6xl font-bold text-orange-600">
              Europe <br/> <span className="text-orange-700">& <br/></span> America
            </h2>
            <p className="text-lg font-semibold text-gray-700 mt-2">
              Always the right choice! Proven & trusted by thousands!
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
                Europe Tour
              </button>
              <button className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-full shadow-md hover:bg-blue-900 transition">
                America Tour
              </button>
            </div>
          </div>

          {/* Right Image - America */}
          <div className="relative w-64 h-72">
            <img
              src={imageDemo1} // Replace with actual America image
              alt="America"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 border-2 border-blue-500 rounded-lg transform -rotate-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EuropeAndAmerica;