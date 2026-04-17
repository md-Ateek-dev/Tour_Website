import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import BlogsCards from '../components/BlogCards/BlogsCard'

const BlogDetails = () => {
    return (
        <>
            <Header />
            <Breadcrumb/>
            <BlogsCards/>
            <Footer />
        </>
    );
};

export default BlogDetails;
