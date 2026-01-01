// src/sections/Footer.jsx
import React from 'react';

const Footer = () => {
    // Replace with your actual links and names
    const year = new Date().getFullYear();
    const githubLink = "https://github.com/YourGitHubProfile";
    const linkedinLink = "https://linkedin.com/in/YourLinkedInProfile";
    const emailAddress = "mailto:youremail@example.com";

    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="social-links">
                    {/* GitHub Link */}
                    <a 
                        href={githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub Profile"
                        className="social-icon github"
                    >
                        {/* Placeholder for GitHub Icon (use an actual icon library like react-icons later) */}
                        <i className="icon-github"></i> GitHub
                    </a>

                    {/* LinkedIn Link */}
                    <a 
                        href={linkedinLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn Profile"
                        className="social-icon linkedin"
                    >
                        {/* Placeholder for LinkedIn Icon */}
                        <i className="icon-linkedin"></i> LinkedIn
                    </a>
                    
                    {/* Email Link */}
                    <a 
                        href={emailAddress} 
                        aria-label="Email Address"
                        className="social-icon email"
                    >
                        {/* Placeholder for Email Icon */}
                        <i className="icon-email"></i> Email
                    </a>
                </div>

                <p className="copyright">
                    &copy; {year} Pragati kumawat. Built with React and 💙.
                </p>
            </div>
        </footer>
    );
};

export default Footer;