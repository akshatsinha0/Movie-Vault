
import React from 'react';
import './SignUpModal.css';

function SignUpModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle sign-up logic here (e.g., send data to your backend)
    alert('Sign-up form submitted!');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content purple-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="Your email" required />

          <label>Password</label>
          <input type="password" placeholder="Your password" required />

          <button type="submit">Register</button>
        </form>
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default SignUpModal;
