import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import OfferCarousel from '../components/OfferCarosal/OfferCarosal';


const Offers = () => {
    return (
        <>
            <Header />
            <Breadcrumb/>
            <OfferCarousel/>
            <Footer />
        </>
    );
};

export default Offers;
