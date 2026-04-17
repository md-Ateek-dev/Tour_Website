import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

import heroImg from '../../assets/bredcrubs/bredcrub.png';
import destination1 from '../../assets/destinations/img1.png';
import destination2 from '../../assets/destinations/img2.png';
import destination3 from '../../assets/destinations/img3.png';
import destination4 from '../../assets/destinations/img7.png';
import destination5 from '../../assets/destinations/img8.png';

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs md:text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Tropical Island
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Trip to <span className="text-primary-500">Paradise</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed border-l-2 border-primary-500 pl-4"
          >
            "Traveling – it leaves you speechless, then turns you into a storyteller." Experience the world's most breathtaking destinations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4"
          >
            <button className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95">
              Explore More
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
              Watch Video
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Gallery Slider */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 right-0 w-[90%] md:w-3/4 lg:w-1/2 rounded-l-3xl overflow-hidden shadow-2xl glass-dark p-4 pl-6"
      >
        <div className="flex items-center justify-between mb-4 pr-6">
          <h3 className="text-white font-semibold text-lg">Popular Destinations</h3>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-500"></span>
            <span className="w-2 h-2 rounded-full bg-white/30"></span>
            <span className="w-2 h-2 rounded-full bg-white/30"></span>
          </div>
        </div>
        <Swiper
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="pb-2"
        >
          {[destination1, destination2, destination3, destination4, destination5].map((dest, idx) => (
            <SwiperSlide key={idx} className="transition-transform duration-300 hover:-translate-y-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
                <img src={dest} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Destination" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Discover</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      
      {/* Social Links sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute left-6 bottom-32 hidden md:flex flex-col gap-6 text-white/50"
      >
        <a href="#" className="hover:text-primary-400 transition-colors hover:-translate-y-1 transform"><FaFacebookF size={20} /></a>
        <a href="#" className="hover:text-primary-400 transition-colors hover:-translate-y-1 transform"><FaInstagram size={20} /></a>
        <a href="#" className="hover:text-primary-400 transition-colors hover:-translate-y-1 transform"><FaTwitter size={20} /></a>
        <a href="#" className="hover:text-primary-400 transition-colors hover:-translate-y-1 transform"><FaYoutube size={20} /></a>
        <div className="h-16 w-px bg-white/20 mx-auto mt-2"></div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
