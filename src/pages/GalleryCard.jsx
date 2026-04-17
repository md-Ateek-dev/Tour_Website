import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import React from 'react'
import Gallery from '../components/GallerySection/Gallery';

const GalleryCard = () => {
  return (
    <div>
         <Header />
            <Breadcrumb/>
            <Gallery/>
            <Footer />
        
    </div>
  )
}

export default GalleryCard