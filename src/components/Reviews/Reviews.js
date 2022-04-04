import React from 'react';
import './Reviews.css'
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // console.log(reviews)
    return (
        <div className=''>
            
            {
                reviews.map((review) =>(<SingleReview review={review} key={review.id}></SingleReview>))
            }
        </div>
    );
};

export default Reviews;