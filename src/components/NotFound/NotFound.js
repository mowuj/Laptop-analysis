import React from 'react';
import notFound from '../../Assets/Image/notFound.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <img className='notFound' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;