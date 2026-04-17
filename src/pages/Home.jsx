import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/hero/HeroSection';
import DestinationSection from '../components/destinations/DestinationSection';
import AllInclusiveSection from '../components/allInclusiveSection/AllInclusiveSection';
import TourCardsSection from '../components/TourCards/TourCardsSection';
import CustomerFeedback from '../components/customerFeedback/CustomerFeedback';
import DiscoverWorld from '../components/discoverWorldSection/DiscoverWorld';
import OfferCarosal from '../components/OfferCarosal/OfferCarosal';
import EuropeAndAmerica from '../components/EuropeAndAmericaSection/EuropeAndAmerica';
import BackToTopButton from '../components/backToTop/BackToTopButton';

const Home = () => {
    return (
        <>
        <Header/>
        <HeroSection/>
        <DestinationSection/>
        <EuropeAndAmerica/>
        <TourCardsSection/>
        <OfferCarosal/>
        <CustomerFeedback/>
        <AllInclusiveSection/>
        <DiscoverWorld/>
        <BackToTopButton/>
        <Footer/>
        </>
    );
};

export default Home;
