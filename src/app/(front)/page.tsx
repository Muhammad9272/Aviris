import Testimonials from '@/components/shared/Testimonials';
import FAQs from '@/components/shared/FAQs';
import BlogSection from '@/components/shared/BlogSection';
import CTA from '@/components/shared/CTA';
import type { Metadata } from 'next';
import '@/styles/front/pages/home.css';

export const metadata: Metadata = {
  title: 'AVIRIS - Next-Gen AI Antivirus & Cybersecurity Protection',
  description: 'Stay Protected. Stay Private. Stay AVIRIS. Advanced AI-powered cybersecurity for Windows, Android & iOS. Real-time threat detection, VPN, system optimizer & more.',
};

export default function Home() {
  return (
    <>
      {/* Hero Wrapper (Navbar + Hero Section) */}
      <div className="hero-wrapper aviris__bg-dark position-relative">
        {/* Background Pattern for entire wrapper */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/front/img/hero_vector_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
          zIndex: 0
        }}></div>

        {/* Decorative Dots */}
        <span className="decorative-dot dot-1"></span>
        <span className="decorative-dot dot-2"></span>
        <span className="decorative-dot dot-3"></span>
        <span className="decorative-dot dot-4"></span>

        {/* Hero Section */}
        <section className="hero-section" style={{background: 'transparent'}}>
          <div className="container">
            {/* Hero Content Row */}
            <div className="row">
              <div className="col-12">
                <div className="text-center position-relative" style={{zIndex: 2}}>
                  {/* Badge */}
                  <div className="d-inline-flex align-items-center gap-2 bg-white border rounded-pill px-4 py-2 mb-4 shadow-sm" data-aos="fade-down" data-aos-duration="800">
                    <i className="fas fa-shield-alt text-danger"></i>
                    <span className="fw-semibold">Defend Your Digital World with AVIRIS</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="mb-4" style={{fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.5px', color: '#9CA3AF'}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <span style={{color: '#374151'}}>Stay Protected.</span><br/> Stay Private. <span style={{color: '#374151'}}>Stay</span> <span style={{color: '#22C55E'}}>AVIRIS</span>.
                  </h1>

                  {/* Description */}
                  <p className="mx-auto mb-4" style={{fontSize: 'clamp(16px, 1.2vw, 18px)', lineHeight: 1.7, color: '#6B7280', maxWidth: '700px'}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    Stay safe from viruses, trackers, and data theft with AVIRIS — your complete digital security suite powered by real-time AI defense, encrypted VPN, and smart system optimization.
                  </p>

                  {/* CTA Buttons */}
                  <div className="d-flex flex-wrap justify-content-center gap-3 mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <a href="#download" className="btn-primary-custom d-inline-flex align-items-center gap-2 text-white text-decoration-none">
                      <i className="fas fa-download"></i>
                      Download Now
                    </a>
                    <a href="#premium" className="btn-secondary-custom d-inline-flex align-items-center gap-2 text-white text-decoration-none">
                      <i className="fas fa-crown"></i>
                      Get Premium
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image Row */}
            <div className="row">
              <div className="col-12">
                <div className="hero-image-wrapper" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="800">
                  <img src="/front/img/mobile_version.png" alt="AVIRIS VPN Security Interface" className="hero-mockup-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cross-Platform Section */}
      <section className="cross-platform-section aviris__bg-dark">
        <div className="platform-container">
          {/* Row 1: Windows (center) */}
          <div className="icon-row icon-row-1">
            <div className="platform-icon bg-white rounded-circle shadow d-flex align-items-center justify-content-center" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
              <img src="/front/img/windows.png" alt="Windows" />
            </div>
          </div>

          {/* Row 2: Android (left) and Apple (right) */}
          <div className="icon-row icon-row-2">
            <div className="platform-icon bg-white rounded-circle shadow d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
              <img src="/front/img/android.png" alt="Android" />
            </div>
            <div className="platform-icon bg-white rounded-circle shadow d-flex align-items-center justify-content-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <img src="/front/img/apple.png" alt="Apple" />
            </div>
          </div>

          {/* Row 3: Chrome (far left) and macOS (far right) with Badge in middle */}
          <div className="icon-row icon-row-3">
            <div className="platform-icon bg-white rounded-circle shadow d-flex align-items-center justify-content-center" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
              <img src="/front/img/chrome.png" alt="Chrome" />
            </div>

            <div className="section-badge" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
              Security That Moves with You Anytime, Anywhere
            </div>

            <div className="platform-icon bg-white rounded-circle shadow d-flex align-items-center justify-content-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
              <img src="/front/img/mac_os.png" alt="macOS" />
            </div>
          </div>
        </div>

        <div className="container">
          {/* Content */}
          <div className="cross-platform-content">
            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
              <span className="text-dark">One Account.</span> Every Device. <span className="text-dark">Total Protection.</span>
            </h2>

            <p className="section-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
              Enjoy seamless AVIRIS protection across desktop, mobile, and tablet — ensuring complete digital safety no matter what device you use.
            </p>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
              <a href="/front/downloads" className="btn-secondary-custom">
                <i className="fas fa-download"></i>
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AVIRIS Section */}
      <section className="why-choose-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge" data-aos="fade-down" data-aos-duration="800">
              <i className="fas fa-bolt" style={{color: '#FBBF24'}}></i>
              <span>Why Choose AVIRIS?</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Award-Winning Security</span> <span style={{color: 'var(--aviris-secondary)'}}>Trusted By Millions</span>
            </h2>
            <p className="section-description" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Industry-leading features that set us apart from the competition
            </p>
          </div>

          {/* Feature Cards */}
          <div className="row g-4">
            {/* Card 1: AI-Based Threat Prediction */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="/front/img/shield.png" alt="AI-Based Threat Prediction" />
                </div>
                <h3>
                  <span>AI-Based</span> Threat<br/>Prediction
                </h3>
              </div>
            </div>

            {/* Card 2: Browse Safely Across Public Wi-Fi */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="/front/img/wifi.png" alt="Browse Safely Across Public Wi-Fi" />
                </div>
                <h3>
                  <span>Browse</span> Safely Across<br/>Public Wi-Fi
                </h3>
              </div>
            </div>

            {/* Card 3: Lightning-Fast VPN Servers */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="/front/img/fast_vpn.png" alt="Lightning-Fast VPN Servers" />
                </div>
                <h3>
                  <span>Lightning-Fast</span> VPN<br/>Servers
                </h3>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
            <a href="/front/features" className="learn-more-btn">
              Learn More
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Advanced Security Modules Section */}
      <section className="advanced-security-section section-padding aviris__bg-dark mt-6 pt-6">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge" data-aos="fade-down" data-aos-duration="800">
              <i className="fas fa-rocket" style={{color: '#EF4444'}}></i>
              <span>Powerful AVIRIS Modules to Empower You</span>
            </div>

            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Advanced</span> Security Modules<br/>
              To Empower You
            </h2>

            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Advanced Tools for a Safer, Smarter Experience.
            </p>
          </div>

          {/* Row 1: Speed Meets Security (Full Width Card) */}
          <div className="row g-4 mb-4">
            <div className="col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="security-feature-card-large">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="feature-icon-badge">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <h3 className="feature-title">
                      <span className="text-muted">Speed Meets Security —</span><br/>
                      The Perfect Balance
                    </h3>
                    <p className="feature-description">
                      Why choose between speed and safety when you can have both? AVIRIS combines cutting-edge VPN encryption with ultra-optimized network routing, allowing you to browse, stream, and work online at full capacity. Stay protected from threats, trackers, and data leaks — all while maintaining your maximum internet speed.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-image-wrapper" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
                      <img src="/front/img/asm_1.png" alt="Speed Meets Security" className="feature-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Two Cards Side by Side */}
          <div className="row g-4 mb-5">
            {/* AI Threat Detection Card */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
              <div className="security-feature-card-small">
                <div className="feature-image-small-wrapper" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">
                  <img src="/front/img/asm_2.png" alt="AI Threat Detection" className="feature-image-small" />
                </div>
                <div className="feature-icon-badge">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="feature-title-small">
                  <span className="text-muted">AI Threat Detection &</span><br/>
                  Real-Time Protection
                </h3>
                <p className="feature-description-small">
                  AVIRIS's intelligent AI engine continuously scans your system, detects suspicious activity, and blocks threats instantly. Every risk is safely quarantined and removed to keep your device fully protected — all in real time, without interrupting your workflow.
                </p>
              </div>
            </div>

            {/* Connect Anywhere Card */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
              <div className="security-feature-card-small">
                <div className="feature-image-small-wrapper" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200">
                  <img src="/front/img/asm_3.png" alt="Connect Anywhere" className="feature-image-small" />
                </div>
                <div className="feature-icon-badge">
                  <i className="fas fa-globe"></i>
                </div>
                <h3 className="feature-title-small">
                  <span className="text-muted">Connect</span> Anywhere,<br/>
                  <span className="text-muted">Stay Secure</span> Everywhere
                </h3>
                <p className="feature-description-small">
                  To get started, upload your Excel or Word file containing the quality documentation. Once the file is imported, you'll be able to review, organize, and manage your data directly from this workspace. This helps ensure a smooth setup and accurate quality tracking from the beginning.
                </p>
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
            <a href="/front/features" className="btn-secondary-custom">
              Explore More Features
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQs Section */}
      <FAQs />

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <CTA />
    </>
  )
}
