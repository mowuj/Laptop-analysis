import { Button } from 'bootstrap';
import React from 'react';
import hp from '../../Assets/Image/hp.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner  '>
            <div className='banner-text'>
                <h1>Your next laptop</h1>
                <h1 className='hp'>Hp Laptop</h1>
                <p className='bannner-p'>HP makes some of our favorite laptops, but with so many models in its portfolio, it's difficult to determine which one to choose. From the premium Spectre line to the Omen gaming rigs, we've reviewed countless HP laptops. Below is a list of the best HP laptops in each category. </p>
                
            </div>
            <div className='banner-img'>
                <img src={hp} alt="" />
            </div>
        </div>
    );
};

export default Banner;