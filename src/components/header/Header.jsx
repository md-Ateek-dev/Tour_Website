import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import headerLogo from "../../assets/logo/header-logo2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Destination", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Offers", path: "/offers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={headerLogo} alt="Logo" className="h-12 md:h-16 transition-all duration-300" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wide uppercase">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary-500 after:transition-all hover:after:w-full transition-colors ${
                scrolled ? "text-slate-800 hover:text-primary-600" : "text-white hover:text-primary-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="px-6 py-2.5 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition shadow-md hover:shadow-lg font-medium text-sm">
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className={`text-2xl ${scrolled ? "text-slate-800" : "text-white"}`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-6 border-t border-slate-100"
          >
            {menuItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={item.name}
              >
                <Link
                  to={item.path}
                  className="block py-3 text-lg font-medium text-slate-700 hover:text-primary-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: menuItems.length * 0.05 }}
              className="mt-4"
            >
              <button className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium shadow-md">
                Book Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
