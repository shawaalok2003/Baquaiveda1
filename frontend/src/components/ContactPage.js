// import React, { useState,useRef } from 'react';
// import './ContactPage.css'; // Import the CSS file for styling
// import emailjs from '@emailjs/browser';
// // export const ContactUs = () => {
// //   const form = useRef();

// const ContactPage = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_jvrgc5e', 'template_oj4o7gq', form.current, {
//         publicKey: 'HKKZMI3nv_iPdZtI9',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     console.log("Form submitted"); // Debugging line

//     const { name, email, message } = formData;
//     const subject = encodeURIComponent(`Message from ${name}`);
//     const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

//     // Create mailto link
//     const mailtoLink = `mailto:aalokshaw2003@gmail.com?subject=${subject}&body=${body}`;
    
//     // Log the mailto link for debugging
//     console.log("Mailto Link:", mailtoLink);

//     // Open the mailto link in the default email client
//     window.location.href = mailtoLink;

//     // Clear form after submission
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="contact-page">
//       <h2>Say Hello To Us, Get In Touch</h2>
//       <p>Reach out to us and we will respond as soon as we can.</p>
//       <form className="contact-form" onSubmit={sendEmail}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your name.."
//           required
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your email.."
//           required
//         />

//         <label htmlFor="message">Message</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Write something.."
//           rows="4"
//           required
//         ></textarea>

//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;



import React, { useState, useRef } from 'react';
import './ContactPage.css'; // Import the CSS file for styling
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jvrgc5e', 'template_oj4o7gq', form.current, 'HKKZMI3nv_iPdZtI9')
      .then(
        () => {
          // Show success toast
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 1000, // Close after 1 second
          });

          // Clear form after successful submission
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          // Show error toast
          toast.error('Failed to send message, please try again.', {
            position: 'top-center',
            autoClose: 1000, // Close after 1 second
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <h2>Say Hello To Us, Get In Touch</h2>
      <p>Reach out to us and we will respond as soon as we can.</p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
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

      {/* Toast container to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
