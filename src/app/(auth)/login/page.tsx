'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: 'tolgaakcay@aviris.com',
    password: 'password123'
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', formData);
  };

  return (
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
          <Image src="/front/img/login_bg.png" alt="AVIRIS Dashboard Preview" width={800} height={600} priority />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <Link href="/" className="back-btn">
          <i className="ri-arrow-left-line"></i>
        </Link>
        
        <div className="login-icon">
          <Image src="/front/img/login_icon.png" alt="AVIRIS Logo" width={80} height={80} />
        </div>

        <h2 className="welcome-title">Welcome to AVIRIS</h2>
        <p className="welcome-subtitle">Let's sign you in.</p>

        <form onSubmit={handleSubmit}>
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

          <div className="remember-row">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="remember">
                Remember me?
              </label>
            </div>
            <Link href="/userdashboard/auth/forgot-password" className="forgot-link">Forget Password</Link>
          </div>

          <button type="submit" className="avr__btn-primary">Login</button>

          <div className="signup-text">
            New on AVIRIS? <Link href="/userdashboard/auth/register" className="signup-link">Create an account</Link>
          </div>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          <button type="button" className="social-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Sign in with Facebook
          </button>

          <p className="footer-text">
            Protected by reCAPTCHA and subject to the Google <a href="#" className="footer-link">Privacy Policy</a> and <a href="#" className="footer-link">Terms of Service</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
