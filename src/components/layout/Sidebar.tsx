'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { routes } from '@/config/routes';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="col-lg-3 d-none d-lg-block">
        <div className="sidebar-wrapper">
          <div className="sidebar-container">
            {/* Navigation */}
            <div className="nav-menu-wrapper">
              <Link href={routes.user.dashboard} className={`nav-link-custom ${isActive(routes.user.dashboard)}`}>
                <i className="ri-dashboard-line"></i>
                <span>Dashboard</span>
              </Link>
              <Link href={routes.user.pricing} className={`nav-link-custom ${isActive(routes.user.pricing)}`}>
                <i className="ri-file-list-3-line"></i>
                <span>Subscription Plans</span>
              </Link>
              <Link href={routes.user.licenses} className={`nav-link-custom ${isActive(routes.user.licenses)}`}>
                <i className="ri-shield-keyhole-line"></i>
                <span>License Management</span>
              </Link>
              <Link href={routes.user.settings} className={`nav-link-custom ${isActive(routes.user.settings)}`}>
                <i className="ri-settings-3-line"></i>
                <span>Configuration</span>
              </Link>
              <Link href={routes.user.downloads} className={`nav-link-custom ${isActive(routes.user.downloads)}`}>
                <i className="ri-download-cloud-line"></i>
                <span>Downloads</span>
              </Link>
            </div>

            {/* Footer Links */}
            <div className="sidebar-footer">
              <Link href={routes.user.profile} className={`footer-link-custom ${isActive(routes.user.profile)}`}>
                <i className="ri-user-line"></i>
                <span>Profile</span>
              </Link>
              <Link href={routes.user.support} className={`footer-link-custom ${isActive(routes.user.support)}`}>
                <i className="ri-customer-service-2-line"></i>
                <span>Support</span>
              </Link>
              <Link href={routes.user.billing} className={`footer-link-custom ${isActive(routes.user.billing)}`}>
                <i className="ri-bank-card-line"></i>
                <span>Payment Methods</span>
              </Link>
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
                <i className="ri-logout-box-r-line"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Offcanvas) */}
      <div className="offcanvas offcanvas-start d-lg-none" tabIndex={-1} id="mobileSidebar" aria-labelledby="mobileSidebarLabel">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title d-flex align-items-center gap-3" id="mobileSidebarLabel">
            <Image 
              src="/front/img/logo.png" 
              alt="AVIRIS" 
              width={120}
              height={32}
              className="logo-img" 
              style={{ height: '32px', width: 'auto' }} 
            />
            <div className="premium-badge px-2 py-1 rounded-2 d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
              <i className="ri-vip-crown-fill"></i>
              <span>Premium</span>
            </div>
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="sidebar-container">
            {/* Navigation */}
            <div className="nav-menu-wrapper">
              <Link href="/userdashboard" className={`nav-link-custom ${isActive('/userdashboard')}`}>
                <i className="ri-dashboard-line"></i>
                <span>Dashboard</span>
              </Link>
              <Link href="/userdashboard/pricing" className={`nav-link-custom ${isActive('/userdashboard/pricing')}`}>
                <i className="ri-file-list-3-line"></i>
                <span>Subscription Plans</span>
              </Link>
              <Link href="/user/licenses" className={`nav-link-custom ${isActive('/user/licenses')}`}>
                <i className="ri-shield-keyhole-line"></i>
                <span>License Management</span>
              </Link>
              <Link href="/userdashboard/settings" className={`nav-link-custom ${isActive('/userdashboard/settings')}`}>
                <i className="ri-settings-3-line"></i>
                <span>Configuration</span>
              </Link>
              <Link href="/userdashboard/downloads" className={`nav-link-custom ${isActive('/userdashboard/downloads')}`}>
                <i className="ri-download-cloud-line"></i>
                <span>Downloads</span>
              </Link>
            </div>

            {/* Footer Links */}
            <div className="sidebar-footer">
              {/* Language Selector for Mobile */}
              <div className="mobile-lang-selector mb-3 pb-3 border-bottom">
                <h6 className="text-muted mb-2" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Language</h6>
                <div className="dropdown">
                  <button 
                    className="btn btn-light mobile-lang-button w-100 d-flex align-items-center justify-content-between" 
                    type="button" 
                    id="mobileLangDrop" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="fi fi-de"></span>
                      <span className="lang-text">German</span>
                    </div>
                    <i className="ri-arrow-down-s-line"></i>
                  </button>
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
              
              <Link href="/userdashboard/profile" className={`footer-link-custom ${isActive('/userdashboard/profile')}`}>
                <i className="ri-user-line"></i>
                <span>Profile</span>
              </Link>
              <Link href="/userdashboard/support" className={`footer-link-custom ${isActive('/userdashboard/support')}`}>
                <i className="ri-customer-service-2-line"></i>
                <span>Support</span>
              </Link>
              <Link href="/userdashboard/billing" className={`footer-link-custom ${isActive('/userdashboard/billing')}`}>
                <i className="ri-bank-card-line"></i>
                <span>Payment Methods</span>
              </Link>
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
                <i className="ri-logout-box-r-line"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
