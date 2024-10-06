import React from 'react';
import './AboutProducts.css'// Import the CSS file

// Store images in an object
const images = {
  sideImg: "/images/Rectangle 52.png",
  mainImg: "/images/Rectangle 51.png",
  smallImg: "/images/Rectangle 53.png",
  middleImg: "/images/ic-care-pack 1.png",
};

const AboutProducts = () => {
  return (
    <div className="about-products-container container">
      <div className="row align-items-center">
        <div className="col-md-7 product-images">
          <img src={images.sideImg} className="side-img" alt="Medicine" />
          <div className="image-stack">
            <img src={images.mainImg} className="main-img" alt="Tea" />
            <img src={images.smallImg} className="small-img" alt="Herbal" />
          </div>
        </div>
        <div className="col-md-5 about-products-text">
          <img src={images.middleImg} className="middle-img" alt="Tea" />
          <h2>About Products</h2>
          <p>
          Baquaiveda Clinic is the modern form of the traditional Bakai Dispensary. While we have embraced modernity with time, we have kept centuries-old traditions alive. Even today, medicines in our factory are made using the same ancient methods. The formulas are exactly as they were passed down to us by our ancestors. We are committed to preserving this glorious tradition and want it to benefit the common people.

          We manufacture our medicines in-house, and everything here is natural, completely chemical-free.
          
          Our goal is to treat patients from the root cause. We want patients to leave our clinic not only with the medicine but also with the assurance of being healed.
          </p>
          <a btn className="btn btn-primary" href="/contact" >Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default AboutProducts;