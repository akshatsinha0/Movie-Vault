// src/components/HeroSection.js
import React, { useState } from 'react';
import './HeroSection.css';

function HeroSection({ movie }) {
  // State to track whether the Sign Up modal is open
  const [showSignUp, setShowSignUp] = useState(false);

  // State to track the "Remember Me" checkbox
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting sign-up with Remember Me:', rememberMe);
    
    setShowSignUp(false);
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${movie.backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>Welcome to MovieVault</h2>
        <p>Discover the latest movies, TV shows, and more.</p>
        <div className="hero-buttons">
          <button className="cta-button">Browse Now</button>
         
          <button className="signup-button" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>

      
      {showSignUp && (
        <div className="signup-modal">
          <div className="signup-box">
            <button className="close-button" onClick={handleCloseSignUp}>
              &times;
            </button>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />

              {/* Remember Me Checkbox */}
              <div className="remember-me-container">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>

              <button type="submit" className="submit-signup">
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
