import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Stop the page from reloading

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://localhost:10000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Your message was sent successfully!');
            // Clear the form
        } else {
            const errorData = await response.json();
            alert(`Failed to send message: ${errorData.msg}`);
        }
    } catch (error) {
        console.error('Network Error:', error);
        alert('Could not connect to the server.');
    }
});