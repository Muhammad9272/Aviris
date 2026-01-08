'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Tolga Akcay',
    email: 'tolgaakcay@aviris.com',
    password: 'password123',
    confirmPassword: 'password123'
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register submitted:', formData);
  };

  return (
    <div className="login-wrapper">
      <style jsx>{`
        .dashboard-preview {
          left: 0;
          right: unset;
          max-width: 95%;
          max-height: 100%;
        }
        .dashboard-preview img {
          border-radius: 0px;
        }
        @media (min-width: 1400px) {
          .dashboard-preview {
            max-width: 95%;
            max-height: 75%;
          }
        }
        @media (min-width: 1600px) {
          .dashboard-preview {
            max-width: 95%;
            max-height: 75%;
          }
        }
      `}</style>

      {/* Left Section */}
      <div className="left-section">
        <div className="hero-section">
          <h1 className="hero-title">
            Next-Gen <span className="brand">Antivirus Software
              <svg className="brand-underline" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C30 3 50 2 100 6C150 10 170 8 198 4" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>. Powered by AI. Built for Real-Time Protection.
          </h1>
          <p className="hero-subtitle">Developed & hosted in Germany — GDPR-compliant, privacy-first.</p>
        </div>
        
        <div className="dashboard-preview">
          <Image src="/front/img/register_bg.png" alt="AVIRIS Dashboard Preview" width={800} height={700} priority />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <button className="back-btn">
          <i className="ri-arrow-left-line"></i>
        </button>
        
        <a href="#" className="register-link">Register a Partner</a>

        <div className="login-icon">
          <Image src="/front/img/login_icon.png" alt="AVIRIS Logo" width={80} height={80} />
        </div>

        <h2 className="welcome-title">Get start with AVIRIS</h2>
        <p className="welcome-subtitle">Let's create an account.</p>

        <form onSubmit={handleSubmit}>
          <label className="form-label">Full Name</label>
          <div className="input-icon-wrapper">
            <i className="ri-user-line input-icon"></i>
            <input 
              type="text" 
              className="form-control-custom" 
              placeholder="Tolga Akcay"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <label className="form-label">Email Address</label>
          <div className="input-icon-wrapper">
            <i className="ri-mail-line input-icon"></i>
            <input 
              type="email" 
              className="form-control-custom" 
              placeholder="tolgaakcay@aviris.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <label className="form-label">Password</label>
          <div className="input-icon-wrapper">
            <i className="ri-lock-line input-icon"></i>
            <input 
              type={showPassword ? "text" : "password"}
              className="form-control-custom" 
              placeholder="••••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <button type="button" className="password-toggle" onClick={togglePassword}>
              <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
            </button>
          </div>

          <label className="form-label">Confirm Password</label>
          <div className="input-icon-wrapper">
            <i className="ri-lock-line input-icon"></i>
            <input 
              type={showConfirmPassword ? "text" : "password"}
              className="form-control-custom" 
              placeholder="••••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
            <button type="button" className="password-toggle" onClick={toggleConfirmPassword}>
              <i className={showConfirmPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
            </button>
          </div>

          <div className="password-requirements">
            <h6>Password Requirements:</h6>
            <ul>
              <li>Minimum 8 characters long - the more, the better</li>
              <li>At least one lowercase character</li>
              <li>At least one number, symbol, or whitespace character</li>
            </ul>
          </div>

          <div className="terms-row">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label className="form-check-label terms-text" htmlFor="terms">
                Agree on <a href="#" className="terms-link">terms</a> and <a href="#" className="terms-link">privacy policy</a>.
              </label>
            </div>
          </div>

          <button type="submit" className="avr__btn-primary">Sign up</button>

          <div className="signin-text">
            Already have an account? <a href="#" className="signin-link">Sign in instead</a>
          </div>

          <p className="footer-text">
            Protected by reCAPTCHA and subject to the Google <a href="#" className="footer-link">Privacy Policy</a> and <a href="#" className="footer-link">Terms of Service</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
