import BlogSection from '@/components/shared/BlogSection';
import FAQs from '@/components/shared/FAQs';
import CTA from '@/components/shared/CTA';
import { routes } from '@/config/routes';
import type { Metadata } from 'next';
import '@/styles/front/pages/features.css';

export const metadata: Metadata = {
  title: 'Features - AVIRIS | AI-Powered Protection for All Devices',
  description: 'Explore AVIRIS features: AI virus protection, system optimizer, secure VPN, smart scan engine, privacy guard, real-time alerts & more for Windows, Android & iOS.',
};

const features = [
  {
    icon: 'img/icons/shield.png',
    title: 'AI Virus Protection',
    description: 'Real-time AI-powered threat detection that learns and adapts to new malware in seconds.',
    platforms: ['windows', 'android'],
    badge: 'Free Trial'
  },
  {
    icon: 'img/icons/folder-open.png',
    title: 'System Optimizer',
    description: 'Boost your device performance, free up memory, and eliminate junk files in one click.',
    platforms: ['windows', 'android', 'ios'],
    badge: null
  },
  {
    icon: 'img/icons/global.png',
    title: 'Secure VPN',
    description: 'Stay anonymous online with encrypted connections and region-free browsing.',
    platforms: ['windows'],
    badge: null
  },
  {
    icon: 'img/icons/stars.png',
    title: 'AI Analytics',
    description: 'Intelligent insights that track, analyze, and report device health and protection level.',
    platforms: ['windows'],
    badge: null
  },
  {
    icon: 'img/icons/story.png',
    title: 'Quarantine Vault',
    description: 'Isolates suspicious files automatically to keep your system secure.',
    platforms: ['windows', 'android'],
    badge: null
  },
  {
    icon: 'img/icons/scan.png',
    title: 'Smart Scan Engine',
    description: 'Three-tier scanning — Quick, Deep, and Custom — powered by AI-assisted detection.',
    platforms: ['windows', 'android', 'ios'],
    badge: null
  },
  {
    icon: 'img/icons/lock.png',
    title: 'Privacy Guard',
    description: 'Prevent unauthorized apps from accessing your camera, mic, and files.',
    platforms: ['android', 'ios'],
    badge: null
  },
  {
    icon: 'img/icons/layer.png',
    title: 'Device Management',
    description: 'Manage all your devices under one AVIRIS account with sync and remote control.',
    platforms: ['windows', 'android', 'ios'],
    badge: null
  },
  {
    icon: 'img/icons/driver.png',
    title: 'Database Center',
    description: 'Always up-to-date malware definitions with AI-trained behavior updates.',
    platforms: ['windows'],
    badge: null
  },
  {
    icon: 'img/icons/notification-status.png',
    title: 'Real-Time Alerts',
    description: 'Instant notifications for threats, system changes, or optimization results.',
    platforms: ['windows', 'android', 'ios'],
    badge: null
  },
  {
    icon: 'img/icons/monitor-mobbile.png',
    title: 'Web Protection',
    description: 'Blocks phishing, malicious websites, and unsafe downloads in real time.',
    platforms: ['windows', 'android', 'ios'],
    badge: null
  },
  {
    icon: 'img/icons/task.png',
    title: 'Activity Logs',
    description: 'Keep track of every scan, update, and security action across all devices.',
    platforms: ['windows', 'android'],
    badge: null
  }
];

const platformImages: {[key: string]: {image: string, name: string}} = {
  'windows': {image: 'img/windows.png', name: 'Windows'},
  'android': {image: 'img/android.png', name: 'Android'},
  'ios': {image: 'img/apple.png', name: 'iOS'}
};

export default function Features() {
  return (
    <>

      {/* Smarter Faster Safer Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>Next-Gen Protection for Every Device</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Smarter. <span className="text-dark">Faster.</span> <span className="text-dark">Safer.</span>
            </h2>

            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Experience all-in-one AI-powered protection that keeps your devices secure, optimized, and private <br /> — across Windows, Android, and iOS. AVIRIS adapts intelligently to every platform, delivering seamless defense and real-time performance.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <a href="/front/downloads#download-windows" className="btn-secondary-custom">
                Download for Windows
                <i className="fas fa-download"></i>
              </a>
              <a href="/front/downloads#download-macos" className="btn-primary-custom">
                Available for MacOS
                <i className="fas fa-download"></i>
              </a>
              <a href="/front/downloads#download-android" className="btn-outline-custom" style={{borderColor: 'var(--aviris-secondary)', color: 'var(--aviris-secondary)'}}>
                Get it on Android
                <i className="fas fa-download"></i>
              </a>
              <a href="/front/downloads#download-ios" className="btn-outline-custom">
                Available for iOS
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>

          {/* Feature Image */}
          <div className="text-center" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="800">
            <img src="/front/img/features.png" alt="AVIRIS Multi-Device Protection" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="section-padding aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>Powerful Features. Seamless Protection.</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Everything</span> You Need To<br />
              Stay Secure.
            </h2>

            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              From intelligent virus detection to system optimization and real-time privacy control — <br />AVIRIS brings every essential protection tool together.
            </p>
          </div>

          {/* Features Grid */}
          <div className="row mb-5">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={600 + (index * 100)}>
                <div className="feature-grid-card">
                  {feature.badge && (
                    <span className="feature-badge">{feature.badge}</span>
                  )}
                  
                  <div className="feature-icon-box">
                    <img src={`/front/${feature.icon}`} alt={feature.title} className="feature-icon-img" />
                  </div>
                  
                  <h3 className="feature-grid-title">{feature.title}</h3>
                  <p className="feature-grid-description">{feature.description}</p>
                  
                  <div className="feature-platforms">
                    {feature.platforms.map((platform) => (
                      <span key={platform} className="platform-tag">
                        <img src={`/front/${platformImages[platform].image}`} alt={platformImages[platform].name} className="platform-icon" />
                        <span>{platformImages[platform].name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
            <a href={routes.pricing} className="btn-secondary-custom">
              Get Started
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Windows Security Suite Section */}
      <section className="section-padding aviris__bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Content */}
            <div className="col-lg-6 order-lg-1 order-2 mb-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="platform-content">
                <div className="section-badge mb-3">
                  <span>Windows Security Suite</span>
                </div>
                <h2 className="section-title platform-title">
                  <span className="text-dark">Full Control.</span> Maximum<br />Power.
                </h2>
                <p className="section-description platform-description">
                  Designed for professionals and home users alike — AVIRIS for Windows combines AI intelligence with full system protection and optimization tools.
                </p>
                <ul className="platform-features-list">
                  <li>
                    <i className="fas fa-lock platform-feature-icon"></i>
                    <span>AI Antivirus & Smart Scans</span>
                  </li>
                  <li>
                    <i className="fas fa-tools platform-feature-icon"></i>
                    <span>System Cleaner & Optimizer</span>
                  </li>
                  <li>
                    <i className="fas fa-globe platform-feature-icon"></i>
                    <span>Built-in Secure VPN</span>
                  </li>
                </ul>
                <a href="/front/downloads" className="btn-secondary-custom">
                  Download Now
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            {/* Right Column: Image */}
            <div className="col-lg-6 order-lg-2 order-1 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="text-center">
                <img src="/front/img/fcmp.png" alt="AVIRIS Windows Security Suite" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Android Defense Engine Section */}
      <section className="section-padding aviris__bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Mobile Image */}
            <div className="col-lg-6 order-lg-1 order-1 mb-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="mobile-device-wrapper">
                <div className="mobile-device-bg gradient" data-aos="fade-up" data-aos-duration="800"></div>
                <img 
                  src="/front/img/lsm.png" 
                  alt="AVIRIS Android App" 
                  className="mobile-device-image"
                  data-aos="fade-up" 
                  data-aos-duration="1200" 
                  data-aos-delay="300"
                  data-aos-anchor-placement="center-bottom"
                />
              </div>
            </div>
            
            {/* Right Column: Content */}
            <div className="col-lg-6 order-lg-2 order-2 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="platform-content">
                <div className="section-badge mb-3">
                  <span>Android Defense Engine</span>
                </div>
                <h2 className="section-title platform-title">
                  Lightweight. <span className="text-dark">Smart.</span><br /><span className="text-dark">Mobile.</span>
                </h2>
                <p className="section-description platform-description">
                  AVIRIS Android keeps your phone secure, optimized, and private — 24/7 protection without draining battery.
                </p>
                <ul className="platform-features-list">
                  <li>
                    <i className="fas fa-mobile-alt platform-feature-icon"></i>
                    <span>App Scanning & Privacy Guard</span>
                  </li>
                  <li>
                    <i className="fas fa-shield-alt platform-feature-icon"></i>
                    <span>Safe Browsing & VPN</span>
                  </li>
                  <li>
                    <i className="fas fa-bolt platform-feature-icon"></i>
                    <span>Memory Boost & Cleanup</span>
                  </li>
                  <li>
                    <i className="fas fa-bell platform-feature-icon"></i>
                    <span>Instant Threat Alerts</span>
                  </li>
                  <li>
                    <i className="fas fa-sync-alt platform-feature-icon"></i>
                    <span>Account Sync for Cross-Device Protection</span>
                  </li>
                </ul>
                <a href={routes.pricing} className="btn-secondary-custom">
                  Start Free Trial
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iOS Protection Layer Section */}
      <section className="section-padding aviris__bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Content */}
            <div className="col-lg-6 order-lg-1 order-2 mb-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="platform-content">
                <div className="section-badge mb-3">
                  <span>iOS Protection Layer</span>
                </div>
                <h2 className="section-title platform-title">
                  Privacy First. <span className="text-dark">Seamless</span><br /><span className="text-dark">Security.</span>
                </h2>
                <p className="section-description platform-description">
                  Engineered for iOS performance — AVIRIS ensures your browsing, privacy, and data remain uncompromised.
                </p>
                <ul className="platform-features-list">
                  <li>
                    <i className="fas fa-shield-alt platform-feature-icon"></i>
                    <span>Web Protection</span>
                  </li>
                  <li>
                    <i className="fas fa-globe platform-feature-icon"></i>
                    <span>Secure VPN</span>
                  </li>
                  <li>
                    <i className="fas fa-bell platform-feature-icon"></i>
                    <span>Real-time Notifications</span>
                  </li>
                  <li>
                    <i className="fas fa-user-shield platform-feature-icon"></i>
                    <span>Privacy Guard Controls</span>
                  </li>
                  <li>
                    <i className="fas fa-cloud platform-feature-icon"></i>
                    <span>iCloud-integrated Sync</span>
                  </li>
                </ul>
                <a href={routes.pricing} className="btn-secondary-custom">
                  Start Free Trial
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            
            {/* Right Column: Mobile Image */}
            <div className="col-lg-6 order-lg-2 order-1 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="mobile-device-wrapper">
                <div className="mobile-device-bg image" style={{backgroundImage: 'url(/front/img/pfss_bg.png)'}} data-aos="fade-up" data-aos-duration="800"></div>
                <img 
                  src="/front/img/pfss.png" 
                  alt="AVIRIS iOS App" 
                  className="mobile-device-image"
                  data-aos="fade-up" 
                  data-aos-duration="1200" 
                  data-aos-delay="300"
                  data-aos-anchor-placement="center-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* FAQs Section */}
      <FAQs />

      {/* CTA Section */}
      <CTA />
    </>
  );
}
