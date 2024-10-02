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
            बकाईवेदा क्लिनिक, बकाई दवाखाना का ही आधुनिक रूप है। समय के साथ हम मॉडर्न जरूर हुए हैं परंतु सैकड़ों वर्ष पुरानी परंपरा को हमने जीवित रखा है। 
            आज भी हमारी फैक्ट्री में दवाएं उसी पुरानी पद्धति से बनाई जाती हैं। फॉर्मूले ठीक वैसे के वैसे  हैं जैसा हमें हमारे पूर्वजों से मिले थे।
            हम उस गौरवशाली परंपरा को बचा कर रखने को इच्छुक हैं और साथ ही चाहते हैं कि इसका लाभ आम जनता को मिले।
            हम अपनी फैक्ट्री में ही दवा बनाते हैं। यहां सब कुछ नेचुरल है, पूरी तरह से केमिकल फ्री। 
            हम चाहते हैं कि मरीज का जड़ से इलाज हो। मरीज हमारी क्लिनिक से दवा के साथ ठीक होने का भरोसा भी ले कर जाए।
          </p>
          <a btn className="btn btn-primary" href="/contact" >Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default AboutProducts;