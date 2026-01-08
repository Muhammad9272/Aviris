import BlogSection from '@/components/shared/BlogSection';
import FAQs from '@/components/shared/FAQs';
import CTA from '@/components/shared/CTA';
import { routes } from '@/config/routes';
import type { Metadata } from 'next';
import '@/styles/front/pages/downloads.css';

export const metadata: Metadata = {
  title: 'Download AVIRIS - Free Antivirus for Windows, Android & iOS',
  description: 'Download AVIRIS antivirus for free. Available for Windows, MacOS, Android & iOS. Get AI-powered protection, VPN & system optimizer now.',
};

const devices = [
  {
    name: 'Windows',
    icon: 'img/windows.png',
    link: '#download-windows',
    active: true
  },
  {
    name: 'Android',
    icon: 'img/android.png',
    link: '#download-android',
    active: false
  },
  {
    name: 'iPhone/iPad',
    icon: 'img/apple.png',
    link: '#download-ios',
    active: false
  },
  {
    name: 'MacOS',
    icon: 'img/mac_os.png',
    link: '#download-macos',
    active: false
  },
  {
    name: 'Chrome',
    icon: 'img/chrome.png',
    link: '#download-chrome',
    active: false
  }
];

const steps = [
  {
    number: '01',
    title: 'Get AVIRIS',
    titleFirst: 'Get',
    titleRest: 'AVIRIS',
    description: `<a href="${routes.pricing}" class="step-link">Choose your plan</a> and <a href="${routes.pricing}" class="step-link">create an account</a>.`
  },
  {
    number: '02',
    title: 'Download The App',
    titleFirst: 'Download',
    titleRest: 'The App',
    description: 'Get the <a href="/front/downloads" class="step-link">AVIRIS app</a> for your device.'
  },
  {
    number: '03',
    title: 'Secure Your Device',
    titleFirst: 'Secure',
    titleRest: 'Your Device',
    description: 'Secure yourself with our <a href="/front/features" class="step-link">AI based Protection</a>.'
  }
];

const avirisAdvantages = [
  {
    title: 'Next-Generation AI Threat Detection',
    description: 'AVIRIS Uses Real-Time Machine Learning Models To Identify And Neutralize Threats Before They Strike — Offering Proactive Protection Beyond Traditional Signature-Based Systems.'
  },
  {
    title: 'German Engineering & European Data Ethics 🇩🇪🇪🇺',
    description: 'Built Under Strict EU Privacy Regulations, AVIRIS Ensures User Data Is Never Exploited Or Shared — Delivering Transparency, Trust, And Uncompromising Protection.'
  },
  {
    title: 'AI-Powered Behavioral Analysis',
    description: 'Monitors System Patterns To Detect Ransomware, Phishing, And Zero-Day Attacks Through Intelligent Behavior Prediction — Even Before They Appear In Global Databases.'
  },
  {
    title: 'Lightweight & Performance Optimized',
    description: 'AVIRIS Runs Silently In The Background With Minimal System Load — No Lags, No Unnecessary Pop-Ups. Just Smooth Performance.'
  },
  {
    title: 'Multi-Layer Real-Time Protection',
    description: 'Combines AI Scanning, Cloud Intelligence, System Health Optimization, And Secure VPN — All In One Integrated Suite.'
  },
  {
    title: 'Transparent European Privacy Compliance (GDPR)',
    description: 'Strict Adherence To European Privacy Laws Ensures Your Personal Data Is Encrypted And Stays Under Your Control.'
  }
];

const conventionalDisadvantages = [
  {
    title: 'Outdated Signature-Based Scanning',
    description: 'Conventional Systems Rely On Old Databases That Detect Only Known Viruses, Often Reacting After The Attack Has Already Happened.'
  },
  {
    title: 'Foreign Data Handling (🇺🇸 / 🇷🇺)',
    description: 'Some Software May Operate Under Different Legal Frameworks That Allow Data Sharing, Telemetry Tracking, Or Lesser Transparency Around User Information.'
  },
  {
    title: 'Manual Updates & Delayed Responses',
    description: 'Requires Frequent Database Updates And Human Review, Leaving Gaps Between New Threat Discoveries And Actual Protection.'
  },
  {
    title: 'Resource-Heavy & Slower Scans',
    description: 'Many Traditional Antivirus Engines Consume Excessive CPU Power And Slow Down Daily Operations.'
  },
  {
    title: 'Single-Layer Protection Focus',
    description: 'Often Limited To Basic Virus Scanning Without Additional Optimization Or AI-Based Prevention Layers.'
  },
  {
    title: 'Unclear Data Practices',
    description: 'Some May Include Hidden Telemetry, Ad Tracking, Or Data Usage For Analytics And Third-Party Purposes.'
  }
];

export default function Downloads() {
  return (
    <>
      {/* Download Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Content */}
            <div className="col-lg-6 mb-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="download-content">
                {/* Badge */}
                <div className="section-badge mb-4">
                  <span>Download Software</span>
                </div>

                {/* Title */}
                <h2 className="section-title">
                  <span className="text-dark">Download AVIRIS For</span> Windows
                </h2>

                {/* Features List */}
                <ul className="download-features-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Advanced malware/virus scan</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>AI Threat Detection (viruses, ransomware, etc.)</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Results shown, but removal/quarantine requires upgrade</span>
                  </li>
                </ul>

                {/* CTA Buttons */}
                <div className="download-buttons">
                  <a href="#download-windows" className="btn-secondary-custom">
                    Download for Windows
                    <i className="fas fa-download"></i>
                  </a>
                  <a href="#devices" className="btn-outline-custom">
                    Check Device
                  </a>
                </div>

                {/* Note */}
                <p className="download-note">
                  These apps required Windows 7 or later
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-lg-6 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="download-image-wrapper">
                <img src="/front/img/downloads.png" alt="AVIRIS for Windows" className="download-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devices Download Section */}
      <section className="devices-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge" data-aos="fade-down" data-aos-duration="800">
              <span>Devices</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Download</span> AVIRIS For Your<br />
              Device
            </h2>

            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Download and install the app version suitable for your platform, then log in with your account.<br /> If you don't have an account, <a href={routes.pricing} className="device-signup-link">sign up here</a>.
            </p>
          </div>

          {/* Devices Grid */}
          <div className="row justify-content-center">
            {devices.map((device, index) => (
              <div key={index} className="col-lg col-md-4 col-6 mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay={600 + (index * 100)}>
                <a href={device.link} className={`device-card ${device.active ? 'active' : ''}`}>
                  <div className="device-icon-wrapper">
                    <img src={`/front/${device.icon}`} alt={device.name} className="device-icon" />
                  </div>
                  <h4 className="device-name">{device.name}</h4>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Download Section */}
      <section className="howto-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="howto-header mb-5">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>Follow the Steps</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-muted">How To Download</span> AVIRIS App
            </h2>

            <p className="section-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              It's so easy to setup your AVIRIS app.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="row">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={600 + (index * 200)}>
                <div className="step-card">
                  <div className="step-number">{step.number}</div>
                  <h3 className="step-title">
                    <span className="text-muted">{step.titleFirst}</span> {step.titleRest}
                  </h3>
                  <p className="step-description" dangerouslySetInnerHTML={{__html: step.description}}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge" data-aos="fade-down" data-aos-duration="800">
              <span>Benefits</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Advantages of</span> AVIRIS <span className="text-dark">over Other<br />
              Antivirus Softwares</span>
            </h2>

            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Designed & Developed in Germany 🇩🇪 | Built for the Future of Digital Security
            </p>
          </div>

          {/* Comparison Columns */}
          <div className="row mb-5">
            {/* Left Column: AVIRIS Advantages */}
            <div className="col-lg-6 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="comparison-card aviris-card">
                <h3 className="comparison-card-title">
                  <span className="title-highlight">AVIRIS</span> (Next-Gen AI Antivirus)
                </h3>
                
                <ul className="comparison-list">
                  {avirisAdvantages.map((advantage, index) => (
                    <li key={index} className="comparison-item positive">
                      <div className="comparison-item-header">
                        <i className="fas fa-check-circle comparison-icon"></i>
                        <div className="comparison-item-content">
                          <h4 className="comparison-item-title">{advantage.title}</h4>
                          <p className="comparison-item-description">{advantage.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Conventional Disadvantages */}
            <div className="col-lg-6 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
              <div className="comparison-card conventional-card">
                <h3 className="comparison-card-title">
                  Other Conventional Antivirus Software
                </h3>
                
                <ul className="comparison-list">
                  {conventionalDisadvantages.map((disadvantage, index) => (
                    <li key={index} className="comparison-item negative">
                      <div className="comparison-item-header">
                        <i className="fas fa-times-circle comparison-icon"></i>
                        <div className="comparison-item-content">
                          <h4 className="comparison-item-title">{disadvantage.title}</h4>
                          <p className="comparison-item-description">{disadvantage.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
            <a href={routes.pricing} className="btn-secondary-custom">
              Get Started
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section aviris__bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Content */}
            <div className="col-lg-6 order-lg-1 order-2 mb-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="experience-content">
                {/* Badge */}
                <div className="section-badge mb-4">
                  <span>Smart. Secure. German Engineered.</span>
                </div>

                {/* Title */}
                <h2 className="section-title">
                  <span className="text-muted">Experience</span> the Future<br />
                  <span className="text-muted">of</span> Cyber Defense <span className="text-muted">with<br />
                  AVIRIS</span>
                </h2>

                {/* Description */}
                <p className="section-description">
                  Powered by advanced AI and built in Germany, AVIRIS delivers next-generation protection that adapts to evolving threats in real time. It goes beyond traditional antivirus — predicting risks, blocking attacks, and keeping your data private without slowing you down.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-lg-6 order-lg-2 order-1 mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="experience-image-wrapper">
                <img src="/front/img/downloads_2.png" alt="AVIRIS Cyber Defense" className="experience-image" />
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
