import React from 'react';
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  const images = [
    '/images/neem.avif',
    '/images/bankim.avif',
    '/images/giloy.jpeg',
    '/images/siu1.jpg',
    '/images/siu2.jpg',
    '/images/siu3.jpg',
    '/images/siu4.jpg',
    '/images/siu5.jpg',
    '/images/siu6.jpg',
    '/images/siu7.jpg',
    '/images/siu8.jpg',
    '/images/siu9.jpg',
    
    
  ];

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;