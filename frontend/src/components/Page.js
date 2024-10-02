import React from 'react';
import './page.css';
import { Button } from 'react-bootstrap';

const services = [
  { title: 'Skin & Hair Problems', image: 'young-woman-with-acne-dry-skin-black-dots-skin-zoom-circle-young-girl-beauty-portrait-close-up_1-4364886 2.png' },
  { title: 'Joint Problems', image: 'joint-pain-atoz-optimists-healthcare 1.png' },
  { title: 'Digestive Disorders', image: 'ImageForArticle_22799_16572812576525563 1.png' },
  { title: 'Neurological Issues', image: '2382452 1.png' },
  { title: 'Endocrine Disorders', image: 'large_20190919_040243_397859_cuong_giap_chuyen_s_max_1800x1800_jpg_edc05c8ed4 1.png' },
  { title: 'Anorectal Problems', image: 'shutterstock_721605601-300x200 1.png' },
  { title: 'Gynaecological Disorders', image: 'Gynaecological Disorders 1.png' },
  { title: 'Metabolic Disorders', image: 'Metabolic Disorders 1.png' },
  { title: 'Metabolic Disorders', image: 'Metabolic Disorders 1.png' },
  { title: 'Metabolic Disorders', image: 'Metabolic Disorders 1.png' },
];

const ServicesGrid = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={require(`/public/images/${service.image}`)} alt={service.title} />
            <h3>{service.title}</h3>
            <Button className="primary" href="/ayurveda-treatment">Cure</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;