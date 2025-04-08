// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection({ movie }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [step, setStep] = useState(1);
  const [animatedText, setAnimatedText] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });

  // Text animation on load
  useEffect(() => {
    setAnimatedText(true);
  }, []);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setStep(1); // Reset to first step when opening modal
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
    setFormData({ name: '', email: '', password: '', rememberMe: false });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleStepNavigation = (direction) => {
    setStep(prev => direction === 'next' ? prev + 1 : prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    handleCloseSignUp();
    // Add your submission logic here
  };

  // Animated heading text
  const welcomeText = "Welcome to";
  const vaultText = "MovieVault";

  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(170deg, rgba(0,0,0,0.8) 0%, rgba(25,10,38,0.85) 50%, rgba(0,0,0,0.9) 100%), url(${movie.backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-particles"></div>
      <div className="hero-content">
        <div className={`hero-text-container ${animatedText ? 'animate' : ''}`}>
          <h2 className="hero-title">
            <span className="welcome-text">
              {welcomeText.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="animated-letter"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="vault-text">
              {vaultText.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className="animated-letter gradient-text"
                  style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h2>
          <p className="hero-subtitle">
            <span className="discover">Discover</span> the latest <span className="highlight">movies</span>, 
            <span className="tv-shows">TV shows</span>, and 
            <span className="more-content">more</span>.
          </p>
        </div>
        <div className="hero-buttons">
          <button className="cta-button primary-button">
            <span className="button-shine"></span>
            <span className="button-text">Browse Now</span>
          </button>
          <button className="cta-button secondary-button" onClick={handleSignUpClick}>
            <span className="journey-text">Start Your </span>
            <span className="highlight-text">Journey</span>
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>

      {showSignUp && (
        <div className="signup-modal">
          <div className="signup-backdrop" onClick={handleCloseSignUp}></div>
          <div className="signup-box animated-modal">
            <button 
              className="close-button" 
              onClick={handleCloseSignUp}
              aria-label="Close signup modal"
            >
              <span className="close-icon">×</span>
            </button>
            
            <div className="signup-progress">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`step-indicator ${step >= i ? 'active' : ''} ${step === i ? 'current' : ''}`}
                >
                  <span className="step-number">{i}</span>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="signup-step active">
                <h3 className="step-title">
                  <span className="title-start">Let's Get</span>
                  <span className="title-end"> Started!</span>
                  <span className="title-icon">🎬</span>
                </h3>
                <p className="step-description">Create your account to personalize your experience</p>
                <form onSubmit={(e) => { e.preventDefault(); handleStepNavigation('next'); }}>
                  <div className="form-group">
                    <label className="input-label">Your Name</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="input-focus-effect"></span>
                    </div>
                  </div>
                  <button type="submit" className="step-button next-step">
                    <span>Continue</span>
                    <span className="button-icon">→</span>
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="signup-step active">
                <h3 className="step-title">
                  <span className="title-almost">Almost</span>
                  <span className="title-there"> There!</span>
                  <span className="title-icon">✨</span>
                </h3>
                <p className="step-description">We'll use this to secure your account</p>
                <form onSubmit={(e) => { e.preventDefault(); handleStepNavigation('next'); }}>
                  <div className="form-group">
                    <label className="input-label">Email Address</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="input-focus-effect"></span>
                    </div>
                  </div>
                  <div className="button-group">
                    <button 
                      type="button" 
                      className="step-button back-step"
                      onClick={() => handleStepNavigation('prev')}
                    >
                      <span className="button-icon">←</span>
                      <span>Back</span>
                    </button>
                    <button type="submit" className="step-button next-step">
                      <span>Continue</span>
                      <span className="button-icon">→</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="signup-step active">
                <h3 className="step-title">
                  <span className="title-final">Final</span>
                  <span className="title-step"> Step!</span>
                  <span className="title-icon">🔒</span>
                </h3>
                <p className="step-description">Create a strong password to protect your account</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="input-label">Password</label>
                    <div className="input-wrapper password-input">
                      <input
                        type="password"
                        name="password"
                        placeholder="At least 8 characters"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="input-focus-effect"></span>
                    </div>
                  </div>
                  <div className="form-options">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                      <span className="checkbox-text">Keep me signed in</span>
                    </label>
                  </div>
                  <div className="button-group">
                    <button 
                      type="button" 
                      className="step-button back-step"
                      onClick={() => handleStepNavigation('prev')}
                    >
                      <span className="button-icon">←</span>
                      <span>Back</span>
                    </button>
                    <button type="submit" className="submit-button">
                      <span className="pulse-effect"></span>
                      <span>Create Account</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
