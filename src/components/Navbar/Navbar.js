import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'
const Navbar = () => {
    return (
        
            <nav>
                <CustomLink className="link" to="/home">Home</CustomLink>
                <CustomLink className="link" to="/dashboard">DashBoard</CustomLink>
                <CustomLink className="link" to="/blogs">Blogs</CustomLink>
            </nav>
    );
};

export default Navbar;