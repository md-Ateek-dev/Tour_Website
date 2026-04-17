import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ContactSection from '../components/contactUs/ContactSection';

const ContactUs = () => {
    return (
        <>
            <Header/>
            <Breadcrumb/>
            <ContactSection/>
            <Footer />
        </>
    );
};

export default ContactUs;
