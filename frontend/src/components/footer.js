import React, { useEffect } from 'react';
import './footer.css'; // Custom CSS for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // AOS CSS
import { Link } from 'react-router-dom'; // Import Link for routing

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set the animation duration
  }, []);

  return (
    <footer className="footer-container" data-aos="fade-up">
      {/* Mailing List Section */}
      <div className="mailing-list" data-aos="fade-up">
        <h2>Join Our Mailing List and Stay Updated</h2>
        <div className="subscribe">
          <input type="email" placeholder="Email Address" className="subscribe-input" />
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
      </div>

      {/* Footer Content Section */}
      <div className="footer-sections">
        {/* Company Info */}
        <div className="company-info" data-aos="fade-right">
          <img src="/images/Logo 6.png" alt="Baquaiveda Logo" className="logo" />
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://wa.me/+918961514680"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links" data-aos="fade-up">
          <h3>Our Company</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links" data-aos="fade-up">
          <h3>Information</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Become a Seller</a></li>
            <li><a href="#">Check Out</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">FAQ Page</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="contact-us" data-aos="fade-left">
          <h3>Contact Us</h3>
          <p>Call: 8961514680</p>
          <p>Email: baquaiveda@gmail.com</p>
          <p></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom" data-aos="fade-up">
        <p>© 2024 Baquaiveda. All Rights Reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/termsandcondition">Terms & Conditions</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
