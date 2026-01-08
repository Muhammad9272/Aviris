'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function BillingPage() {
  useEffect(() => {
    document.title = 'Billing & Payment Methods - AVIRIS | Manage Your Payments';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manage your AVIRIS payment methods, view billing history, update credit card information, and handle all payment-related settings for your subscription.');
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    cardholderName: 'Tolga Akcay',
    expiry: '06 / 2028',
    cardNumber: '1234 1234 1234 1234',
    cvv: '123'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Payment method added:', formData);
    setShowModal(false);
  };

  return (
    <>
      <div className="main-content-wrapper">
        <div className="card-custom p-3 p-md-4 mb-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
            <h2 className="welcome-heading mb-0">Payment Methods</h2>
            <button 
              className="btn btn-primary-custom d-flex align-items-center gap-2"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-bank-card-line"></i>
              Add Payment Method
            </button>
          </div>

          {/* Stripe Card */}
          <div className="payment-method-item flex-column flex-md-row">
            <div className="d-flex align-items-center gap-3 flex-grow-1 mb-3 mb-md-0">
              <div className="payment-method-icon stripe">
                <Image src="/user/img/stripe_1.png" alt="Stripe" width={60} height={60} className="payment-provider-logo" />
              </div>
              <div>
                <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                  <span className="payment-method-name">Tolga Akcay - 1234 **** 1234</span>
                  <span className="badge-custom badge-info-custom">Primary</span>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 justify-content-start">
              <button className="btn btn-icon text-success">
                <i className="ri-edit-line"></i>
              </button>
              <button className="btn btn-icon text-danger">
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>

          {/* PayPal Card */}
          <div className="payment-method-item flex-column flex-md-row">
            <div className="d-flex align-items-center gap-3 flex-grow-1 mb-3 mb-md-0">
              <div className="payment-method-icon paypal">
                <Image src="/user/img/paypal_1.png" alt="PayPal" width={60} height={60} className="payment-provider-logo" />
              </div>
              <div>
                <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                  <span className="payment-method-name">testuser@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2 flex-wrap">
              <button className="btn btn-outline-custom btn-sm" style={{ flex: '1 1 100%', maxWidth: '100%' }}>
                <i className="ri-checkbox-circle-line me-1"></i>
                Mark as Default
              </button>
              <button className="btn btn-icon text-success" style={{ flex: '0 0 auto' }}>
                <i className="ri-edit-line"></i>
              </button>
              <button className="btn btn-icon text-danger" style={{ flex: '0 0 auto' }}>
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>

            <style jsx>{`
              @media (min-width: 768px) {
                .payment-method-item .btn-outline-custom {
                  flex: 0 0 auto !important;
                  max-width: none !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Add Payment Method Modal */}
      {showModal && (
        <>
          <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div>
                    <h3 className="modal-title fw-bold">Add Payment Method</h3>
                    <p className="text-muted small mb-0">Your payment details are encrypted and safe.</p>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body pt-3">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2">Cardholder Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="cardholderName"
                          placeholder="Tolga Akcay" 
                          value={formData.cardholderName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2">Expiry</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="expiry"
                          placeholder="06 / 2028" 
                          value={formData.expiry}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2">Card Number</label>
                        <div className="position-relative">
                          <span className="card-type-icon">
                            <Image src="/user/img/mastercard.png" alt="Mastercard" width={24} height={24} className="card-brand-icon" />
                          </span>
                          <input 
                            type="text" 
                            className="form-control ps-5" 
                            name="cardNumber"
                            placeholder="1234 1234 1234 1234" 
                            value={formData.cardNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold mb-2">CVV</label>
                        <input 
                          type="password" 
                          className="form-control" 
                          name="cvv"
                          placeholder="•••" 
                          value={formData.cvv}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary-custom w-100 py-3 mb-3">Save Method</button>

                    <div className="text-center mb-3">
                      <span className="text-muted">or</span>
                    </div>

                    <button 
                      type="button" 
                      className="btn btn-outline-custom w-100 py-3 d-flex align-items-center justify-content-center gap-2 mb-3"
                    >
                      <Image src="/user/img/paypal.png" alt="PayPal" width={80} height={20} className="paypal-button-logo" />
                      Connect with Paypal
                    </button>

                    <div className="alert alert-success d-flex align-items-start gap-2 mb-0" role="alert">
                      <i className="ri-shield-check-line fs-5 flex-shrink-0"></i>
                      <small>We protect your payment information using encryption to provide bank-level security.</small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
