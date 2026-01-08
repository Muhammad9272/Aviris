'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="main-content-wrapper">
      {/* Alert Banner */}
      <div className="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert">
        <i className="ri-alert-line fs-5 me-2"></i>
        <div>
          Your email is not verified. Please check your email for the verification link.
          <a href="#" className="alert-link ms-1 fw-bold">Send again</a>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      {/* Welcome Card */}
      <div className="card-custom p-4 mb-4">
        <div className="d-flex align-items-start align-items-sm-center gap-2 gap-sm-3 mb-3">
          <div className="stat-icon device1s badge-success-custom flex-shrink-0">
            <i className="ri-dashboard-fill"></i>
          </div>
          <h2 className="welcome-heading mb-0 fs-5 fs-md-4">Welcome back, Muddassar Haseeb 👋</h2>
        </div>
        <p className="welcome-description mb-4">
          Your device&apos;s security status this week is excellent. Let&apos;s continue to maintain it and earn reward points !
        </p>

        {/* Stats Grid */}
        <div className="row g-3">
          <div className="col-md-6 col-xl-3">
            <div className="stat-card d-flex align-items-center gap-3">
              <div className="stat-icon devices">
                <i className="ri-device-line"></i>
              </div>
              <div>
                <p className="stat-number">9</p>
                <p className="stat-label">Device(s)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="stat-card d-flex align-items-center gap-3">
              <div className="stat-icon mobile">
                <i className="ri-smartphone-line"></i>
              </div>
              <div>
                <p className="stat-number">2</p>
                <p className="stat-label">Mobile Devices</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="stat-card d-flex align-items-center gap-3">
              <div className="stat-icon desktop">
                <i className="ri-computer-line"></i>
              </div>
              <div>
                <p className="stat-number">7</p>
                <p className="stat-label">Desktop Devices</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="stat-card d-flex align-items-center gap-3">
              <div className="stat-icon malware">
                <i className="ri-bug-line"></i>
              </div>
              <div>
                <p className="stat-number">1</p>
                <p className="stat-label">Critical Malware(s)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Section */}
        <div className="card-custom bg-light p-4 mb-4 mt-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <div>
              <h3 className="plan-title mb-1">Your Plan</h3>
              <p className="plan-renewal">Renews 13 Jun, 2026</p>
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 mt-3 mt-md-0">
              <Link href="/userdashboard/billing" className="link-primary-custom">
                Manage Payment Methods
              </Link>
              <Link href="/userdashboard/pricing" className="btn-link-white">
                Change Plan
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 plan-divider pe-lg-4">
              <div className="plan-name-label mb-2">Ultimate - AI Security + Analytics</div>
              <div className="plan-price mb-1">
                €119.90<span className="fs-6 fw-normal text-secondary">/year</span>
              </div>
              <div className="plan-devices mb-4">9 device</div>
              <button className="btn btn-primary-custom w-100 d-flex align-items-center justify-content-center gap-2">
                <i className="ri-flashlight-fill"></i>
                Upgrade Plan
              </button>
            </div>

            <div className="col-lg-8 ps-lg-4 mt-4 mt-lg-0">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">Advanced malware/virus scan</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">App Manager & Duplicate File Scanner</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">AI Threat Detection (viruses, etc.)</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">Scheduled scans & advanced heuristics</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">Unlimited VPN (multi-device)</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">24/7 Dedicated Manager Support</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">Results shown, but removal/quarantine requires upgrade</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-2">
                    <i className="ri-checkbox-circle-fill text-success fs-5 mt-0"></i>
                    <span className="feature-text">Mobile extras: Privacy Advisor, QR Scanner, Speed Test</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="card-custom1 p1-4 mb-4 mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="history-title">History</h3>
            <a href="#" className="link-primary-custom">Download Summary</a>
          </div>

          <div className="table-responsive bg-light rounded-3">
            <table className="table table-custom table-light">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Title</th>
                  <th>Method</th>
                  <th>Paid Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-semibold">#587MJF91</td>
                  <td title="Basic Plan - €39.90/Yearly">Basic Plan - €39.90/Yearly</td>
                  <td className="no-truncate">
                    <div className="d-flex align-items-center gap-2">
                      <div className="payment-icon">
                        <Image src="/user/img/paypal.png" alt="PayPal" width={25} height={25} className="payment-method-img" />
                      </div>
                      <span>PayPal</span>
                    </div>
                  </td>
                  <td className="fw-semibold amount-positive">€39.90</td>
                  <td className="no-truncate">
                    <div className="d-flex align-items-center gap-2">
                      <i className="ri-calendar-line text-secondary"></i>
                      <span>24 Jan, 2026</span>
                    </div>
                  </td>
                  <td className="no-truncate">
                    <span className="badge-custom badge-success-custom">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">#596ETH34</td>
                  <td title="Remaining">Remaining</td>
                  <td className="no-truncate">
                    <div className="d-flex align-items-center gap-2">
                      <div className="payment-icon">
                        <Image src="/user/img/stripe.png" alt="Stripe" width={25} height={25} className="payment-method-img" />
                      </div>
                      <span>Stripe</span>
                    </div>
                  </td>
                  <td className="fw-semibold amount-positive">€12.65</td>
                  <td className="no-truncate">
                    <div className="d-flex align-items-center gap-2">
                      <i className="ri-calendar-line text-secondary"></i>
                      <span>28 Jan, 2025</span>
                    </div>
                  </td>
                  <td className="no-truncate">
                    <span className="badge-custom badge-success-custom">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">#986QTX18</td>
                  <td title="Basic Plan - €39.90/Yearly">Basic Plan - €39.90/Yearly</td>
                  <td className="no-truncate">
                    <div className="d-flex align-items-center gap-2">
                      <div className="payment-icon">
                        <Image src="/user/img/paypal.png" alt="PayPal" width={25} height={25} className="payment-method-img" />
                      </div>
                      <span>PayPal</span>
                    </div>
                  </td>
                  <td className="fw-semibold amount-negative">-€12.65</td>
                  <td className="no-truncate">
                    <div className="d-flex align-items-center gap-2">
                      <i className="ri-calendar-line text-secondary"></i>
                      <span>24 Jan, 2025</span>
                    </div>
                  </td>
                  <td className="no-truncate">
                    <span className="badge-custom badge-warning-custom">Due</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

