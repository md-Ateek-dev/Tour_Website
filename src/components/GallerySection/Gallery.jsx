import React from 'react';
import bg_img from '/src/assets/images/air5.jpg';
import img3 from '/src/assets/images/air6.jpg';
import img4 from '/src/assets/images/air2.jpg';
import img5 from '/src/assets/images/air3.jpg';
import img1 from '/src/assets/images/UK.avif';


const Gallery = () => {
  const images = [img1, img3, img4, img5, img1, img3, img4, img5];
  
  return (
    <div className="py-12 px-4 w-full bg-center bg-cover" style={{ backgroundImage: `url(${bg_img})` }}>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Explore Our Travel Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-60 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img 
              src={src} 
              alt={`Travel ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">
                Travel {index + 1}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery;
