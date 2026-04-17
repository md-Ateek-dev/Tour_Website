import React from 'react';

const GalapagosTourPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-medium text-gray-700 mb-4">
            Hike, snorkel and cruise through the stunning Galapagos Islands
          </h1>
          
          <p className="text-gray-600 mb-6">
            Discover the rich marine life, abundant bird colonies and natural landscapes of the Galapagos Islands on this action-packed 10-day adventure cruise. Board your comfortable motor yacht and set off in search of adventure and wildlife with your on-hand naturalist guide. Hike over pahoehoe lava on Bahia Sullivan, snorkel off the coast of Isla Espanola and discover the archipelago's history on Isla San Cristobal. See pink flamingos, Galapagos sharks, fur seals, iguanas, varied birdlife and so much more, all alongside some vistas totally unique to this part of the world!
          </p>

          <div className="flex flex-col space-y-6 mb-6">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Start</h2>
              <p className="text-gray-600">Quito, Ecuador</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Meals</h2>
              <p className="text-gray-600">9 breakfasts, 7 lunches, 8 dinners</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Days</h2>
              <p className="text-gray-600">10</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                Theme 
                <span className="inline-block ml-1 w-5 h-5 rounded-full bg-gray-200 text-center text-xs text-gray-600">i</span>
              </h2>
              <p className="text-gray-600">Cruises, Wildlife</p>
            </div>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="md:w-1/2">
          <div className="bg-blue-100 rounded-lg overflow-hidden mb-6">
            <img 
              src="https://cruisetogalapagos.com/assets/main/galapagos-islands/galapagos-map/images/galapagos-map.jpg" 
              alt="Galapagos Islands Map" 
              className="w-full h-[250px]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Start</h2>
              <p className="text-gray-600">Quito, Ecuador</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Start</h2>
              <p className="text-gray-600">Ecuador</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Transport</h2>
              <p className="text-gray-600">Boat, Plane, Bus, Zodiac (Panga)</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Accommodation</h2>
              <p className="text-gray-600">
                <a href="#" className="text-gray-600 hover:text-blue-600 underline">
                  Hotel (2 nights), Overnight boat (7 nights)
                </a>
              </p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Group size</h2>
              <p className="text-gray-600">Min 1 - Max 16</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">Ages</h2>
              <p className="text-gray-600">Min 12</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                Style 
                <span className="inline-block ml-1 w-5 h-5 rounded-full bg-gray-200 text-center text-xs text-gray-600">i</span>
              </h2>
              <p className="text-gray-600">Comfort</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                Physical rating 
                <span className="inline-block ml-1 w-5 h-5 rounded-full bg-gray-200 text-center text-xs text-gray-600">i</span>
              </h2>
              <div className="flex space-x-1 mt-2">
                <div className="h-2 w-8 bg-gray-800"></div>
                <div className="h-2 w-8 bg-gray-800"></div>
                <div className="h-2 w-8 bg-gray-800"></div>
                <div className="h-2 w-8 bg-gray-300"></div>
                <div className="h-2 w-8 bg-gray-300"></div>
                <div className="h-2 w-8 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Banner */}
      <div className="border border-gray-300 rounded-lg p-4 mt-6 text-center">
        <p className="text-gray-600">
          We're in the process of figuring out how much CO2-e this trip generates. In the meantime, find out more about
          <a href="#" className="text-red-500 hover:text-red-700 ml-1">
            our climate commitments and carbon reduction target.
          </a>
        </p>
      </div>
    </div>
  );
};

export default GalapagosTourPage;