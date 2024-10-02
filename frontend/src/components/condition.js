import React from 'react';
import './TermsAndConditions.css'; 
import { Link } from 'react-router-dom';// Make sure to import the CSS file

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website.
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if
        you do not agree to all of the terms and conditions stated on this page.
      </p>
      <h2>Cookies</h2>
      <p>
        We employ the use of cookies. By accessing our website, you agreed to use cookies in agreement with our Privacy Policy.
      </p>
      <h2>License</h2>
      <p>
        Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual
        property rights are reserved. You may access this from our website for your personal use subjected to restrictions
        set in these terms and conditions.
      </p>
      <h2>Restrictions</h2>
      <ul>
        <li>Republishing material from the website</li>
        <li>Selling, renting, or sublicensing material from the website</li>
        <li>Reproducing, duplicating, or copying material from the website</li>
        <li>Redistributing content from the website</li>
      </ul>
      <p>
        This Agreement shall begin on the date hereof. Sections of this website offer users the opportunity to post and
        exchange opinions and information in certain areas of the website.
      </p>
      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to update or change our Terms and Conditions at any time. Your continued use of the website
        following the posting of any changes to the Terms will be deemed your acceptance of those changes.
      </p>
    </div>
  );
};

export default TermsAndConditions;