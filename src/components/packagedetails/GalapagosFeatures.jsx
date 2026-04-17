import React from 'react';

const GalapagosFeatures = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Why you'll love this trip section */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row">
          {/* Left column - Title */}
          <div className="md:w-1/4 mb-20">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Why you'll<br />
              love this<br />
              trip
            </h2>
          </div>

          {/* Middle column - 3 features */}
          <div className="md:w-2/5 space-y-6 mt-4 md:mt-0">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-gray-500"></div>
              <p className="text-gray-700">
                Snorkel in the Devil's Crown for an underwater experience like no other – 
                this submerged crater is full of sea lions, turtles and rays and boasts some of the 
                best underwater views in the archipelago.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-gray-500"></div>
              <p className="text-gray-700">
                Become a bird-lover (if you're not already!) as you see the albatross 
                colonies of Isla Española and seek out the rare red-footed booby on Isla 
                Genovesa.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-gray-500"></div>
              <p className="text-gray-700">
                Plant your feet on 100-year-old pahoehoe lava as you walk across Bahia 
                Sullivan, maybe spotting a colourful marine iguana along the way.
              </p>
            </div>
          </div>
          
          {/* Right column - 2 features */}
          <div className="md:w-1/3 space-y-6 mt-4 md:mt-0 md:pl-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-gray-500"></div>
              <p className="text-gray-700">
                Discover the otherworldly landscapes and creatures the islands are famous for, 
                going deeper with a knowledgeable local naturalist guide who will 
                accompany you on all your excursions.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 w-5 h-5 rounded-full bg-gray-500"></div>
              <p className="text-gray-700">
                See sea lions, marine iguanas and more fish than you can shake a snorkel at – 
                this trip is packed with guaranteed wildlife encounters!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Boats section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Boats</h2>
        
        <div className="border rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Boat image - left side */}
            <div className="md:w-1/3">
              <img 
                src="https://img.freepik.com/free-photo/view-boat-water_23-2150785128.jpg?t=st=1743937059~exp=1743940659~hmac=9d20f6cffcfcaf1125c9947d2b7e52865a19c7249b895d351de3408bb0eb9d79&w=1380" 
                alt="Grand Daphne Yacht" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Boat details - right side */}
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-medium text-gray-800 mb-1">Grand Daphne</h3>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-gray-700">BOAT TYPE:</span>
                <span className="text-sm text-gray-700">Yacht • </span>
                <span className="text-sm font-semibold text-gray-700">PASSENGERS:</span>
                <span className="text-sm text-gray-700">16</span>
              </div>
              
              <p className="text-gray-700 mb-6">
                With indoor and outdoor dining areas and bars, plus a sundeck with lounges, 
                there are plenty of places to relax and enjoy time with your fellow travellers. 
                All meals are included on the Grand Daphne. The lower deck cabins have portholes, 
                while the main deck and upper deck cabins have large windows.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                  Browse deck plan
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  Explore features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalapagosFeatures;