import React from 'react';
import { useParams } from 'react-router-dom';
import './DiseaseDetailPage.css'

const DiseaseDetailPage = () => {
  const { diseaseName } = useParams();

  let content;

  switch (diseaseName) {
    case 'oa':  // Osteoarthritis
      content = (
        <>
          <p>Osteoarthritis (OA) is a degenerative joint disease where the protective cartilage that cushions the ends of bones wears down over time, leading to pain and stiffness.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Joint pain during or after movement</li>
            <li>Joint stiffness</li>
            <li>Loss of flexibility</li>
            <li>Grating sensation</li>
            <li>Swelling</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment options include pain relievers, physical therapy, and in severe cases, joint replacement surgery.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Shallaki (Boswellia), Guggulu, and Ashwagandha are anti-inflammatory and help reduce joint pain.</li>
            <li><strong>Oil Massage:</strong> Applying warm sesame oil or medicated oils like Mahanarayan oil helps improve joint mobility and reduce stiffness.</li>
            <li><strong>Diet:</strong> Consume anti-inflammatory foods like turmeric, ginger, and garlic. Avoid sour and fermented foods that increase inflammation.</li>
          </ul>

          <h2>Unani Solutions:</h2>
          <ul>
            <li><strong>Herbal Remedies:</strong> Use of herbs like Suranjan Shirin (Colchicum luteum), and Sibr (Aloe barbadensis) to reduce pain and inflammation.</li>
            <li><strong>Hijama (Cupping Therapy):</strong> Cupping on specific points helps detoxify the body and relieve pain.</li>
            <li><strong>Ilaj bil Ghiza (Dietotherapy):</strong> Emphasizes foods that strengthen bones and joints, like olive oil, dates, and figs.</li>
          </ul>
        </>
      );
      break;

    case 'ra':  // Rheumatoid Arthritis
      content = (
        <>
          <p>Rheumatoid arthritis (RA) is an autoimmune condition that causes chronic inflammation of the joints and other parts of the body.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Swollen, tender, and warm joints</li>
            <li>Joint stiffness, especially in the morning</li>
            <li>Fatigue, fever, and weight loss</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment options include DMARDs (disease-modifying antirheumatic drugs), NSAIDs, and biologic drugs to control inflammation.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Rasna, Ashwagandha, and Giloy help reduce inflammation and boost immunity.</li>
            <li><strong>Panchakarma Therapy:</strong> Detoxifying therapies like Virechana (therapeutic purgation) and Basti (medicated enema) help remove toxins (Ama) from the body.</li>
            <li><strong>Diet:</strong> Avoid inflammatory foods like dairy, fried, and processed foods. Incorporate turmeric, ginger, and fenugreek in daily meals.</li>
          </ul>

          <h2>Unani Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Herbs like Khulanjan (Alpinia galanga) and Halela Zard (Terminalia chebula) are used to reduce joint pain and inflammation.</li>
            <li><strong>Massage Therapy:</strong> Use of Roghan-e-Kunjad (Sesame oil) for massage helps relieve joint stiffness.</li>
            <li><strong>Ilaj bil Dawa (Drug Therapy):</strong> Prescribes Unani formulations such as Habb-e-Suranjan to manage arthritis pain.</li>
          </ul>
        </>
      );
      break;

    case 'klp':  // Knee Ligament Pain
      content = (
        <>
          <p>Knee ligament pain is often caused by injuries to the ligaments that stabilize the knee joint, such as the ACL, MCL, or PCL.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Knee instability or buckling</li>
            <li>Pain, especially during movement</li>
            <li>Swelling around the knee</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include rest, physical therapy, or surgery, depending on the severity of the ligament injury.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Nirgundi (Vitex negundo) and Shallaki (Boswellia) can help reduce swelling and pain.</li>
            <li><strong>Oil Massage:</strong> Applying Dhanwantharam or Mahanarayan oil helps in pain relief and faster recovery.</li>
            <li><strong>Ayurvedic Compresses:</strong> Potli (herbal compress) therapy with medicated herbs to relieve ligament pain.</li>
          </ul>

          <h2>Unani Solutions:</h2>
          <ul>
            <li><strong>Herbal Oils:</strong> Roghan-e-Kafoor (Camphor oil) and Roghan-e-Zaitoon (Olive oil) massages provide relief from pain.</li>
            <li><strong>Cupping Therapy:</strong> Wet cupping on the affected area to drain toxins and reduce pain.</li>
            <li><strong>Diet:</strong> Strengthen muscles and ligaments by including foods rich in calcium, proteins, and healthy fats such as almonds and olive oil.</li>
          </ul>
        </>
      );
      break;

    case 'lop':  // Lower Back Pain
      content = (
        <>
          <p>Lower back pain (LBP) can result from strain, disc issues, or conditions like degenerative disc disease.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Pain in the lower back, especially when bending or lifting</li>
            <li>Stiffness or limited range of motion</li>
            <li>Shooting or stabbing pain</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Common treatments include physical therapy, anti-inflammatory medications, and sometimes surgery for severe conditions.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Dashmool and Ashwagandha are used to strengthen the muscles and alleviate pain.</li>
            <li><strong>Kati Basti Therapy:</strong> A specialized Ayurvedic treatment where warm medicated oil is applied to the lower back for relief.</li>
            <li><strong>Diet:</strong> Include milk, ghee, and nourishing foods to strengthen bones and muscles. Avoid excessive sour and salty foods.</li>
          </ul>

          <h2>Unani Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Suranjan Talkh (Colchicum luteum) and Ratanjot (Onosma bracteatum) help reduce inflammation and pain.</li>
            <li><strong>Massage Therapy:</strong> Regular massage with Roghan-e-Zaitoon (Olive oil) helps in muscle relaxation and pain relief.</li>
            <li><strong>Ilaj bil Tadbeer (Regimenal Therapy):</strong> Unani physicians recommend hot compresses and specific exercises to strengthen the back.</li>
          </ul>
        </>
      );
      break;

    case 'frozen-shoulder':  // Frozen Shoulder
      content = (
        <>
          <p>Frozen shoulder, also known as adhesive capsulitis, causes stiffness and pain in the shoulder joint, making it difficult to move.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Limited range of motion in the shoulder</li>
            <li>Pain, especially when trying to move the arm</li>
            <li>Worsening stiffness over time</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes physical therapy, corticosteroid injections, and in severe cases, surgery.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Oil Massage:</strong> Daily massage with Dhanwantharam oil helps relieve stiffness and improve movement.</li>
            <li><strong>Panchakarma:</strong> Ayurvedic therapies such as Pizhichil (warm oil therapy) can help manage the condition.</li>
            <li><strong>Diet:</strong> Focus on anti-inflammatory foods like turmeric, ginger, and garlic.</li>
          </ul>

          <h2>Unani Solutions:</h2>
          <ul>
            <li><strong>Massage Therapy:</strong> Massage with Roghan-e-Baboona (Chamomile oil) for pain relief and muscle relaxation.</li>
            <li><strong>Cupping Therapy:</strong> Wet cupping to reduce pain and stiffness.</li>
            <li><strong>Ilaj bil Ghiza (Dietotherapy):</strong> Include foods like figs, dates, and olive oil to strengthen joints and improve flexibility.</li>
          </ul>
        </>
      );
        case 'gastric-acidity':
      content = (
        <>
          <p>Gastric Acidity is caused by excess acid production in the stomach, leading to discomfort and heartburn.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Heartburn and burning sensation in the chest</li>
            <li>Acid reflux, indigestion</li>
            <li>Nausea and bloating</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Antacids, proton pump inhibitors (PPIs), and dietary changes are often recommended.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Yashtimadhu (Licorice) and Amla (Indian Gooseberry) are effective in soothing the stomach lining.</li>
            <li><strong>Home Remedies:</strong> A teaspoon of cumin seeds boiled in water helps neutralize stomach acid.</li>
            <li><strong>Diet:</strong> Avoid spicy, fried, and acidic foods. Drink warm water with honey and lemon.</li>
          </ul>
        </>
      );
      break;

    case 'ibs':
      content = (
        <>
          <p>Irritable Bowel Syndrome (IBS) is a chronic gastrointestinal condition that affects the large intestine, causing discomfort and irregular bowel movements.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Abdominal pain or cramping</li>
            <li>Diarrhea or constipation</li>
            <li>Bloating and gas</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes dietary modifications, fiber supplements, and medications for symptom relief.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Bilva (Bael), Pippali (Long Pepper), and Triphala are used to regulate digestion.</li>
            <li><strong>Panchakarma:</strong> Therapies like Virechana (therapeutic purgation) help eliminate toxins.</li>
            <li><strong>Diet:</strong> Eat warm, light, and easily digestible foods. Avoid raw, cold, and spicy foods.</li>
          </ul>
        </>
      );
      break;

    case 'constipation':
      content = (
        <>
          <p>Constipation is the infrequent or difficult passage of stool, often caused by a lack of fiber or dehydration.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Difficulty passing stools</li>
            <li>Hard, lumpy stools</li>
            <li>Bloating and abdominal discomfort</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Laxatives, fiber supplements, and increased water intake are common treatments.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Triphala, Senna leaves, and Isabgol (Psyllium husk) are effective in relieving constipation.</li>
            <li><strong>Oil Therapy:</strong> A teaspoon of castor oil at bedtime can help stimulate bowel movements.</li>
            <li><strong>Diet:</strong> Increase intake of fruits, whole grains, and fiber-rich vegetables. Drink plenty of warm water.</li>
          </ul>
        </>
      );
      break;

    case 'migraine':
      content = (
        <>
          <p>Migraines are a type of recurring headache that causes intense throbbing pain, often accompanied by nausea, sensitivity to light, and visual disturbances.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Severe headache, usually on one side of the head</li>
            <li>Nausea, vomiting</li>
            <li>Sensitivity to light and sound</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Pain relievers, triptans, and preventive medications are often prescribed.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Brahmi, Shankhpushpi, and Jatamansi are known for their calming effects on the nervous system.</li>
            <li><strong>Nasyam Therapy:</strong> An Ayurvedic therapy that involves the administration of medicated oils through the nostrils to relieve migraine pain.</li>
            <li><strong>Diet:</strong> Avoid triggers such as cheese, caffeine, and alcohol. Incorporate ghee and milk in your diet for nourishment.</li>
          </ul>
        </>
      );
      break;

    case 'diabetes-type-2':
      content = (
        <>
          <p>Type 2 Diabetes is a chronic condition that affects the way your body processes glucose, leading to high blood sugar levels.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Increased thirst and hunger</li>
            <li>Frequent urination</li>
            <li>Fatigue and blurred vision</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Management includes blood sugar monitoring, diet, exercise, and medications like metformin or insulin.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Bitter gourd (Karela), Gudmar, and Vijaysar are effective in regulating blood sugar.</li>
            <li><strong>Ayurvedic Medications:</strong> Use of herbal formulations like Madhunashini Vati and Jamun seeds to control blood glucose levels.</li>
            <li><strong>Diet:</strong> Follow a Pitta-balancing diet with bitter vegetables like Karela and Neem. Avoid sugar, refined carbs, and excess oils.</li>
          </ul>
        </>
      );
      break;

    case 'hypothyroidism':
      content = (
        <>
          <p>Hypothyroidism is a condition where the thyroid gland doesn't produce enough hormones, leading to fatigue, weight gain, and sluggishness.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Fatigue and weakness</li>
            <li>Weight gain and cold intolerance</li>
            <li>Hair loss and dry skin</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment involves daily use of synthetic thyroid hormone (levothyroxine) to normalize hormone levels.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Kanchanar Guggulu, Ashwagandha, and Guggul help stimulate thyroid function.</li>
            <li><strong>Yoga and Pranayama:</strong> Incorporate poses like Sarvangasana (shoulder stand) and Ujjayi breathing to balance thyroid function.</li>
            <li><strong>Diet:</strong> Eat iodine-rich foods like seaweed, Himalayan salt, and dairy products. Avoid cruciferous vegetables like broccoli and cabbage.</li>
          </ul>
        </>
      );
      break;

   case 'nerve-pain':
      content = (
        <>
          <p>Nerve pain (Neuropathic pain) occurs when there is damage or dysfunction in the nervous system, often leading to sharp, burning, or stabbing pain.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Burning or shooting pain</li>
            <li>Numbness or tingling</li>
            <li>Increased sensitivity to touch</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include anti-seizure medications, antidepressants, and physical therapy.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashwagandha and Bala are used to strengthen the nerves and reduce pain.</li>
            <li><strong>Panchakarma Therapy:</strong> Basti (medicated enema) and Abhyanga (therapeutic massage) with medicated oils can help relieve nerve pain.</li>
            <li><strong>Diet:</strong> Consume nerve-strengthening foods like almonds, sesame seeds, and milk. Avoid cold, processed foods.</li>
          </ul>
        </>
      );
      break;

    case 'heel-pain':
      content = (
        <>
          <p>Heel pain, often caused by plantar fasciitis or Achilles tendinitis, is a common foot condition that results in discomfort and difficulty walking.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Pain in the heel, especially in the morning</li>
            <li>Swelling around the heel</li>
            <li>Difficulty walking or standing for long periods</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes rest, ice, physical therapy, and anti-inflammatory medications.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Nirgundi and Shallaki (Boswellia) help reduce inflammation and pain.</li>
            <li><strong>External Application:</strong> Use medicated oils like Mahanarayan oil or Kottamchukkadi tailam to massage the affected area.</li>
            <li><strong>Diet:</strong> Eat anti-inflammatory foods like turmeric, ginger, and garlic. Avoid cold and processed foods.</li>
          </ul>
        </>
      );
      break;

    case 'sciatica':
      content = (
        <>
          <p>Sciatica refers to pain that radiates along the path of the sciatic nerve, which runs from the lower back down to the legs. This is often caused by a herniated disk or bone spur compressing the nerve.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Pain radiating from the lower back down the leg</li>
            <li>Numbness or weakness in the leg or foot</li>
            <li>Sharp, burning, or shooting pain</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Medications, physical therapy, and, in some cases, surgery are conventional treatments for sciatica.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Guggulu, Ashwagandha, and Shatavari are helpful in managing pain and reducing inflammation.</li>
            <li><strong>Panchakarma Therapy:</strong> Kati Basti (warm oil treatment on the lower back) and Vasti (medicated enema) are highly beneficial for sciatica.</li>
            <li><strong>Diet:</strong> Follow a Vata-pacifying diet with warm, cooked foods, and avoid cold, dry, and processed foods.</li>
          </ul>
        </>
      );
      break; case 'piles':
      content = (
        <>
          <p>Piles, also known as hemorrhoids, are swollen blood vessels in the lower rectum or anus, leading to discomfort, pain, and sometimes bleeding.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Bleeding during bowel movements</li>
            <li>Itching and discomfort around the anus</li>
            <li>Swelling around the anus</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes over-the-counter creams, stool softeners, and sometimes surgical procedures.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Haritaki, Arshkuthar Ras, and Triphala help in relieving constipation and reducing the swelling of hemorrhoids.</li>
            <li><strong>Panchakarma Therapy:</strong> Basti (medicated enema) is used to cleanse the colon and relieve piles.</li>
            <li><strong>Diet:</strong> Eat fiber-rich foods like whole grains, fresh fruits, and vegetables. Drink plenty of water.</li>
          </ul>
        </>
      );
      break;

    case 'fissures':
      content = (
        <>
          <p>An anal fissure is a small tear in the lining of the anus, often causing sharp pain during bowel movements.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Severe pain during and after bowel movements</li>
            <li>Bright red blood on the stool or toilet paper</li>
            <li>Itching or irritation around the anus</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes stool softeners, topical pain relief ointments, and surgery in severe cases.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Guggul, Haritaki, and Pippali to ease digestion and heal fissures.</li>
            <li><strong>External Application:</strong> Use Jatyadi oil for external application to aid healing.</li>
            <li><strong>Diet:</strong> High-fiber diet with plenty of fluids to soften stool and reduce strain during bowel movements.</li>
          </ul>
        </>
      );
      break;

    case 'fistula':
      content = (
        <>
          <p>Fistula-in-ano is an abnormal connection between the end of the bowel and the skin near the anus, often resulting from an infection.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Pain and swelling around the anus</li>
            <li>Pus or blood discharge near the anus</li>
            <li>Recurrent infections in the perianal region</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Surgery is often required to remove the fistula and prevent further infections.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ksharasutra treatment (medicated thread therapy) is a unique Ayurvedic approach to treating fistulas.</li>
            <li><strong>External Application:</strong> Jatyadi oil or Nirgundi oil for external application to reduce inflammation and promote healing.</li>
            <li><strong>Diet:</strong> Eat a diet rich in fiber, including whole grains, green vegetables, and fruits.</li>
          </ul>
        </>
      );
      break;

    case 'dysmenorrhea':
      content = (
        <>
          <p>Dysmenorrhea refers to painful menstrual cramps that occur before or during menstruation.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Severe cramps in the lower abdomen</li>
            <li>Back pain, nausea, or headaches</li>
            <li>Weakness or fatigue</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes pain relief medications and hormonal treatments like oral contraceptives.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Dashmool, Shatavari, and Ashoka are commonly used to relieve pain and balance hormones.</li>
            <li><strong>Therapies:</strong> Abhyanga (massage) with warm sesame oil can relieve cramps and promote relaxation.</li>
            <li><strong>Diet:</strong> Avoid cold and spicy foods during menstruation, and consume warm, nourishing foods.</li>
          </ul>
        </>
      );
      break;

    case 'irregular-menses':
      content = (
        <>
          <p>Irregular menstrual cycles can be caused by hormonal imbalances, stress, or underlying health conditions.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Irregular or missed periods</li>
            <li>Unusual bleeding patterns</li>
            <li>Hormonal imbalance symptoms like acne or hair loss</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment often involves hormonal therapies or contraceptives to regulate cycles.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Shatavari, Ashoka, and Lodhra are effective in regulating the menstrual cycle.</li>
            <li><strong>Panchakarma Therapy:</strong> Virechana (purgation therapy) and Basti can help detoxify the body and restore hormonal balance.</li>
            <li><strong>Diet:</strong> Follow a balanced diet with plenty of fruits, vegetables, and warm, cooked foods.</li>
          </ul>
        </>
      );
      break;

    case 'excess-bleeding':
      content = (
        <>
          <p>Excessive menstrual bleeding (menorrhagia) can be caused by hormonal imbalances, fibroids, or other health conditions.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Heavy bleeding lasting more than 7 days</li>
            <li>Weakness or fatigue due to blood loss</li>
            <li>Frequent changing of sanitary products</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes hormonal therapies, iron supplements, or surgical interventions.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashoka, Lodhra, and Musta are used to manage heavy bleeding and strengthen the uterus.</li>
            <li><strong>Therapies:</strong> Abhyanga and Shirodhara can calm the nervous system and balance hormones.</li>
            <li><strong>Diet:</strong> Include iron-rich foods like spinach, pomegranate, and beetroot. Avoid cold and raw foods.</li>
          </ul>
        </>
      );
      break;

    case 'pcos':
      content = (
        <>
          <p>Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that affects the ovaries and can lead to irregular periods, infertility, and metabolic issues.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Irregular or absent periods</li>
            <li>Excess facial or body hair (hirsutism)</li>
            <li>Acne and weight gain</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes hormonal birth control, medications to regulate menstruation, and lifestyle changes.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Shatavari, Ashoka, and Triphala help in balancing hormones and detoxifying the body.</li>
            <li><strong>Panchakarma Therapy:</strong> Virechana and Basti therapies are beneficial for detoxifying and balancing Vata and Kapha doshas.</li>
            <li><strong>Diet:</strong> Focus on a Kapha-balancing diet, rich in whole grains, fresh vegetables, and low in processed foods and sugar.</li>
          </ul>
        </>
      );
      break;

    case 'pcod':
      content = (
        <>
          <p>Polycystic Ovary Disease (PCOD) is a condition where the ovaries produce immature or partially mature eggs, leading to various hormonal and metabolic imbalances.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Irregular periods</li>
            <li>Weight gain and difficulty losing weight</li>
            <li>Acne, hair loss, and excessive hair growth</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Similar to PCOS, PCOD treatment includes hormonal therapies, lifestyle modifications, and medications.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashoka, Shatavari, and Kanchanar Guggul help in balancing hormones and reducing ovarian cysts.</li>
            <li><strong>Therapies:</strong> Abhyanga (oil massage) and Udvartana (dry powder massage) for weight management and detoxification.</li>
            <li><strong>Diet:</strong> Include Kapha-pacifying foods such as barley, oats, and vegetables. Avoid sugar, dairy, and processed foods.</li>
          </ul>
        </>
      );
      break; 
      case 'acne':
     case 'pimples':
      content = (
        <>
          <p>Acne and pimples are skin conditions that occur when hair follicles become clogged with oil and dead skin cells, leading to inflammation.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Whiteheads, blackheads, or pustules on the skin</li>
            <li>Inflammation and redness</li>
            <li>Sometimes pain or tenderness</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatments include topical creams, oral medications, and sometimes antibiotics.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Neem, Turmeric, and Aloe Vera are commonly used to purify the blood and reduce inflammation.</li>
            <li><strong>Face Packs:</strong> Use sandalwood or Multani Mitti (Fuller's earth) to cool and cleanse the skin.</li>
            <li><strong>Diet:</strong> Avoid oily, spicy, and fried foods. Increase your intake of fresh vegetables and fruits, especially those with high water content like cucumber and watermelon.</li>
          </ul>
        </>
      );
      break;

    case 'eczema':
      content = (
        <>
          <p>Eczema is a condition that makes your skin red, itchy, and inflamed. It's often triggered by an overactive immune response to allergens.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Itchy, dry, or scaly skin</li>
            <li>Red or inflamed patches</li>
            <li>Oozing or crusting in severe cases</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatments include moisturizers, corticosteroid creams, and antihistamines to control itching and inflammation.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Neem, Guduchi, and Manjistha help purify the blood and soothe irritated skin.</li>
            <li><strong>External Application:</strong> Apply coconut oil or neem oil to moisturize and heal the skin.</li>
            <li><strong>Diet:</strong> Avoid sour, spicy, and fermented foods. Consume cooling foods like cucumber, coconut water, and leafy greens.</li>
          </ul>
        </>
      );
      break;

    case 'psoriasis':
      content = (
        <>
          <p>Psoriasis is a chronic autoimmune skin condition characterized by red, scaly patches on the skin, often accompanied by itching or pain.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Red patches of skin covered with thick, silvery scales</li>
            <li>Dry, cracked skin that may bleed</li>
            <li>Itching, burning, or soreness</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatments include topical ointments, phototherapy, and immunosuppressant medications.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Neem, Turmeric, and Guduchi help reduce inflammation and detoxify the body.</li>
            <li><strong>Panchakarma:</strong> Virechana (purgation therapy) and Raktamokshana (bloodletting) are recommended for detoxification.</li>
            <li><strong>Diet:</strong> Avoid foods that aggravate Pitta dosha, like spicy, acidic, and fried foods. Increase intake of cooling and alkalizing foods such as cucumber, bitter gourd, and coconut water.</li>
          </ul>
        </>
      );
      break;

    case 'skin-allergy':
      content = (
        <>
          <p>Skin allergies are immune system reactions to certain substances, leading to redness, itching, and inflammation.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Red, inflamed, and itchy skin</li>
            <li>Rashes or hives</li>
            <li>Swelling in severe cases</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatments include antihistamines, topical creams, and avoiding the triggering substances.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Neem, Turmeric, and Amalaki help to detoxify and reduce allergic reactions.</li>
            <li><strong>External Application:</strong> Apply a paste of sandalwood or turmeric to the affected area to soothe itching and inflammation.</li>
            <li><strong>Diet:</strong> Eat Pitta-pacifying foods, avoid spicy, sour, and fermented foods, and consume cooling herbs like coriander and fennel.</li>
          </ul>
        </>
      );
      break;

    case 'white-patch':
      content = (
        <>
          <p>White patches (Vitiligo) occur due to a loss of pigment in the skin, leading to white, depigmented areas.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>White or light-colored patches on the skin</li>
            <li>May affect any area, including the face, hands, and feet</li>
            <li>Skin sensitivity to sunlight</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include topical corticosteroids, light therapy, and in some cases, skin grafts.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Bakuchi (Psoralea), Amalaki, and Haritaki help restore pigmentation.</li>
            <li><strong>Therapies:</strong> Use Bakuchi oil externally on the patches. Panchakarma therapies like Virechana (purgation) and Rakta Mokshana (bloodletting) are also beneficial.</li>
            <li><strong>Diet:</strong> Avoid Pitta-aggravating foods and include more antioxidants in the diet, such as fresh fruits, particularly berries and citrus.</li>
          </ul>
        </>
      );
      break;

    // Sexual Problems
    case 'sp':
      content = (
        <>
          <p>Spermatorrhea (SP) is the involuntary leakage of semen, which can lead to weakness and fatigue.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Involuntary discharge of semen during sleep or urination</li>
            <li>Weakness or fatigue</li>
            <li>Loss of concentration or sexual desire</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include stress management, medication, and lifestyle changes.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashwagandha, Shilajit, and Safed Musli to boost stamina and reduce involuntary discharge.</li>
            <li><strong>Therapies:</strong> Vajikarana therapy (a form of Ayurvedic therapy) helps to rejuvenate sexual health.</li>
            <li><strong>Diet:</strong> Eat energy-boosting foods like almonds, dates, and milk. Avoid excessive masturbation or sexual activity.</li>
          </ul>
        </>
      );
      break;

    case 'nf':
      content = (
        <>
          <p>Nocturnal Emission (NF), also known as wet dreams, is the involuntary release of semen during sleep, often associated with sexual dreams.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Involuntary release of semen during sleep</li>
            <li>Weakness or fatigue in severe cases</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes behavioral therapies, stress reduction, and lifestyle modifications.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Shatavari, Ashwagandha, and Kapikachhu help in balancing reproductive hormones.</li>
            <li><strong>Therapies:</strong> Vajikarana therapy is beneficial for rejuvenating sexual health and reducing involuntary emissions.</li>
            <li><strong>Diet:</strong> Include almonds, ghee, and milk in the diet. Avoid spicy foods and stress-inducing factors.</li>
          </ul>
        </>
      );
      break;

    case 'ed':
      content = (
        <>
          <p>Erectile Dysfunction (ED) is the inability to maintain or achieve an erection sufficient for satisfactory sexual performance.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Difficulty achieving or maintaining an erection</li>
            <li>Reduced sexual desire</li>
            <li>Emotional distress or relationship issues</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment includes oral medications, lifestyle changes, and therapy to address emotional factors.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashwagandha, Shilajit, and Gokshura are known for their rejuvenating properties and improving sexual health.</li>
            <li><strong>Therapies:</strong> Panchakarma therapies like Virechana can help detoxify the body and enhance vitality.</li>
            <li><strong>Diet:</strong> Include nuts, seeds, and healthy fats like ghee and olive oil. Avoid processed foods and alcohol.</li>
          </ul>
        </>
      );
      break;

    case 'pe':
      content = (
        <>
          <p>Premature Ejaculation (PE) is when ejaculation occurs with minimal sexual stimulation, often before the person wishes.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Ejaculation that occurs sooner than desired</li>
            <li>Emotional distress or embarrassment</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include behavioral techniques, counseling, or medications.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashwagandha, Kapikachhu, and Shatavari can enhance stamina and sexual health.</li>
            <li><strong>Therapies:</strong> Vajikarana therapy is recommended for strengthening sexual function.</li>
            <li><strong>Diet:</strong> Consume foods rich in zinc and vitamins, such as nuts and seeds. Avoid spicy and stimulating foods.</li>
          </ul>
        </>
      );
      break;

    case 'infertility':
      content = (
        <>
          <p>Infertility is the inability to conceive after one year of unprotected intercourse, affecting both men and women.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Inability to conceive after a year of trying</li>
            <li>Irregular menstrual cycles (in women)</li>
            <li>Low sperm count or motility (in men)</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may involve hormonal therapies, assisted reproductive technologies (ART), and lifestyle changes.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashwagandha, Shatavari, and Gokshura improve reproductive health and hormonal balance.</li>
            <li><strong>Diet:</strong> Eat a balanced diet rich in fruits, vegetables, whole grains, and healthy fats. Avoid processed foods and refined sugars.</li>
            <li><strong>Therapies:</strong> Panchakarma and lifestyle modifications help detoxify the body and enhance fertility.</li>
          </ul>
        </>
      );
      break;

     case 'anxiety':
      content = (
        <>
          <p>Anxiety is a common mental health disorder characterized by persistent feelings of worry, fear, or apprehension that can interfere with daily activities.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Excessive worrying about various aspects of life</li>
            <li>Restlessness or feeling on edge</li>
            <li>Difficulty concentrating or mind going blank</li>
            <li>Physical symptoms such as increased heart rate, sweating, or trembling</li>
            <li>Sleep disturbances like insomnia or excessive sleeping</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include therapy (like cognitive-behavioral therapy), medications (such as SSRIs or benzodiazepines), and lifestyle changes.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Ashwagandha and Brahmi are effective in reducing stress and promoting relaxation.</li>
            <li><strong>Yoga and Meditation:</strong> Regular practices like Pranayama (breathing exercises) and mindfulness meditation can help calm the mind.</li>
            <li><strong>Aromatherapy:</strong> Essential oils such as lavender can help reduce anxiety levels when diffused or applied topically.</li>
            <li><strong>Diet:</strong> Consume calming foods such as bananas, almonds, and chamomile tea while avoiding caffeine and refined sugars.</li>
          </ul>
        </>
      );
      break;
       case 'dandruff':
      content = (
        <>
          <p>Dandruff is a common scalp condition characterized by flaking skin, which can lead to itching and discomfort.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>White or yellow flakes on the scalp and hair</li>
            <li>Itching or irritation on the scalp</li>
            <li>Dry scalp or oily patches</li>
            <li>Redness or inflammation in severe cases</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include anti-dandruff shampoos containing ingredients like ketoconazole, selenium sulfide, or zinc pyrithione. In some cases, topical steroids or antifungal medications may be prescribed.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbal Pastes:</strong> A paste made from neem leaves and curd can be applied to the scalp to soothe irritation and reduce flaking.</li>
            <li><strong>Oil Treatments:</strong> Massaging the scalp with warm coconut oil or olive oil helps hydrate the scalp and combat dryness.</li>
            <li><strong>Amla Oil:</strong> Applying amla oil helps nourish the scalp and reduces dandruff effectively.</li>
            <li><strong>Dietary Changes:</strong> Incorporating foods rich in zinc and omega-3 fatty acids, like nuts and fish, may improve scalp health.</li>
          </ul>
        </>
      );
      break;

    // Alopecia
    case 'alopecia':
      content = (
        <>
          <p>Alopecia refers to hair loss that can occur in patches (Alopecia Areata) or can be more widespread. It can affect people of all ages.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Sudden hair loss in round patches on the scalp or other areas</li>
            <li>Thinning of hair on the scalp</li>
            <li>Changes in nail texture (brittle nails or pitting)</li>
            <li>Itching or burning sensations before hair loss occurs</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatments may include topical corticosteroids, minoxidil, or other immune-modulating medications. In severe cases, light therapy or hair transplant procedures may be considered.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Bhringraj and Amla can be taken in supplement form or used as hair oils to promote hair growth and health.</li>
            <li><strong>Scalp Massage:</strong> Regularly massaging the scalp with oils such as castor oil can stimulate hair follicles and promote regrowth.</li>
            <li><strong>Diet:</strong> A diet rich in proteins, vitamins (especially Vitamin D), and minerals (like iron and zinc) supports hair health.</li>
            <li><strong>Stress Management:</strong> Practices like yoga, meditation, and pranayama can help reduce stress, which is a known trigger for alopecia.</li>
          </ul>
        </>
      );
      break;
      case 'obesity':
      content = (
        <>
          <p>Obesity is a complex health issue characterized by excessive body fat, which can increase the risk of various health problems.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Increased body weight and body mass index (BMI)</li>
            <li>Difficulty in physical activities</li>
            <li>Shortness of breath</li>
            <li>Excessive sweating</li>
            <li>Joint pain and discomfort</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment typically involves lifestyle changes such as diet modifications, increased physical activity, and behavioral therapy. In some cases, medications or surgery may be recommended.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbal Supplements:</strong> Triphala and Guggul can help in weight management and metabolism.</li>
            <li><strong>Dietary Changes:</strong> Focus on a balanced diet rich in whole foods, fiber, and low in processed sugars and fats.</li>
            <li><strong>Regular Exercise:</strong> Engaging in yoga, walking, and other forms of physical activity to promote weight loss.</li>
            <li><strong>Hydration:</strong> Drinking warm water with lemon and honey in the morning can aid digestion and support metabolism.</li>
          </ul>
        </>
      );
      break;

    // High Blood Pressure
    case 'high-blood-pressure':
      content = (
        <>

          <p>High blood pressure is a chronic condition that occurs when the force of the blood against the artery walls is too high, leading to serious health complications.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Often asymptomatic; many may not know they have it</li>
            <li>Headaches</li>
            <li>Shortness of breath</li>
            <li>Nosebleeds</li>
            <li>Flushing</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Common treatments include lifestyle changes (diet and exercise) and medications such as diuretics, ACE inhibitors, and beta-blockers.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbs:</strong> Garlic, Ashwagandha, and Arjuna are known for their blood pressure-lowering properties.</li>
            <li><strong>Dietary Management:</strong> A diet low in sodium, rich in fruits and vegetables, and whole grains is recommended.</li>
            <li><strong>Stress Reduction:</strong> Practices like yoga and meditation help manage stress and lower blood pressure.</li>
            <li><strong>Regular Physical Activity:</strong> Consistent exercise can help reduce blood pressure levels significantly.</li>
          </ul>
        </>
      );
      break;

    // Hyperlipidemia
    case 'hyperlipidemia':
      content = (
        <>

          <p>Hyperlipidemia refers to elevated levels of lipids (fats) in the blood, which can lead to cardiovascular diseases.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Often asymptomatic until serious complications arise</li>
            <li>Chest pain (angina)</li>
            <li>Fatigue</li>
            <li>Shortness of breath</li>
            <li>Symptoms of a heart attack or stroke in severe cases</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Common treatments include lifestyle changes (diet and exercise) and medications like statins and fibrates to lower lipid levels.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Dietary Modifications:</strong> Emphasize a diet high in omega-3 fatty acids (found in fish) and soluble fiber (oats, beans).</li>
            <li><strong>Herbs:</strong> Guggul and Fenugreek have been shown to help lower cholesterol levels.</li>
            <li><strong>Regular Exercise:</strong> Physical activity can help manage lipid levels and improve overall heart health.</li>
            <li><strong>Weight Management:</strong> Maintaining a healthy weight can significantly improve lipid profiles.</li>
          </ul>
        </>
      );
      break;
        case 'cough-and-cold':
      content = (
        <>

          <p>Cough and cold are common viral infections that affect the upper respiratory tract, causing discomfort and inconvenience.</p>
          
          <h2>Symptoms:</h2>
          <ul>
            <li>Runny or stuffy nose</li>
            <li>Sore throat</li>
            <li>Coughing</li>
            <li>Fatigue</li>
            <li>Fever (in some cases)</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment typically involves rest, hydration, and over-the-counter medications to relieve symptoms such as pain and congestion.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbal Teas:</strong> Ginger tea with honey and lemon can soothe the throat and reduce coughing.</li>
            <li><strong>Steam Inhalation:</strong> Inhaling steam with eucalyptus oil can help clear nasal congestion.</li>
            <li><strong>Turmeric Milk:</strong> A glass of warm milk with turmeric has anti-inflammatory properties.</li>
            <li><strong>Spices:</strong> Using spices like black pepper and cumin in food can enhance immunity.</li>
          </ul>
        </>
      );
      break;

    // Sinusitis
    case 'sinusitis':
      content = (
        <>
          <p>Sinusitis is an inflammation of the sinus linings, which can be caused by infections, allergies, or other factors.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Facial pain or pressure</li>
            <li>Stuffy or runny nose</li>
            <li>Loss of smell or taste</li>
            <li>Cough</li>
            <li>Fever</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment may include nasal decongestants, saline nasal sprays, antibiotics (for bacterial sinusitis), and pain relievers.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Nasya Therapy:</strong> Applying medicated oils through the nostrils to clear sinus passages.</li>
            <li><strong>Herbs:</strong> Tulsi (Holy Basil) and Peppermint tea can help relieve symptoms.</li>
            <li><strong>Steam Inhalation:</strong> Inhaling steam infused with herbs like eucalyptus can ease congestion.</li>
            <li><strong>Warm Compress:</strong> Applying a warm compress to the face can alleviate sinus pressure.</li>
          </ul>
        </>
      );
      break;

    // COPD
    case 'copd':
      content = (
        <>
          <h1>Chronic Obstructive Pulmonary Disease (COPD)</h1>
          <p>COPD is a progressive lung disease that makes it difficult to breathe due to airflow obstruction and breathing-related problems.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Shortness of breath</li>
            <li>Chronic cough</li>
            <li>Wheezing</li>
            <li>Chest tightness</li>
            <li>Frequent respiratory infections</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Management includes bronchodilators, steroids, oxygen therapy, and pulmonary rehabilitation.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbal Remedies:</strong> Herbs like Pippali and Guggul can support lung health.</li>
            <li><strong>Breathing Exercises:</strong> Pranayama (yogic breathing techniques) to improve lung capacity.</li>
            <li><strong>Dietary Changes:</strong> A diet rich in antioxidants (fruits and vegetables) can help manage symptoms.</li>
            <li><strong>Turmeric and Ginger:</strong> These spices have anti-inflammatory properties that can benefit respiratory health.</li>
          </ul>
        </>
      );
      break;

    // Asthma
    case 'asthma':
      content = (
        <>
          <p>Asthma is a chronic condition characterized by the inflammation of the airways, leading to difficulty in breathing.</p>

          <h2>Symptoms:</h2>
          <ul>
            <li>Wheezing</li>
            <li>Shortness of breath</li>
            <li>Chest tightness</li>
            <li>Frequent coughing, especially at night or early morning</li>
          </ul>

          <h2>Conventional Treatment:</h2>
          <p>Treatment often involves inhalers (bronchodilators and corticosteroids) and avoiding triggers.</p>

          <h2>Ayurvedic Solutions:</h2>
          <ul>
            <li><strong>Herbal Formulations:</strong> Sitopaladi Churna is commonly used for respiratory health.</li>
            <li><strong>Yoga and Pranayama:</strong> Regular practice helps strengthen respiratory muscles and improve lung function.</li>
            <li><strong>Dietary Adjustments:</strong> Avoiding allergens and consuming anti-inflammatory foods can help manage asthma symptoms.</li>
            <li><strong>Ginger and Turmeric:</strong> Both can help reduce inflammation and improve overall respiratory function.</li>
          </ul>
        </>
      );
      break;
       case 'lsd':
      content = (
        <>
          <p>LSD is a powerful hallucinogenic drug that alters perception, mood, and a range of cognitive processes. It is known for inducing profound changes in consciousness and is often used recreationally.</p>

          <h2>Effects and Symptoms:</h2>
          <ul>
            <li>Visual distortions and hallucinations</li>
            <li>Altered sense of time and space</li>
            <li>Intense emotional experiences</li>
            <li>Enhanced sensory perception</li>
            <li>Possible anxiety or panic attacks</li>
            <li>Flashbacks long after use</li>
          </ul>

          <h2>Risks and Side Effects:</h2>
          <p>While LSD is not considered physically addictive, it can lead to psychological dependency and may cause anxiety, paranoia, and mood swings during and after use.</p>

          <h2>Ayurvedic Solutions:</h2>
          <p>While there is no specific Ayurvedic treatment for LSD effects, Ayurveda can help in managing anxiety and emotional disturbances:</p>
          <ul>
            <li><strong>Herbal Remedies:</strong> Ashwagandha and Brahmi are known for their calming properties and can help reduce anxiety.</li>
            <li><strong>Yoga and Meditation:</strong> Regular practice can promote mental clarity and emotional stability.</li>
            <li><strong>Aromatherapy:</strong> Essential oils like lavender can help soothe anxiety and promote relaxation.</li>
            <li><strong>Dietary Adjustments:</strong> Consuming a balanced diet rich in fruits, vegetables, and whole grains can support overall mental health.</li>
            <li><strong>Massage Therapy:</strong> Abhyanga (Ayurvedic oil massage) can help relieve stress and promote relaxation.</li>
          </ul>
        </>
      );
      break;

    default:
      content = <p>Details about {diseaseName} will go here...</p>;
  }



  return (
    <div>
      <h1>{diseaseName ? diseaseName.replace('-', ' ').toUpperCase() : 'Disease'}</h1>
      {content}
    </div>
  );
};

export default DiseaseDetailPage;