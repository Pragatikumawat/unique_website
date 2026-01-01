// src/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling CTA buttons
import profilePic from '../assets/MyProfilePicture.jpeg'; // Make sure to add your profile picture in this path
const Hero = () => {
    // Replace these variables with your actual information
    const name = "Pragati kumawat";
    const title = "Full-Stack Developer (React & Node.js)";
    const tagline = "Building robust web applications and seamless digital experiences.";
    const resumeLink = "src/assets/Pragati_kumawat_resume.pdf"; // Replace with the 
    // actual path to your resume file

    return (
        // IMPORTANT: The 'id' must match the 'to' prop in your Header.jsx links
        <section id="hero" className="hero-section"> 
            <div className="hero-content">
                <div className="hero-text-container">
                    <p className="greeting">Hello, I'm</p>
                    <h1>{name}</h1>
                    <h2 className="title">{title}</h2>
                    <p className="tagline">{tagline}</p>
                    
                    <div className="cta-buttons">
                        {/* CTA 1: Smooth scroll to the portfolio section */}
                        <Link 
                            to="portfolio" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}
                            className="btn primary-btn"
                        >
                            View My Work
                        </Link>
                        
                        {/* CTA 2: Link to download the resume */}
                        <a 
                            href={resumeLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn secondary-btn"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
                
                <div className="hero-image-container">
                    {/* Add your professional photo here. Place the image 
                    file inside src/assets/ */}
                    <img 
                        src={profilePic} // CHANGE THIS PATH
                        alt={`Portrait of ${name}`} 
                        className="profile-avatar"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
