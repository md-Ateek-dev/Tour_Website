import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import DestinationsSection from '../components/destinationPage/destinationSections/DestinationsSection';


const Destinations = () => {
    return (
        <>
            <Header />
            <Breadcrumb/>
            <DestinationsSection/>
            <Footer />
        </>
    );
};

export default Destinations;
