import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from React Bootstrap
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  const images = [
    '/images/pexels-akash-2906350-5060587.jpg',
    '/images/pexels-cottonbro-5416013.jpg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.56 (1).jpeg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.56.jpeg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.57 (1).jpeg',
    '/images/WhatsApp Image 2024-10-03 at 14.52.57.jpeg',
  ];

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Gallery item ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;