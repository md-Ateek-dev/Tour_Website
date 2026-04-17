import React, { useState } from 'react';

const GalapagosBookingPage = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [showMoreDates, setShowMoreDates] = useState(false);
  
  const years = ['2025', '2026'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="max-w-6xl mx-auto p-4 font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dates and availability</h1>
        
        {/* Year selection */}
        <div className="flex gap-2 mb-3">
          {years.map(year => (
            <button
              key={year}
              className={`px-4 py-2 rounded ${
                selectedYear === year 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-white border border-gray-300 text-gray-700'
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        
        {/* Month selection */}
        <div className="flex flex-wrap gap-1 mb-3">
          {months.map(month => (
            <button
              key={month}
              className={`px-4 py-1 rounded ${
                selectedMonth === month 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setSelectedMonth(month)}
            >
              {month}
            </button>
          ))}
        </div>
        
        {/* Price note */}
        <div className="flex justify-end">
          <div className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded">
            Prices can change anytime
          </div>
        </div>
      </div>
      
      {/* Booking details */}
      <div className="border-t border-b border-gray-300 py-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-gray-500 mb-2">Starting</p>
            <p className="font-medium">Tuesday 13 May 2025</p>
          </div>
          <div>
            <p className="text-gray-500 mb-2">Ending</p>
            <p className="font-medium">Thursday 22 May 2025</p>
          </div>
          <div>
            <div className="flex flex-col items-end">
              <p className="text-red-500 text-sm">1 Space Left</p>
              <p className="text-gray-500">On Request</p>
            </div>
            <div className="flex items-center justify-end mt-2">
              <p className="font-medium mr-2">Fully Booked</p>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* View more dates button */}
      <button 
        className="w-full border border-gray-300 rounded py-2 px-4 mt-4 flex items-center justify-center text-gray-700"
        onClick={() => setShowMoreDates(!showMoreDates)}
      >
        View more dates
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Essential Trip Information */}
    
      
      {/* Important notes section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Important notes</h2>
        
        <div className="space-y-6">
          <div>
            <p className="font-bold text-gray-700">GALAPAGOS PARK TRANSIT CARD:</p>
            <p className="text-gray-600 mt-1">
              Before checking in for the flight from Quito to the Galapagos, there is a US$20 transit fee that needs to be paid. On arrival in the islands
              you must pay the US$200 national park fee to enter Galapagos National Park. This applies to everyone aged 13 years and above.
              For children aged 12 the fee will be USD100.
            </p>
            <p className="text-gray-600 mt-2">
              If your voyage visits Isabela Island, there is also a US$10 fee to be paid on arrival at the island.
            </p>
          </div>
          
          <div>
            <p className="font-bold text-gray-700">ARRIVAL TRANSFER:</p>
            <p className="text-gray-600 mt-1">
              This tour includes a complimentary arrival transfer in Quito. Please advise flight details 30 days prior to travel so that the transfer
              can be organised.
            </p>
          </div>
          
          <div>
            <p className="font-bold text-gray-700">PASSPORT DETAILS:</p>
            <p className="text-gray-600 mt-1">
              When booking, please make sure that your name is spelt correctly, and that you book using the name in your passport (particularly
              if you are recently married). If you are issued a new passport with a different number between the time that you book and the time
              you travel, please take both the old and new passports with you.
            </p>
          </div>
          
          <div>
            <p className="font-bold text-gray-700">DIETARY REQUIREMENTS:</p>
            <p className="text-gray-600 mt-1">
              Should you have a special diet requirement (for example vegetarian, celiac, vegan, severe food allergies) it's essential that you inform
              us or your agent of the specific details at least 10 days prior to departure, in order to make sure the chef on board the boat or on
              the island can request the necessary food supplies.
            </p>
          </div>
          
          <div>
            <p className="font-bold text-gray-700">FELLOW TRAVELLERS:</p>
            <p className="text-gray-600 mt-1">
              This trip is a package tour and is therefore made up of a combination of shorter trips. This may mean you will travel with a different
              guide and passengers on each section.
            </p>
          </div>
          
          <div>
            <p className="font-bold text-gray-700">May and June departures 2024 UPDATE:</p>
            <p className="text-gray-600 mt-1">
              On the 11th of May the Galapagos National Park authorities advised, the landing site of Punta Surez on Espanola Island and
              Genovesa Island will now reopen. These landing sites were temporary closed as part of the biosecurity measures activated to
              prevent the spread of the Avian flu. All trip departures will now revert to the original itinerary which includes a landing at Punta
              Suraz, Espanola Island and Genovesa Island.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 border border-gray-200 rounded-lg p-6 bg-white flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <div className="bg-gray-100 rounded-full p-4 w-24 h-24 flex items-center justify-center">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Essential Trip Information</h2>
          <p className="text-gray-600 mb-4">
            Want an in-depth insight into this trip? Essential Trip Information provides a detailed itinerary, visa info, how to get to your hotel, what's included - pretty much everything you need to know about this adventure and more.
          </p>
          <button className="border border-gray-400 rounded px-4 py-2 text-gray-700 font-medium inline-block">
            Read Essential Trip Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalapagosBookingPage;