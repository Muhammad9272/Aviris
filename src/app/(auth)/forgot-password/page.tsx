'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/config/routes';

export default function ForgotPassword() {
  useEffect(() => {
    document.title = 'Forgot Password - AVIRIS | Reset Your Password';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Forgot your AVIRIS password? Reset it securely. Enter your email to receive password reset instructions.');
    }
  }, []);
  const [email, setEmail] = useState('tolgaakcay@aviris.com');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Forgot password submitted:', email);
  };

  return (
    <>
      <style jsx>{`
        .dashboard-preview {
          left: 0;
          right: unset;
          max-width: 95%;
          max-height: 48%;
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
            <Image src="/front/img/reset_bg.png" alt="AVIRIS Dashboard Preview" width={800} height={400} priority />
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <Link href={routes.auth.login} className="back-btn">
            <i className="ri-arrow-left-line"></i>
          </Link>
          
          {/* Main Content - Vertically Centered */}
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <div className="login-icon">
              <Image src="/front/img/login_icon.png" alt="AVIRIS Logo" width={80} height={80} />
            </div>
            
            <h2 className="welcome-title">Forgot Password?</h2>
            <p className="welcome-subtitle">Enter your email & we'll send you instructions to reset your password</p>
          
          <form onSubmit={handleSubmit}>
            <label className="form-label">Email Address</label>
            <div className="input-icon-wrapper">
              <i className="ri-mail-line input-icon"></i>
              <input 
                type="email" 
                className="form-control-custom" 
                placeholder="tolgaakcay@aviris.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="avr__btn-primary">Send Reset Link</button>
          </form>
        </div>
        
          {/* Footer - Aligned to Bottom */}
          <div className="mt-auto">
            <p className="footer-text mb-0">
              Protected by reCAPTCHA and subject to the Google <a href="https://policies.google.com/privacy" className="footer-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="footer-link" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
