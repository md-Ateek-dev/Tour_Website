import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCards } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { HiPhone } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imageDemo1 from "../../assets/destinations/img1.png";

const slides = [
    {
        image: imageDemo1,
        title: "Paris, France",
        description: "Experience the beauty of the Eiffel Tower and more.",
        duration: "7 Days / 6 Nights",
    },
    {
        image: imageDemo1,
        title: "Santorini, Greece",
        description: "Breathtaking sunsets and blue domes await you.",
        duration: "5 Days / 4 Nights",
    },
    {
        image: imageDemo1,
        title: "Maldives",
        description: "Enjoy pristine beaches and luxurious resorts.",
        duration: "4 Days / 3 Nights",
    },
];

const DiscoverWorld: React.FC = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    
                    {/* Left Side - Image Carousel */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-5/12 perspective-1000"
                    >
                        <button
                            ref={prevRef}
                            className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-slate-800 rounded-full shadow-lg hover:bg-slate-50 hover:scale-110 transition-all z-20 border border-slate-100"
                        >
                            <FaChevronLeft className="w-4 h-4 mr-1" />
                        </button>

                        <button
                            ref={nextRef}
                            className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-slate-800 rounded-full shadow-lg hover:bg-slate-50 hover:scale-110 transition-all z-20 border border-slate-100"
                        >
                            <FaChevronRight className="w-4 h-4 ml-1" />
                        </button>

                        <Swiper
                            effect="cards"
                            grabCursor={true}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            modules={[Navigation, Autoplay, EffectCards]}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            loop={true}
                            className="w-full max-w-[340px] drop-shadow-2xl"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="rounded-2xl overflow-hidden bg-white">
                                    <div className="relative h-[480px]">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                                <h3 className="text-xl font-bold text-white mb-1">{slide.title}</h3>
                                                <p className="text-slate-200 text-sm mb-2">{slide.description}</p>
                                                <p className="text-accent-400 font-semibold">{slide.duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>

                    {/* Right Side - Text and Call to Action */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-7/12"
                    >
                        <h4 className="text-accent-500 font-bold uppercase tracking-wider text-sm mb-3">Customized Holidays</h4>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                            Discover the World, <br />
                            <span className="text-primary-600">Specially Curated For You!</span>
                        </h1>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Our exclusive customized holidays division can cater to every travel
                            need: hotel, air tickets, VISA, sightseeing, transfers, or the entire
                            package, all designed keeping in mind your unique interests and preferences.
                        </p>
                        
                        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 mb-8">
                            <p className="font-semibold text-lg text-primary-900">
                                Tell us what you want, and we will design it for you perfectly.
                            </p>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
                            <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-semibold rounded-full shadow-lg shadow-primary-600/30 hover:shadow-xl hover:bg-primary-700 hover:-translate-y-1 transition-all">
                                Enquiry Now
                            </button>
                            <a href="tel:+917054375826" className="group flex items-center bg-white border border-slate-200 px-6 py-4 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-full sm:w-auto justify-center">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 group-hover:bg-primary-600 transition-colors">
                                    <HiPhone className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Call Us Anytime</span>
                                    <span className="text-slate-800 font-bold">+91-7054375826</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverWorld;
