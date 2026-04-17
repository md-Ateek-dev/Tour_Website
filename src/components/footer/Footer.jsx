import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/logo/header-logo.png';
import weAccepts from '../../assets/we_assepts/cards.png';

const Footer = () => {
    const discoverLinks = [
        { path: "/guest-reviews", text: "Guests Reviews" },
        { path: "/about-us", text: "About Us" },
        { path: "/our-team", text: "Our Team" },
        { path: "/tour-managers", text: "Tour Managers" },
        { path: "/sales-partners", text: "Sales Partners" },
        { path: "/become-sales-partner", text: "Become a Sales Partner" },
        { path: "/careers", text: "Careers We're Hiring!" },
        { path: "/csr-policy", text: "CSR Policy" }
    ];

    const supportLinks = [
        { path: "/contact-us", text: "Contact Us" },
        { path: "/feedback", text: "Leave Your Feedback" },
        { path: "/how-to-book", text: "How to Book" },
        { path: "/faq", text: "FAQ" },
        { path: "/travel-deals", text: "Travel Deals" },
        { path: "/covid-notice", text: "COVID-19 Public Notice" },
        { path: "/singapore-visa", text: "Singapore Visa" },
        { path: "/annual-return", text: "Annual Return" }
    ];

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Payment */}
                    <div className="flex flex-col space-y-6">
                        <Link to="/" className="inline-block">
                            <img src={headerLogo} alt="Logo" className="h-12 brightness-0 invert" />
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Only Government Approved Guides Will Be Provided. Appointment Of Guide Is Based On Availability Of Legal Guides.
                        </p>
                        <div>
                            <h4 className="text-white font-semibold mb-3">We Accept</h4>
                            <img src={weAccepts} alt="Payment Methods" className="h-8 max-w-full opacity-80" />
                        </div>
                    </div>

                    {/* Discover Us */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Discover Us</h3>
                        <ul className="space-y-3 text-sm">
                            {discoverLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.path} 
                                        className="text-slate-400 hover:text-primary-400 hover:ml-2 transition-all duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 -ml-3 transition-opacity"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Support</h3>
                        <ul className="space-y-3 text-sm">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.path} 
                                        className="text-slate-400 hover:text-primary-400 hover:ml-2 transition-all duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 opacity-0 -ml-3 transition-opacity"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-4 text-sm mb-8">
                            <li className="flex items-start">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-primary-400">
                                    <FaPhoneAlt size={14} />
                                </div>
                                <p className="ml-3 text-slate-400 leading-relaxed">
                                    <a href="tel:+917054375826" className="hover:text-white transition-colors">+91-7054375826</a><br/>
                                    <a href="tel:+919519838720" className="hover:text-white transition-colors">+91-9519838720</a>
                                </p>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-primary-400">
                                    <FaEnvelope size={14} />
                                </div>
                                <p className="ml-3 text-slate-400 leading-relaxed">
                                    <a href="mailto:mohdateek.dev@gmail.com" className="hover:text-white transition-colors">mohdateek.dev@gmail.com</a><br/> 
                                    <a href="mailto:info@simplyindiaholidays.com" className="hover:text-white transition-colors">info@simplyindiaholidays.com</a>
                                </p>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-primary-400">
                                    <FaMapMarkerAlt size={14} />
                                </div>
                                <p className="ml-3 text-slate-400 leading-relaxed">
                                    First Floor, 647/044, 60 Feet Rd, Abhishekpuram, Jankipuram,<br/>
                                    Lucknow-226010, Uttar Pradesh
                                </p>
                            </li>
                        </ul>
                        
                        <div className="flex space-x-3">
                            <a href="https://www.instagram.com/md_ateek09?igsh=ajZjNnFreWhwYWgx" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/share/192oPcVNFH/" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://x.com/md_Ateek09?t=d03tkdmtmo5cmjJTv0b4PA&s=09" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:scale-110 transition-transform border border-slate-700">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <FaYoutube size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-800 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-slate-500 text-center md:text-left mb-2 md:mb-0">
                        Copyright &copy; {new Date().getFullYear()} Simply India Holidays. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500">
                        Developed By <Link to='https://www.linkedin.com/in/mohd-ateek-80a949256' target='_blank' className="text-primary-400 hover:text-primary-300 hover:underline transition-colors">❤️ Mohd Ateek</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;