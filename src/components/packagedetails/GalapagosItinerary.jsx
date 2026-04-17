import React, { useState } from 'react';

const GalapagosItinerary = () => {
  const [showAllItinerary, setShowAllItinerary] = useState(false);
  const [showDay1Details, setShowDay1Details] = useState(false);
  const [showAllActivities, setShowAllActivities] = useState(false);
  
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      {/* Top section with map on left and Day 1 on right */}
      <div className="flex flex-col md:flex-row mb-8">
        {/* Left side - Map Image */}
        <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
          <div className="bg-blue-200 rounded-md w-full h-64 overflow-hidden">
            {/* Image placeholder instead of SVG */}
            <img 
              src="https://cruisetogalapagos.com/assets/main/galapagos-islands/galapagos-map/images/galapagos-map.jpg" 
              alt="Galapagos Islands Map" 
              className="w-full h-[250px]"
            />
          </div>
        </div>
        
        {/* Right side - Day 1 Quito */}
        <div className="md:w-1/2 pl-0 md:pl-4">
          <div className="border-b border-gray-200 pb-2">
            <div>
              <span className="text-gray-500">Day 1 · </span>
              <span className="font-bold text-xl">QUITO</span>
            </div>
            <div 
              className="flex items-center cursor-pointer mt-2"
              onClick={() => setShowDay1Details(!showDay1Details)}
            >
              <span className="text-gray-600 text-sm">View details</span>
              <svg className={`w-4 h-4 ml-1 transform ${showDay1Details ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {showDay1Details && (
            <div className="p-3 bg-gray-50 mt-2">
              <p>Details about Day 1 in Quito would appear here.</p>
            </div>
          )}
          
          {/* Blank space */}
          <div className="h-32"></div>
        </div>
      </div>
      
      {/* Itinerary Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Itinerary</h1>
        <button 
          className="text-gray-500 flex items-center" 
          onClick={() => setShowAllItinerary(!showAllItinerary)}
        >
          Show all
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {/* Inclusions and Activities */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Inclusions and activities</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Inclusions */}
        <div>
          {/* Meals */}
          <div className="mb-6">
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2">🍴</span>
              <h3 className="text-xl font-bold">Meals</h3>
            </div>
            <p className="text-gray-600 ml-8">9 breakfasts, 7 lunches, 8 dinners</p>
          </div>
          
          {/* Transport */}
          <div className="mb-6">
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2">🚌</span>
              <h3 className="text-xl font-bold">Transport</h3>
            </div>
            <p className="text-gray-600 ml-8">Boat, Plane, Bus, Zodiac (Panga)</p>
          </div>
          
          {/* Accommodation */}
          <div className="mb-6">
            <div className="flex items-start mb-2">
              <span className="text-xl mr-2">🏨</span>
              <h3 className="text-xl font-bold">Accommodation</h3>
            </div>
            <p className="text-gray-600 ml-8">Hotel (2 nights), Overnight boat (7 nights)</p>
          </div>
        </div>
        
        {/* Right Column - Activities */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-xl flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-800 mr-2">✓</span>
            <h3 className="text-xl font-bold">Included activities</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex">
              <div className="mt-1 mr-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <p className="text-gray-600">Isla Santa Cruz - Highlands Visit (1.5 hours) - Dry Landing</p>
            </li>
            
            <li className="flex">
              <div className="mt-1 mr-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <p className="text-gray-600">Isla Floreana - Post Office Bay - Walk (1.5 hours) - Wet Landing</p>
            </li>
            
            <li className="flex">
              <div className="mt-1 mr-3">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <p className="text-gray-600">Isla Floreana - Punta Cormorant walk (1.5 hours) - Wet Landing</p>
            </li>
          </ul>
          
          <div className="text-center mt-4">
            <button 
              className="text-red-500 flex items-center mx-auto"
              onClick={() => setShowAllActivities(!showAllActivities)}
            >
              Show all (20)
              <svg className={`w-4 h-4 ml-1 transform ${showAllActivities ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Is this trip right for you section */}
      <div className="mt-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Is this trip right for you?</h2>
          </div>
          
          <div className="md:w-2/3">
            <ul className="space-y-8">
              <li className="flex">
                <div className="mt-1 mr-3">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  The Galapagos Islands are a largely untouched natural paradise. In order to experience the 
                  splendour of the diverse landscapes and waters, the included activities on this trip often 
                  require a moderate level of fitness. We ask that you read the itinerary carefully to ensure 
                  that you will be able to participate fully. The cabins and communal areas of the boat are spread 
                  over three decks and the steps between the decks are steep.
                </p>
              </li>
              
              <li className="flex">
                <div className="mt-1 mr-3">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  For getting to small islets, coves and prime snorkelling spots, it is necessary to use a Zodiac 
                  boat (panga). You will need to be comfortable climbing in and out of one during wet and 
                  dry landings.
                </p>
              </li>
              
              <li className="flex">
                <div className="mt-1 mr-3">
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  The waters of the Galapagos are generally calm and serene. However, there is always the 
                  possibility of choppy water at sea. Steady sea legs (and a sturdy stomach) will be needed 
                  when walking around the boat during bad weather. Rain or shine, your trusty crew will 
                  always be on hand to assist you.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalapagosItinerary;