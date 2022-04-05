import { Button } from 'bootstrap';
import React from 'react';
import laptop from '../../Assets/Image/laptop.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h1>Your next laptop</h1>
                <h1 className='hp'>Hp Laptop</h1>
                <p className='bannner-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nam nisi nihil quod saepe fuga, quia voluptatum neque atque qui modi, at aspernatur et voluptatibus? Labore suscipit dolore illo minima hic, error possimus enim esse temporibus, fuga maxime architecto aliquam beatae itaque consequatur a facilis vitae praesentium sapiente doloribus cumque!</p>
                
            </div>
            <div className='banner-img'>
                <img src={laptop} alt="" />
            </div>
        </div>
    );
};

export default Banner;