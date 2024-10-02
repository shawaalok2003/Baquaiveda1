import React from 'react';
import './ProductGallery.css'; // Custom CSS for styling
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const products = [
  { title: 'Pyramid Tea Bags', image: 'Product 1.jpeg' },
  { title: 'Single Chamber Paper Coated Tea Bags', image: 'Product 2.jpeg' },
  { title: 'Chamber Foil Envelope Beauty Skin', image: 'Product 3.jpeg' },
  { title: 'Single Chamber String Tag Tea Bags', image: 'Product 4.jpeg' },
  { title: 'Double Chamber String & Tea Bags', image: 'Product 5.jpeg' },
  { title: 'Double Chamber String & Capsules', image: 'Product 6.jpeg' },
  { title: 'Double Chamber String & Capsules', image: 'Product 7.jpeg' },
  { title: 'Double Chamber String & Capsules', image: 'Product 8.jpeg' },
  { title: 'Double Chamber String & Capsules', image: 'Product 9.jpeg' },
];

const ProductGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Auto scroll effect
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // For large screens (laptops)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // For medium screens (tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For small screens (small tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For extra small screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-gallery-container">
      <h2 className="one">Type of Products</h2>
      <p className="product-subtitle">
       
      </p>

      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="gallery-item">
            <div className="product-card">
              <img
                src={require(`/public/images/${product.image}`)}
                className="product-image"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="product-title">{product.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      onClick={onClick}
    >
      {/* Add your right arrow icon or text here */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      onClick={onClick}
    >
      {/* Add your left arrow icon or text here */}
    </div>
  );
};

export default ProductGallery;