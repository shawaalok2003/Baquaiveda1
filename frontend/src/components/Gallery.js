import React from 'react';
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  const images = [
    '/images/pexels-akash-2906350-5060587.jpg', // Replace with your image paths
    '/images/pexels-cottonbro-5416013.jpg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.56 (1).jpeg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.56.jpeg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.57 (1).jpeg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.57.jpeg',
    
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