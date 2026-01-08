'use client';

import { useState, FormEvent } from 'react';
import PhoneInput from './PhoneInput';

export default function BusinessQuotationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [objective, setObjective] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ firstName, lastName, email, phone, objective, message });
  };

  return (
    <div className="quotation-form-wrapper">
      <form onSubmit={handleSubmit} id="quotationForm">
        {/* Name Fields */}
        <div className="row mb-3">
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="John" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-2">
              <label className="form-label">Last Name</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Doe" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required 
              />
            </div>
          </div>
        </div>

        {/* Email and Phone */}
        <div className="row mb-3">
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="john@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <PhoneInput
                value={phone}
                onChange={setPhone}
                placeholder="123-456-7890"
              />
            </div>
          </div>
        </div>

        {/* Objective */}
        <div className="form-group mb-3">
          <label className="form-label">Objective</label>
          <select 
            className="form-control form-select-custom" 
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            required
          >
            <option value="">I want to change my plan</option>
            <option value="new-subscription">Start New Subscription</option>
            <option value="upgrade">Upgrade Current Plan</option>
            <option value="enterprise">Enterprise Solution</option>
            <option value="support">Technical Support</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div className="form-group mb-5">
          <label className="form-label">Message</label>
          <textarea 
            className="form-control form-textarea" 
            placeholder="Can you please help me" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-secondary-custom w-100 mt-10">
          Book a Demo
        </button>
      </form>
    </div>
  );
}
