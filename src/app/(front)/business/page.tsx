import CTA from '@/components/shared/CTA';
import { routes } from '@/config/routes';
import type { Metadata } from 'next';
import '@/styles/front/pages/business.css';
import '@/styles/front/components/network.css';
import BusinessQuotationForm from '@/components/shared/BusinessQuotationForm';
export const metadata: Metadata = {
  title: 'Business Solutions - AVIRIS | Enterprise Cybersecurity',
  description: 'Protect your business with AVIRIS enterprise security. Scalable multi-device protection, centralized management, advanced threat detection for teams.',
};

const teamAvatars = [
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', x: '12%', y: '15%', delay: 600 },
  { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', x: '50%', y: '12%', delay: 700, center: true },
  { image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop', x: '88%', y: '18%', delay: 800 },
  { image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop', x: '8%', y: '50%', delay: 900 },
  { image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop', x: '92%', y: '52%', delay: 1000 },
  { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop', x: '15%', y: '82%', delay: 1100 },
  { image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop', x: '50%', y: '85%', delay: 1200, center: true },
  { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop', x: '85%', y: '88%', delay: 1300 },
];

// Calculate line endpoint for network lines
function calculateLineEndpoint(x: string, y: string) {
  const xNum = parseFloat(x.replace('%', ''));
  const yNum = parseFloat(y.replace('%', ''));
  
  const dx = xNum - 50;
  const dy = yNum - 50;
  const angle = Math.atan2(dy, dx);
  
  const shieldRadius = 10;
  const avatarRadius = 7;
  
  const lineStartX = 50 + (shieldRadius * Math.cos(angle));
  const lineStartY = 50 + (shieldRadius * Math.sin(angle));
  
  const lineEndX = xNum - (avatarRadius * Math.cos(angle));
  const lineEndY = yNum - (avatarRadius * Math.sin(angle));
  
  return {
    x1: `${lineStartX}%`,
    y1: `${lineStartY}%`,
    x2: `${lineEndX}%`,
    y2: `${lineEndY}%`
  };
}

const businessBenefits = [
  {
    icon: 'img/icons/stars.png',
    title: 'AI Threat',
    titleBold: 'Detection',
    description: 'Automatically blocks ransomware, phishing, and malware across all endpoints.',
    delay: 100
  },
  {
    icon: 'img/icons/global.png',
    title: 'Centralized Device',
    titleBold: 'Management',
    description: 'Monitor and control every device from a single intuitive dashboard.',
    delay: 200
  },
  {
    icon: 'img/icons/monitor-mobbile.png',
    title: 'Cross-Platform',
    titleBold: 'Coverage',
    description: 'Protects Windows, Android, and iOS seamlessly under one subscription.',
    delay: 300
  },
  {
    icon: 'img/icons/shield.png',
    title: 'Data Privacy &',
    titleBold: 'Compliance',
    description: 'Ensures secure data handling aligned with global privacy standards (GDPR, ISO).',
    delay: 400
  },
  {
    icon: 'img/icons/flash.png',
    title: 'Performance',
    titleBold: 'Optimization',
    description: 'Keeps systems running smoothly with smart cleaning and resource balancing.',
    delay: 500
  },
  {
    icon: 'img/icons/headphone.png',
    title: 'Dedicated Support',
    titleBold: 'Team',
    description: '24/7 expert assistance and priority response for business clients.',
    delay: 600
  }
];

const pricingPlans = [
  {
    icon: 'img/icons/p_1.png',
    name: 'Business Starter',
    devices: 'Up To 10 Devices',
    target: 'Small Teams & Freelancers',
    btnText: 'Get Started',
    btnClass: 'btn-pricing-white',
    btnIcon: 'fa-arrow-right',
    featured: false,
    delay: 100
  },
  {
    icon: 'img/icons/p_2.png',
    name: 'Business Pro',
    devices: 'Up To 50 Devices',
    target: 'Growing Companies',
    btnText: 'Request Quote',
    btnClass: 'btn-pricing-green',
    btnIcon: 'fa-arrow-right',
    featured: true,
    delay: 200
  },
  {
    icon: 'img/icons/p_3.png',
    name: 'Enterprise Suite',
    devices: '100+ Devices',
    target: 'Large Organizations',
    btnText: 'Contact Sales',
    btnClass: 'btn-pricing-dark',
    btnIcon: 'fa-phone-alt',
    featured: false,
    delay: 300
  }
];

const operationsFeatures = [
  { icon: 'fa-shield-alt', text: 'AI-powered multi-layer protection' },
  { icon: 'fa-desktop', text: 'Unified security dashboard' },
  { icon: 'fa-cloud-upload-alt', text: 'Cloud-based updates & monitoring' },
  { icon: 'fa-link', text: 'Seamless deployment & device linking' },
  { icon: 'fa-headset', text: 'Dedicated business support line' }
];

const partnerLogos = [
  { img: 'img/icons/Logo-1.png', alt: 'Partner 1' },
  { img: 'img/icons/Logo-2.png', alt: 'Partner 2' },
  { img: 'img/icons/Logo-3.png', alt: 'Partner 3' },
  { img: 'img/icons/Logo-4.png', alt: 'Partner 4' },
  { img: 'img/icons/Logo-5.png', alt: 'Partner 5' }
];

export default function Business() {
  return (
    <>
      {/* Business Hero Section with Network */}
      <section className="business-hero-section aviris__bg-dark">
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Left Column: Content */}
            <div className="col-lg-6 order-lg-1 order-2 mb-2" data-aos="fade-up" data-aos-duration="1000">
              <div>
                {/* Badge */}
                <div className="section-badge mb-4">
                  <span>AI-Powered Cybersecurity for Modern Businesses</span>
                </div>
                
                {/* Title */}
                <h1 className="section-title">
                  Protect Every Device. <span className="text-dark">Empower Every Team.</span>
                </h1>
                
                {/* Description */}
                <p className="section-description">
                  AVIRIS for Business delivers next-generation AI protection designed to secure your organization's data, devices, and employees — across Windows, Android, and iOS. Simple to deploy, effortless to manage, and built to scale.
                </p>
                
                {/* CTA Buttons */}
                <div className="business-cta-group">
                  <a href="/front/contact" className="btn-primary-custom">
                    <i className="fas fa-phone-alt"></i>
                    <span>Contact Sales</span>
                  </a>
                  <a href="/front/contact" className="btn-secondary-custom">
                    Get a Quote
                    <i className="fas fa-arrow-right"></i>
                  </a>
                  
                  <a href={routes.pricing} className="btn-outline-custom">
                    <span>Explore Plans</span>
                  </a>
                </div>
                
                {/* Subtext */}
                <p className="business-subtext">
                  Get the best deals for your business or company.
                </p>
              </div>
            </div>
            
            {/* Right Column: Visual */}
            <div className="col-lg-6 order-lg-2 order-1 mb-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              <div className="business-visual-wrapper">
                <div className="business-visual-bg" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400">
                  <div className="team-network">
                    {/* Connection Lines (SVG) */}
                    <svg className="network-lines" data-aos="fade" data-aos-duration="1500" data-aos-delay="1500">
                      {teamAvatars.map((avatar, index) => {
                        const line = calculateLineEndpoint(avatar.x, avatar.y);
                        return (
                          <line 
                            key={index}
                            className="network-line"
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            style={{animationDelay: `${(avatar.delay - 1500) / 1000}s`}}
                          />
                        );
                      })}
                    </svg>
                    
                    {/* Center Shield */}
                    <div className="shield-center">
                      {/* Animated Signal Waves */}
                      <div className="signal-wave"></div>
                      <div className="signal-wave"></div>
                      <div className="signal-wave"></div>
                      <img className="nk-lg_icon" src="/front/img/login_icon.png" alt="Shield" />
                    </div>
                    
                    {/* Team Member Avatars */}
                    {teamAvatars.map((avatar, index) => {
                      const fadeDirection = index < 3 ? 'down' : (index < 5 ? (index % 2 === 0 ? 'right' : 'left') : 'up');
                      return (
                        <div 
                          key={index}
                          className="avatar-circle"
                          style={{left: avatar.x, top: avatar.y, transform: 'translate(-50%, -50%)'}}
                          data-aos={`fade-${fadeDirection}`}
                          data-aos-duration="800"
                          data-aos-delay={avatar.delay}
                        >
                          <img src={avatar.image} alt={`Team Member ${index + 1}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features Grid Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 mb-2">
              <div className="row features-row-left">
                {/* Left Sub-Column (No left border-radius on desktop) */}
                <div className="col-6 mb-2">
                  <div className="feature-col-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="feature-image-card feature-no-left-radius">
                      <img src="/front/img/bf1.png" alt="Modern Office Space" />
                    </div>
                  </div>
                </div>
                
                {/* Right Sub-Column */}
                <div className="col-6 mb-2">
                  <div className="row">
                    <div className="col-12 mb-2">
                      <div className="feature-col-half" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="feature-image-card">
                          <img src="/front/img/bf2.png" alt="Collaborative Workspace" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="feature-col-half" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <div className="feature-image-card">
                          <img src="/front/img/bf3.png" alt="Secure Operations" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column (No right border-radius on desktop) */}
            <div className="col-lg-6 mb-2">
              <div className="feature-col-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="feature-image-card feature-no-right-radius">
                  <img src="/front/img/bf4.png" alt="Secure Work Environment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="business-benefits-section">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>Smarter Security for Every Business</span>
            </div>
            
            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">All-In-One Protection</span> For Your<br />
              Company's Digital Ecosystem.
            </h2>
            
            <p className="section-description mx-auto" style={{maxWidth: '900px'}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Whether you manage 10 or 100 devices, AVIRIS provides centralized control, enterprise-grade defense, and real-time insights to keep your business protected — anywhere, anytime.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="row">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={benefit.delay}>
                <div className="benefit-card">
                  <div className="benefit-icon-wrapper">
                    <img src={`/front/${benefit.icon}`} alt={benefit.titleBold} />
                  </div>
                  <h3 className="benefit-title">
                    {benefit.title} <span>{benefit.titleBold}</span>
                  </h3>
                  <p className="benefit-description">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <p className="section-badge mb-3" data-aos="fade-down" data-aos-duration="800">
              Choose the Plan That Grows with You.
            </p>
            
            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Flexible Licensing For <span className="text-dark">Teams & Enterprises.</span>
            </h2>
            
            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              From small startups to large organizations, AVIRIS adapts to your business needs. Protect multiple devices under a single account with simple licensing and centralized billing.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={plan.delay}>
                <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                  <div className="pricing-icon-wrapper">
                    <img src={`/front/${plan.icon}`} alt={plan.name} />
                  </div>
                  
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  
                  <p className="pricing-devices">{plan.devices}</p>
                  
                  <p className="pricing-target">{plan.target}</p>
                  
                  <div className="pricing-cta">
                    <a href={`#pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`} className={plan.btnClass}>
                      <span>{plan.btnText}</span>
                      <i className={`fas ${plan.btnIcon}`}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Operations Section */}
      <section className="digital-operations-section aviris__bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Content */}
            <div className="col-lg-6 order-lg-1 order-2 mb-3" data-aos="fade-up" data-aos-duration="1000">
              <div className="platform-content">
                <p className="section-badge">
                  Trusted by Professionals. Built for the Future.
                </p>
                
                <h2 className="section-title platform-title">
                  A Smarter Way to Secure <span className="text-dark">Your Digital Operations.</span>
                </h2>
                
                <p className="section-description platform-description">
                  Designed for professionals and home users alike — AVIRIS for Windows combines AI intelligence with full system protection and optimization tools.
                </p>
                
                <ul className="operations-features-list">
                  {operationsFeatures.map((feature, index) => (
                    <li key={index}>
                      <i className={`fas ${feature.icon} operations-feature-icon`}></i>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#request-quote" className="btn-secondary-custom">
                  Request Quote
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            
            {/* Right Column: Image */}
            <div className="col-lg-6 order-lg-2 order-1 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="operations-image-wrapper">
                <div className="operations-image-bg" data-aos="fade-up" data-aos-duration="800"></div>
                <img 
                  src="/front/img/office.png"
                  alt="Modern Digital Operations"
                  className="operations-image"
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

      {/* Trusted Partners Section */}
      <section className="trusted-partners-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-4 mb-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay={100 + (index * 100)}>
                <div className="partner-logo-item">
                  <img src={`/front/${logo.img}`} alt={logo.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Section */}
      <section className="quotation-section aviris__bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Form */}
            <div className="col-lg-6 order-lg-1 order-2 mb-3" data-aos="fade-up" data-aos-duration="1000">
              <BusinessQuotationForm />
            </div>

            {/* Right Column: Content */}
            <div className="col-lg-6 order-lg-2 order-1 mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div>
                {/* Using Global section-badge */}
                <div className="section-badge mb-4">
                  <span>Quotation</span>
                </div>
                
                {/* Using Global section-title */}
                <h2 className="section-title">
                  Let's Build A Safer Digital <span className="text-dark">Future — Together.</span>
                </h2>
                
                {/* Using Global section-description */}
                <p className="section-description">
                  Send requirements to our cybersecurity experts and get a tailored AVIRIS business solution that fits your organization's needs. Our expert will call you within minutes.
                </p>
                
                {/* Using Global btn-secondary-custom */}
                <a href="#contact-sales" className="btn-secondary-custom">
                  Contact Sales
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  );
}
