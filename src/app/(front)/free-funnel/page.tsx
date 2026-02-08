import Testimonials from '@/components/shared/Testimonials';
import FAQs from '@/components/shared/FAQs';
import BlogSection from '@/components/shared/BlogSection';
import CTA from '@/components/shared/CTA';
import HeroVideoSection from '@/components/shared/HeroVideoSection';
import ContentImageSection from '@/components/shared/ContentImageSection';
import PricingHighlightSection from '@/components/shared/PricingHighlightSection';
import type { Metadata } from 'next';
import '@/styles/front/pages/home.css';
import '@/styles/front/pages/downloads.css';
import '@/styles/front/pages/pricing.css';
export const metadata: Metadata = {
  title: 'Free Virus Scan - AVIRIS | Protect Your Devices',
  description: 'Free virus scan for your devices. Digital security made in Germany. Scan your Android, iPhone, Windows, and macOS devices for free.',
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

const freeFunnelFaqs = [
  {
    question: 'Wie viele Gerate kann ich kostenlos scannen?',
    answer: 'Mit dem kostenlosen Virenscan kannst du ein Gerat prufen, zum Beispiel dein Smartphone oder deinen Rechner. Der Virenscan furs Handy eignet sich fur Android- und iPhone-Gerate, der Windows- oder Mac-Virenscan fur Computer und Laptops.',
    open: true
  },
  {
    question: 'Ist der Virenscan wirklich kostenlos?',
    answer: 'Ja, mit einem wichtigen Unterschied je nach Gerat. Windows und macOS: Der Virenscan ist komplett kostenlos, keine Zahlungsdaten, kein Abo, keine Verpflichtungen. Android und iPhone: Der Virenscan startet als 7-tagige Testversion. Dafur ist eine Hinterlegung von Zahlungsinformationen notwendig, wie im Google Play Store und Apple App Store ublich. Die Testversion kann jederzeit beendet werden.'
  },
  {
    question: 'Welche Gerate kann ich scannen?',
    answer: 'Du kannst den Virenscan kostenlos fur Windows-PCs und Laptops, Macs mit macOS, Android-Smartphones und iPhones nutzen. Je nach Gerat unterscheidet sich lediglich der Startprozess.'
  },
  {
    question: 'Was pruft der kostenlose Virenscan?',
    answer: 'Der Virenscan analysiert dein Gerat auf Viren und Schadsoftware, verdachtige Apps oder Programme sowie sicherheitsrelevante Auffalligkeiten. Egal ob Virenscan fur Windows, Virenscan fur Mac, Virenscanner fur Android oder Virenscanner fur iPhone, du erhaltst eine klare Ubersicht uber den Sicherheitsstatus.'
  },
  {
    question: 'Werden beim Gratis-Scan automatisch Viren entfernt?',
    answer: 'Der kostenlose Virenscan dient der Uberprufung und Einschatzung. Er zeigt dir, ob Risiken bestehen und welche Schritte sinnvoll sind. Ein dauerhafter Schutz ist optional.'
  },
  {
    question: 'Muss ich bei Windows oder macOS Zahlungsdaten angeben?',
    answer: 'Nein. Der Virenscan fur Windows und der Virenscan fur macOS funktionieren ohne Zahlungsinformationen und ohne Registrierungspflicht.'
  },
  {
    question: 'Warum sind bei Android und iPhone Zahlungsinfos notig?',
    answer: 'Bei Android und iOS gelten die Regeln der jeweiligen App Stores. Fur die 7-tagige Testversion verlangen Google Play Store und Apple App Store eine Zahlungsart. Du kannst die Testversion jederzeit beenden.'
  },
  {
    question: 'Kann ich nach dem Scan mehrere Gerate schutzen?',
    answer: 'Ja. Nach dem kostenlosen Scan kannst du entscheiden, ob du weitere Gerate oder Personen absichern mochtest, zum Beispiel Familie oder Freunde.'
  },
  {
    question: 'Wo werden meine Daten verarbeitet?',
    answer: 'AVIRIS wird in Deutschland entwickelt, lauft auf Servern in Deutschland und ist vollstandig DSGVO-konform. Es findet keine Datenweitergabe an Dritte statt.'
  },
  {
    question: 'Ist der Virenscan auch fur Kinder oder altere Personen geeignet?',
    answer: 'Ja. Der Virenscan furs Handy und der Virenscan fur Windows oder Mac sind einfach zu starten und laufen im Hintergrund, ohne technisches Vorwissen.'
  }
];

const comparisonRows = [
  {
    feature: 'Sicherheitscheck',
    free: { type: 'check', label: 'Einmalig' },
    ultimate: { type: 'check', label: 'Dauerhaft' }
  },
  {
    feature: 'Erkennung von Risiken',
    free: { type: 'check' },
    ultimate: { type: 'check' }
  },
  {
    feature: 'Schutz im Hintergrund',
    free: { type: 'cross' },
    ultimate: { type: 'check' }
  },
  {
    feature: 'Mehrere Gerate',
    free: { type: 'cross' },
    ultimate: { type: 'check' }
  },
  {
    feature: 'Gerate & Nutzer zentral verwalten',
    free: { type: 'cross' },
    ultimate: { type: 'check' }
  },
  {
    feature: 'Schutz mit anderen teilen',
    free: { type: 'cross' },
    ultimate: { type: 'check', label: 'Familie & Freunde' }
  },
  {
    feature: 'Geeignet fur',
    free: { type: 'text', label: 'Erste Einschatzung' },
    ultimate: { type: 'text', label: 'Langfristigen Schutz' }
  }
];

const ultimateSteps = [
  {
    number: '1',
    title: 'Lizenz auswählen & starten',
    description: 'Wähle dein Paket und erhalte direkt Zugriff auf dein AVIRIS Lizenz-Dashboard.'
  },
  {
    number: '2',
    title: 'Gerät hinzufügen',
    description: 'Installiere AVIRIS auf deinem ersten Gerät (Smartphone, Tablet, Laptop oder PC) und aktiviere es.'
  },
  {
    number: '3',
    title: 'Menschen einladen oder Schlüssel teilen',
    description: 'Lade Familie und weitere Personen ein – oder teile den Lizenzschlüssel einfach per WhatsApp, E-Mail oder Messenger.'
  },
  {
    number: '4',
    title: 'Fertig – alles zentral verwalten',
    description: 'Sieh im Dashboard jederzeit, welche Geräte geschützt sind, wer eingeladen wurde und wie viele Slots noch frei sind.'
  }
];

export default function FreeFunnelPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroVideoSection
        videoSrc="/front/img/landing/free_funnel_banner.mp4"
        posterSrc="/front/img/landing/family-home.png"
        badgeIcon="fa-shield-alt"
        badgeText="Digitale Sicherheit. Hergestellt in Deutschland."
        title="Gratis Virenscan für deine Geräte."
        description="Digitale Sicherheit. Made in Germany."
        stats={[]}
      />



      {/* Devices Download Section */}
      <section className="devices-section aviris__bg-dark pt-3">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="mt-4" id="scan-info">
              <h3 className="section-title mb-2 text-dark">Du willst wissen ob deine Geräte sicher sind?</h3>
              <p className="section-description mx-auto">
                Mach den kostenfreien Virenscan von AVIRIS und finde es heraus.
              </p>
            </div>
          </div>


            

          {/* Devices Grid */}
          <div className="row justify-content-center">
            {devices.map((device, index) => (
              <div key={index} className="col-lg col-md-4 col-6 mb-2">
                <a href={device.link} className={`device-card ${device.active ? 'active' : ''}`}>
                  <div className="device-icon-wrapper">
                    <img src={`/front/${device.icon}`} alt={device.name} className="device-icon" />
                  </div>
                  <h4 className="device-name">{device.name}</h4>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <div className="download-buttons justify-content-center">
              <a href="#scan-info" className="btn-outline-custom">
                Wie funktioniert es?
              </a>
              <a href="#download" className="btn-secondary-custom">
                Scan starten
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      

      <ContentImageSection
        imageSrc="/front/img/landing/free_funnel1.jpg"
        imageAlt="Two people with smartphone"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Nutzer & Geräte im Griff"
        overlayDescription="Der Gratis-Virenscan gibt dir Gewissheit,<br class='d-none d-md-block'/>ob dein Gerät sicher ist."
        badgeIcon="fa-mobile-alt"
        badgeText="Gewissheit muss nichts kosten."
        title="Smartphone Virenscan für"
        titleHighlight="Android und iPhone"
        paragraphs={[
          'Dein Smartphone verhält sich ungewöhnlich oder du willst einfach sicher sein, dass alles in Ordnung ist? Mit dem kostenlosen Virenscan fürs Handy prüft AVIRIS dein Gerät auf bekannte und neue Bedrohungen – schnell, zuverlässig und DSGVO-konform.'
        ]}
        subtitle="Egal ob Android oder iPhone:"
        bullets={[
          'Der Virenscanner analysiert dein Smartphone auf schädliche Apps',
          'verdächtige Aktivitäten und potenzielle Sicherheitsrisiken.',
          'Der Virenscan läuft im Hintergrund, ohne dein Handy zu verlangsamen oder Daten zu verändern.',       
        ]}
        ctaText="Gratis-Virenscan starten"
        imageOnLeft={false}
      />

      <ContentImageSection
        imageSrc="/front/img/landing/free_funnel2.jpg"
        imageAlt="Person working on laptop"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Kostenloser Virenscan für deinen PC & Mac"
        overlayDescription="Ob Windows 10 oder macOS:<br class='d-none d-md-block'/>Scanne dein System einfach und schnell."
        badgeIcon="fa-laptop"
        badgeText="Schnell prüfen. Sicher bleiben."
        title="Virenscan für"
        titleHighlight="Windows und macOS."
        paragraphs={[
          'Dein Rechner wird langsamer, Programme reagieren verzögert oder du bist unsicher, ob alles sauber läuft? Gerade bei Windows-PCs und Macs bleiben Schadprogramme oft lange unbemerkt – im Hintergrund, ohne klare Warnsignale.',
          'Viele Nutzer merken erst spät, dass ein Virenscan unter Windows oder auf dem Mac sinnvoll gewesen wäre. Mit AVIRIS kannst du einen kostenlosen Virenscan für Windows und macOS durchführen – schnell und ohne technisches Vorwissen. Der Scan prüft dein System auf Malware, verdächtige Prozesse und sicherheitsrelevante Auffälligkeiten.',
          'Du erhältst eine klare Einschätzung, ob dein Rechner sicher ist oder ob Handlungsbedarf besteht – transparent und ohne Verpflichtungen.'
        ]}
        subtitle="Ob Windows 10 oder macOS:"
        ctaText="Jetzt deine Liebsten schützen"
      />

      <PricingHighlightSection
        steps={ultimateSteps}
        headerId="scan-info"
        headerTitle="Für alle, die nicht nur an sich denken."
        headerDescription={(
          <>
            Smarter Security for Every Business
            Starte mit dem Gratis-Scan oder entscheide dich <br /> direkt für umfassenden Schutz für dich und die Menschen die dir wichtig sind.
          </>
        )}
        backgroundImageSrc="/front/img/hero_vector_bg.png"
      />

      {/* Comparison Table Section */}
      <section className="comparison-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <p className="section-badge">Direkter Vergleich fur dich</p>
              <h2 className="section-title">
                <span className="text-dark">Direkter Vergleich</span> der Features
              </h2>
              <p className="section-description">
                Sieh auf einen Blick, was der Gratis-Scan und AVIRIS Ultimate leisten.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#pricing-cards" className="btn-secondary-custom">
                Jetzt upgraden
              </a>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="comparison-table-wrapper">
            {/* Table Header */}
            <div className="comparison-header">
              <div className="comparison-header-cell">
                <span className="header-label">Funktion</span>
              </div>
              <div className="comparison-header-cell">
                <div className="plan-title">Gratis Virenscan</div>
              </div>
              <div className="comparison-header-cell">
                <div className="plan-title">
                  AVIRIS Ultimate
                  <span>⭐</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {comparisonRows.map((row, index) => (
              <div key={index} className="comparison-row">
                <div className="comparison-cell">
                  {row.feature}
                </div>
                <div className="comparison-cell">
                  {row.free.type === 'cross' && (
                    <span className="icon-cross">
                      <i className="fas fa-times"></i>
                    </span>
                  )}
                  {row.free.type === 'check' && (
                    <div className="feature-check">
                      <span className="icon-check">
                        <i className="fas fa-check"></i>
                      </span>
                      {row.free.label && <span>{row.free.label}</span>}
                    </div>
                  )}
                  {row.free.type === 'text' && (
                    <span style={{textAlign: 'center'}}>{row.free.label}</span>
                  )}
                </div>
                <div className="comparison-cell highlighted">
                  {row.ultimate.type === 'cross' && (
                    <span className="icon-cross">
                      <i className="fas fa-times"></i>
                    </span>
                  )}
                  {row.ultimate.type === 'check' && (
                    <div className="feature-check">
                      <span className="icon-check">
                        <i className="fas fa-check"></i>
                      </span>
                      {row.ultimate.label && <span>{row.ultimate.label}</span>}
                    </div>
                  )}
                  {row.ultimate.type === 'text' && (
                    <span style={{textAlign: 'center'}}>{row.ultimate.label}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <Testimonials />
      <BlogSection />
      <FAQs items={freeFunnelFaqs} />
      <CTA />
    </>
  );
}