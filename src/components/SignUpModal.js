// src/components/SignUpModal.js
import React, { useState } from "react";
import "./SignUpModal.css";

function SignUpModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to MovieVault, ${formData.name}!`);
    // Add backend integration logic here
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content animated-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        {step === 1 && (
          <div className="step">
            <h2>Welcome to MovieVault!</h2>
            <p>Let’s get started by knowing you better.</p>
            <form>
              <label htmlFor="name">What’s your name?</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="next-btn"
                onClick={handleNextStep}
              >
                Next Step →
              </button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="step">
            <h2>Great to meet you!</h2>
            <p>Where can we reach you?</p>
            <form>
              <label htmlFor="email">Your email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="prev-btn"
                onClick={handlePreviousStep}
              >
                ← Back
              </button>
              <button
                type="button"
                className="next-btn"
                onClick={handleNextStep}
              >
                Next Step →
              </button>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="step">
            <h2>One last thing!</h2>
            <p>Create a secure password to protect your account.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="password">Your password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <button
                type="button"
                className="prev-btn"
                onClick={handlePreviousStep}
              >
                ← Back
              </button>
              <button type="submit" className="submit-btn">
                Create Account
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpModal;
