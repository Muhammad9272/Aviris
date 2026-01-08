'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, FormEvent } from 'react'
import '@/styles/front/components/footer.css'

// Footer Menu Data
const footerMenus = {
  Bundle: [
    { name: 'Business', link: '/business' },
    { name: 'AVIRIS Premium', link: '/#premium' },
    { name: 'Pricing', link: '/pricing' },
  ],
  Products: [
    { name: 'AVIRIS VPN', link: '/features#vpn' },
    { name: 'AVIRIS AI', link: '/features#ai' },
    { name: 'AVIRIS Antivirus', link: '/features#antivirus' },
  ],
  Programs: [
    { name: 'Affiliate Program', link: '/affiliate' },
    { name: 'Business', link: '/business' },
    { name: 'Blogs', link: '/blogs' },
  ],
  Company: [
    { name: 'Privacy Policy', link: '/privacy' },
    { name: 'Terms of Services', link: '/terms' },
    { name: 'Imprint', link: '/imprint' },
    { name: 'Contact', link: '/contact' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="footer-section aviris__bg-dark">
      {/* Wave Background */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#16a34a"
            fillOpacity="0.5"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#22c55e"
            fillOpacity="0.6"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="row align-items-start">
            {/* Left: Brand Section */}
            <div 
              className="col-lg-5 col-md-12 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="footer-brand">
                <Image
                  src="/front/img/logo.png"
                  alt="AVIRIS"
                  width={150}
                  height={48}
                  className="footer-logo mb-3"
                />
                <p className="footer-tagline">
                  Stay Protected. Stay Private. Stay AVIRIS.
                </p>
                <a href="mailto:contact@aviris.com" className="footer-contact">
                  <i className="far fa-envelope"></i>
                  contact@aviris.com
                </a>
              </div>
            </div>

            {/* Right: Newsletter Section */}
            <div
              className="col-lg-7 col-md-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="footer-newsletter">
                <h3 className="newsletter-title">Newsletter</h3>
                <p className="newsletter-subtitle">
                  Subscribe to our newsletter to get the latest news.
                </p>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <div className="newsletter-input-wrapper">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="newsletter-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-secondary-custom">
                    Subscribe
                    <i className="far fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Middle: 5 Column Menu */}
        <div className="footer-middle">
          <div className="row">
            {Object.entries(footerMenus).map(([menuTitle, menuItems], index) => (
              <div
                key={menuTitle}
                className="col-lg col-md-4 col-6 mb-4 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={400 + index * 100}
              >
                <div className="footer-menu-column">
                  <h4 className="footer-menu-title">{menuTitle}</h4>
                  <ul className="footer-menu-list">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Certifications Column */}
            <div
              className="col-lg col-md-4 col-12 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={400 + Object.keys(footerMenus).length * 100}
            >
              <div className="footer-menu-column">
                <h4 className="footer-menu-title">Certifications</h4>
                <div className="footer-certification">
                  <Image
                    src="/front/img/iso_cert.png"
                    alt="ISO 27001"
                    width={120}
                    height={80}
                    className="certification-img"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom: Copyright */}
          <div className="footer-bottom" data-aos="fade-up" data-aos-duration="800">
            <p className="copyright-text">
              Copyright © {new Date().getFullYear()} AVIRIS. All Rights Reserved. Made in Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}