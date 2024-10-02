import React from 'react';
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  const images = [
    '/images/pexels-akash-2906350-5060587.jpg', // Replace with your image paths
    '/images/pexels-cottonbro-5416013.jpg',
    '/images/pexels-doterra-international-llc-2204678-17380334.jpg',
    '/images/pexels-misolo-cosmetic-2588316-4841250.jpg',
    '/images/pexels-nora-brody-1241785370-23511140.jpg',
    '/images/pexels-nora-brody-1241785370-23511158.jpg',
    '/images/pexels-rethaferguson-3621234.jpg',
    'images/pexels-shubham-sony-213168835-11984292.jpg',
    '/images/pexels-victoria-bowers-148548814-10487768.jpg'
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