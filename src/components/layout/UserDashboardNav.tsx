'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { routes } from '@/config/routes';

export default function UserDashboardNav() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Header */}
      <header className="top-header">
        <div className="container-fluid px-4 py-1 py-md-3">
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/" className="d-flex align-items-center gap-2">
              <Image 
                src="/user/img/logo.png" 
                alt="AVIRIS" 
                width={160} 
                height={38}
                className="logo-img" 
              />
            </Link>
            <div className="d-flex align-items-center gap-3">
              <div className="premium-badge px-3 py-2 rounded-2 d-flex align-items-center gap-2 d-none d-lg-flex">
                <i className="ri-vip-crown-fill"></i>
                <span>Premium</span>
              </div>

              {/* Language Dropdown */}
              <div className="dropdown flag-dropdown d-none d-lg-block">
                <div 
                  className="flag-circle dropdown-toggle d-flex align-items-center justify-content-center" 
                  id="langDrop" 
                  data-bs-toggle="dropdown"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="fi fi-de"></span>
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item active d-flex align-items-center" href="#">
                      <span className="fi fi-de me-2"></span> German
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <span className="fi fi-gb me-2"></span> English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <span className="fi fi-fr me-2"></span> French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <span className="fi fi-es me-2"></span> Spanish
                    </a>
                  </li>
                </ul>
              </div>

              {/* User Dropdown */}
              <div className="dropdown">
                <div 
                  className="d-flex align-items-center gap-2 cursor-pointer dropdown-toggle" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                  style={{ cursor: 'pointer' }}
                >
                  <Image 
                    src="https://ui-avatars.com/api/?name=Carlo+Mercado&background=0B3D2E&color=fff&bold=true" 
                    alt="Carlo" 
                    width={42}
                    height={42}
                    className="user-avatar" 
                  />
                  <div className="d-none d-md-block">
                    <div className="user-name">Carlo Mercado</div>
                    <div className="user-email">carlomercado@...</div>
                  </div>
                  <i className="ri-arrow-down-s-line text-secondary"></i>
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" href={routes.user.profile}>
                      <i className="ri-user-line me-2"></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={routes.user.settings}>
                      <i className="ri-settings-3-line me-2"></i> Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={routes.user.billing}>
                      <i className="ri-file-list-3-line me-2"></i> Billing
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item text-danger" href="#" onClick={(e) => { e.preventDefault(); if(confirm('Are you sure you want to logout?')) { /* handle logout */ } }}>
                      <i className="ri-logout-box-r-line me-2"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button 
                className="btn btn-outline-secondary d-lg-none" 
                type="button" 
                onClick={() => setShowMobileSidebar(true)}
              >
                <i className="ri-menu-line"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Offcanvas */}
      <div className={`offcanvas offcanvas-start ${showMobileSidebar ? 'show' : ''}`} tabIndex={-1} style={{ visibility: showMobileSidebar ? 'visible' : 'hidden', zIndex: 1045 }}>
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title d-flex align-items-center gap-3">
            <Link href="/" onClick={() => setShowMobileSidebar(false)}>
              <Image 
                src="/front/img/logo.png" 
                alt="AVIRIS" 
                width={120} 
                height={32}
                style={{ height: '32px' }}
              />
            </Link>
            <div className="premium-badge px-2 py-1 rounded-2 d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
              <i className="ri-vip-crown-fill"></i>
              <span>Premium</span>
            </div>
          </h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setShowMobileSidebar(false)}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          {/* Language Selector for Mobile */}
          <div className="mobile-lang-selector mb-0 pb-3 pt-3 px-3 border-bottom">
            <h6 className="text-muted small fw-semibold mb-2">Language</h6>
            <div className="dropdown flag-dropdown w-100">
              <div 
                className="mobile-lang-button d-flex align-items-center justify-content-between p-2 bg-light rounded cursor-pointer" 
                id="mobileLangDrop" 
                data-bs-toggle="dropdown"
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="fi fi-de"></span>
                  <span className="lang-text">German</span>
                </div>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <ul className="dropdown-menu w-100">
                <li>
                  <a className="dropdown-item active d-flex align-items-center" href="#">
                    <span className="fi fi-de me-2"></span> German
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <span className="fi fi-gb me-2"></span> English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <span className="fi fi-fr me-2"></span> French
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <span className="fi fi-es me-2"></span> Spanish
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* User Info Section */}
          <div className="p-4 border-bottom border-light">
            <div className="d-flex align-items-center gap-3">
              <Image 
                src="https://ui-avatars.com/api/?name=Carlo+Mercado&background=0B3D2E&color=fff&bold=true" 
                alt="User" 
                width={60}
                height={60}
                className="welcome-user-avatar rounded-3"
              />
              <div>
                <h6 className="welcome-title mb-1">Carlo Mercado</h6>
                <p className="welcome-subtitle mb-0">carlomercado@email.com</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="nav-menu-wrapper" style={{ flex: 'unset', overflow: 'visible', padding: '16px' }}>
            <Link 
              href={routes.user.dashboard} 
              className={`nav-link-custom ${isActive(routes.user.dashboard)}`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <i className="ri-dashboard-line"></i>
              <span>Dashboard</span>
            </Link>
            <Link 
              href={routes.user.pricing} 
              className={`nav-link-custom ${isActive(routes.user.pricing)}`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <i className="ri-file-list-3-line"></i>
              <span>Subscription Plans</span>
            </Link>
            <Link 
              href={routes.user.settings} 
              className={`nav-link-custom ${isActive(routes.user.settings)}`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <i className="ri-settings-3-line"></i>
              <span>Configuration</span>
            </Link>
            <Link 
              href={routes.user.downloads} 
              className={`nav-link-custom ${isActive(routes.user.downloads)}`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <i className="ri-download-cloud-line"></i>
              <span>Downloads</span>
            </Link>
            <Link 
              href={routes.user.profile} 
              className={`nav-link-custom ${isActive(routes.user.profile)}`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <i className="ri-user-settings-line"></i>
              <span>Profile Settings</span>
            </Link>
            <Link 
              href={routes.user.support} 
              className={`nav-link-custom ${isActive(routes.user.support)}`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <i className="ri-headphone-line"></i>
              <span>Contact & Support</span>
            </Link>
            <Link 
              href={routes.user.billing} 
              className={`nav-link-custom ${isActive(routes.user.billing)}`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <i className="ri-bank-card-line"></i>
              <span>Payment Methods</span>
            </Link>
          </div>

          {/* Logout */}
          <div className="sidebar-footer">
            <a 
              href="#" 
              className="footer-link-custom text-danger"
              onClick={(e) => {
                e.preventDefault();
                if(confirm('Are you sure you want to logout?')) {
                  // Handle logout
                }
              }}
            >
              <i className="ri-logout-box-line"></i>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Backdrop */}
      {showMobileSidebar && (
        <div 
          className="offcanvas-backdrop fade show" 
          onClick={() => setShowMobileSidebar(false)}
          style={{ zIndex: 1040 }}
        ></div>
      )}
    </>
  );
}
