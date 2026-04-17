import React from "react";
import { motion } from "framer-motion";
import TourcardImg1 from '../../assets/tourcards/img1.png';
import TourcardImg2 from '../../assets/tourcards/img2.png';
import TourcardImg3 from '../../assets/tourcards/img3.png';
import TourcardImg4 from '../../assets/tourcards/img4.png';
import TourcardImg5 from '../../assets/tourcards/img5.png';
import TourcardImg6 from '../../assets/tourcards/img6.png';
import TourcardImg7 from '../../assets/tourcards/img7.png';
import TourcardImg8 from '../../assets/tourcards/img8.png';
import DepartureIcons from '../../assets/card_icons/departure.png';
import TravelIcons from '../../assets/card_icons/travel.png';

const tours = [
  { img: TourcardImg1, title: "Jammu and Kashmir", tours: 42, guests: 64269, departures: 260 },
  { img: TourcardImg2, title: "Sikkhim Darjeeling", tours: 15, guests: 18063, departures: 53 },
  { img: TourcardImg3, title: "North East", tours: 15, guests: 13846, departures: 35 },
  { img: TourcardImg4, title: "Kerala", tours: 18, guests: 50647, departures: 19 },
  { img: TourcardImg5, title: "Europe", tours: 156, guests: 88455, departures: 484 },
  { img: TourcardImg6, title: "America", tours: 49, guests: 12404, departures: 49 },
  { img: TourcardImg7, title: "South East Asia", tours: 75, guests: 136509, departures: 180 },
  { img: TourcardImg8, title: "Australia New Zealand", tours: 41, guests: 12595, departures: 38 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const TourCardsSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-accent-500 font-bold uppercase tracking-wider text-sm mb-3">Popular Packages</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Trending <span className="text-primary-600">Tours</span></h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {tours.map((tour, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="bg-white rounded-3xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-2xl relative mb-4">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="px-3 pb-4">
                <div className="bg-primary-50 rounded-xl px-4 py-2 mt-[-2rem] relative z-10 mx-2 mb-4 text-center border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <p className="text-lg font-semibold text-primary-900 group-hover:text-white transition-colors">{tour.title}</p>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <img src={TravelIcons} className="h-6 opacity-70" alt="Tours" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold leading-none text-slate-800">{tour.tours}</span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Tours</span>
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <p className="text-2xl font-bold text-primary-600">{tour.guests}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Guests</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-bold leading-none text-slate-800">{tour.departures}</span>
                      <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Departs</span>
                    </div>
                    <img src={DepartureIcons} className="h-6 opacity-70" alt="Departures" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TourCardsSection;
