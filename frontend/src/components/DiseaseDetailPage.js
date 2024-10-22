import React,{ useState } from 'react';
import { useParams} from 'react-router-dom';
import './DiseaseDetailPage.css'

const DiseaseDetailPage = () => {
  const { diseaseName } = useParams();
    // Define state for reviews and current review index
    const reviews = [
      { name: 'John D.', text: 'After the treatment, my knee pain has significantly reduced.', image: '/images/siu1.jpg' },
      { name: 'Mary A.', text: 'I was skeptical, but the improvement in joint flexibility is undeniable.', image: 'path_to_image2.jpg' },
      { name: 'Sam K.', text: 'Discomfort minimized after following the recommended plan.', image: 'path_to_image3.jpg' },
      { name: 'Emily W.', text: 'Feeling much better and more mobile after the treatment.', image: 'path_to_image4.jpg' },
      { name: 'Robert T.', text: 'Great results, I can walk longer distances without pain.', image: 'path_to_image5.jpg' }
    ];
  
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const currentReview = reviews[currentReviewIndex];
  
    // Toggle functions
    const showNextReview = () => {
      setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
    };
  
    const showPreviousReview = () => {
      setCurrentReviewIndex((currentReviewIndex - 1 + reviews.length) % reviews.length);
    };
  
  let content;

  switch (diseaseName) {
    // case 'oa':  // Osteoarthritis
    //   content = (
    //     <>
    //       <p>Osteoarthritis (OA) is a degenerative joint disease where the protective cartilage that cushions the ends of bones wears down over time, leading to pain and stiffness.</p>
          
    //       <h2>Symptoms:</h2>
    //       <ul>
    //         <li>Joint pain during or after movement</li>
    //         <li>Joint stiffness</li>
    //         <li>Loss of flexibility</li>
    //         <li>Grating sensation</li>
    //         <li>Swelling</li>
    //       </ul>

    //       <h2>Conventional Treatment:</h2>
    //       <p>Treatment options include pain relievers, physical therapy, and in severe cases, joint replacement surgery.</p>

    //       <h2>Ayurvedic Solutions:</h2>
    //       <ul>
    //         <li><strong>Herbs:</strong> Shallaki (Boswellia), Guggulu, and Ashwagandha are anti-inflammatory and help reduce joint pain.</li>
    //         <li><strong>Oil Massage:</strong> Applying warm sesame oil or medicated oils like Mahanarayan oil helps improve joint mobility and reduce stiffness.</li>
    //         <li><strong>Diet:</strong> Consume anti-inflammatory foods like turmeric, ginger, and garlic. Avoid sour and fermented foods that increase inflammation.</li>
    //       </ul>

    //       <h2>Unani Solutions:</h2>
    //       <ul>
    //         <li><strong>Herbal Remedies:</strong> Use of herbs like Suranjan Shirin (Colchicum luteum), and Sibr (Aloe barbadensis) to reduce pain and inflammation.</li>
    //         <li><strong>Hijama (Cupping Therapy):</strong> Cupping on specific points helps detoxify the body and relieve pain.</li>
    //         <li><strong>Ilaj bil Ghiza (Dietotherapy):</strong> Emphasizes foods that strengthen bones and joints, like olive oil, dates, and figs.</li>
    //       </ul>
    //     </>
    //   );
    //   break;
    case 'oa':  // Osteoarthritis
  content = (
    <>
      {/* Container for text and image */}
      <div className="disease-detail flex-container">
        {/* Left Div: Disease problems */}
        <div className="disease-detail-left">
          <h2>Problems of Osteoarthritis (OA):</h2>
          <ul>
            <li>Degeneration of joint cartilage</li>
            <li>Pain and stiffness, especially after movement</li>
            <li>Loss of joint flexibility</li>
            <li>Swelling around the joints</li>
            <li>Grating sensation when moving the joint</li>
          </ul>
          <p>OA can severely affect quality of life, making it difficult to perform daily tasks. It usually develops over time due to wear and tear on the joints.</p>
        </div>

        {/* Right Div: Image */}
        <div className="disease-detail-right">
          <img src="/images/siu1.jpg" alt="Osteoarthritis condition" />
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h2>Patient Reviews:</h2>
        <div className="review-slider">
          <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
          <div className="review-content">
            <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
            <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
          </div>
          <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
        </div>
      </div>
    </>
  );
  break;
     
  
    
    

    case 'neck-pain':  
    content = (
      <>
        {/* Container for text and image */}
        <div className="disease-detail flex-container">
          {/* Left Div: Disease problems */}
          <div className="disease-detail-left">
            <h2>Problems of Neck Pain:</h2>
            <ul>
              <li>Stiffness in the neck</li>
              <li>Difficulty in moving the head</li>
              <li>Sharp or dull pain in the neck</li>
              <li>Muscle spasms in the neck and shoulders</li>
            </ul>
            <p>Neck pain is often caused by muscle strain, poor posture, or underlying conditions like arthritis or a herniated disc.</p>
          </div>
  
          {/* Right Div: Image */}
          <div className="disease-detail-right">
            <img src="/images/neck-pain.jpg" alt="Neck pain condition" />
          </div>
        </div>
  
        {/* Review Section */}
        <div className="review-section">
          <h2>Patient Reviews:</h2>
          <div className="review-slider">
            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
            <div className="review-content">
              {/* Reviews would go here */}
            </div>
            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
          </div>
        </div>
      </>
    );
    break;
  

    case 'ra':  
  content = (
    <>
      {/* Container for text and image */}
      <div className="disease-detail flex-container">
        {/* Left Div: Disease problems */}
        <div className="disease-detail-left">
          <h2>Problems of Rheumatoid Arthritis (RA):</h2>
          <ul>
            <li>Swollen, tender, and warm joints</li>
            <li>Joint stiffness, especially in the morning</li>
            <li>Fatigue, fever, and weight loss</li>
          </ul>
          <p>RA is an autoimmune condition causing chronic inflammation of the joints and other parts of the body.</p>
        </div>

        {/* Right Div: Image */}
        <div className="disease-detail-right">
          <img src="/images/ra.jpg" alt="Rheumatoid Arthritis condition" />
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h2>Patient Reviews:</h2>
        <div className="review-slider">
          <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
          <div className="review-content">
            {/* Reviews would go here */}
          </div>
          <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
        </div>
      </div>
    </>
  );
  break;


  case 'klp':  
  content = (
    <>
      {/* Container for text and image */}
      <div className="disease-detail flex-container">
        {/* Left Div: Disease problems */}
        <div className="disease-detail-left">
          <h2>Problems of Knee Ligament Pain:</h2>
          <ul>
            <li>Knee instability or buckling</li>
            <li>Pain, especially during movement</li>
            <li>Swelling around the knee</li>
          </ul>
          <p>Knee ligament pain is often caused by injuries to the ligaments like the ACL, MCL, or PCL that stabilize the knee joint.</p>
        </div>

        {/* Right Div: Image */}
        <div className="disease-detail-right">
          <img src="/images/knee-ligament-pain.jpg" alt="Knee Ligament Pain condition" />
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h2>Patient Reviews:</h2>
        <div className="review-slider">
          <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
          <div className="review-content">
            {/* Reviews would go here */}
          </div>
          <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
        </div>
      </div>
    </>
  );
  break;

  case 'lop':  
  content = (
    <>
      {/* Container for text and image */}
      <div className="disease-detail flex-container">
        {/* Left Div: Disease problems */}
        <div className="disease-detail-left">
          <h2>Problems of Lower Back Pain (LBP):</h2>
          <ul>
            <li>Pain in the lower back, especially when bending or lifting</li>
            <li>Stiffness or limited range of motion</li>
            <li>Shooting or stabbing pain</li>
          </ul>
          <p>LBP can result from strain, disc issues, or conditions like degenerative disc disease.</p>
        </div>

        {/* Right Div: Image */}
        <div className="disease-detail-right">
          <img src="/images/lower-back-pain.jpg" alt="Lower Back Pain condition" />
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h2>Patient Reviews:</h2>
        <div className="review-slider">
          <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
          <div className="review-content">
            {/* Reviews would go here */}
          </div>
          <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
        </div>
      </div>
    </>
  );
  break;


  case 'frozen-shoulder':
    content = (
      <>
        {/* Container for text and image */}
        <div className="disease-detail flex-container">
          {/* Left Div: Disease problems */}
          <div className="disease-detail-left">
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
          </div>
  
          {/* Right Div: Image */}
          <div className="disease-detail-right">
            <img src="/images/frozen-shoulder.jpg" alt="Frozen Shoulder condition" />
          </div>
        </div>
  
        {/* Review Section */}
        <div className="review-section">
          <h2>Patient Reviews:</h2>
          <div className="review-slider">
            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
            <div className="review-content">
              {/* Reviews would go here */}
            </div>
            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
          </div>
        </div>
      </>
    );
    break;
  
    case 'excess-gas-formation':
      content = (
        <>
          {/* Container for text and image */}
          <div className="disease-detail flex-container">
            {/* Left Div: Disease problems */}
            <div className="disease-detail-left">
              <p>Excess Gas Formation is caused by excess acid production in the stomach, leading to discomfort and heartburn.</p>
    
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
            </div>
    
            {/* Right Div: Image */}
            <div className="disease-detail-right">
              <img src="/images/excess-gas-formation.jpg" alt="Excess Gas Formation condition" />
            </div>
          </div>
    
          {/* Review Section */}
          <div className="review-section">
            <h2>Patient Reviews:</h2>
            <div className="review-slider">
              <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
              <div className="review-content">
                {/* Reviews would go here */}
              </div>
              <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
            </div>
          </div>
        </>
      );
      break;
    

      case 'ibs':
        content = (
          <>
            <div className="disease-detail flex-container">
              <div className="disease-detail-left">
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
              </div>
      
              <div className="disease-detail-right">
                <img src="/images/ibs.jpg" alt="Irritable Bowel Syndrome (IBS) condition" />
              </div>
            </div>
      
            <div className="review-section">
              <h2>Patient Reviews:</h2>
              <div className="review-slider">
                <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                <div className="review-content">
                  {/* Reviews would go here */}
                </div>
                <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
              </div>
            </div>
          </>
        );
        break;
      

        case 'constipation':
          content = (
            <>
              <div className="disease-detail flex-container">
                <div className="disease-detail-left">
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
                </div>
        
                <div className="disease-detail-right">
                  <img src="/images/constipation.jpg" alt="Constipation condition" />
                </div>
              </div>
        
              <div className="review-section">
                <h2>Patient Reviews:</h2>
                <div className="review-slider">
                  <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                  <div className="review-content">
                    {/* Reviews would go here */}
                  </div>
                  <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                </div>
              </div>
            </>
          );
          break;
        

          case 'migraine':
            content = (
              <>
                <div className="disease-detail flex-container">
                  <div className="disease-detail-left">
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
                  </div>
          
                  <div className="disease-detail-right">
                    <img src="/images/migraine.jpg" alt="Migraine condition" />
                  </div>
                </div>
          
                <div className="review-section">
                  <h2>Patient Reviews:</h2>
                  <div className="review-slider">
                    <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                    <div className="review-content">
                      {/* Reviews would go here */}
                    </div>
                    <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                  </div>
                </div>
              </>
            );
            break;
          

            case 'diabetes-type-2':
              content = (
                <>
                  {/* Container for text and image */}
                  <div className="disease-detail flex-container">
                    {/* Left Div: Disease problems */}
                    <div className="disease-detail-left">
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
                    </div>
            
                    {/* Right Div: Image */}
                    <div className="disease-detail-right">
                      <img src="/images/diabetes-type-2.jpg" alt="Diabetes Type 2 condition" />
                    </div>
                  </div>
            
                  {/* Review Section */}
                  <div className="review-section">
                    <h2>Patient Reviews:</h2>
                    <div className="review-slider">
                      <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                      <div className="review-content">
                        {/* Reviews would go here */}
                      </div>
                      <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                    </div>
                  </div>
                </>
              );
              break;
            
              case 'hypothyroidism':
                content = (
                  <>
                    {/* Container for text and image */}
                    <div className="disease-detail flex-container">
                      {/* Left Div: Disease problems */}
                      <div className="disease-detail-left">
                        <p>Hypothyroidism is a condition where the thyroid gland doesn't produce enough hormones, leading to fatigue, weight gain, and sluggishness.</p>
              
                        <h2>Symptoms:</h2>
                        <ul>
                          <li>Fatigue and weakness</li>
                          <li>Weight gain and cold intolerance</li>
                          <li>Hair loss and dry skin</li>
                        </ul>
              
                        <h2>Conventional Treatment:</h2>
                        <p>Levothyroxine, a synthetic thyroid hormone, is often prescribed to normalize hormone levels.</p>
              
                        <h2>Ayurvedic Solutions:</h2>
                        <ul>
                          <li><strong>Herbs:</strong> Guggulu, Ashwagandha, and Shilajit are known for improving thyroid function.</li>
                          <li><strong>Panchakarma:</strong> Virechana and Basti therapies can help balance the doshas and improve metabolism.</li>
                          <li><strong>Diet:</strong> Eat foods rich in iodine, like seaweed and dairy products. Avoid processed and sugary foods.</li>
                        </ul>
                      </div>
              
                      {/* Right Div: Image */}
                      <div className="disease-detail-right">
                        <img src="/images/hypothyroidism.jpg" alt="Hypothyroidism condition" />
                      </div>
                    </div>
              
                    {/* Review Section */}
                    <div className="review-section">
                      <h2>Patient Reviews:</h2>
                      <div className="review-slider">
                        <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                        <div className="review-content">
                          {/* Reviews would go here */}
                        </div>
                        <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                      </div>
                    </div>
                  </>
                );
                break;
              
                case 'nerve-pain':
                  content = (
                    <>
                      {/* Container for text and image */}
                      <div className="disease-detail flex-container">
                        {/* Left Div: Disease problems */}
                        <div className="disease-detail-left">
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
                        </div>
                
                        {/* Right Div: Image */}
                        <div className="disease-detail-right">
                          <img src="/images/nerve-pain.jpg" alt="Nerve Pain condition" />
                        </div>
                      </div>
                
                      {/* Review Section */}
                      <div className="review-section">
                        <h2>Patient Reviews:</h2>
                        <div className="review-slider">
                          <button className="toggle-button left" onClick={showPreviousReview}>
                            &lt;
                          </button>
                          <div className="review-content">
                            {/* Reviews would go here */}
                          </div>
                          <button className="toggle-button right" onClick={showNextReview}>
                            &gt;
                          </button>
                        </div>
                      </div>
                    </>
                  );
                  break;
                

                  case 'hairfall':
                    content = (
                      <>
                        {/* Container for text and image */}
                        <div className="disease-detail flex-container">
                          {/* Left Div: Disease problems */}
                          <div className="disease-detail-left">
                            <p>
                              Hair fall, or hair loss, can be caused by various factors such as stress, poor nutrition, hormonal changes, or underlying health conditions.
                            </p>
                  
                            <h2>Symptoms:</h2>
                            <ul>
                              <li>Thinning hair</li>
                              <li>Excessive hair shedding</li>
                              <li>Visible scalp or bald patches</li>
                            </ul>
                  
                            <h2>Conventional Treatment:</h2>
                            <p>Minoxidil, finasteride, and hair transplant surgery are common treatments for hair loss.</p>
                  
                            <h2>Ayurvedic Solutions:</h2>
                            <ul>
                              <li>
                                <strong>Herbs:</strong> Bhringraj, Amla, and Fenugreek seeds are known to promote hair growth and reduce hair fall.
                              </li>
                              <li>
                                <strong>Oil Therapy:</strong> Massaging the scalp with warm coconut or sesame oil can improve blood circulation and nourish the hair.
                              </li>
                              <li>
                                <strong>Diet:</strong> Include protein-rich foods, iron, and vitamins in your diet. Amla juice or powder can also be beneficial for hair health.
                              </li>
                            </ul>
                          </div>
                  
                          {/* Right Div: Image */}
                          <div className="disease-detail-right">
                            <img src="/images/hairfall.jpg" alt="Hair Fall condition" />
                          </div>
                        </div>
                  
                        {/* Review Section */}
                        <div className="review-section">
                          <h2>Patient Reviews:</h2>
                          <div className="review-slider">
                            <button className="toggle-button left" onClick={showPreviousReview}>
                              &lt;
                            </button>
                            <div className="review-content">
                              {/* Reviews would go here */}
                            </div>
                            <button className="toggle-button right" onClick={showNextReview}>
                              &gt;
                            </button>
                          </div>
                        </div>
                      </>
                    );
                    break;
                  
    

                    case 'heel-pain':
                      content = (
                        <>
                          {/* Container for text and image */}
                          <div className="disease-detail flex-container">
                            {/* Left Div: Disease problems */}
                            <div className="disease-detail-left">
                              <p>
                                Heel pain, often caused by plantar fasciitis or Achilles tendinitis, is a common foot condition that results in discomfort and difficulty walking.
                              </p>
                    
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
                                <li>
                                  <strong>Herbs:</strong> Nirgundi and Shallaki (Boswellia) help reduce inflammation and pain.
                                </li>
                                <li>
                                  <strong>External Application:</strong> Use medicated oils like Mahanarayan oil or Kottamchukkadi tailam to massage the affected area.
                                </li>
                                <li>
                                  <strong>Diet:</strong> Eat anti-inflammatory foods like turmeric, ginger, and garlic. Avoid cold and processed foods.
                                </li>
                              </ul>
                            </div>
                    
                            {/* Right Div: Image */}
                            <div className="disease-detail-right">
                              <img src="/images/heel-pain.jpg" alt="Heel Pain condition" />
                            </div>
                          </div>
                    
                          {/* Review Section */}
                          <div className="review-section">
                            <h2>Patient Reviews:</h2>
                            <div className="review-slider">
                              <button className="toggle-button left" onClick={showPreviousReview}>
                                &lt;
                              </button>
                              <div className="review-content">
                                {/* Reviews would go here */}
                              </div>
                              <button className="toggle-button right" onClick={showNextReview}>
                                &gt;
                              </button>
                            </div>
                          </div>
                        </>
                      );
                      break;
                    

                      case 'sciatica':
                        content = (
                          <>
                            {/* Container for text and image */}
                            <div className="disease-detail flex-container">
                              {/* Left Div: Disease problems */}
                              <div className="disease-detail-left">
                                <p>
                                  Sciatica refers to pain that radiates along the path of the sciatic nerve, which runs from the lower back down to the legs. This is often caused by a herniated disk or bone spur compressing the nerve.
                                </p>
                      
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
                                  <li>
                                    <strong>Herbs:</strong> Guggulu, Ashwagandha, and Shatavari are helpful in managing pain and reducing inflammation.
                                  </li>
                                  <li>
                                    <strong>Panchakarma Therapy:</strong> Kati Basti (warm oil treatment on the lower back) and Vasti (medicated enema) are highly beneficial for sciatica.
                                  </li>
                                  <li>
                                    <strong>Diet:</strong> Follow a Vata-pacifying diet with warm, cooked foods, and avoid cold, dry, and processed foods.
                                  </li>
                                </ul>
                              </div>
                      
                              {/* Right Div: Image */}
                              <div className="disease-detail-right">
                                <img src="/images/sciatica.jpg" alt="Sciatica condition" />
                              </div>
                            </div>
                      
                            {/* Review Section */}
                            <div className="review-section">
                              <h2>Patient Reviews:</h2>
                              <div className="review-slider">
                                <button className="toggle-button left" onClick={showPreviousReview}>
                                  &lt;
                                </button>
                                <div className="review-content">
                                  {/* Reviews would go here */}
                                </div>
                                <button className="toggle-button right" onClick={showNextReview}>
                                  &gt;
                                </button>
                              </div>
                            </div>
                          </>
                        );
                        break;
                        case 'piles':
                          content = (
                            <>
                              {/* Container for text and image */}
                              <div className="disease-detail flex-container">
                                {/* Left Div: Disease problems */}
                                <div className="disease-detail-left">
                                  <p>
                                    Piles, also known as hemorrhoids, are swollen blood vessels in the lower rectum or anus, leading to discomfort, pain, and sometimes bleeding.
                                  </p>
                        
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
                                    <li>
                                      <strong>Herbs:</strong> Haritaki, Arshkuthar Ras, and Triphala help in relieving constipation and reducing the swelling of hemorrhoids.
                                    </li>
                                    <li>
                                      <strong>Panchakarma Therapy:</strong> Basti (medicated enema) is used to cleanse the colon and relieve piles.
                                    </li>
                                    <li>
                                      <strong>Diet:</strong> Eat fiber-rich foods like whole grains, fresh fruits, and vegetables. Drink plenty of water.
                                    </li>
                                  </ul>
                                </div>
                        
                                {/* Right Div: Image */}
                                <div className="disease-detail-right">
                                  <img src="/images/piles.jpg" alt="Piles condition" />
                                </div>
                              </div>
                        
                              {/* Review Section */}
                              <div className="review-section">
                                <h2>Patient Reviews:</h2>
                                <div className="review-slider">
                                  <button className="toggle-button left" onClick={showPreviousReview}>
                                    &lt;
                                  </button>
                                  <div className="review-content">
                                    {/* Reviews would go here */}
                                  </div>
                                  <button className="toggle-button right" onClick={showNextReview}>
                                    &gt;
                                  </button>
                                </div>
                              </div>
                            </>
                          );
                          break;
                        

                          case 'fissures':
                            content = (
                              <>
                                {/* Container for text and image */}
                                <div className="disease-detail flex-container">
                                  {/* Left Div: Disease problems */}
                                  <div className="disease-detail-left">
                                    <p>
                                      An anal fissure is a small tear in the lining of the anus, often causing sharp pain during bowel movements.
                                    </p>
                          
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
                                      <li>
                                        <strong>Herbs:</strong> Guggul, Haritaki, and Pippali to ease digestion and heal fissures.
                                      </li>
                                      <li>
                                        <strong>External Application:</strong> Use Jatyadi oil for external application to aid healing.
                                      </li>
                                      <li>
                                        <strong>Diet:</strong> High-fiber diet with plenty of fluids to soften stool and reduce strain during bowel movements.
                                      </li>
                                    </ul>
                                  </div>
                          
                                  {/* Right Div: Image */}
                                  <div className="disease-detail-right">
                                    <img src="/images/fissures.jpg" alt="Fissures condition" />
                                  </div>
                                </div>
                          
                                {/* Review Section */}
                                <div className="review-section">
                                  <h2>Patient Reviews:</h2>
                                  <div className="review-slider">
                                    <button className="toggle-button left" onClick={showPreviousReview}>
                                      &lt;
                                    </button>
                                    <div className="review-content">
                                      {/* Reviews would go here */}
                                    </div>
                                    <button className="toggle-button right" onClick={showNextReview}>
                                      &gt;
                                    </button>
                                  </div>
                                </div>
                              </>
                            );
                            break;
                          

                            case 'fistula':
                              content = (
                                <>
                                  {/* Container for text and image */}
                                  <div className="disease-detail flex-container">
                                    {/* Left Div: Disease problems */}
                                    <div className="disease-detail-left">
                                      <p>
                                        Fistula-in-ano is an abnormal connection between the end of the bowel and the skin near the anus, often resulting from an infection.
                                      </p>
                            
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
                                        <li>
                                          <strong>Treatment:</strong> Ksharasutra therapy (medicated thread treatment) is a unique Ayurvedic approach to treating fistulas.
                                        </li>
                                        <li>
                                          <strong>External Application:</strong> Jatyadi oil or Nirgundi oil for external application to reduce inflammation and promote healing.
                                        </li>
                                        <li>
                                          <strong>Diet:</strong> Eat a diet rich in fiber, including whole grains, green vegetables, and fruits.
                                        </li>
                                      </ul>
                                    </div>
                            
                                    {/* Right Div: Image */}
                                    <div className="disease-detail-right">
                                      <img src="/images/fistula.jpg" alt="Fistula condition" />
                                    </div>
                                  </div>
                            
                                  {/* Review Section */}
                                  <div className="review-section">
                                    <h2>Patient Reviews:</h2>
                                    <div className="review-slider">
                                      <button className="toggle-button left" onClick={showPreviousReview}>
                                        &lt;
                                      </button>
                                      <div className="review-content">
                                        {/* Reviews would go here */}
                                      </div>
                                      <button className="toggle-button right" onClick={showNextReview}>
                                        &gt;
                                      </button>
                                    </div>
                                  </div>
                                </>
                              );
                              break;
                            

                              case 'dysmenorrhea':
                                content = (
                                  <>
                                    {/* Container for text and image */}
                                    <div className="disease-detail flex-container">
                                      {/* Left Div: Disease problems */}
                                      <div className="disease-detail-left">
                                        <p>
                                          Dysmenorrhea refers to painful menstrual cramps that occur before or during menstruation.
                                        </p>
                              
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
                                          <li>
                                            <strong>Herbs:</strong> Dashmool, Shatavari, and Ashoka are commonly used to relieve pain and balance hormones.
                                          </li>
                                          <li>
                                            <strong>Therapies:</strong> Abhyanga (massage) with warm sesame oil can relieve cramps and promote relaxation.
                                          </li>
                                          <li>
                                            <strong>Diet:</strong> Avoid cold and spicy foods during menstruation, and consume warm, nourishing foods.
                                          </li>
                                        </ul>
                                      </div>
                              
                                      {/* Right Div: Image */}
                                      <div className="disease-detail-right">
                                        <img src="/images/dysmenorrhea.jpg" alt="Dysmenorrhea condition" />
                                      </div>
                                    </div>
                              
                                    {/* Review Section */}
                                    <div className="review-section">
                                      <h2>Patient Reviews:</h2>
                                      <div className="review-slider">
                                        <button className="toggle-button left" onClick={showPreviousReview}>
                                          &lt;
                                        </button>
                                        <div className="review-content">
                                          {/* Reviews would go here */}
                                        </div>
                                        <button className="toggle-button right" onClick={showNextReview}>
                                          &gt;
                                        </button>
                                      </div>
                                    </div>
                                  </>
                                );
                                break;
                              
                                case 'leucorrhoea':
                                  content = (
                                    <>
                                      {/* Container for text and image */}
                                      <div className="disease-detail flex-container">
                                        {/* Left Div: Disease problems */}
                                        <div className="disease-detail-left">
                                          <p>
                                            Leucorrhoea refers to a thick, white or yellowish vaginal discharge that can be normal or indicate an infection.
                                          </p>
                                
                                          <h2>Symptoms:</h2>
                                          <ul>
                                            <li>Thick, white or yellow vaginal discharge</li>
                                            <li>Itching, irritation, or a foul smell in the genital area</li>
                                            <li>Mild lower abdominal discomfort or back pain</li>
                                          </ul>
                                
                                          <h2>Conventional Treatment:</h2>
                                          <p>Treatment may include antifungal or antibiotic medications depending on the underlying cause.</p>
                                
                                          <h2>Ayurvedic Solutions:</h2>
                                          <ul>
                                            <li>
                                              <strong>Herbs:</strong> Lodhra, Ashoka, and Triphala are often recommended to balance excess discharge and restore health.
                                            </li>
                                            <li>
                                              <strong>Therapies:</strong> Yoni Pichu (application of medicated oil or paste in the vaginal canal) can help maintain vaginal health.
                                            </li>
                                            <li>
                                              <strong>Diet:</strong> Include cooling foods such as pomegranate and amla; avoid fried or spicy foods.
                                            </li>
                                          </ul>
                                        </div>
                                
                                        {/* Right Div: Image */}
                                        <div className="disease-detail-right">
                                          <img src="/images/leucorrhoea.jpg" alt="Leucorrhoea condition" />
                                        </div>
                                      </div>
                                
                                      {/* Review Section */}
                                      <div className="review-section">
                                        <h2>Patient Reviews:</h2>
                                        <div className="review-slider">
                                          <button className="toggle-button left" onClick={showPreviousReview}>
                                            &lt;
                                          </button>
                                          <div className="review-content">
                                            {/* Reviews would go here */}
                                          </div>
                                          <button className="toggle-button right" onClick={showNextReview}>
                                            &gt;
                                          </button>
                                        </div>
                                      </div>
                                    </>
                                  );
                                  break;
                                
                                  case 'irregular-menses':
                                    content = (
                                      <>
                                        {/* Container for text and image */}
                                        <div className="disease-detail flex-container">
                                          {/* Left Div: Disease problems */}
                                          <div className="disease-detail-left">
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
                                          </div>
                                  
                                          {/* Right Div: Image */}
                                          <div className="disease-detail-right">
                                            <img src="/images/irregular-menses.jpg" alt="Irregular Menses condition" />
                                          </div>
                                        </div>
                                  
                                        {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              {/* Reviews would go here */}
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  
                                  case 'excess-bleeding':
                                    content = (
                                      <>
                                        {/* Container for text and image */}
                                        <div className="disease-detail flex-container">
                                          {/* Left Div: Disease problems */}
                                          <div className="disease-detail-left">
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
                                          </div>
                                  
                                          {/* Right Div: Image */}
                                          <div className="disease-detail-right">
                                            <img src="/images/excess-bleeding.jpg" alt="Excess Bleeding condition" />
                                          </div>
                                        </div>
                                  
                                        {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              {/* Reviews would go here */}
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  
                                  case 'pcos':
                                    content = (
                                      <>
                                        {/* Container for text and image */}
                                        <div className="disease-detail flex-container">
                                          {/* Left Div: Disease problems */}
                                          <div className="disease-detail-left">
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
                                          </div>
                                  
                                          {/* Right Div: Image */}
                                          <div className="disease-detail-right">
                                            <img src="/images/pcos.jpg" alt="PCOS condition" />
                                          </div>
                                        </div>
                                  
                                        {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              {/* Reviews would go here */}
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  
                                  case 'acne':
                                    content = (
                                      <>
                                        {/* Container for text and image */}
                                        <div className="disease-detail flex-container">
                                          {/* Left Div: Disease problems */}
                                          <div className="disease-detail-left">
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
                                          </div>
                                  
                                          {/* Right Div: Image */}
                                          <div className="disease-detail-right">
                                            <img src="/images/acne.jpg" alt="Acne condition" />
                                          </div>
                                        </div>
                                  
                                        {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              {/* Reviews would go here */}
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  

                                    case 'pcod':  // Polycystic Ovary Disease (PCOD)
                                    content = (
                                      <>
                                        <div className="disease-detail flex-container">
                                          <div className="disease-detail-left">
                                            <h2>Problems of Polycystic Ovary Disease (PCOD):</h2>
                                            <ul>
                                              <li>Irregular periods and hormonal imbalance</li>
                                              <li>Weight gain and difficulty losing weight</li>
                                              <li>Acne, hair thinning, and excessive hair growth</li>
                                              <li>Ovarian cyst formation</li>
                                            </ul>
                                            <p>PCOD affects the reproductive system and can also lead to long-term health complications like diabetes and cardiovascular diseases.</p>
                                          </div>
                                
                                          <div className="disease-detail-right">
                                            <img src="/images/pcod.jpg" alt="PCOD condition" />
                                          </div>
                                        </div>
                                
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                
                                  case 'pimples':  // Acne and Pimples
                                    content = (
                                      <>
                                        <div className="disease-detail flex-container">
                                          <div className="disease-detail-left">
                                            <h2>Problems of Acne and Pimples:</h2>
                                            <ul>
                                              <li>Clogged pores due to oil and dead skin buildup</li>
                                              <li>Inflammation and redness</li>
                                              <li>Painful, pus-filled bumps</li>
                                              <li>Scarring from severe breakouts</li>
                                              <li>Negative impact on self-esteem</li>
                                            </ul>
                                            <p>Acne can be triggered by hormonal changes, stress, and diet, and it commonly affects teenagers and young adults.</p>
                                          </div>
                                
                                          <div className="disease-detail-right">
                                            <img src="/images/pimples.jpg" alt="Acne and pimples condition" />
                                          </div>
                                        </div>
                                
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;

                                    case 'eczema':  // Eczema
                                    content = (
                                      <>
                                        <div className="disease-detail flex-container">
                                          <div className="disease-detail-left">
                                            <h2>Problems of Eczema:</h2>
                                            <ul>
                                              <li>Itchy, dry, or scaly skin</li>
                                              <li>Red or inflamed patches</li>
                                              <li>Oozing or crusting in severe cases</li>
                                            </ul>
                                            <p>Eczema is a condition that makes your skin red, itchy, and inflamed. It's often triggered by an overactive immune response to allergens.</p>
                                  
                                            <h2>Conventional Treatment:</h2>
                                            <p>Treatments include moisturizers, corticosteroid creams, and antihistamines to control itching and inflammation.</p>
                                  
                                            <h2>Ayurvedic Solutions:</h2>
                                            <ul>
                                              <li><strong>Herbs:</strong> Neem, Guduchi, and Manjistha help purify the blood and soothe irritated skin.</li>
                                              <li><strong>External Application:</strong> Apply coconut oil or neem oil to moisturize and heal the skin.</li>
                                              <li><strong>Diet:</strong> Avoid sour, spicy, and fermented foods. Consume cooling foods like cucumber, coconut water, and leafy greens.</li>
                                            </ul>
                                          </div>
                                  
                                          <div className="disease-detail-right">
                                            <img src="/images/eczema.jpg" alt="Eczema condition" />
                                          </div>
                                        </div>
                                  
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  
                                  case 'psoriasis':  // Psoriasis
                                    content = (
                                      <>
                                        <div className="disease-detail flex-container">
                                          <div className="disease-detail-left">
                                            <h2>Problems of Psoriasis:</h2>
                                            <ul>
                                              <li>Red patches of skin covered with thick, silvery scales</li>
                                              <li>Dry, cracked skin that may bleed</li>
                                              <li>Itching, burning, or soreness</li>
                                            </ul>
                                            <p>Psoriasis is a chronic autoimmune skin condition characterized by red, scaly patches on the skin, often accompanied by itching or pain.</p>
                                  
                                            <h2>Conventional Treatment:</h2>
                                            <p>Treatments include topical ointments, phototherapy, and immunosuppressant medications.</p>
                                  
                                            <h2>Ayurvedic Solutions:</h2>
                                            <ul>
                                              <li><strong>Herbs:</strong> Neem, Turmeric, and Guduchi help reduce inflammation and detoxify the body.</li>
                                              <li><strong>Panchakarma:</strong> Virechana (purgation therapy) and Raktamokshana (bloodletting) are recommended for detoxification.</li>
                                              <li><strong>Diet:</strong> Avoid foods that aggravate Pitta dosha, like spicy, acidic, and fried foods. Increase intake of cooling and alkalizing foods such as cucumber, bitter gourd, and coconut water.</li>
                                            </ul>
                                          </div>
                                  
                                          <div className="disease-detail-right">
                                            <img src="/images/psoriasis.jpg" alt="Psoriasis condition" />
                                          </div>
                                        </div>
                                  
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  

                                    case 'skin-allergy':  // Skin Allergy
                                    content = (
                                      <>
                                        <div className="disease-detail flex-container">
                                          <div className="disease-detail-left">
                                            <h2>Problems of Skin Allergy:</h2>
                                            <ul>
                                              <li>Red, inflamed, and itchy skin</li>
                                              <li>Rashes or hives</li>
                                              <li>Swelling in severe cases</li>
                                            </ul>
                                            <p>Skin allergies are immune system reactions to certain substances, leading to redness, itching, and inflammation.</p>
                                  
                                            <h2>Conventional Treatment:</h2>
                                            <p>Treatments include antihistamines, topical creams, and avoiding the triggering substances.</p>
                                  
                                            <h2>Ayurvedic Solutions:</h2>
                                            <ul>
                                              <li><strong>Herbs:</strong> Neem, Turmeric, and Amalaki help to detoxify and reduce allergic reactions.</li>
                                              <li><strong>External Application:</strong> Apply a paste of sandalwood or turmeric to the affected area to soothe itching and inflammation.</li>
                                              <li><strong>Diet:</strong> Eat Pitta-pacifying foods, avoid spicy, sour, and fermented foods, and consume cooling herbs like coriander and fennel.</li>
                                            </ul>
                                          </div>
                                  
                                          <div className="disease-detail-right">
                                            <img src="/images/skin-allergy.jpg" alt="Skin Allergy condition" />
                                          </div>
                                        </div>
                                  
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  
                                  case 'white-patch':  // White Patch (Vitiligo)
                                    content = (
                                      <>
                                        <div className="disease-detail flex-container">
                                          <div className="disease-detail-left">
                                            <h2>Problems of White Patches (Vitiligo):</h2>
                                            <ul>
                                              <li>White or light-colored patches on the skin</li>
                                              <li>May affect any area, including the face, hands, and feet</li>
                                              <li>Skin sensitivity to sunlight</li>
                                            </ul>
                                            <p>White patches (Vitiligo) occur due to a loss of pigment in the skin, leading to white, depigmented areas.</p>
                                  
                                            <h2>Conventional Treatment:</h2>
                                            <p>Treatment may include topical corticosteroids, light therapy, and in some cases, skin grafts.</p>
                                  
                                            <h2>Ayurvedic Solutions:</h2>
                                            <ul>
                                              <li><strong>Herbs:</strong> Bakuchi (Psoralea), Amalaki, and Haritaki help restore pigmentation.</li>
                                              <li><strong>Therapies:</strong> Use Bakuchi oil externally on the patches. Panchakarma therapies like Virechana (purgation) and Rakta Mokshana (bloodletting) are also beneficial.</li>
                                              <li><strong>Diet:</strong> Avoid Pitta-aggravating foods and include more antioxidants in the diet, such as fresh fruits, particularly berries and citrus.</li>
                                            </ul>
                                          </div>
                                  
                                          <div className="disease-detail-right">
                                            <img src="/images/white-patch.jpg" alt="Vitiligo condition" />
                                          </div>
                                        </div>
                                  
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  
                                  case 'spermatorrhoea':  // Spermatorrhea
                                    content = (
                                      <>
                                        <div className="disease-detail flex-container">
                                          <div className="disease-detail-left">
                                            <h2>Problems of Spermatorrhea (SP):</h2>
                                            <ul>
                                              <li>Involuntary discharge of semen during sleep or urination</li>
                                              <li>Weakness or fatigue</li>
                                              <li>Loss of concentration or sexual desire</li>
                                            </ul>
                                            <p>Spermatorrhea (SP) is the involuntary leakage of semen, which can lead to weakness and fatigue.</p>
                                  
                                            <h2>Conventional Treatment:</h2>
                                            <p>Treatment may include stress management, medication, and lifestyle changes.</p>
                                  
                                            <h2>Ayurvedic Solutions:</h2>
                                            <ul>
                                              <li><strong>Herbs:</strong> Ashwagandha, Shilajit, and Safed Musli to boost stamina and reduce involuntary discharge.</li>
                                              <li><strong>Therapies:</strong> Vajikarana therapy (a form of Ayurvedic therapy) helps to rejuvenate sexual health.</li>
                                              <li><strong>Diet:</strong> Eat energy-boosting foods like almonds, dates, and milk. Avoid excessive masturbation or sexual activity.</li>
                                            </ul>
                                          </div>
                                  
                                          <div className="disease-detail-right">
                                            <img src="/images/spermatorrhoea.jpg" alt="Spermatorrhea condition" />
                                          </div>
                                        </div>
                                  
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  

                                    case 'nocturnal emissions':  // Nocturnal Emissions
                                    content = (
                                      <>
                                        {/* Container for text and image */}
                                        <div className="disease-detail flex-container">
                                          {/* Left Div: Disease problems */}
                                          <div className="disease-detail-left">
                                            <h2>Problems of Nocturnal Emissions:</h2>
                                            <ul>
                                              <li>Involuntary ejaculation during sleep</li>
                                              <li>May cause embarrassment or stress for some individuals</li>
                                              <li>Frequent occurrences can affect sleep quality</li>
                                              <li>May be accompanied by sexual dreams</li>
                                            </ul>
                                            <p>Nocturnal emissions, or "wet dreams," are a normal part of sexual health, particularly during adolescence, and usually decrease with age.</p>
                                          </div>
                                  
                                          {/* Right Div: Image */}
                                          <div className="disease-detail-right">
                                            <img src="/images/nocturnal_emissions.jpg" alt="Nocturnal Emissions condition" />
                                          </div>
                                        </div>
                                  
                                        {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                  
                                  case 'premature ejaculation':  // Premature Ejaculation
                                    content = (
                                      <>
                                        {/* Container for text and image */}
                                        <div className="disease-detail flex-container">
                                          {/* Left Div: Disease problems */}
                                          <div className="disease-detail-left">
                                            <h2>Problems of Premature Ejaculation (PE):</h2>
                                            <ul>
                                              <li>Ejaculation occurs sooner than desired</li>
                                              <li>Causes frustration or distress</li>
                                              <li>Affects sexual satisfaction</li>
                                              <li>May lead to anxiety around sexual performance</li>
                                            </ul>
                                            <p>PE is a common issue that can be caused by both psychological and physiological factors. Treatment options vary and may include therapy, medication, or behavioral techniques.</p>
                                          </div>
                                  
                                          {/* Right Div: Image */}
                                          <div className="disease-detail-right">
                                            <img src="/images/premature_ejaculation.jpg" alt="Premature Ejaculation condition" />
                                          </div>
                                        </div>
                                  
                                        {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    break;
                                    case 'erectile dysfunction':  // Erectile Dysfunction
  content = (
    <>
      {/* Container for text and image */}
      <div className="disease-detail flex-container">
        {/* Left Div: Disease problems */}
        <div className="disease-detail-left">
          <h2>Problems of Erectile Dysfunction (ED):</h2>
          <ul>
            <li>Difficulty achieving or maintaining an erection</li>
            <li>Reduces sexual satisfaction</li>
            <li>Causes stress and affects self-esteem</li>
            <li>May be linked to underlying health conditions (e.g., heart disease, diabetes)</li>
          </ul>
          <p>ED is a common issue that affects many men, particularly as they age. It can be caused by physical, psychological, or lifestyle factors, and treatment options include medication, therapy, and lifestyle changes.</p>
        </div>

        {/* Right Div: Image */}
        <div className="disease-detail-right">
          <img src="/images/erectile_dysfunction.jpg" alt="Erectile Dysfunction condition" />
        </div>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <h2>Patient Reviews:</h2>
        <div className="review-slider">
          <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
          <div className="review-content">
            <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
            <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
          </div>
          <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
        </div>
      </div>
    </>
  );
  break;


  case 'infertility':
    content = (
      <>
        {/* Container for text and image */}
        <div className="disease-detail flex-container">
          {/* Left Div: Disease Information */}
          <div className="disease-detail-left">
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
          </div>
  
          {/* Right Div: Image */}
          <div className="disease-detail-right">
            <img src="/images/infertility.jpg" alt="Infertility condition" />
          </div>
        </div>
      {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
    );
    break;
  
  case 'anxiety':
    content = (
      <>
        {/* Container for text and image */}
        <div className="disease-detail flex-container">
          {/* Left Div: Disease Information */}
          <div className="disease-detail-left">
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
          </div>
  
          {/* Right Div: Image */}
          <div className="disease-detail-right">
            <img src="/images/anxiety.jpg" alt="Anxiety condition" />
          </div>
        </div>
      {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
    );
    break;
  
  case 'dandruff':
    content = (
      <>
        {/* Container for text and image */}
        <div className="disease-detail flex-container">
          {/* Left Div: Disease Information */}
          <div className="disease-detail-left">
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
          </div>
  
          {/* Right Div: Image */}
          <div className="disease-detail-right">
            <img src="/images/dandruff.jpg" alt="Dandruff condition" />
          </div>
        </div>
      {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
    );
    break;
  
  case 'alopecia':
    content = (
      <>
        {/* Container for text and image */}
        <div className="disease-detail flex-container">
          {/* Left Div: Disease Information */}
          <div className="disease-detail-left">
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
          </div>
  
          {/* Right Div: Image */}
          <div className="disease-detail-right">
            <img src="/images/alopecia.jpg" alt="Alopecia condition" />
          </div>
        </div>
      {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
    );
    break;
  
  case 'obesity':
    content = (
      <>
        {/* Container for text and image */}
        <div className="disease-detail flex-container">
          {/* Left Div: Disease Information */}
          <div className="disease-detail-left">
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
              <li><strong>Regular Exercise:</strong> Engaging in yoga, walking, and other forms of physical activity promotes weight loss and overall health.</li>
              <li><strong>Mindful Eating:</strong> Practicing mindfulness can help reduce overeating and promote healthier food choices.</li>
            </ul>
          </div>
  
          {/* Right Div: Image */}
          <div className="disease-detail-right">
            <img src="/images/obesity.jpg" alt="Obesity condition" />
          </div>
        </div>
      {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
    );
    break;
  

    // High Blood Pressure
case 'high-blood-pressure':
  content = (
    <>
    <div className="disease-detail flex-container">
      {/* Left Div: Text Content */}
      <div className="disease-detail-left">
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
      </div>

      {/* Right Div: Image */}
      <div className="disease-detail-right">
        <img src="/images/high-blood-pressure.jpg" alt="High Blood Pressure" />
      </div>
    </div>
    {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
  );
  break;

// Hyperlipidemia
case 'hyperlipidemia':
  content = (
    <>
    <div className="disease-detail flex-container">
      <div className="disease-detail-left">
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
      </div>

      <div className="disease-detail-right">
        <img src="/images/hyperlipidemia.jpg" alt="Hyperlipidemia" />
      </div>
    </div>
    {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
  );
  break;

// Cough and Cold
case 'cough-and-cold':
  content = (
    <>
    <div className="disease-detail flex-container">
      <div className="disease-detail-left">
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
      </div>

      <div className="disease-detail-right">
        <img src="/images/cough-and-cold.jpg" alt="Cough and Cold" />
      </div>
    </div>
    {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
  );
  break;

// Sinusitis
case 'sinusitis':
  content = (
    <>
    <div className="disease-detail flex-container">
      <div className="disease-detail-left">
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
      </div>

      <div className="disease-detail-right">
        <img src="/images/sinusitis.jpg" alt="Sinusitis" />
      </div>
    </div>
    {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                  
                                    
  );
  break;

// COPD
case 'copd':
  content = (
    <>
    <div className="disease-detail flex-container">
      <div className="disease-detail-left">
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
      </div>

      <div className="disease-detail-right">
        <img src="/images/copd.jpg" alt="COPD" />
      </div>
    </div>
    {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    
  break;

// Asthma
case 'asthma':
  content = (
    <>
    <div className="disease-detail flex-container">
      <div className="disease-detail-left">
        <p>Asthma is a chronic condition characterized by the inflammation of the airways, leading to difficulty in breathing.</p>

        <h2>Symptoms:</h2>
        <ul>
          <li>Wheezing</li>
          <li>Shortness of breath</li>
          <li>Chest tightness</li>
          <li>Coughing (especially at night or during exercise)</li>
        </ul>

        <h2>Conventional Treatment:</h2>
        <p>Asthma management includes bronchodilators, inhaled corticosteroids, and avoidance of triggers.</p>

        <h2>Ayurvedic Solutions:</h2>
        <ul>
          <li><strong>Herbs:</strong> Turmeric, Ginger, and Vasa are effective in reducing inflammation in asthma.</li>
          <li><strong>Breathing Exercises:</strong> Techniques like Anulom Vilom can enhance lung function.</li>
          <li><strong>Diet:</strong> A diet rich in omega-3 fatty acids may help reduce inflammation.</li>
          <li><strong>Aromatherapy:</strong> Using essential oils like eucalyptus can improve breathing.</li>
        </ul>
      </div>

      <div className="disease-detail-right">
        <img src="/images/asthma.jpg" alt="Asthma" />
      </div>
    </div>
    {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    
  break;

// Low Sex Drive
case 'low-sex-drive':
  content = (
    <>
    <div className="disease-detail flex-container">
      <div className="disease-detail-left">
        <p>Low sex drive, or decreased libido, can result from various factors including stress, hormonal changes, and lifestyle choices.</p>

        <h2>Symptoms:</h2>
        <ul>
          <li>Reduced interest in sexual activity</li>
          <li>Difficulty in achieving sexual arousal</li>
          <li>Emotional distress or anxiety related to sexual performance</li>
        </ul>

        <h2>Conventional Treatment:</h2>
        <p>Treatment may include hormone therapy, counseling, and lifestyle changes to improve libido.</p>

        <h2>Ayurvedic Solutions:</h2>
        <ul>
          <li><strong>Herbs:</strong> Ashwagandha, Ginseng, and Safed Musli are known to boost libido.</li>
          <li><strong>Healthy Diet:</strong> A balanced diet with healthy fats can enhance sexual health.</li>
          <li><strong>Yoga and Meditation:</strong> These practices can reduce stress and improve overall well-being.</li>
          <li><strong>Avoiding Alcohol and Tobacco:</strong> Reducing these substances can lead to improved sexual function.</li>
        </ul>
      </div>

      <div className="disease-detail-right">
        <img src="/images/low-sex-drive.jpg" alt="Low Sex Drive" />
      </div>
    </div>
    {/* Review Section */}
                                        <div className="review-section">
                                          <h2>Patient Reviews:</h2>
                                          <div className="review-slider">
                                            <button className="toggle-button left" onClick={showPreviousReview}>&lt;</button>
                                            <div className="review-content">
                                              <img src={currentReview.image} alt={`${currentReview.name}'s review`} className="review-image" />
                                              <p><strong>{currentReview.name}</strong>: {currentReview.text}</p>
                                            </div>
                                            <button className="toggle-button right" onClick={showNextReview}>&gt;</button>
                                          </div>
                                        </div>
                                      </>
                                    );
                                    
  break;


    default:
      content = <p>Details about {diseaseName} will go here...</p>;
  }



  return (
    <div className="disease-detail">
    <h1>{diseaseName ? diseaseName.replace('-', ' ').toUpperCase() : 'Disease'}</h1>
    {content}
</div>
  );
};

export default DiseaseDetailPage;