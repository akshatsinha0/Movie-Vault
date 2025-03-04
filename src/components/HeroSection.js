// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>Welcome to MovieVault</h2>
        <p>Discover the latest movies, TV shows, and more.</p>
        <button className="cta-button">Browse Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
