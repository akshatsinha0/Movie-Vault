// src/components/Footer.js
import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailSubscribe, setEmailSubscribe] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Simulate subscription process
    setSubscribeStatus('success');
    setTimeout(() => setSubscribeStatus(null), 3000);
    setEmailSubscribe('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1a0033" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,213.3C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="footer-container">
        <div className="footer-section footer-branding">
          <div className="footer-logo-container">
            <img src={logo} alt="MovieVault Logo" className="footer-logo" />
            <div className="logo-glow"></div>
          </div>
          <p className="footer-tagline">Your cinematic journey begins here</p>
          <p className="footer-description">
            Discover the ultimate streaming experience with premium content from Bollywood, Hollywood, and regional cinema. 
            MovieVault brings you an unmatched collection of films and shows.
          </p>
          <div className="app-download">
            <p className="download-title">Download our app</p>
            <div className="app-buttons">
              <a href="#playstore" className="app-button">
                <i className="fa fa-android"></i>
                <span>Google Play</span>
              </a>
              <a href="#appstore" className="app-button">
                <i className="fa fa-apple"></i>
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h3>Explore</h3>
          <div className="footer-links-grid">
            <div className="links-column">
              <h4>Content</h4>
              <ul>
                <li><a href="#movies">Movies</a></li>
                <li><a href="#tvshows">TV Shows</a></li>
                <li><a href="#bollywood">Bollywood</a></li>
                <li><a href="#hollywood">Hollywood</a></li>
                <li><a href="#regional">Regional Cinema</a></li>
              </ul>
            </div>
            <div className="links-column">
              <h4>Categories</h4>
              <ul>
                <li><a href="#action">Action</a></li>
                <li><a href="#comedy">Comedy</a></li>
                <li><a href="#drama">Drama</a></li>
                <li><a href="#thriller">Thriller</a></li>
                <li><a href="#horror">Horror</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-section footer-account">
          <h3>Account</h3>
          <ul>
            <li><a href="#profile">My Profile</a></li>
            <li><a href="#watchlist">My Watchlist</a></li>
            <li><a href="#subscriptions">Subscription Plans</a></li>
            <li><a href="#settings">Account Settings</a></li>
            <li><a href="#help">Help Centre</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>
              <i className="fa fa-map-marker"></i>
              MovieVault Entertainment Pvt. Ltd.<br />
              <span className="address-details">Film City, Goregaon East</span><br />
              <span className="address-details">Mumbai, Maharashtra 400065</span>
            </p>
            <p><i className="fa fa-phone"></i> +91 98xxx xxxxx</p>
            <p><i className="fa fa-envelope"></i> support@movievault.in</p>
          </div>
          <div className="social-icons">
            <a href="#facebook" aria-label="Follow us on Facebook"><i className="fa fa-facebook"></i></a>
            <a href="#twitter" aria-label="Follow us on Twitter"><i className="fa fa-twitter"></i></a>
            <a href="#instagram" aria-label="Follow us on Instagram"><i className="fa fa-instagram"></i></a>
            <a href="#youtube" aria-label="Subscribe to our YouTube channel"><i className="fa fa-youtube-play"></i></a>
          </div>
          <div className="newsletter-signup">
            <h4>Stay Updated</h4>
            <p>Be the first to know about new releases and exclusive offers</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="form-group">
                <input 
                  type="email" 
                  value={emailSubscribe}
                  onChange={(e) => setEmailSubscribe(e.target.value)}
                  placeholder="Enter your email" 
                  required 
                />
                <button type="submit" className="subscribe-btn">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="subscribe-success">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright-container">
            <p className="copyright">
              © {currentYear} MovieVault Entertainment Pvt. Ltd. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              MovieVault and all related content and elements are protected by copyright and trademark laws.
            </p>
          </div>
          <div className="legal-links">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Preferences</a>
            <a href="#legal">Legal Notices</a>
            <a href="#corporate">Corporate Information</a>
          </div>
          <div className="footer-extras">
            <div className="language-selector">
              <select aria-label="Select language">
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="ml">മലയാളം</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>
            <div className="payment-methods">
              <img src="https://via.placeholder.com/240x30" alt="We accept Visa, Mastercard, RuPay, UPI, and more" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
