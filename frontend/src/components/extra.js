import React from 'react';
import './Extra.css';

// New styles for Mission and Vision

const Details = () => {
  return (
    <div>
      {/* Existing Details section */}
      <div className="details-section">
        <div className="image-section">
          <img src="\images\pexels-cottonbro-5416013.jpg" alt="Clinic" className="clinic-image" />
        </div>
        <div className="text-section">
          <h2 className="subtitle">Feel the difference</h2>
          <h1 className="title">Who We Are</h1>
          <p className="description">
          Baquaiveda Clinic is a modern version of the traditional Bakau Dava Khana. Over time, we have embraced modernity while preserving a centuries-old tradition.

          Even today, our medicines are made using the same ancient methods in our factory. The formulas remain exactly as they were passed down to us from our ancestors.
          
          We are committed to preserving this glorious tradition and want to ensure that the benefits reach the general public.
          
          We manufacture our medicines in-house, and everything here is natural, completely chemical-free.
          
          Our goal is to provide patients with holistic treatment, ensuring they leave our clinic with the assurance of recovery alongside their medication.
          </p>
        </div>
      </div>

      {/* New Why Choose Us section */}
      <div className="why-us-section">
        <h2 className="why-us-title">Why Choose Beelive?</h2>
        <div className="why-us-cards">
          <div className="card">
            <img src="\images\pexels-cottonbro-5416013.jpg" alt="Authentic Ayurveda" className="card-image" />
            <h3 className="card-title">Authentic and Pure Ayurveda</h3>
            <p className="card-description">
              We provide authentic Ayurvedic services and practice it in its purest form.
            </p>
          </div>
          <div className="card">
            <img src="\images\pexels-doterra-international-llc-2204678-17380334.jpg" alt="Expert Doctors" className="card-image" />
            <h3 className="card-title">Expert Doctors from Kerala</h3>
            <p className="card-description">
              Our eminent doctors and therapists have years of experience in the field.
            </p>
          </div>
          <div className="card">
            <img src="\images\pexels-shubham-sony-213168835-11984292.jpg" alt="Top-notch Services" className="card-image" />
            <h3 className="card-title">Top-notch Services</h3>
            <p className="card-description">
              We provide top-quality services for the complete satisfaction of our visitors.
            </p>
          </div>
        </div>
      </div>

      {/* New Our Mission and Vision section */}
      <div className="mission-vision-section">
        <div className="mission-section animate-mission">
          <h2>Our Mission</h2>
          <img src="\images\pexels-nora-brody-1241785370-23511140.jpg" alt="Our Mission" className="mission-image" />
          <p>
            Our mission is to deliver authentic Ayurvedic treatments that focus on holistic wellness and health. 
            We strive to provide exceptional care through personalized therapies and the integration of ancient Ayurvedic wisdom with modern wellness practices.
          </p>
        </div>

        <div className="vision-section animate-vision">
          <h2>Our Vision</h2>
          <img src="\images\pexels-akash-2906350-5060587.jpg" alt="Our Vision" className="vision-image" />
          <p>
            Our vision is to be a leader in Ayurvedic health care, fostering a healthier society by promoting the value of traditional 
            Ayurvedic practices alongside innovative wellness techniques. We aim to inspire trust and improve the quality of life for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;