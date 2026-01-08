'use client';

import { useState, useEffect } from 'react';

export default function SettingsPage() {
  useEffect(() => {
    document.title = 'Settings - AVIRIS | Language & Preferences';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Configure your AVIRIS system settings including language, timezone, date format, time format, and notification preferences for optimal user experience.');
    }
  }, []);

  const [language, setLanguage] = useState({ flag: 'de', text: 'German (Default)' });
  const [timezone, setTimezone] = useState({ flag: 'de', text: 'Germany (GMT+2)' });
  const [timeFormat, setTimeFormat] = useState('24');
  const [dateFormat, setDateFormat] = useState('dmy');
  const [autoEnable, setAutoEnable] = useState(true);
  const [newsUpdates, setNewsUpdates] = useState(false);

  return (
    <>
      <div className="main-content-wrapper">
        <div className="card-custom p-4 mb-4">
          <div className="d-flex align-items-start align-items-sm-center gap-2 gap-sm-3 mb-3">
            <div className="stat-icon badge-success-custom flex-shrink-0">
              <i className="ri-settings-3-line"></i>
            </div>
            <div className="flex-grow-1 min-w-0">
              <h2 className="welcome-heading mb-1 fs-5 fs-md-4">Configuration</h2>
              <p className="welcome-description mb-0 small">Customize your settings according to your need.</p>
            </div>
          </div>

          {/* Language & Timezone */}
          <div className="row g-4 mb-4 mt-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold mb-2">Language</label>
              <div className="dropdown">
                <button 
                  className="custom-dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  <span className="selected-content">
                    <span className={`fi fi-${language.flag}`}></span>
                    {language.text}
                  </span>
                  <i className="ri-arrow-down-s-line"></i>
                </button>
                <ul className="dropdown-menu settings-dropdown-menu">
                  <li>
                    <a className="dropdown-item active" href="#" onClick={(e) => { e.preventDefault(); setLanguage({ flag: 'de', text: 'German (Default)' }); }}>
                      <span className="fi fi-de"></span> German (Default)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setLanguage({ flag: 'gb', text: 'English' }); }}>
                      <span className="fi fi-gb"></span> English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setLanguage({ flag: 'fr', text: 'French' }); }}>
                      <span className="fi fi-fr"></span> French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setLanguage({ flag: 'es', text: 'Spanish' }); }}>
                      <span className="fi fi-es"></span> Spanish
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-6">
              <label className="form-label fw-semibold mb-2">Timezone</label>
              <div className="dropdown">
                <button 
                  className="custom-dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  <span className="selected-content">
                    <span className={`fi fi-${timezone.flag}`}></span>
                    {timezone.text}
                  </span>
                  <i className="ri-arrow-down-s-line"></i>
                </button>
                <ul className="dropdown-menu settings-dropdown-menu">
                  <li>
                    <a className="dropdown-item active" href="#" onClick={(e) => { e.preventDefault(); setTimezone({ flag: 'de', text: 'Germany (GMT+2)' }); }}>
                      <span className="fi fi-de"></span> Germany (GMT+2)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setTimezone({ flag: 'gb', text: 'London (GMT+0)' }); }}>
                      <span className="fi fi-gb"></span> London (GMT+0)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setTimezone({ flag: 'us', text: 'New York (GMT-5)' }); }}>
                      <span className="fi fi-us"></span> New York (GMT-5)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); setTimezone({ flag: 'jp', text: 'Tokyo (GMT+9)' }); }}>
                      <span className="fi fi-jp"></span> Tokyo (GMT+9)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Time Type */}
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-semibold mb-3">Time type</label>
              <div className="d-flex gap-3">
                <label className="radio-card flex-fill cursor-pointer">
                  <input 
                    className="radio-card-input" 
                    type="radio" 
                    name="timeFormat" 
                    value="24" 
                    checked={timeFormat === '24'}
                    onChange={(e) => setTimeFormat(e.target.value)}
                  />
                  <div className="radio-card-body">
                    <span className="radio-check"></span>
                    <span className="radio-label">24 Hours</span>
                  </div>
                </label>
                <label className="radio-card flex-fill cursor-pointer">
                  <input 
                    className="radio-card-input" 
                    type="radio" 
                    name="timeFormat" 
                    value="12"
                    checked={timeFormat === '12'}
                    onChange={(e) => setTimeFormat(e.target.value)}
                  />
                  <div className="radio-card-body">
                    <span className="radio-check"></span>
                    <span className="radio-label">12 Hours</span>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="col-12 col-md-6">
              <label className="form-label fw-semibold mb-3">Date Format</label>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <label className="radio-card flex-fill cursor-pointer">
                  <input 
                    className="radio-card-input" 
                    type="radio" 
                    name="dateFormat" 
                    value="dmy" 
                    checked={dateFormat === 'dmy'}
                    onChange={(e) => setDateFormat(e.target.value)}
                  />
                  <div className="radio-card-body">
                    <span className="radio-check"></span>
                    <span className="radio-label">dd/mm/yyyy</span>
                  </div>
                </label>
                <label className="radio-card flex-fill cursor-pointer">
                  <input 
                    className="radio-card-input" 
                    type="radio" 
                    name="dateFormat" 
                    value="ymd"
                    checked={dateFormat === 'ymd'}
                    onChange={(e) => setDateFormat(e.target.value)}
                  />
                  <div className="radio-card-body">
                    <span className="radio-check"></span>
                    <span className="radio-label">yyyy/mm/dd</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Toggle Settings */}
          <div className="mt-4 pt-4 border-top">
            <div className="d-flex justify-content-between align-items-start mb-4 pb-3 border-bottom">
              <div>
                <h6 className="mb-1 fw-semibold">Auto-Enable when system Bootup</h6>
                <p className="text-muted mb-0 small">AVIRIS will automatically enable protection when your computer will be bootup.</p>
              </div>
              <div className="form-check form-switch ms-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  role="switch" 
                  checked={autoEnable}
                  onChange={(e) => setAutoEnable(e.target.checked)}
                  style={{ width: '3rem', height: '1.5rem', cursor: 'pointer' }}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="mb-1 fw-semibold">News & updates</h6>
                <p className="text-muted mb-0 small">We will send you the new & updates via email. It could be for protections or promotions.</p>
              </div>
              <div className="form-check form-switch ms-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  role="switch"
                  checked={newsUpdates}
                  onChange={(e) => setNewsUpdates(e.target.checked)}
                  style={{ width: '3rem', height: '1.5rem', cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-3 mt-4 pt-4 border-top">
            <button className="btn btn-outline-custom px-4">Discard</button>
            <button className="btn btn-primary-custom px-4">Save changes</button>
          </div>
        </div>
      </div>
    </>
  );
}
