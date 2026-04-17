import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Destinations from "../pages/Destinations";
import FAQ from "../pages/FAQ";
import GalleryCard from "../pages/GalleryCard";
import Offers from "../pages/Offers";
import PackageDetails from "../pages/PackageDetails";
import Packages from "../pages/Packages";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/Login";
import PrivacyPolicy from "../pages/Legal/PrivacyPolicy";
import TermsOfService from "../pages/Legal/TermsOfService";
import MyBookings from "../pages/User/MyBookings";
import MyWishlist from "../pages/User/MyWishlist";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<GalleryCard/>} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfService />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/my-wishlist" element={<MyWishlist />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
