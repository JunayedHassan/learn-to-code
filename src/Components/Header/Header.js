import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <br/>
            <nav>
                <a href="/courses">Courses</a>
                <a href="/review">Order Review</a>
                <a href="/contact-us">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;