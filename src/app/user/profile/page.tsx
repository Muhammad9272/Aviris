'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import PhoneInput from '@/components/shared/PhoneInput';

export default function Profile() {
  useEffect(() => {
    document.title = 'Profile - AVIRIS | Account Settings';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Update your AVIRIS profile information, change contact details, upload profile picture, manage country and currency preferences, and customize your account settings.');
    }
  }, []);

  const [profileImage, setProfileImage] = useState('https://ui-avatars.com/api/?name=Tolga+Akcay&background=1a5e4a&color=fff&bold=true&size=150');
  const [firstName, setFirstName] = useState('Tolga');
  const [lastName, setLastName] = useState('Akcay');
  const [phone, setPhone] = useState('172744476');
  const [email, setEmail] = useState('tolgaakcay@aviris.com');
  const [address, setAddress] = useState('Max Mustermann  Musterstraße 12');
  const [city, setCity] = useState('Berlin');
  const [zipCode, setZipCode] = useState('10115');
  
  const [country, setCountry] = useState({ flag: 'de', text: 'Germany' });
  const [currency, setCurrency] = useState({ flag: 'eu', text: '€ EUR' });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  
  const [currentPassword, setCurrentPassword] = useState('••••••••••');
  const [newPassword, setNewPassword] = useState('••••••••••');
  const [confirmPassword, setConfirmPassword] = useState('Akcay@476');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const currencyDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target as Node)) {
        setShowCurrencyDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setProfileImage(`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=1a5e4a&color=fff&bold=true&size=150`);
  };

  useEffect(() => {
    if (profileImage.includes('ui-avatars.com')) {
      setProfileImage(`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=1a5e4a&color=fff&bold=true&size=150`);
    }
  }, [firstName, lastName]);

  return (
    <div className="main-content-wrapper">
      {/* Profile Settings Card */}
      <div className="card-custom p-4 mb-4">
        <div className="d-flex align-items-start align-items-sm-center gap-2 gap-sm-3 mb-4">
          <div className="stat-icon badge-success-custom flex-shrink-0">
            <i className="ri-user-settings-line"></i>
          </div>
          <div className="flex-grow-1 min-w-0">
            <h2 className="welcome-heading mb-1 fs-5 fs-md-4">Profile Settings</h2>
            <p className="welcome-description mb-0 small">Customize your profile information & secure your account.</p>
          </div>
        </div>

        {/* General Section */}
        <h4 className="section-heading mb-4">General</h4>

        <div className="row">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <div className="bg-light h-100 p-3 rounded-3">
              <label className="form-label fw-semibold mb-3 text-center w-100">Profile Picture</label>
              <div className="text-center">
                <div className="profile-picture-wrapper mb-3">
                  <Image 
                    src={profileImage} 
                    alt="Profile" 
                    width={150} 
                    height={150} 
                    className="profile-picture"
                    unoptimized
                  />
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="d-none" 
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <div className="d-flex flex-column gap-2">
                  <button 
                    className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center gap-2"
                    onClick={handleDeletePhoto}
                  >
                    <i className="ri-delete-bin-line"></i>
                    Delete Photo
                  </button>
                  <button 
                    className="btn btn-primary-custom btn-sm d-flex align-items-center justify-content-center gap-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <i className="ri-upload-2-line"></i>
                    Upload Photo
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2">First Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2">Phone Number</label>
                <PhoneInput
                  value={phone}
                  onChange={setPhone}
                  showVerifiedBadge={true}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2">Email Address</label>
                <div className="position-relative">
                  <input 
                    type="email" 
                    className="form-control" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    readOnly
                  />
                  <span className="verified-badge">
                    <i className="ri-checkbox-circle-fill me-1"></i>
                    Verified
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2">Address</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2">Country</label>
                <div ref={countryDropdownRef} className={`profile-custom-dropdown ${showCountryDropdown ? 'active' : ''}`}>
                  <div 
                    className="profile-dropdown-selected form-control"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCountryDropdown(!showCountryDropdown);
                      setShowCurrencyDropdown(false);
                    }}
                  >
                    <span className={`fi fi-${country.flag}`}></span>
                    <span>{country.text}</span>
                    <i className="ri-arrow-down-s-line profile-dropdown-arrow"></i>
                  </div>
                  {showCountryDropdown && (
                    <div className="profile-dropdown-options">
                      {[
                        { flag: 'de', text: 'Germany' },
                        { flag: 'gb', text: 'United Kingdom' },
                        { flag: 'us', text: 'United States' },
                        { flag: 'fr', text: 'France' }
                      ].map((option) => (
                        <div
                          key={option.flag}
                          className={`profile-dropdown-option ${country.flag === option.flag ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCountry(option);
                            setShowCountryDropdown(false);
                          }}
                        >
                          <span className={`fi fi-${option.flag}`}></span>
                          <span>{option.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold mb-2">City</label>
                <select 
                  className="form-select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>Berlin</option>
                  <option>Munich</option>
                  <option>Hamburg</option>
                  <option>Frankfurt</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold mb-2">Zip Code</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold mb-2">Currency</label>
                <div ref={currencyDropdownRef} className={`profile-custom-dropdown ${showCurrencyDropdown ? 'active' : ''}`}>
                  <div 
                    className="profile-dropdown-selected form-control"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCurrencyDropdown(!showCurrencyDropdown);
                      setShowCountryDropdown(false);
                    }}
                  >
                    <span className={`fi fi-${currency.flag}`}></span>
                    <span>{currency.text}</span>
                    <i className="ri-arrow-down-s-line profile-dropdown-arrow"></i>
                  </div>
                  {showCurrencyDropdown && (
                    <div className="profile-dropdown-options">
                      {[
                        { flag: 'eu', text: '€ EUR' },
                        { flag: 'us', text: '$ USD' },
                        { flag: 'gb', text: '£ GBP' },
                        { flag: 'jp', text: '¥ JPY' }
                      ].map((option) => (
                        <div
                          key={option.flag}
                          className={`profile-dropdown-option ${currency.flag === option.flag ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrency(option);
                            setShowCurrencyDropdown(false);
                          }}
                        >
                          <span className={`fi fi-${option.flag}`}></span>
                          <span>{option.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end gap-3 mt-4">
            <button className="btn btn-outline-custom px-4">Discard</button>
            <button className="btn btn-primary-custom px-4">Save changes</button>
          </div>
        </div>
      </div>

      {/* Accounts Section */}
      <div className="card-custom p-4 mb-4">
        <h4 className="section-heading mb-4">Accounts</h4>

        <div className="account-item">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <div className="account-icon">
              <Image src="/user/img/google.png" alt="Google" width={40} height={40} style={{objectFit: 'contain'}} />
            </div>
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-1">
                <h5 className="account-title mb-0">Google</h5>
                <span className="badge-custom badge-success-custom">Linked</span>
              </div>
              <p className="account-description mb-0">Link your google account to access anytime with this.</p>
            </div>
          </div>
          <button className="btn btn-outline-danger text-center d-flex align-items-center gap-2 justify-content-center">
            <i className="ri-close-line"></i>
            Remove
          </button>
        </div>

        <div className="account-item">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <div className="account-icon">
              <Image src="/user/img/facebook.png" alt="Facebook" width={40} height={40} style={{objectFit: 'contain'}} />
            </div>
            <div className="flex-grow-1">
              <h5 className="account-title mb-1">Facebook</h5>
              <p className="account-description mb-0">Link your facebook account to access anytime with this.</p>
            </div>
          </div>
          <button className="btn btn-outline-custom btn-sm px-4">Connect</button>
        </div>
      </div>

      {/* Password Section */}
      <div className="card-custom p-4 mb-4">
        <h4 className="section-heading mb-4">Password</h4>

        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <label className="form-label fw-semibold mb-2">Current Password</label>
              <div className="position-relative">
                <input 
                  type={showCurrentPassword ? 'text' : 'password'}
                  className="form-control pe-5" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <button 
                  className="profile-btn-password-toggle" 
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  <i className={showCurrentPassword ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold mb-2">New Password</label>
              <div className="position-relative">
                <input 
                  type={showNewPassword ? 'text' : 'password'}
                  className="form-control pe-5" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button 
                  className="profile-btn-password-toggle" 
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  <i className={showNewPassword ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold mb-2">Confirm New Password</label>
              <div className="position-relative">
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="form-control pe-5" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button 
                  className="profile-btn-password-toggle" 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <i className={showConfirmPassword ? 'ri-eye-line' : 'ri-eye-off-line'}></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="password-requirements p-3 rounded-3 bg-light">
              <h6 className="fw-semibold mb-3">Password Requirements:</h6>
              <ul className="mb-0 ps-3">
                <li className="small mb-2">Minimum 8 characters long - the more, the better</li>
                <li className="small mb-2">At least one lowercase character</li>
                <li className="small">At least one number, symbol, or whitespace character</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button className="btn btn-outline-custom px-4">Discard</button>
          <button className="btn btn-primary-custom px-4">Save changes</button>
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="card-custom p-4 mb-4">
        <div className="d-flex justify-content-between align-items-start">
          <h4 className="section-heading mb-0">Delete Account</h4>
          <button 
            className="btn btn-link1 p-0 text-secondary" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#deleteAccountCollapse"
          >
            <i className="ri-arrow-up-s-line fs-4 chevron-icon"></i>
          </button>
        </div>

        <div className="collapse show" id="deleteAccountCollapse">
          <div className="mt-3">
            <p className="text-muted mb-3">
              Deleting your account will permanently remove your profile, linked devices, and all stored data from AVIRIS. 
              This action cannot be undone. If you just want to stop using AVIRIS temporarily, you can log out instead
            </p>
            <button className="btn btn-danger d-flex align-items-center gap-2">
              <i className="ri-delete-bin-line"></i>
              Delete My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
