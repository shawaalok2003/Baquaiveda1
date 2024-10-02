import React, { useState } from 'react';
import './Header.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DropdownMenu from './menu'; // Ensure path is correct

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const closeNavbar = () => setNavbarOpen(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-success text-white">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={4} className="discount-text text-left">
              Get 10% Discount on first Order
            </Col>
            <Col className="text-right contact-info">
              <span role="img" aria-label="phone">📞</span>8961514680 | <span role="img" aria-label="email">✉️</span>baquaiveda@gmail.com
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Container fluid>
          <a className="navbar-brand" href="/">
            <img src="\images\Logo 6.png" alt="Baquai Veda" className="logo img-fluid" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={navbarOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <a className="nav-link" href="/healthpage">Health and Wellness</a>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <a className="nav-link" href="/extra">About</a>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link" to="/specialities">Specialities</Link>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item" onClick={closeNavbar}>
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>

            {/* Navigation Icons */}
            <div className="nav-icons">
              <a href="#" className="nav-icon">
                <i className="bi bi-search"></i>
              </a>
              <div className="nav-icon">
                <i className="bi bi-person"></i>
                <DropdownMenu /> {/* Dropdown will be shown on hover due to CSS */}
              </div>
              <Link to="/wishlist" className="nav-icon">
                <i className="bi bi-heart"></i>
              </Link>
              <Link to="/cart" className="nav-icon">
                <i className="bi bi-bag"></i>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
