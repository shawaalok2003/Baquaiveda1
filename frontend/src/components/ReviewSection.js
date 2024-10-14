import React, { useState } from 'react';
import './ReviewSection.css';

const reviews = [
  { id: 1, name: 'Rahul Sharma', rating: 5, review: 'Excellent Ayurvedic consultation, truly life-changing!' },
  { id: 2, name: 'Sneha Gupta', rating: 4, review: 'Very informative and calming experience, will return for more treatments.' },
  { id: 3, name: 'Anil Verma', rating: 5, review: 'Highly recommended! The herbal remedies worked wonders for my health.' },
  { id: 4, name: 'Priya Reddy', rating: 3, review: 'It was a decent experience, but I expected more personalized advice.' },
  { id: 5, name: 'Vikram Singh', rating: 4, review: 'Good experience, the Ayurvedic massage was particularly relaxing.' },
  { id: 6, name: 'Aarti Patel', rating: 5, review: 'The best Ayurvedic treatment I’ve ever had! Truly healing and rejuvenating.' },
  { id: 7, name: 'Rohit Iyer', rating: 5, review: 'Amazing holistic approach to wellness, I felt completely refreshed.' },
  { id: 8, name: 'Neha Mehta', rating: 4, review: 'Good, but there’s still room for improvement in the overall ambiance.' },
  { id: 9, name: 'Kiran Das', rating: 3, review: 'Average experience, the herbal tea was nice but the consultation felt rushed.' }
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