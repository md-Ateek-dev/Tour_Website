import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from '../../assets/images/air2.jpg';
import img2 from '../../assets/images/air3.jpg';
import img3 from "../../assets/images/ari1.jpg";
import img4 from "../../assets/images/air4.avif";

const OfferCarousel = () => {
  const slides = [
    {
      photo: img1,
      title: "Hong Kong Macao Shenzhen",
      subtitle: "Experience the vibrant heartbeat of Asia's finest cities.",
      days: "7 Days",
      date: "19 April",
      price: "₹1,67,000",
    },
    {
      photo: img2,
      title: "Saudi Arabia - Umrah",
      subtitle: "A spiritual journey mapped with grace and luxury.",
      days: "5 Days",
      date: "25 May",
      price: "₹1,20,000",
    },
    {
      photo: img3,
      title: "Thailand - Bangkok & Phuket",
      subtitle: "Tropical escapes and unforgettable cultural immersion.",
      days: "6 Days",
      date: "10 June",
      price: "₹1,50,000",
    },
    {
      photo: img4,
      title: "Russia - Moscow & St. Petersburg",
      subtitle: "Discover the breathtaking beauty of Russian heritage.",
      days: "6 Days",
      date: "10 June",
      price: "₹1,50,000",
    },
  ];

  return (
    <div className="relative w-full mx-auto bg-slate-900 group">
      <Swiper
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} w-3 h-3 bg-white/50 hover:bg-white rounded-full mx-1 transition-colors"></span>`;
          }
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        modules={[Pagination, Autoplay, EffectFade]}
        loop={true}
        className="w-full h-[60vh] md:h-[70vh] min-h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full overflow-hidden">
            <div className="w-full h-full relative">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                src={slide.photo}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-24">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="max-w-xl"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="w-12 h-0.5 bg-accent-500"></span>
                    <p className="text-accent-500 font-semibold tracking-widest uppercase text-sm">Special Offer</p>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 inline-flex">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Duration</span>
                      <span className="text-white font-medium">{slide.days}</span>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Departure</span>
                      <span className="text-white font-medium">{slide.date}</span>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Starting From</span>
                      <span className="text-accent-400 font-bold text-lg leading-none">{slide.price}</span>
                    </div>
                  </div>
                  
                  <div>
                    <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold shadow-lg shadow-primary-600/30 transition-all hover:scale-105 active:scale-95">
                      Book This Offer
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferCarousel;
