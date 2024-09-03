import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h1>Get in Touch</h1>
        <div className="contact-info">
          <p>Phone: +2348085255769, +2348104643834</p>
          <p>Email: teach.blalabla.co</p>
          <p>Address: Lagos, Nigeria</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;