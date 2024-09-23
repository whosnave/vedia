import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>VEDIA Watches</h3>
          <p>Timeless elegance, precision, and luxury.</p>
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Our Collections</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="#">@instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@vediawatches.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VEDIA Watches. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
