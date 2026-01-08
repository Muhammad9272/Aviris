'use client';

import { useState } from 'react';
import '@/styles/front/components/pricing-card.css';

const pricingTiers: {[key: number]: number} = {
  1: 39.90, 2: 69.80, 3: 94.70, 4: 118.60, 5: 141.50,
  6: 163.40, 7: 184.30, 8: 204.20, 9: 223.10, 10: 241.00,
  11: 257.90, 12: 273.80, 13: 288.70, 14: 302.60, 15: 315.50,
  16: 327.40, 17: 338.30, 18: 348.20, 19: 357.10, 20: 365.00
};

export default function PricingCards() {
  const [devices, setDevices] = useState(9);
  const [period, setPeriod] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [email, setEmail] = useState('tolgatescav@aviris.com');

  const basePricePerDevice = 39.90;
  const maxSlots = 20;

  const calculatePricing = () => {
    let totalPrice = pricingTiers[devices];
    
    if (period === 2) {
      totalPrice = totalPrice * 2 * 0.8;
    }
    
    const avgPricePerDevice = totalPrice / devices;
    const discount = appliedPromo ? totalPrice * 0.10 : 0;
    const finalPrice = totalPrice - discount;
    
    return { totalPrice, avgPricePerDevice, discount, finalPrice };
  };

  const { totalPrice, avgPricePerDevice, discount, finalPrice } = calculatePricing();

  const savings = devices > 1 ? (basePricePerDevice * devices - pricingTiers[devices]) * (period === 2 ? 2 : 1) : 0;
  const rangePercentage = ((devices - 1) / (maxSlots - 1)) * 100;

  return (
    <div className="card-custom p-4">
      <div className="row g-3 mb-4">
        {/* Free Plan */}
        <div className="col-lg-5">
          <div className="card-custom aviris__bg-dark custom-box-shadow p-3 h-100">
            <div className="pricing-card-upper d-flex flex-column">
              <div className="flex-grow-1">
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div className="pricing-icon-free flex-shrink-0">
                    <i className="ri-shield-star-line"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-1">Free <span className="text-secondary fw-semibold fs-6">- Free Security Scan</span></h4>
                <p className="text-muted small mb-0">Basic protection with free malware scans & instant threat detection.</p>
                <h2 className="display-5 fw-bold mb-3">€0.00</h2>
              </div>
              <button className="btn btn-outline-custom w-100 mb-3 mt-auto" disabled>Current Plan</button>
            </div>

            <div className="border-top pt-3">
              <h6 className="fw-bold mb-1">Features</h6>
              <p className="text-muted small fst-italic mb-2">Included in free plan...</p>
              
              <div className="d-flex gap-2 mb-2 small">
                <i className="ri-checkbox-circle-fill text-secondary"></i>
                <span>1 device (PC or Mobile)</span>
              </div>
              <div className="d-flex gap-2 mb-2 small">
                <i className="ri-checkbox-circle-fill text-secondary"></i>
                <span>Free malware/virus scan</span>
              </div>
              <div className="d-flex gap-2 mb-2 small">
                <i className="ri-checkbox-circle-fill text-secondary"></i>
                <span>Detects threats (viruses, ransomware, spyware, etc.)</span>
              </div>
              <div className="d-flex gap-2 mb-2 small">
                <i className="ri-checkbox-circle-fill text-secondary"></i>
                <span>First detected threat is quarantined for free</span>
              </div>
              <div className="d-flex gap-2 small">
                <i className="ri-checkbox-circle-fill text-secondary"></i>
                <span>Further removals & full protection require upgrade</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ultimate Plan */}
        <div className="col-lg-7">
          <div className="premium-card-wrapper custom-box-shadow position-relative overflow-hidden">
            {/* Top Half: Dark Green with Map */}
            <div className="premium-top">
              <div className="position-relative p-3">
                {/* Header Row */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-3">
                  <div className="d-flex gap-3 flex-grow-1">
                    <div className="pricing-icon-premium flex-shrink-0">
                      <i className="ri-shield-flash-line"></i>
                    </div>
                  </div>
                  
                  {/* Billing Pills */}
                  <div className="d-flex flex-wrap gap-2 flex-shrink-0 billing-bill-content">
                    <span 
                      className={`billing-pill ${period === 1 ? 'active' : ''}`}
                      onClick={() => setPeriod(1)}
                    >
                      1 year
                    </span>
                    <span 
                      className={`billing-pill ${period === 2 ? 'active' : ''}`}
                      onClick={() => setPeriod(2)}
                    >
                      2 years
                    </span>
                    <span className="pricing-badge-off">Save 20%</span>
                  </div>
                </div>
                <div className="mb-3">
                  <h4 className="text-white fw-bold mb-1">Ultimate <span className="fw-semibold fs-6" style={{color: 'rgba(255,255,255,0.8)'}}>- AI Security + Analytics</span></h4>
                  <p className="small mb-0" style={{color: 'rgba(255,255,255,0.8)'}}>Maximum coverage with AI analytics, deep insights, and advanced reports.</p>
                </div>

                {/* Price & Devices Row */}
                <div className="row g-3 mb-1">
                  <div className="col-md-12">
                    <div className="d-flex align-items-start gap-2">
                      <h2 className="display-5 fw-bold text-white mb-0">
                        €{avgPricePerDevice.toFixed(2).replace('.', ',')}
                      </h2>
                      <small className="text-white-50 mt-2">
                        /Per Month<br />
                        <span>{devices === 1 ? '/Per Device' : `/${devices} Devices`}</span><br />
                      </small>
                    </div>
                    <p className="mb-1 mt-2 text-white">
                      {period === 2 ? 'Billed Every 2 Years' : 'Billed Annually'}
                    </p>
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-12">
                    <div className="device-box p-3 rounded">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center gap-2">
                          <i className="ri-computer-line text-white"></i>
                          <span className="text-white fw-semibold small">Devices</span>
                        </div>
                        <div className="device-badge text-white d-flex align-items-center gap-1">
                          <input 
                            type="number" 
                            className="device-input" 
                            min="1" 
                            max="20" 
                            value={devices}
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              if (!isNaN(val) && val >= 1 && val <= 20) {
                                setDevices(val);
                              }
                            }}
                          />
                          <span>Slot</span>
                        </div>
                      </div>
                      
                      <div className="range-wrapper position-relative">
                        <div className="range-progress" style={{width: `${rangePercentage}%`}}></div>
                        <input 
                          type="range" 
                          className="form-range custom-range" 
                          min="1" 
                          max="20" 
                          value={devices}
                          onChange={(e) => setDevices(parseInt(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 fs-6 d-flex">
                  <p className="text-white-50">
                    Total: <span className="text-white fw-semibold">€{totalPrice.toFixed(2).replace('.', ',')}</span>
                  </p>
                  {savings > 0 && (
                    <span className="text-white-50 ms-2">
                      • Save €{savings.toFixed(2).replace('.', ',')} vs individual pricing
                    </span>
                  )}
                </div>

                {/* Email & Promo Form */}
                <div className="checkout-form-wrapper">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3">
                      <label className="form-label small mb-2">Email Address <span className="text-danger">*</span></label>
                      <div className="position-relative">
                        <i className="ri-mail-line email-icon"></i>
                        <input 
                          type="email" 
                          className="form-control email-input" 
                          placeholder="tolgatescav@aviris.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="ri-information-line info-icon"></i>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="promo-input-wrapper">
                        <input 
                          type="text" 
                          className="form-control promo-code-input" 
                          placeholder="Promo Code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button 
                          type="button" 
                          className="btn btn btn-primary-custom btn-apply-coupon"
                          disabled={!promoCode.trim() || !!appliedPromo}
                          onClick={() => {
                            if (promoCode.trim()) {
                              setAppliedPromo(promoCode);
                              setPromoCode('');
                            }
                          }}
                        >
                          Apply Coupon
                        </button>
                      </div>
                    </div>

                    {appliedPromo && (
                      <div className="card-custom p-2 mb-3">
                        <div className="promo-tag-wrapper mb-3">
                          <span className="promo-tag">
                            {appliedPromo}
                            <i 
                              className="ri-close-line" 
                              onClick={() => setAppliedPromo('')}
                              style={{cursor: 'pointer'}}
                            ></i>
                          </span>
                        </div>

                        <div className="price-summary mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span className="small">Subtotal:</span>
                            <span className="fw-semibold">€{totalPrice.toFixed(2).replace('.', ',')}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span className="small">Discount:</span>
                            <span className="text-success fw-semibold">-€{discount.toFixed(2).replace('.', ',')}</span>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-secondary-custom w-100 mb-2">
                          Continue to Pay - €{finalPrice.toFixed(2).replace('.', ',')}
                        </button>
                      </div>
                    )}
                    
                    {!appliedPromo && (
                      <button type="submit" className="btn btn-secondary-custom w-100 mb-2">
                        Continue to Pay - €{totalPrice.toFixed(2).replace('.', ',')}
                      </button>
                    )}
                  </form>

                  <p className="payment-security-text text-center mb-0">
                    <i className="ri-shield-check-line"></i>
                    Secure payment - No hidden fees - Cancel anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Half: White with Features */}
            <div className="premium-bottom bg-white p-3">
              <h6 className="fw-bold mb-1">Features</h6>
              <p className="text-muted small fst-italic mb-2">Included in ultimate plan...</p>
              
              <div className="row g-2">
                <div className="col-md-6">
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Advanced malware/virus scan</span>
                  </div>
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>AI Threat Detection (viruses, ransomware, spyware, etc.)</span>
                  </div>
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Full removal & quarantine included</span>
                  </div>
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Unlimited VPN (multi-device)</span>
                  </div>
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>App Manager & Duplicate File Scanner</span>
                  </div>
                  <div className="d-flex gap-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Scheduled scans, real-time protection & advanced heuristics</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Firewall Guard & Web Shield</span>
                  </div>
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Multi-device protection</span>
                  </div>
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Privacy Advisor</span>
                  </div>
                  <div className="d-flex gap-2 mb-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>QR Scanner</span>
                  </div>
                  <div className="d-flex gap-2 small">
                    <i className="ri-checkbox-circle-fill text-success"></i>
                    <span>Speed Test</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Note */}
      <div className="text-center py-3">
        <p className="text-muted small mb-0">
          <i className="ri-shield-check-line text-success me-1"></i>
          Your information is secure with 3D payment authentication, and you can cancel your subscription anytime.
        </p>
      </div>
    </div>
  );
}
