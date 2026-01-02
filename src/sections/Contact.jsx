// src/sections/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Make sure you installed axios in the frontend project!

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(''); // To display success or error message

    
    // IMPORTANT: Replace this with your DEPLOYED Node.js backend URL
const apiURL = 'https://attractive-portfolio-api.onrender.com/api/contact'; // <-- Replace with your ACTUAL Render URL    // Remember to update this to your Render/Railway URL when deploying!

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            await axios.post(apiURL, formData);
            
            setStatus('✅ Message sent successfully! I will be in touch soon.');
            setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
            setFormData({ name: '', email: '', message: '' }); // Clear form
        } catch (error) {
            console.error('Submission Error:', error);
            setStatus('❌ Failed to send message. Please check the console or try emailing directly.');
            setTimeout(() => setStatus(''), 5000); // Clear error after 5 seconds
        }
    };

    return (
        // IMPORTANT: The 'id' must match the 'to' prop in your Header.jsx links
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-intro">
                I am currently open to new opportunities and welcome your message!
            </p>

            <div className="contact-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name" 
                            placeholder="e.g., Alex Johnson" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            placeholder="e.g., alex@example.com" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea 
                            id="message"
                            name="message" 
                            placeholder="What can I help you with?" 
                            rows="6" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    
                    <button type="submit" className="submit-btn" disabled={status === 'Sending...'}>
                        {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status && status !== 'Sending...' && (
                        <p className={`form-status ${status.startsWith('✅') ? 'success' : 'error'}`}>
                            {status}
                        </p>
                    )}
                </form>

                {/* Optional: Add a separate card for direct links */}
              
            </div>
        </section>
    );
};

export default Contact;