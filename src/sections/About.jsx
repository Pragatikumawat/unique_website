// src/sections/About.jsx
import React from 'react';

const About = () => {
    // Customize your personal details and skills
    const skills = [
        "React.js (Hooks, Context/Redux)", 
        "Node.js & Express (REST APIs)", 
        "JavaScript (ES6+)", 
        "Python / Django",
        "HTML5 & CSS3 (Flexbox/Grid)", 
        "Tailwind CSS / SCSS", 
        "MongoDB / PostgreSQL", 
        "Git & GitHub",
        "AWS / Netlify / Vercel"
    ];

    return (
        // IMPORTANT: The 'id' must match the 'to' prop in your Header.jsx links
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="section-title">About Me</h2>
                    
                    <p>
I am a quality engineer with 2+years of experience, primarily 
focused on financial tech sector. My passion is ensuring high 
quality of android and ios applications. I specialize in end to
 end test automation using java and selenium and a little appium.
 
  I have successfully driven adoption of these tools. I am known 
  for proactive and collaborative team member. I am now seeking for
   remote work to leverage my skills in automation.
                    </p>
                    
                    <p>
My hardest project was checking the security of a new online payment system that held credit card details. The tough part was making sure it wasn't just safe from outside hackers, but also that trusted users couldn't trick the system to steal money or change data. I had to learn how to do advanced security tests, like trying to trick the system with code (SQL injection) and checking that all private financial details were locked up with strong encryption. Finishing this project made me very confident in checking that any money-saving app, like yours, is completely safe and secure for everyone.
                    </p>
                    
                    
                    <a 
                        href="./Pragati_kumawat_resume.pdf" 
                        // Ensure this path is correct
                        download 
                        className="btn secondary-btn"
                    >
                        Download Full Resume
                    </a>
                </div>

                <div className="skills-container">
                    <h3 className="skills-title">My Technical Toolkit</h3>
                    <ul className="skills-list">
                        {skills.map((skill, index) => (
                            <li key={index} className="skill-item">{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;