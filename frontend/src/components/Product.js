import React from 'react';
import './product.css';
import 'aos/dist/aos.css'; // Ensure AOS styles are imported

const Products = () => {
  return (
    <div className="app-container">
      <div className="left-section">
        <div className="text-container" data-aos="fade-up" data-aos-duration="1000">
          <h2>Products</h2>
        </div>

        <div className="images-container">
          <div className="large-image" data-aos="fade-right" data-aos-duration="1000">
            <img src="\images\Rectangle 16.png" alt="Product 1" />
          </div>
          <div className="small-images" data-aos="fade-left" data-aos-duration="1000">
            <img src="\images\Rectangle 12.png" alt="Product 3" />
          </div>
        </div>
      </div>

      <div className="right-section">
        <img src="\images\Rectangle 13.png" alt="Product 2" data-aos="fade-left" data-aos-duration="1000" />
        <img src="\images\slide-102 1.png" alt="Product 5" className="right-image" data-aos="fade-right" data-aos-duration="1000" />
      </div>
    </div>
  );
}

export default Products;