import Testimonials from '@/components/shared/Testimonials';
import FAQs from '@/components/shared/FAQs';
import BlogSection from '@/components/shared/BlogSection';
import CTA from '@/components/shared/CTA';
import HeroVideoSection from '@/components/shared/HeroVideoSection';
import ContentImageSection from '@/components/shared/ContentImageSection';
import FeaturesListSection from '@/components/shared/FeaturesListSection';
import type { Metadata } from 'next';
import '@/styles/front/pages/home.css';
import '@/styles/front/pages/downloads.css';
import '@/styles/front/pages/pricing.css';

export const metadata: Metadata = {
  title: 'B2B Security - AVIRIS | IT Security from Germany for Teams',
  description: 'Enterprise IT security made in Germany. Protect your team with AVIRIS comprehensive cybersecurity solution for businesses.',
};

export default function B2BPage() {
  // Feature cards data - 5 business features
  const features = [
    {
      icon: 'landing/setting.png',
      title: 'Kostenlosen Sicherheitsarchitektur',
      description: 'AVIRIS ist keine klassische Virenscanner. Es ist eine vollständige, intelligente Sicherheitslösung – designed für Teams und Unternehmen. Du administrierst zentral, managst Zugriffsrechte und behältst den Überblick – ohne umfangreiches IT-Wissen von dir zu verlangen.'
    },
    {
      icon: 'landing/calender.png',
      title: 'Prävention Anstatt nur des Aktuellnarg',
      description: 'Statt ständig manuelle Ausschließungen fordern, wartet AVIRIS proaktiv. Bedrohungen werden in Echtzeit erkannt, isoliert und disfektors – bevor sie sich Schaden entfalten. Das minimiert Downtime, deaktiviert, du darfsste spaziert reaktiv agieren.'
    },
    {
      icon: 'landing/lightening.png',
      title: 'Automatische Eingriffe vor Schadensbegrenzung',
      description: 'Verdächtige Dateien werden sofort in Quarantäne verschoben – automatisch, ohne manuelles Eingreifen. Das reduziert Ausfallzeiten und stellt sicher, dass kritische Systeme geschützt bleiben – auch wenn niemand vor Ort ist.'
    },
    {
      icon: 'landing/shield.png',
      title: 'Rechenkraft nicht ohne Produktivitätsverlust',
      description: 'AVIRIS Virenscan läuft leichtgewichtig im Hintergrund – keine CPU- oder RAM-intensive Prozesse, die deine Mitarbeiter verlangsamen. Arbeit geht weiter, während die Sicherheit rund um die Uhr gewährleistet bleibt.'
    },
    {
      icon: 'landing/folder.png',
      title: 'Akzentierungen sensibler Unternehmensdaten',
      description: 'Schütze Zugriffe, Dokumente und Unterlagen – automatisch. AVIRIS überwacht kritische Bereiche. Im Verdachtsfall werfen Alarms. Du entscheidest, wer auf welche Daten zugreift – mit nur wenigen Klicks.'
    }
  ];

  // Connection & Invite features
  const inviteFeatures = [
    'Du kannst weitere AVIRIS-Lizenzen ganz einfach per E-Mail oder über das Dashboard direkt an deine Mitarbeiter versenden. Für die Ersteinrichtung trägs du.',
    'Per Einzelne Einladungslink – aktivieren können sich E-Mails, Messenger oder SMS (WhatsApp, Telegram, iMessage) – Ohne Registrierung. Ohne Wartezeitung.',
    'Installiert weitere Geräte einfach nach Verwurzelte registrierung – und sie erscheint automatisch in deinem Dashboard. Alles gruppiert, sofortheitlich und leitet dir Geräte-alias sind – justiziert.',
    'Du behältst die volle Kontrolle: Nutzer sind Zustände, pausieren und entfernen – Nur behältst du jedes nicht-Regierung hinzu.',
    'Erweitere deinen Schutz nahrend – erhöhe einfach einem Geräte im Aktiviert oder vermeierst. Sodass Leads, Partner, Freelancer oder Remote-Mitarbeiter mit abgedeckt werden.',
    'Berichte und Schritte: Zustand wird du Informiert – per E-Mail, In-App oder Dashboard. Erkannt ist struktur, dass kein Vorfall durch derlaubt.'
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroVideoSection
        videoSrc="/front/img/landing/b2b_banner.mp4"
        posterSrc="/front/img/landing/b2b.jpg"
        badgeIcon="fa-building"
        badgeText="Enterprise Security. Made in Germany."
        title="IT-Sicherheit aus Deutschland.<br />Für Teams mit Verantwortung."
        description="Digitale Sicherheit. Made in Germany."
        stats={[]}
      />

      {/* Digital Protection Section */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2 mb-3 mb-lg-0">
              <div className="position-relative" style={{height: 'clamp(400px, 60vw, 550px)'}}>
                <img 
                  src="/front/img/landing/b2b.jpg" 
                  alt="Business team working together" 
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
                      Souveräne Sicherheit.
                    </h6>
                    
                    <p className="mb-0" style={{fontSize: 'clamp(12px, 2.5vw, 14px)', color: '#6B7280', lineHeight: 1.5}}>
                      Für lokale Unternehmen ist es besonders<br className="d-none d-md-block"/>
                      wichtig: Datenschutz, Kontrolle und compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="platform-content">
                <p className="section-badge mb-3">
                  <i className="fas fa-shield me-2"></i>
                  In Anbetracht in den digitalen Sicherheit ing
                </p>
                
                <h3 className="mb-3">
                  Digitale Welt. <span className="text-dark">Reale Angriffsflächen.</span>
                </h3>
                
                <p className="mb-2" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Automatisierter Betrug ist, gleichzeitige Phishing, datenverlust und erpresste Apps sind von Rangsystem hotter, wurden realistischer.
                </p>

                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Wer digitale Systeme nutzt, wird Angriffszielverwundbare. Schmeller sind schwererer zuzuweisen – besonders im Business-Kontext. Unternehmes sind im Fokus – egal ob Größe oder Branche.
                </p>

                <h3 className="mb-2">
                  Ein System. <span className="text-dark">Volle Kontrolle.</span>
                </h3>

                <p className="mb-2" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  AVIRIS wurde in Deutschland entwickelt, läuft auf Servern in Deutschland und ist vollständig DSGVO-konform.
                </p>

                <p className="mb-3" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  Wir weiteren License schützt so rund—Die Menschen die dir writing sind. Garantiert strukturiert – Ohne Umwegenen ohne Datenweitergabe so Dritte.
                </p>

                <p className="mb-4" style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  AVIRIS arbeitet ressourcenschonend im Hintergrund, ohne deinen Mitarbeitern Einfluss auf die Systemperformance und ohne störende Pop-ups.
                </p>

                <a href="#download" className="btn-secondary-custom">
                  Jetzt deine Lizenzen sichern
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section - 5 Business Features */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="row g-3 g-md-4 mb-4">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-12">
                <div className="feature-card" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', padding: 'clamp(20px, 4vw, 32px)', height: '100%'}}>
                  <div className="feature-icon-wrapper" style={{width: 'clamp(56px, 12vw, 70px)', height: 'clamp(56px, 12vw, 70px)', margin: '0 auto clamp(16px, 3vw, 20px)'}}>
                    <img src={`/front/img/${feature.icon}`} alt={feature.title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <h5 style={{fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: 600, marginBottom: 'clamp(10px, 2vw, 12px)', textAlign: 'center'}}>
                    {feature.title}
                  </h5>
                  <p style={{fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: 0, textAlign: 'center'}}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-3 g-md-4">
            {features.slice(2, 5).map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="feature-card" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', padding: 'clamp(20px, 4vw, 32px)', height: '100%'}}>
                  <div className="feature-icon-wrapper" style={{width: 'clamp(56px, 12vw, 70px)', height: 'clamp(56px, 12vw, 70px)', margin: '0 auto clamp(16px, 3vw, 20px)'}}>
                    <img src={`/front/img/${feature.icon}`} alt={feature.title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <h5 style={{fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: 600, marginBottom: 'clamp(10px, 2vw, 12px)', textAlign: 'center'}}>
                    {feature.title}
                  </h5>
                  <p style={{fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: 0, textAlign: 'center'}}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU Compliance Section */}
      <section className="py-5 aviris__bg-dark" style={{paddingTop: '40px', paddingBottom: '80px'}}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center gap-2 bg-success bg-opacity-10 rounded-pill px-4 py-2 mb-3">
              <img 
                src="/front/img/landing/eu.png" 
                alt="EU Flag" 
                style={{width: '32px', height: '32px'}}
              />
              <span className="fw-semibold text-dark">Europäische Datenverarbeitung – rechtliche Anforderlichen</span>
            </div>
            
            <p className="text-muted mx-auto" style={{maxWidth: '900px', fontSize: '15px', lineHeight: 1.6}}>
              AVIRIS ist in der Loupe – ohne Drittanbieter-Serverträger und ohne undurchsichtige sicher Datentransfers. Daten bleiben, wo sie hingehören: bei dir und in Deutschland. Transparenter, nachvollziehbarer und mit dem Schutz nach deutschem und europäischen Recht. Kein Zugriff durch Non-EU-Zugriff. Datenschutz als Standard, nicht als Option.
            </p>
          </div>
        </div>
      </section>

      {/* Team Management Section */}
      <FeaturesListSection
        badgeIcon="fa-users-cog"
        badgeText="Teams ist erhöhten Sicht"
        titleHighlight="So binden Sie weitere Nutzer und"
        title="Geräte ein"
        features={inviteFeatures}
        primaryButtonText="Jetzt deine Lizenzen sichern"
        primaryButtonLink="#pricing"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#features"
        noteText="Zentrale Verwaltung für vollständigen Überblick und Sicherheit"
        imageSrc="/front/img/landing/family_banner.png"
        imageAlt="AVIRIS Dashboard"
      />

      <Testimonials />
      <BlogSection />
      <FAQs />
      <CTA />
    </>
  );
}