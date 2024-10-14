// import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp, faDisease } from '@fortawesome/free-solid-svg-icons';
// import './page.css'; // Import CSS file for styling

// const MainDiseases = () => {
//   const diseases = [
//     { name: 'Joint Pain', details: ['OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'] },
//     { name: 'Digestive Disease', details: ['Gastric Acidity', 'IBS', 'Constipation'] },
//     { name: 'Neurological', details: ['Migraine'] },
//     { name: 'Endocrinal Disorders', details: ['Diabetes Type 2', 'Thyroid (Hypothyroidism)'] },
//     { name: 'Anorectal Problems', details: ['Piles', 'Fissures', 'Fistula'] },
//     { name: 'Female Problems', details: ['Dysmenorrhea', 'Irregular Menses', 'Excess Bleeding', 'PCOS', 'PCOD'] },
//     { name: 'Skin Problems', details: ['Acne', 'Pimples', 'Eczema', 'Psoriasis', 'Skin Allergy', 'White Patch'] },
//     { name: 'Sexual Problems', details: ['SP', 'NF', 'LSD', 'ED', 'PE', 'Infertility < M > < F >', 'Sexual Debility'] },
//     { name: 'Mental', details: ['Anxiety'] },
//     { name: 'Hairfall', details: ['Dandruff', 'Alopecia'] },
//     { name: 'Metabolic Disease', details: ['Obesity', 'High Blood Pressure', 'Hyperlipidemia'] },
//     { name: 'Respiratory Problems', details: ['Cough & Cold', 'Sinusitis', 'COPD', 'Asthma'] },
//   ];

//   // State to toggle dropdowns
//   const [openDisease, setOpenDisease] = useState(null);

//   const toggleDisease = (index) => {
//     if (openDisease === index) {
//       setOpenDisease(null);
//     } else {
//       setOpenDisease(index);
//     }
//   };

//   return (
//     <div className="disease-container">
//       {diseases.map((disease, index) => (
//         <div key={index} className="disease-item">
//           <div className="disease-header" onClick={() => toggleDisease(index)}>
//             <FontAwesomeIcon icon={faDisease} className="disease-icon" />
//             <span>{disease.name}</span>
//             <FontAwesomeIcon icon={openDisease === index ? faChevronUp : faChevronDown} className="toggle-icon" />
//           </div>
//           {openDisease === index && (
//             <div className="disease-details">
//               <ul>
//                 {disease.details.map((detail, i) => (
//                   <li key={i}>{detail}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MainDiseases;




import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faDisease } from '@fortawesome/free-solid-svg-icons';
import './page.css';

const MainDiseases = () => {
  const diseases = [
    { name: 'Joint Pain', details: ['OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'] },
    { name: 'Digestive Disease', details: ['Gastric Acidity', 'IBS', 'Constipation'] },
    { name: 'Neurological', details: ['Migraine'] },
    { name: 'Endocrinal Disorders', details: ['Diabetes Type 2', 'Thyroid (Hypothyroidism)'] },
    { name: 'Anorectal Problems', details: ['Piles', 'Fissures', 'Fistula'] },
    { name: 'Female Problems', details: ['Dysmenorrhea', 'Irregular Menses', 'Excess Bleeding', 'PCOS', 'PCOD'] },
    { name: 'Skin Problems', details: ['Acne', 'Pimples', 'Eczema', 'Psoriasis', 'Skin Allergy', 'White Patch'] },
    { name: 'Sexual Problems', details: ['SP', 'NF', 'LSD', 'ED', 'PE', 'Infertility < M > < F >', 'Sexual Debility'] },
    { name: 'Mental', details: ['Anxiety'] },
    { name: 'Hairfall', details: ['Dandruff', 'Alopecia'] },
    { name: 'Metabolic Disease', details: ['Obesity', 'High Blood Pressure', 'Hyperlipidemia'] },
    { name: 'Respiratory Problems', details: ['Cough & Cold', 'Sinusitis', 'COPD', 'Asthma'] },
  ];

  const [openDisease, setOpenDisease] = useState(null);

  const toggleDisease = (index) => {
    if (openDisease === index) {
      setOpenDisease(null); // Close if clicked again
    } else {
      setOpenDisease(index); // Open this disease
    }
  };

  return (
    <div className="disease-container">
      {diseases.map((disease, index) => (
        <div
          key={index}
          className={`disease-item ${openDisease === index ? 'open' : ''}`}
          onClick={() => toggleDisease(index)}
        >
          <div className="disease-header">
            <FontAwesomeIcon icon={faDisease} className="disease-icon" />
            <span>{disease.name}</span>
            <FontAwesomeIcon icon={openDisease === index ? faChevronUp : faChevronDown} className="toggle-icon" />
          </div>
          <div className="disease-details">
            <ul>
              {disease.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainDiseases;
