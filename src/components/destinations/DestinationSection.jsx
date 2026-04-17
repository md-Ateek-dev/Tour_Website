import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

import destinationBG from "../../assets/destinations/destinations_bg.jpg";
import Destination1 from "../../assets/destinations/img1.png";
import Destination2 from "../../assets/destinations/img2.png";
import Destination3 from "../../assets/destinations/img3.png";
import Destination4 from "../../assets/destinations/img7.png";
import Destination5 from "../../assets/destinations/img8.png";

const destinations = [
  { img: Destination1, title: "Baltic Europe Estonia Latvia Lithuania" },
  { img: Destination2, title: "Croatia Slovenia Slovakia Hungary" },
  { img: Destination3, title: "Swiss Austria Italy" },
  { img: Destination4, title: "Spain Portugal Morocco" },
  { img: Destination5, title: "Scandinavia Midnight Sun" },
  { img: Destination1, title: "England Scotland Ireland Wales London" },
  { img: Destination2, title: "European Marvels" },
];

const DestinationSection = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Graphic Effect instead of full bg-image for modern feel */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-cover opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${destinationBG})`, backgroundPosition: 'right center' }}
      ></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-3">
              Explore The World
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Destination</span>
            </h2>
            <p className="text-lg text-slate-600">
              Travel and explore your dream destinations with our handpicked premium packages.
            </p>
          </motion.div>
        </div>

        {/* Destination Swiper */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
              1280: { slidesPerView: 5 },
            }}
            className="pb-12"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index} className="py-4">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100 group relative">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={destination.img}
                      alt={destination.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                    
                    {/* Content overlays */}
                    <div className="absolute bottom-0 left-0 p-5 w-full">
                      <h3 className="text-white font-semibold text-lg leading-snug drop-shadow-md">
                        {destination.title}
                      </h3>
                      <div className="w-0 h-1 bg-primary-500 mt-3 transition-all duration-300 group-hover:w-12 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <button className="px-8 py-4 bg-white border-2 border-primary-100 text-primary-700 font-semibold rounded-full shadow-sm hover:shadow-md hover:bg-primary-50 transition-all hover:scale-105 active:scale-95">
            View All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationSection;
