import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import AboutSection from '../components/AboutSection/AboutSection';


const AboutUs = () => {
    return (
        <>
            <Header />
            <Breadcrumb/>
            <AboutSection/>
            <Footer/>
        </>
    );
};

export default AboutUs;
