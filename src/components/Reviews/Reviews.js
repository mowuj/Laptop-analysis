import React from 'react';
import './Reviews.css'
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='card-container'>
            {
                reviews.map((review) =>(<SingleReview review={review} key={review.id}></SingleReview>))
            }
        </div>
    );
};

export default Reviews;