'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routes } from '@/config/routes'
import '@/styles/front/components/navbar.css'

export default function FrontendNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedLang, setSelectedLang] = useState({ code: 'de', name: 'German' })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLang = (code: string, name: string) => {
    setSelectedLang({ code, name })
  }

  return (
    <>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.11.0/css/flag-icons.min.css" rel="stylesheet" />
      
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-custom ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" href={routes.home}>
            <img 
              src="/front/img/logo.png" 
              alt="AVIRIS" 
              className="logo-img"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='38'%3E%3Crect fill='%230B3D2E' width='38' height='38' rx='4'/%3E%3Ctext x='50' y='26' font-family='Arial' font-size='16' fill='%230B3D2E' font-weight='bold'%3EAVIRIS%3C/text%3E%3C/svg%3E"
              }}
            />
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="navbar-toggler" 
            type="button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Desktop Navigation Menu */}
          <div className="collapse navbar-collapse d-none d-xl-flex" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className={`nav-link ${pathname === routes.pricing ? 'active' : ''}`} href={routes.pricing}>Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${pathname === routes.features ? 'active' : ''}`} href={routes.features}>Features</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${pathname === routes.downloads ? 'active' : ''}`} href={routes.downloads}>Download</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${pathname === routes.blogs || pathname.startsWith('/blogs/') ? 'active' : ''}`} href={routes.blogs}>Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${pathname === routes.business ? 'active' : ''}`} href={routes.business}>For Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${pathname === routes.contact ? 'active' : ''}`} href={routes.contact}>Contact us</Link>
              </li>
            </ul>

            {/* Right Side Items */}
            <div className="d-flex align-items-center gap-3">
              {/* Language Dropdown */}
              <div className="dropdown flag-dropdown d-none d-xl-block">
                <div className="flag-circle dropdown-toggle d-flex align-items-center justify-content-center" id="langDrop" data-bs-toggle="dropdown">
                  <span className={`fi fi-${selectedLang.code}`}></span>
                </div>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a 
                      className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'de' ? 'active' : ''}`} 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); changeLang('de', 'German'); }}
                    >
                      <span className="fi fi-de me-2"></span> German
                    </a>
                  </li>
                  <li>
                    <a 
                      className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'gb' ? 'active' : ''}`} 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); changeLang('gb', 'English'); }}
                    >
                      <span className="fi fi-gb me-2"></span> English
                    </a>
                  </li>
                  <li>
                    <a 
                      className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'fr' ? 'active' : ''}`} 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); changeLang('fr', 'French'); }}
                    >
                      <span className="fi fi-fr me-2"></span> French
                    </a>
                  </li>
                  <li>
                    <a 
                      className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'es' ? 'active' : ''}`} 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); changeLang('es', 'Spanish'); }}
                    >
                      <span className="fi fi-es me-2"></span> Spanish
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Get Started Button */}
              <Link href={routes.pricing} className="btn-secondary-custom">
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Sidebar */}
      <div className={`offcanvas offcanvas-start offcanvas-mobile-nav ${mobileMenuOpen ? 'show' : ''}`} tabIndex={-1} style={{visibility: mobileMenuOpen ? 'visible' : 'hidden'}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title d-flex align-items-center gap-2">
            <img 
              src="/front/img/logo.png" 
              alt="AVIRIS" 
              style={{height: '32px'}}
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='32'%3E%3Crect fill='%230B3D2E' width='32' height='32' rx='4'/%3E%3Ctext x='44' y='22' font-family='Arial' font-size='14' fill='%230B3D2E' font-weight='bold'%3EAVIRIS%3C/text%3E%3C/svg%3E"
              }}
            />
          </h5>
          <button type="button" className="btn-close" onClick={() => setMobileMenuOpen(false)}></button>
        </div>
        <div className="offcanvas-body">
          {/* Mobile Navigation Menu */}
          <div className="mobile-nav-menu">
            <Link href={routes.pricing} className={`mobile-nav-link ${pathname === routes.pricing ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link href={routes.features} className={`mobile-nav-link ${pathname === routes.features ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Features</Link>
            <Link href={routes.downloads} className={`mobile-nav-link ${pathname === routes.downloads ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Download</Link>
            <Link href={routes.blogs} className={`mobile-nav-link ${pathname === routes.blogs || pathname.startsWith('/blogs/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
            <Link href={routes.business} className={`mobile-nav-link ${pathname === routes.business ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>For Business</Link>
            <Link href={routes.contact} className={`mobile-nav-link ${pathname === routes.contact ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
          </div>

          {/* Mobile Language Section */}
          <div className="mobile-lang-section">
            <h6 className="text-muted small fw-semibold mb-2">Language</h6>
            <div className="dropdown flag-dropdown w-100">
              <div className="mobile-lang-button d-flex align-items-center justify-content-between p-2 bg-light rounded" id="mobileLangDrop" data-bs-toggle="dropdown">
                <div className="d-flex align-items-center gap-2">
                  <span className={`fi fi-${selectedLang.code}`}></span>
                  <span className="lang-text">{selectedLang.name}</span>
                </div>
                <i className="fas fa-chevron-down"></i>
              </div>
              <ul className="dropdown-menu w-100">
                <li>
                  <a 
                    className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'de' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); changeLang('de', 'German'); }}
                  >
                    <span className="fi fi-de me-2"></span> German
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'gb' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); changeLang('gb', 'English'); }}
                  >
                    <span className="fi fi-gb me-2"></span> English
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'fr' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); changeLang('fr', 'French'); }}
                  >
                    <span className="fi fi-fr me-2"></span> French
                  </a>
                </li>
                <li>
                  <a 
                    className={`dropdown-item d-flex align-items-center ${selectedLang.code === 'es' ? 'active' : ''}`} 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); changeLang('es', 'Spanish'); }}
                  >
                    <span className="fi fi-es me-2"></span> Spanish
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="mobile-cta-section">
            <Link href={routes.pricing} className="btn-secondary-custom w-100" onClick={() => setMobileMenuOpen(false)}>
              Get Started <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && <div className="offcanvas-backdrop fade show" onClick={() => setMobileMenuOpen(false)}></div>}
    </>
  )
}