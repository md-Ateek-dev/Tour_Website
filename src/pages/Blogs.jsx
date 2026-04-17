import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Blog from '../components/BlogSection/Blog';

const Blogs = () => {
    return (
        <>
            <Header />
            <Breadcrumb/>
            <Blog/>
            <Footer />
        </>
    );
};

export default Blogs;
