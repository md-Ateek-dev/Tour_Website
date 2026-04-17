import React from "react";
import { FaStar, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import DestinationBG from "../../../assets/destinations/destinations_bg.jpg";
import cardBG from "../../../assets/destinations/cardbg.png";
import tourImage from "../../../assets/destinations/img1.png";
import Lucknow from "../../../assets/images/Lucknow.avif";
import rajasthan from "../../../assets/images/rajasthan.jpg";
import rajasthans from "../../../assets/images/rajasthan2.jpg";
import varanasi from "../../../assets/images/varanasi.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const packages = [
    {
        id: 1,
        title: "Rajasthan Historical Places Tour Package",
        price: "₹22980",
        rating: "4.8",
        duration: "7D4N",
        image: tourImage,
    },
    {
        id: 2,
        title: "Golden Triangle with Varanasi Tour Package",
        price: "₹22980",
        rating: "4.8",
        duration: "7D4N",
        image: varanasi,
    },
    {
        id: 3,
        title: "Traditional Rajasthan Travel Tour Package",
        price: "₹22980",
        rating: "4.8",
        duration: "7D4N",
        image: tourImage,
    },
    {
        id: 4,
        title: "Experience Religious Pilgrimage Tour Package",
        price: "₹22980",
        rating: "4.8",
        duration: "7D4N",
        image: rajasthan,
    },
    {
        id: 5,
        title: "Experience Religious Rajasthan Tour Package",
        price: "₹22980",
        rating: "4.8",
        duration: "7D4N",
        image: rajasthans,
    },
    {
        id: 5,
        title: "Experience Religious Lucknow Tour Package",
        price: "₹22980",
        rating: "4.8",
        duration: "7D4N",
        image: Lucknow,
    },
    
];

const DestinationsSection = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat py-10"
            style={{ backgroundImage: `url('${DestinationBG}')` }}
        >
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-blue-900">Choose your destination</h2>
                <p className="text-lg text-blue-700 mt-2">Travel and explore your dream destination with us!</p>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row gap-8 px-6">
                {/* Sidebar */}
                <div className="w-full md:w-1/4 bg-white shadow-lg p-6 rounded-2xl">
                    {/* Search Box */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search Packages"
                            className="w-full p-3 border rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <FaSearch className="absolute top-4 right-5 text-gray-400" />
                    </div>

                    {/* Filter Price */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded-md inline-block">Filter By Price</h3>
                        <input type="range" min="0" max="10000" className="w-full mt-2" />
                        <p className="text-gray-700 mt-1">Price: ₹0 - 10000</p>
                    </div>

                    {/* Duration */}
                    <div className="mb-6">
                        <h3 className="font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded-md inline-block">Duration</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>✔️ 7 Day 4 Night</li>
                            <li>✔️ 2 Day 1 Night</li>
                            <li>✔️ 5 Day 3 Night</li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded-md inline-block">All Destinations</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            {["Mumbai", "Delhi", "Bengaluru", "Jaipur"].map((city, idx) => (
                                <li key={idx} className="flex justify-between items-center text-gray-700">
                                    <span className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-blue-600" /> {city}
                                    </span>
                                    <span className="text-sm bg-blue-100 px-2 py-0.5 rounded-full text-blue-600">{Math.floor(Math.random() * 50) + 10}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="bg-white rounded-[20px] shadow-md relative overflow-hidden">
                            {/* Card BG */}
                            <img src={cardBG} className="absolute inset-0 w-full h-full object-cover opacity-20 z-0" alt="bg" />
                            <img src={pkg.image} alt={pkg.title} className="w-full h-40 object-cover rounded-t-[20px]" />
                            <div className="p-4 relative z-10">
                                <h3 className="text-md font-bold text-blue-900">{pkg.title}</h3>
                                <div className="flex items-center mt-2">
                                    <FaStar className="text-yellow-400 mr-1" />
                                    <span className="text-sm text-gray-600">({pkg.rating} Rating)</span>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <p className="text-md font-bold text-white bg-blue-500 px-3 py-1 rounded-md">
                                        {pkg.price}<span className="text-xs">/Person</span>
                                    </p>
                                    <p className="text-sm text-gray-600">{pkg.duration}</p>
                                </div>
                                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 items-center gap-1 text-blue-500 text-lg font-semibold">
                {[1, 2, 3, 4].map((page, idx) => (
                    <button
                        key={idx}
                        className={`px-3 py-1 border border-blue-500 rounded-md ${
                            page === 1 ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        {page}
                    </button>
                ))}
                <FaLongArrowAltRight className="text-blue-500" />
                {/* <img src="/src/assets/icons/dish.png" className="ml-2 w-6 h-6" alt="icon" /> */}
            </div>
        </div>
    );
};

export default DestinationsSection;
