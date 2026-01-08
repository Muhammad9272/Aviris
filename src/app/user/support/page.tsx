'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SupportPage() {
  useEffect(() => {
    document.title = 'Support Center - AVIRIS | Get Help & Submit Tickets';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get expert help with AVIRIS security solutions. Submit support tickets, contact our 24/7 security team, and find answers to your VPN and cybersecurity questions.');
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: 'Tolga',
    lastName: 'Akcay',
    email: 'tolgaakcay@aviris.com',
    subject: '',
    summary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="main-content-wrapper">
      <div className="card-custom p-4 mb-4">
        <div className="d-flex align-items-start align-items-sm-center gap-2 gap-sm-3 mb-4">
          <div className="stat-icon badge-success-custom flex-shrink-0">
            <i className="ri-headphone-line"></i>
          </div>
          <div className="flex-grow-1">
            <h2 className="welcome-heading mb-1 fs-5 fs-sm-4">Contact & Support</h2>
            <p className="welcome-description mb-0 small">Have a question or experiencing an issue? We're here to help!</p>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Column - Form */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief summary of your issue"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="summary" className="form-label">Summary</label>
                  <textarea
                    className="form-control"
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your issue or question in detail..."
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary-custom w-100">
                    <i className="ri-send-plane-line me-2"></i>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            {/* Contact Info Section */}
            <div className="bg-light p-4 rounded-3 mb-4">
              <h4 className="section-heading mb-4">Prefer a Direct Approach?</h4>

              <div className="contact-info-item">
                <div className="contact-info-icon phone">
                  <i className="ri-phone-line"></i>
                </div>
                <div>
                  <p className="contact-info-label mb-1">Phone Number</p>
                  <a href="tel:+491727444476" className="contact-info-value">+49 172 7444476</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon email">
                  <i className="ri-mail-line"></i>
                </div>
                <div>
                  <p className="contact-info-label mb-1">Email Address</p>
                  <a href="mailto:contact@aviris.com" className="contact-info-value">contact@aviris.com</a>
                </div>
              </div>

              <div className="contact-info-item mb-0">
                <div className="contact-info-icon time">
                  <i className="ri-time-line"></i>
                </div>
                <div>
                  <p className="contact-info-label mb-1">Working Hours</p>
                  <p className="contact-info-value mb-0">Monday to Friday 9 AM - 6 PM (GMT+2)</p>
                </div>
              </div>
            </div>

            {/* Banner Card */}
            <div className="banner-card position-relative overflow-hidden rounded-3" style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/user/img/contact_bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {/* Logo at Top */}
              <div className="d-flex align-items-left w-100">
                <Image src="/user/img/logo_icon.png" alt="AVIRIS" width={50} height={50} />
              </div>

              {/* Content at Bottom */}
              <div>
                <h3 className="banner-title text-white mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                  Next-Gen{' '}
                  <span className="position-relative d-inline-block">
                    Antivirus Software.
                    <svg style={{ position: 'absolute', left: 0, bottom: '-5px', width: '100%', height: '20px' }} viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10C20 2, 40 2, 60 6C80 10, 100 10, 118 6" stroke="#79857961" strokeWidth="3" strokeLinecap="round" fill="none" />
                    </svg>
                  </span>
                  <br />
                  Powered by AI. Built for Real-Time Protection.
                </h3>
                <p className="banner-text text-white-50 mb-0">Developed & hosted in Germany — GDPR-compliant, privacy-first.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
