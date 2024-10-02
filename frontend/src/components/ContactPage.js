import React, { useState } from 'react';
import './ContactPage.css'; // Import the CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted"); // Debugging line

    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Create mailto link
    const mailtoLink = `mailto:aalokshaw2003@gmail.com?subject=${subject}&body=${body}`;
    
    // Log the mailto link for debugging
    console.log("Mailto Link:", mailtoLink);

    // Open the mailto link in the default email client
    window.location.href = mailtoLink;

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <h2>Say Hello To Us, Get In Touch</h2>
      <p>Reach out to us and we will respond as soon as we can.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name.."
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email.."
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write something.."
          rows="4"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
