import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import TravelPackage from '../components/packagedetails/Travel_Package';
import GalapagosTourPage from '../components/packagedetails/GalapagosTourPage ';
import GalapagosFeatures from '../components/packagedetails/GalapagosFeatures';
import GalapagosItinerary from '../components/packagedetails/GalapagosItinerary';
import GalapagosBookingPage from '../components/packagedetails/DateTime';
import StarRating from '../components/packagedetails/ReviewSection';


const PackageDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumb/>
            <TravelPackage/>
            <GalapagosTourPage/>
            <GalapagosFeatures/>
            <GalapagosItinerary/>
            <GalapagosBookingPage/>
            <StarRating/>
            <Footer />
        </>
    );
};

export default PackageDetails;
