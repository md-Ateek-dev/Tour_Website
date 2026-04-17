import React from "react";
import { FaGlobeAsia, FaSuitcase, FaPlane, FaPassport, FaHeart, FaHeadset, FaSmile, FaTag, FaUsers, FaBolt } from "react-icons/fa";
import bgHero from "/src/assets/images/air4.avif";

const offerIcons = [
  <FaGlobeAsia className="text-blue-500 text-3xl mb-2 mx-auto" />,
  <FaSuitcase className="text-yellow-500 text-3xl mb-2 mx-auto" />,
  <FaPlane className="text-teal-500 text-3xl mb-2 mx-auto" />,
  <FaPassport className="text-purple-500 text-3xl mb-2 mx-auto" />,
  <FaHeart className="text-pink-500 text-3xl mb-2 mx-auto" />,
  <FaHeadset className="text-green-500 text-3xl mb-2 mx-auto" />,
];

const reasons = [
  { icon: <FaSmile className="text-blue-500 text-2xl mr-2" />, text: "Expert Travel Consultants" },
  { icon: <FaTag className="text-yellow-500 text-2xl mr-2" />, text: "Best Price Guarantee" },
  { icon: <FaUsers className="text-teal-500 text-2xl mr-2" />, text: "1000+ Happy Clients" },
  { icon: <FaBolt className="text-purple-500 text-2xl mr-2" />, text: "Quick Response Team" },
];

const AboutSection = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-700/60 to-blue-400/50" />
        <div className="relative z-10 bg-white/80 p-10 rounded-2xl shadow-lg text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">About Us</h1>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Explore the world with comfort and confidence
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">Who We Are</h2>
        <p className="text-lg leading-relaxed text-center text-gray-700 max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-600">WanderWorld Travels</span>, we are passionate about helping people discover new places.
          From personalized tour packages to 24/7 support, we make sure your journey is smooth, exciting, and memorable.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-700">Our Mission</h3>
            <p className="text-gray-700">
              To provide extraordinary travel experiences that create memories of a lifetime.
              We make travel planning simple and stress-free.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-700">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted travel partner that inspires people to explore the world with ease and excitement.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "Domestic & International Tours",
            "Customized Packages",
            "Flight & Hotel Bookings",
            "Visa Assistance",
            "Honeymoon & Group Tours",
            "24x7 Customer Support",
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
            >
              {offerIcons[index]}
              <p className="font-medium text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8 px-4">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition flex items-center text-lg font-medium text-gray-700"
            >
              {reason.icon}
              {reason.text}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-6 text-lg">Contact us today and let us plan your perfect trip!</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 hover:text-blue-900 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutSection;
