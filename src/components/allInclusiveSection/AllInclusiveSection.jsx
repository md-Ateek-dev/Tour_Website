import React from "react";
import image1 from "../../assets/icons/airplane-flight.png";
import image2 from "../../assets/icons/dish.png";
import image3 from "../../assets/icons/hotel.png";
import image4 from "../../assets/icons/map.png";
import image5 from "../../assets/icons/tour-guide.png";
import image6 from "../../assets/icons/touring.png";

const features = [
  {
    image: image3,
    title: "Accommodation",
    description: "Comfortable & convenient hotels cherry picked by our hotel management team.",
  },
  {
    image: image2,
    title: "All meals",
    description: "Eat to your heart’s content Breakfast, Lunch, Dinner.",
  },
  {
    image: image6,
    title: "On-tour transport",
    description: "Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free.",
  },
  {
    image: image5,
    title: "Tour managers",
    description: "We have an exclusive team of 350 tour managers specialising in India and World tours.",
  },
  {
    image: image4,
    title: "Best value itinerary",
    description: "Our dedicated product & destination research team spends hours curating the best value for money itineraries.",
  },
  {
    image: image1,
    title: "To and fro airfare",
    description: "Simply India World tours are inclusive of airfare from many hubs within India unless you pick the joining-leaving option.",
  },
];

const AllInclusiveSection = () => {
  return (
    <section className="bg-[#f2f6f9] pb-10 pt-5 px-6 text-gray-700">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#244e8a]  mb-8">
          All inclusive tours, <span className="text-[#244e8a] ">Come on, fill the bag and take it out!</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4">
              <img src={feature.image} alt={feature.title} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-2xl text-gray-700">{feature.title}</h3>
                <p className="text-md text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInclusiveSection;
