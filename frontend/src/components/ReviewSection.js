import React, { useState } from 'react';
import './ReviewSection.css';

const reviews = [
  { id: 1, name: 'John Doe', rating: 5, review: 'Amazing service and great support!' },
  { id: 2, name: 'Jane Smith', rating: 4, review: 'Loved the experience, will come back again!' },
  { id: 3, name: 'Alex Johnson', rating: 5, review: 'Highly recommend, great quality!' },
  { id: 4, name: 'Emily Brown', rating: 3, review: 'It was okay, could be better.' },
  { id: 5, name: 'Michael Lee', rating: 4, review: 'Satisfied with the overall experience.' },
  { id: 6, name: 'Sara Wilson', rating: 5, review: 'Fantastic, exceeded my expectations!' },
  { id: 7, name: 'David Clark', rating: 5, review: 'Best service I have ever used!' },
  { id: 8, name: 'Laura Davis', rating: 4, review: 'Good service, but room for improvement.' },
  { id: 9, name: 'James Evans', rating: 3, review: 'Average experience, but worth the price.' }
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