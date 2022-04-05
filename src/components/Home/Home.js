import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Banner from '../Banner/Banner';
import SingleReview from '../SingleReview/SingleReview';
import './Home.css'
const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();
    return (
        <div>
            
            <Banner></Banner>
            <h2 className='text-center'>Customers Review</h2>
            <div className='card-container'>
            {
                reviews.slice(0, 3).map((review) =>(<SingleReview review={review} key={review.id}></SingleReview>))
            }
            </div>
            <div className='text-center'>
                <button className='card-btn' onClick={() => navigate('/reviews')}>See all reviews</button>
                
            </div>
        </div>
    );
};

export default Home;