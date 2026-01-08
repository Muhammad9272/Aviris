'use client';

import { useState, useEffect } from 'react';
import FAQs from '@/components/shared/FAQs';
import PhoneInput from '@/components/shared/PhoneInput';
import '@/styles/front/pages/contact.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - AVIRIS | Get in Touch with Our Team';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact AVIRIS support team. Get help with your cybersecurity needs, ask questions about our products, or request enterprise solutions. We\'re here to help 24/7.');
    }
  }, []);
  const [phone, setPhone] = useState('');
  return (
    <>
      {/* Contact Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>Contact us</span>
            </div>
            
            <h1 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Contact</span> Our Team
            </h1>
            
            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Get any questions about the product or scaling on our platform? We&apos;re here to help. Chat our friendly team 24/7 <br /> and get onboard in less than 5 minutes.
            </p>
          </div>

          <div className="row g-4">
            {/* Left Column: Contact Info */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="contact-info-card">
                {/* Chat with us */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Chat with us</h4>
                    <p>Speak to our friendly team via live chat.</p>
                    <a href="#live-chat" className="contact-info-link">Start A Live Chat →</a>
                  </div>
                </div>

                {/* Email us */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Email us</h4>
                    <p>Send us an email anytime you need.</p>
                    <a href="mailto:support@aviris.com" className="contact-info-link">Shoot Us An Email →</a>
                  </div>
                </div>

                {/* Call us */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Call us</h4>
                    <p>Mon-Fri from 8am to 6pm.</p>
                    <a href="tel:+12345678910" className="contact-info-link">+1 234 567 8910 →</a>
                  </div>
                </div>

                {/* Visit us */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>Visit us</h4>
                    <p>Chat in person at Germany HQ.</p>
                    <a href="https://maps.google.com/?q=Musterstraße+12,+10115+Berlin,+Germany" target="_blank" rel="noopener noreferrer" className="contact-info-link">Musterstraße 12, Berlin →</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
              <div className="contact-form-card">
                <form action="#" method="POST" id="contactForm">
                  {/* Name Fields */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="John" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="Doe" required />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" placeholder="john@gmail.com" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number</label>
                      <PhoneInput
                        value={phone}
                        onChange={setPhone}
                        placeholder="+1 234 567 8910"
                      />
                    </div>
                  </div>

                  {/* Objective */}
                  <div className="mb-3">
                    <label className="form-label">How can we help you?</label>
                    <select className="form-select" required>
                      <option value="">I want to change my plan</option>
                      <option value="new">Start New Subscription</option>
                      <option value="upgrade">Upgrade Current Plan</option>
                      <option value="enterprise">Enterprise Solution</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows={5} placeholder="Can you please help me" required></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn-secondary-custom w-100">
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQs />
    </>
  );
}
