import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './AyurvedaTreatment.css'

const AyurvedicSolutionsPage = () => {
  const services = [
    { 
      title: 'Skin & Hair Problems', 
      image: 'young-woman-with-acne-dry-skin-black-dots-skin-zoom-circle-young-girl-beauty-portrait-close-up_1-4364886 2.png',
      solution: 'Ayurveda suggests using natural oils like coconut or sesame oil, along with herbs like Neem and Aloe Vera. Treatments like Abhyanga (oil massage) and dietary changes to balance the Pitta dosha can be highly effective.'
    },
    { 
      title: 'Joint Problems', 
      image: 'joint-pain-atoz-optimists-healthcare 1.png',
      solution: 'Herbs such as Ashwagandha and Guggul are used to reduce inflammation. Ayurvedic therapies like Janu Basti (medicated oil retention) and Panchakarma can provide relief from joint pain and stiffness.'
    },
    { 
      title: 'Digestive Disorders', 
      image: 'ImageForArticle_22799_16572812576525563 1.png',
      solution: 'Herbs like Triphala, ginger, and fennel can help improve digestion. Regular intake of warm water, a balanced diet based on the digestive fire (Agni), and Panchakarma treatments like Virechana (purgation) can alleviate digestive issues.'
    },
    { 
      title: 'Neurological Issues', 
      image: '2382452 1.png',
      solution: 'Ayurvedic treatments for neurological disorders involve therapies like Shirodhara (oil pouring over the forehead) and using herbs like Brahmi and Ashwagandha to calm the nervous system.'
    },
    { 
      title: 'Endocrine Disorders', 
      image: 'large_20190919_040243_397859_cuong_giap_chuyen_s_max_1800x1800_jpg_edc05c8ed4 1.png',
      solution: 'Herbs like Shatavari and Ashwagandha can help balance hormone levels. Ayurveda also focuses on lifestyle changes, including stress management techniques and dietary adjustments to support the endocrine system.'
    },
    { 
      title: 'Anorectal Problems', 
      image: 'shutterstock_721605601-300x200 1.png',
      solution: 'Ayurvedic treatments for anorectal problems include Kshar Sutra therapy (medicated thread treatment) for hemorrhoids and fissures. Internal medications like Triphala and proper diet can aid digestion and promote healing.'
    },
    { 
      title: 'Gynaecological Disorders', 
      image: 'Gynaecological Disorders 1.png',
      solution: 'Herbs like Ashoka, Lodhra, and Shatavari are used in Ayurvedic treatment for conditions like menstrual irregularities and PCOS. Panchakarma therapies like Uttar Basti (medicated enema) are beneficial in addressing gynecological issues.'
    },
    { 
      title: 'Metabolic Disorders', 
      image: 'Metabolic Disorders 1.png',
      solution: 'Ayurveda recommends using herbs like Guggul and Triphala to manage metabolic disorders like diabetes and obesity. A personalized diet plan along with Panchakarma therapies can help regulate metabolism and balance Kapha dosha.'
    }
  ];

  return (
    <Container className="ayurvedic-solutions-page">
      <h1>Ayurvedic Solutions for Common Health Problems</h1>
      <p>Ayurveda offers holistic treatments that focus on balancing the body’s doshas (Vata, Pitta, and Kapha) to restore health and well-being. Below are some Ayurvedic solutions for various common health issues.</p>
      
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="service-col">
            <Card className="solution-card">
              <Card.Img variant="top" src={require(`/public/images/${service.image}`)} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>
                  {service.solution}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AyurvedicSolutionsPage;