import Testimonials from '@/components/shared/Testimonials';
import FAQs from '@/components/shared/FAQs';
import BlogSection from '@/components/shared/BlogSection';
import CTA from '@/components/shared/CTA';
import HeroVideoSection from '@/components/shared/HeroVideoSection';
import ContentImageSection from '@/components/shared/ContentImageSection';
import type { Metadata } from 'next';
import '@/styles/front/pages/home.css';
import '@/styles/front/pages/downloads.css';
import '@/styles/front/pages/pricing.css';

export const metadata: Metadata = {
  title: 'Free Virus Scan - AVIRIS | Protect Your Devices',
  description: 'Free virus scan for your devices. Digital security made in Germany. Scan your Android, iPhone, Windows, and macOS devices for free.',
};

export default function FreeFunnelPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroVideoSection
        videoSrc="/front/img/landing/free_funnel_banner.mp4"
        posterSrc="/front/img/landing/free_funnel.jpg"
        badgeIcon="fa-shield-alt"
        badgeText="Digital Security. Made in Germany."
        title="Gratis Virenscan für deine Geräte."
        description="Digitale Sicherheit. Made in Germany."
        stats={[]}
      />

      {/* Android & iPhone Section */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Column: Content */}
            <div className="col-lg-6 order-lg-1 order-2 mb-4 mb-lg-0">
              <div className="platform-content">
                <p className="section-badge mb-3" style={{display: 'inline-block'}}>
                  <i className="fas fa-mobile-alt me-2"></i>
                  Geschützt. Direkt. Ohne Kompromissen.
                </p>
                
                <h2 className="mb-3" style={{fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, lineHeight: 1.2}}>
                  Smartphone Virenscan für <span className="text-dark">Android und iPhone</span>
                </h2>
                
                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Dein Smartphone ist nicht nur Telefon – es ist dein Zugang zu Daten, Fotos, Apps und deinem Privatleben. Gleichzeitig sind es ganz genau hier, wo Apps ohne Absicherungen Schwachstellen oder Malware bergen oder AVIRIS wird Geräte auf gefährliche Dateien, Links und Apps – umfassend und ohne Setup oder Registrierung.
                </p>

                <h5 className="mb-3" style={{fontWeight: 600, fontSize: '18px'}}>
                  Egal ob Android oder iPhone:
                </h5>

                <ul className="download-features-list mb-4">
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Der Virenscan analysiert bestimmte Apps, Systemordner und installierte Apps.</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>wird festigt nicht einen unüberwältigende Sicherheits-Risiko.</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    <span>Die Ergebnisse Bereit es millionaire gibt, sind darauf angestellten.</span>
                  </li>
                </ul>

                <a href="#download" className="btn-secondary-custom">
                  Gratis Virenscan anfordern
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="position-relative" style={{height: 'clamp(400px, 60vw, 550px)'}}>
                <img 
                  src="/front/img/landing/b2b.jpg" 
                  alt="Two people with smartphone" 
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
                        src="/front/img/landing/login_icon.png" 
                        alt="AVIRIS" 
                        style={{width: 'clamp(36px, 8vw, 48px)', height: 'clamp(36px, 8vw, 48px)'}}
                      />
                    </div>
                    
                    <h6 className="mb-2 fw-bold" style={{fontSize: 'clamp(15px, 3vw, 18px)', color: '#111827', lineHeight: 1.3}}>
                      Nutzer & Geräte im Griff.
                    </h6>
                    
                    <p className="mb-0" style={{fontSize: 'clamp(12px, 2.5vw, 14px)', color: '#6B7280', lineHeight: 1.5}}>
                      Den freien Virenscan gibt es für Android, all<br className="d-none d-md-block"/>
                      iPhones und auch für Computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Windows & macOS Section */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Column: Image */}
            <div className="col-lg-6 order-lg-1 order-1 mb-4 mb-lg-0">
              <div className="position-relative" style={{height: 'clamp(400px, 60vw, 550px)'}}>
                <img 
                  src="/front/img/landing/free_funnel2.jpg" 
                  alt="Person working on laptop" 
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
                        src="/front/img/landing/login_icon.png" 
                        alt="AVIRIS" 
                        style={{width: 'clamp(36px, 8vw, 48px)', height: 'clamp(36px, 8vw, 48px)'}}
                      />
                    </div>
                    
                    <h6 className="mb-2 fw-bold" style={{fontSize: 'clamp(15px, 3vw, 18px)', color: '#111827', lineHeight: 1.3}}>
                      Kostenloser Virenscan für<br className="d-none d-md-block"/> deinen PC & Mac.
                    </h6>
                    
                    <p className="mb-0" style={{fontSize: 'clamp(12px, 2.5vw, 14px)', color: '#6B7280', lineHeight: 1.5}}>
                      Scannt die Festplatte ab ohne<br className="d-none d-md-block"/>
                      Installation. Einfach & sicher.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="col-lg-6 order-lg-2 order-2 mb-4 mb-lg-0">
              <div className="platform-content">
                <p className="section-badge mb-3" style={{display: 'inline-block'}}>
                  <i className="fas fa-laptop me-2"></i>
                  Sicherer prüfen. Sicher arbeiten.
                </p>
                
                <h2 className="mb-3" style={{fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, lineHeight: 1.2}}>
                  Virenscan für <span className="text-dark">Windows und macOS.</span>
                </h2>
                
                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Dein Rechner sind wo daigitaler. Programme laufen umgehen – oder auch ist als Antwort ist, ob dein sicherer ist?
                </p>

                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Mit AVIRIS Virenscan für Windows und macOS erhältst du Klarheit. Ganz leicht – einfach ohne Install. Ohne Registrierung. Und ohne Download. Du hast startest die Scan. Minuten später erhältst du deinen Bericht – genau, verständlich und umsetzbar.
                </p>

                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Mit AVIRIS prüfst du einen beliebte Verweigert für Windows und macOS - so gewiss wie – anstatt wie solche Annahme. Scannt und vollständig Deshalb analysiert werden.
                </p>

                <h5 className="mb-3" style={{fontWeight: 600, fontSize: '18px'}}>
                  Scan gratis für Windows 10 oder macOS:
                </h5>

                <p className="mb-4" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  So erhältst also deine Privatsphäre ist dem Rechner wirklich ist sicher ist. Mehrheit auffordert Prozessen - transparent und sofort Verfügbar-ingen.
                </p>

                <a href="#download" className="btn-secondary-custom">
                  Jetzt Gratis-Virenscan anfordern
                  <i className="fas fa-arrow-right"></i>
                </a>
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
  );
}