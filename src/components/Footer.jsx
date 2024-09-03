import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About TEACcH</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for exclusive updates and insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" required />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Phone: +2348085255769, +2348104643834</p>
            <p>Email: teach.blalabla.co</p>
            <p>Address: Lagos, Nigeria</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 TEACcH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;