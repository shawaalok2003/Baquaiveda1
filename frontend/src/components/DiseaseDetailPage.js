// DiseaseDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DiseaseDetailPage = () => {
  const { diseaseName } = useParams();

  // Here you can add the content specific to the disease name
  let content;
  
  switch (diseaseName) {
    case 'oa':
      content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.";
      break;
    // Add more cases for other diseases if needed
    default:
      content = `Details about ${diseaseName} will go here...`;
  }

  return (
    <div>
      <h1>{diseaseName.toUpperCase()}</h1>
      <p>{content}</p>
    </div>
  );
};

export default DiseaseDetailPage;
