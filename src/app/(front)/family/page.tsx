import Testimonials from '@/components/shared/Testimonials';
import FAQs from '@/components/shared/FAQs';
import BlogSection from '@/components/shared/BlogSection';
import CTA from '@/components/shared/CTA';
import PricingCards from '@/components/shared/PricingCards';
import HeroVideoSection from '@/components/shared/HeroVideoSection';
import FeatureCardsSection from '@/components/shared/FeatureCardsSection';
import ContentImageSection from '@/components/shared/ContentImageSection';
import FeaturesListSection from '@/components/shared/FeaturesListSection';
import type { Metadata } from 'next';
import '@/styles/front/pages/home.css';
import '@/styles/front/pages/downloads.css';
import '@/styles/front/pages/pricing.css';

export const metadata: Metadata = {
  title: 'Family Protection - AVIRIS | Keep Your Loved Ones Safe Online',
  description: 'Protect your entire family with AVIRIS comprehensive cybersecurity. Parental controls, safe browsing for kids, and complete digital protection for up to 20 devices.',
};

export default function FamilyPage() {
  // Feature cards data
  const features = [
    {
      icon: 'protector.png',
      title: 'Sicheres Surfen für Kinder',
      description: 'Schütze vor unerlaubten Webseiten, Bildungsinhalten und gefährlichen Inhalten - automatisch und hintergrund.',
      delay: 100
    },
    {
      icon: 'folder.png',
      title: 'Quarantäne statt Risiko',
      description: 'Verdächtige Dateien werden automatisch isoliert - keine 50 Schritte von echter oder gefährlicher Software.',
      delay: 200
    },
    {
      icon: 'locked.png',
      title: 'Schutz privater Bilder & Dateien',
      description: 'Fotos, Dokumente und persönliche Inhalte bleiben privat - geschützt vor unbefugtem Zugriff und Datenverlust.',
      delay: 300
    },
    {
      icon: 'radar.png',
      title: 'Frühzeitige Erkennung von Bedrohungen',
      description: 'Finde & reagiere schneller Erkennung bereits geschützt Inhalte: Malware und Spam dringt gar nicht erst ein.',
      delay: 400
    },
    {
      icon: 'technology.png',
      title: 'Umfassender Geräteschutz',
      description: 'Alle Geräte werden rungeführt auf einmal. Schützeneffekt sind optimierte Sicher gestützt - mit gleichem System.',
      delay: 500
    }
  ];

  // Checklist items
  const checklistItems = [
    'Du kannst deine AVIRIS-Lizenz ganz einfach per E-Mail, WhatsApp oder SMS versenden.',
    'Sobald ein weiteres Gerät aktiviert wird, erscheint es automatisch in deinem zentralen Dashboard - übersichtlich und sicher.',
    'Drib hast du weitere Personen per E-Mailein oder feilest den Aktivierungslink direkt. Ohne Umwege. Ohne Wartezeit.',
    'Du behältst alle Kontrolle: Verwalte Installiert, pausierst oder zentrale Einstellungen - Jederzeit - zentral aus deinem Konto.',
    'Wenn du mehr Menschen schützen möchtest: Downloadst du zentral mehr Lizenz - einfach per Klick. Dann haben Großeltern, Geschwister oder weitere nach außerhalb deinen Familie können hinzufügen Vierte.',
    'in einer Blick: Alles gruppiert und bar Schutz zur Person.'
  ];

  return (
    <>
 
       {/* Video Banner Section */}
      <section className="aviris__bg-dark" style={{paddingTop: '120px', paddingBottom: '60px'}}>
        <div className="container">
          <div className="video-banner-wrapper position-relative" style={{height: '70vh', minHeight: '500px', overflow: 'hidden', borderRadius: '24px'}}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              poster="/front/img/landing/family-home.png"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
                borderRadius: '24px'
              }}
            >
              <source src="/front/img/landing/family_banner.mp4" type="video/mp4" />
            </video>

            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)',
              zIndex: 1,
              borderRadius: '24px'
            }}></div>

            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: 'linear-gradient(to top, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 30%, transparent 100%)',
              zIndex: 1,
              borderRadius: '24px'
            }}></div>

            <div className="h-100 d-flex align-items-end" style={{position: 'relative', zIndex: 2, padding: 'clamp(20px, 5vw, 60px) clamp(20px, 5vw, 60px) clamp(30px, 5vw, 60px) clamp(20px, 5vw, 60px)'}}>
              <div className="row w-100">
                <div className="col-lg-9 col-md-10">
                  <div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20 rounded-pill px-3 py-2 mb-3">
                    <i className="fas fa-shield-alt text-success"></i>
                    <span className="fw-semibold text-white">Protection for the Whole Family</span>
                  </div>

                  <h2 className="mb-3 text-white section-title">
                    Protection for the People <br></br> Who Matter Most.
                  </h2>

                  <p className="mb-4 text-white" style={{fontSize: 'clamp(14px, 1vw, 16px)', lineHeight: 1.6, maxWidth: '600px', textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                    With AVIRIS, protect your family from online threats, inappropriate content, and cyber dangers. Up to 20 devices. One license. Complete control.
                  </p>

                  <div className="d-flex flex-wrap gap-4 mt-4">
                
                    <div className="text-white">
                      <div style={{fontSize: '24px', fontWeight: 700, lineHeight: 1}}>24/7</div>
                      <div style={{fontSize: '12px', opacity: 0.9}}>Real-Time Protection</div>
                    </div>
                    <div className="text-white">
                      <div style={{fontSize: '24px', fontWeight: 700, lineHeight: 1}}>100%</div>
                      <div style={{fontSize: '12px', opacity: 0.9}}>Safe Browsing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Advanced Security Modules Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">

          <PricingCards />
        </div>
      </section>


      {/* Digital World Section */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2 mb-3 mb-lg-0">
              <div className="position-relative" style={{height: 'clamp(400px, 60vw, 550px)'}}>
                <img 
                  src="/front/img/landing/family_banner.jpg" 
                  alt="Family with Tablet" 
                  className="w-100 h-100"
                  style={{
                    borderRadius: '24px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                
                <div 
                  className="position-absolute rounded-4"
                  style={{
                    bottom: 'clamp(15px, 3vw, 30px)',
                    left: 'clamp(15px, 3vw, 30px)',
                    maxWidth: 'calc(100% - clamp(30px, 6vw, 60px))',
                    zIndex: 10,
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                    padding: 'clamp(16px, 3vw, 24px)'
                  }}
                >
                  <div className="text-start">
                    <div className="mb-2 mb-md-3">
                      <img 
                        src="/front/img/login_icon.png" 
                        alt="AVIRIS" 
                        style={{width: 'clamp(36px, 8vw, 48px)', height: 'clamp(36px, 8vw, 48px)'}}
                      />
                    </div>
                    
                    <h6 className="mb-2 fw-bold" style={{fontSize: 'clamp(15px, 3vw, 18px)', color: '#111827', lineHeight: 1.3}}>
                      Safe & Secure for Your Kids
                    </h6>
                    
                    <p className="mb-0" style={{fontSize: 'clamp(12px, 2.5vw, 14px)', color: '#6B7280', lineHeight: 1.5}}>
                      Digital security for your entire family -<br className="d-none d-md-block"/>
                      automatic and in the background.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="platform-content">
                <p className="section-badge mb-3">
                  <i className="fas fa-shield me-2"></i>
                  Digital Security That Takes Responsibility
                </p>
                
                <h3 className="mb-3" >
                  Digital World. <span className="text-dark">Real Risks.</span>
                </h3>
                
                <p className="mb-2" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Phishing links, data theft, unsafe apps and platforms that weren't made for families - these are part of everyday life now.
                </p>

                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Especially children and elderly family members face digital dangers daily - while your family's data is being passed around without protection.
                </p>

                <h3 className="mb-2" >
                  One System. <span className="text-dark">Full Control.</span>
                </h3>

                <p className="mb-2" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  AVIRIS was developed in Germany, runs on German servers, and is fully compliant with data protection regulations.
                </p>

                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  With one license, you protect your family and extended relatives who matter to you - centrally and without effort. Choosing AVIRIS is choosing your family's safety.
                </p>

                <a href="#download" className="btn-secondary-custom">
                  Protect Your Loved Ones Now
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Features Section */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="row g-3 g-md-4 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="feature-card" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', padding: 'clamp(20px, 4vw, 32px)'}}>
                  <div className="feature-icon-wrapper" style={{width: 'clamp(56px, 12vw, 70px)', height: 'clamp(56px, 12vw, 70px)', margin: '0 auto clamp(16px, 3vw, 20px)'}}>
                    <img src={`/front/img/landing/${feature.icon}`} alt={feature.title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <h5>
                    {feature.title}
                  </h5>
                  <p style={{fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: 0}}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-3 g-md-4 justify-content-center">
            {features.slice(3, 5).map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-12">
                <div className="feature-card" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', padding: 'clamp(20px, 4vw, 32px)'}}>
                  <div className="feature-icon-wrapper" style={{width: 'clamp(56px, 12vw, 70px)', height: 'clamp(56px, 12vw, 70px)', margin: '0 auto clamp(16px, 3vw, 20px)'}}>
                    <img src={`/front/img/landing/${feature.icon}`} alt={feature.title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <h5>
                    {feature.title}
                  </h5>
                  <p style={{fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: 0}}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invite More People Section */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '100px', paddingBottom: '100px'}}>
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Column: Content */}
            <div className="col-lg-6 order-lg-1 order-2 mb-4 mb-lg-0">
              <div className="download-content">
                {/* Badge */}
                <div className="section-badge mb-4">
                  <i className="fas fa-users me-2"></i>
                  <span>Connect Without Hassle</span>
                </div>

                {/* Title */}
                <h2 className="section-title">
                  <span className="text-dark">How To Invite</span> More People
                </h2>

                {/* Features List */}
                <ul className="download-features-list">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Send your AVIRIS license via email, WhatsApp, or SMS</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>New devices appear automatically in your dashboard - secure & organized</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Share activation link via email directly - no waiting</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Full control: manage installs, pause, or adjust settings anytime</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Need more licenses? Upgrade with one click - add grandparents, siblings, or extended family</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Everything at a glance: grouped and organized by person</span>
                  </li>
                </ul>

                {/* CTA Buttons */}
                <div className="download-buttons">
                  <a href="#pricing" className="btn-secondary-custom">
                    Protect Your Loved Ones Now
                    <i className="fas fa-arrow-right"></i>
                  </a>
                  <a href="#features" className="btn-outline-custom">
                    Learn More
                  </a>
                </div>

                {/* Note */}
                <p className="download-note">
                  Central management for your entire family's security
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="download-image-wrapper">
                <img 
                  src="/front/img/landing/family_banner.png" 
                  alt="AVIRIS Dashboard" 
                  className="download-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <BlogSection />
      <FAQs />
      <CTA />
    </>
  )
}