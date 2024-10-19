import React, { useState } from 'react';
import './ReviewSection.css';
const reviews = [
  { id: 1, name: 'Rahim Khan', rating: 5, review: 'Excellent Ayurvedic consultation, truly life-changing!' },
  { id: 3, name: 'Sadia Begum', rating: 4, review: 'Good experience, the Ayurvedic massage was particularly relaxing.' },
  { id: 4, name: 'Farhana Islam', rating: 4, review: 'Very informative and calming experience, will return for more treatments.' },
  { id: 5, name: 'Rafiq Ahmed', rating: 5, review: 'Amazing holistic approach to wellness, I felt completely refreshed.' },
  { id: 6, name: 'Ayesha Sultana', rating: 4, review: 'Good, but there’s still room for improvement in the overall ambiance.' },
  { id: 7, name: 'Shahinur Alam', rating: 5, review: 'The best Ayurvedic treatment I’ve ever had! Truly healing and rejuvenating.' },
  { id: 8, name: 'Nafisa Yasmin', rating: 4, review: 'The Ayurvedic consultation was very helpful, and I felt much better after following the advice.' },
  { id: 9, name: 'Sourav Chatterjee', rating: 5, review: 'Outstanding service, I feel like my overall health has improved significantly.' },
  { id: 10, name: 'Mitali Roy', rating: 4, review: 'Great experience, the herbal remedies really worked for me.' }
];
const ReviewSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  // Calculate the current reviews to display
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Pagination logic
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {currentReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-content">
              <h3>{review.name}</h3>
              <p className="rating">Rating: {Array(review.rating).fill('⭐').join('')}</p>
              <p className="review-text">"{review.review}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;