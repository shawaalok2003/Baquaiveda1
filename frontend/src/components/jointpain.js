import React from 'react';

const solutions = {
  'oa': {
    title: "Osteoarthritis (OA)",
    ayurvedicSolution: "In Ayurveda, Osteoarthritis is known as Sandhivata. Treatment includes herbs like Shallaki, Ashwagandha, and Guggulu. Panchakarma therapies like Janu Basti (oil retention therapy) and Abhyanga (massage) are also beneficial.",
    unaniSolution: "In Unani medicine, OA is treated with a focus on reducing inflammation using herbs such as Suranjan Shirin and Roghan-e-Baboona (chamomile oil massage). Dry cupping is also used to relieve pain."
  },
  'ra': {
    title: "Rheumatoid Arthritis (RA)",
    ayurvedicSolution: "RA in Ayurveda is called Amavata. Treatment involves cleansing toxins (Ama) using Panchakarma, herbs like Guggulu, Rasna, and lifestyle changes like hot water fomentation.",
    unaniSolution: "In Unani, RA is linked to excess phlegm (Balgham). Treatment includes herbal decoctions of Zanjabeel (Ginger), Hijama (wet cupping), and Ilaj-bil-Ghiza (diet therapy)."
  },
  'klp': {
    title: "Knee Ligament Pain (KLP)",
    ayurvedicSolution: "Ayurveda treats KLP with oil therapies like Patra Pinda Sweda and herbs like Nirgundi. Joint mobility exercises and Mahanarayan oil massage are commonly used.",
    unaniSolution: "In Unani, KLP is treated with Roghan-e-Zaitoon (olive oil massage) and strengthening the muscles with the use of Murakkab therapy like Kafoor and Arq-e-Gulab."
  },
  'lop': {
    title: "Lower Back Pain (LOP)",
    ayurvedicSolution: "Ayurvedic remedies for LOP include Guggulu formulations, Kati Basti (medicated oil treatment), and stretches like Yoga’s Bhujangasana (cobra pose).",
    unaniSolution: "Unani treatment for LOP includes Hijama (cupping therapy), local massage with Roghan-e-Zaitoon, and using Musakkin drugs like Shibb-e-Yamani."
  },
  'frozen-shoulder': {
    title: "Frozen Shoulder",
    ayurvedicSolution: "For frozen shoulder, Ayurveda suggests Panchakarma therapies like Abhyanga (oil massage), and herbs like Bala and Guggulu for reducing inflammation.",
    unaniSolution: "Unani recommends moist heat and massage with Roghan-e-Kunjud (sesame oil), as well as Hijama (cupping) to restore shoulder mobility."
  },
  'nerve-pain': {
    title: "Nerve Pain",
    ayurvedicSolution: "In Ayurveda, nerve pain (Vata imbalance) is treated with Ashwagandha, Dashmool, and therapies like Kati Basti and Vasti (enema).",
    unaniSolution: "Unani treats nerve pain using Ilaj-bil-Tadbeer (regimenal therapy) with massages using Roghan-e-Badam and cupping therapy."
  },
  'heel-pain': {
    title: "Heel Pain",
    ayurvedicSolution: "Heel pain (Vatakantaka) is treated with Pinda Sweda (herbal bolus), Guggulu-based medicines, and stretching exercises like Padahasthasana.",
    unaniSolution: "Unani focuses on herbal oils like Roghan-e-Zard and fomentation with warm towels to reduce inflammation and pain."
  },
  'sciatica': {
    title: "Sciatica",
    ayurvedicSolution: "Sciatica, or Gridhrasi, is treated with Ayurvedic massages using Mahanarayan oil, Pinda Sweda, and herbs like Guggulu, Rasna, and Eranda.",
    unaniSolution: "Unani offers Hijama (cupping therapy) and massage with Roghan-e-Kafoor for treating sciatica."
  }
};
const DiseaseDetailPage = ({ diseaseName }) => {
  const diseaseKey = diseaseName.toLowerCase().replace(/\s+/g, '-');
  const content = solutions[diseaseKey] || {};
  return (
    <div className="disease-detail-container">
      <h1>{content.title}</h1>
      <h2>Ayurvedic Solution</h2>
      <p>{content.ayurvedicSolution}</p>
      <h2>Unani Solution</h2>
      <p>{content.unaniSolution}</p>
    </div>
  );
};

export default DiseaseDetailPage;