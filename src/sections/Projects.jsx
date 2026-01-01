// src/sections/Portfolio.jsx
import React from 'react';
// If you install react-icons (npm install react-icons), you can use them here:
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import background from '../assets/background.jpg';

const featuredProjects = [
    { 
        id: 1, 
        title: "Pawsome Pet-Booking application", 
        description: "A full-stack MERN application with secure user authentication, product management, and integrated Stripe payments.", 
        tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        image: background, // Place images in /public/assets/
        liveLink: "https://live.example.com/ecommerce",
        repoLink: "https://github.com/yourname/ecommerce-repo"
    },
    { 
        id: 2, 
        title: "Stay-In-Your-Lane Dating Application", 
        description: "Built with WebSockets, offering instant messaging, online status tracking, and scalable performance.", 
        tech: ["React", "Socket.io", "Node.js", "Redis"],
        image: background, 
        liveLink: "https://live.example.com/chat-app",
        repoLink: "https://github.com/yourname/chat-app-repo"
    },
    { 
        id: 3, 
        title: "Community-Saving-Fund Banking web app", 
        description: "Frontend application utilizing OpenAI's API to generate recipes based on available ingredients and dietary restrictions.", 
        tech: ["React", "Vite", "OpenAI API", "Tailwind CSS"],
        image: background, 
        liveLink: "https://live.example.com/ai-recipes",
        repoLink: "https://github.com/yourname/recipe-generator"
    },
];

const Portfolio = () => {
    return (
        // IMPORTANT: The 'id' must match the 'to' prop in your Header.jsx links
        <section id="portfolio" className="portfolio-section">
            <h2 className="section-title">Featured Projects</h2>
            <p className="portfolio-intro">A selection of my recent full-stack and frontend work. Click the links below to explore the live demos and codebases.</p>
            
            <div className="portfolio-grid">
                {featuredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        
                        {/* 1. Project Image with Overlay */}
                        <div className="image-wrapper">
                            {/* NOTE: Ensure you create a folder named 'assets' inside your 'public' folder 
                                and place your images there for the path '/assets/...' to work. */}
                            <img 
                                src={`${project.image}`} 
                                alt={`Screenshot of ${project.title}`} 
                                className="project-image"
                            />
                            <div className="overlay">
                                <p className="overlay-text">{project.description}</p>
                            </div>
                        </div>

                        {/* 2. Project Details */}
                        <div className="project-info">
                            <h3>{project.title}</h3>

                            {/* Tech Stack Tags */}
                            <div className="tech-stack">
                                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                            </div>

                            {/* Project Links */}
                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-button live">
                                    {/* <FaExternalLinkAlt className="icon" /> */} Live Demo
                                </a>
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="link-button repo">
                                    {/* <FaGithub className="icon" /> */} GitHub Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;