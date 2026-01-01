// src/sections/Header.jsx
import React from 'react';
import { Link } from 'react-scroll'; // Import the Link component

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                {/* Your Name or Logo */}
                <h1>Pragati kumawat</h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li>
                        {/* The 'to' prop matches the 'id' of the target section */}
                        <Link 
                            to="hero" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} // Adjust this based on your fixed header's height
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;