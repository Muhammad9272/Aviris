'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResetPassword() {
  useEffect(() => {
    document.title = 'Reset Password - AVIRIS | Set New Password';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create a new secure password for your AVIRIS account. Enter and confirm your new password to regain access.');
    }
  }, []);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: 'password123',
    confirmPassword: 'Akcay@476'
  });

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic here
    console.log('Reset password submitted:', formData);
  };

  return (
    <>
      <style jsx>{`
        .dashboard-preview {
          left: 0;
          right: unset;
          max-width: 95%;
          max-height: 60%;
        }
        .dashboard-preview img {
          border-radius: 0px;
        }
      `}</style>

      <div className="login-wrapper">
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
            <Image src="/front/img/reset_bg.png" alt="AVIRIS Dashboard Preview" width={800} height={500} priority />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <a href="login.php" className="back-btn">
            <i className="ri-arrow-left-line"></i>
          </a>
        
          <div className="login-icon">
            <Image src="/front/img/login_icon.png" alt="AVIRIS Logo" width={80} height={80} />
          </div>

          <h2 className="welcome-title">Reset Password</h2>
          <p className="welcome-subtitle">You are verified! Feel free to setup a new password.</p>

          <form onSubmit={handleSubmit}>
            <label className="form-label">New Password</label>
            <div className="input-icon-wrapper">
              <i className="ri-lock-line input-icon"></i>
              <input 
                type={showNewPassword ? "text" : "password"}
                className="form-control-custom" 
                placeholder="••••••••••"
                value={formData.newPassword}
                onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
              />
              <button type="button" className="password-toggle" onClick={toggleNewPassword}>
                <i className={showNewPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
              </button>
            </div>

            <label className="form-label">Confirm New Password</label>
            <div className="input-icon-wrapper">
              <i className="ri-lock-line input-icon"></i>
              <input 
                type={showConfirmPassword ? "text" : "password"}
                className="form-control-custom" 
                placeholder="Akcay@476"
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

            <button type="submit" className="avr__btn-primary">Confirm create</button>

            <p className="footer-text">
              Protected by reCAPTCHA and subject to the Google <a href="#" className="footer-link">Privacy Policy</a> and <a href="#" className="footer-link">Terms of Service</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
