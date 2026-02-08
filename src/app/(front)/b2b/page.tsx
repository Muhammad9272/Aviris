import Testimonials from '@/components/shared/Testimonials';
import FAQs from '@/components/shared/FAQs';
import BlogSection from '@/components/shared/BlogSection';
import CTA from '@/components/shared/CTA';
import HeroVideoSection from '@/components/shared/HeroVideoSection';
import ContentImageSection from '@/components/shared/ContentImageSection';
import FeatureCardsSection from '@/components/shared/FeatureCardsSection';
import FeaturesListSection from '@/components/shared/FeaturesListSection';
import PricingHighlightSection from '@/components/shared/PricingHighlightSection';
import type { Metadata } from 'next';
import '@/styles/front/pages/home.css';
import '@/styles/front/pages/downloads.css';
import '@/styles/front/pages/pricing.css';


export const metadata: Metadata = {
  title: 'B2B Security - AVIRIS | IT Security from Germany for Teams',
  description: 'Enterprise IT security made in Germany. Protect your team with AVIRIS comprehensive cybersecurity solution for businesses.',
};

export default function B2BPage() {
  // Feature cards data - 6 business features in 2-3-1 layout
  const features = [
    {
      icon: 'landing/setting.png',
      title: 'Kontrollierbare Sicherheitsentscheidungen',
      description: 'AVIRIS priorisiert Nachvollziehbarkeit und Transparenz. Sicherheitsrelevante Maßnahmen lassen sich klar einordnen und intern erklären – ohne technische Detailtiefe erzwingen zu müssen. Das erleichtert Abstimmungen mit Geschäftsführung, Datenschutz oder externen Partnern.'
    },
    {
      icon: 'landing/calender.png',
      title: 'Präventive Absicherung des Arbeitsalltags',
      description: 'AVIRIS ist auf frühe Erkennung atypischen Verhaltens ausgelegt – nicht erst auf bekannte Schadcodes. So werden auch neue oder noch nicht klassifizierte Angriffsmuster abgefangen, bevor sie den Geschäftsbetrieb beeinflussen.'
    },
    {
      icon: 'landing/lightening.png',
      title: 'Automatische Eingriffe vor Schadensbegrenzung',
      description: 'Statt nachträglicher Analyse greift AVIRIS automatisch ein, wenn verdächtige Aktivitäten auftreten. So werden Risiken isoliert, bevor Arbeitsausfälle, Datenverlust oder Eskalationen entstehen.'
    },
    {
      icon: 'landing/shield.png',
      title: 'Sicherheitsbetrieb ohne Produktivitätsverlust',
      description: 'AVIRIS ist für den dauerhaften Einsatz im Arbeitsumfeld konzipiert. Keine Pop-ups, keine Unterbrechungen, keine messbaren Performanceeinflüsse. Sicherheit läuft mit – nicht dazwischen.'
    },
    {
      icon: 'landing/folder.png',
      title: 'Absicherung sensibler Arbeitsdaten',
      description: 'AVIRIS schützt Dateien, Zugangsdaten und interne Informationen unabhängig davon, über welchen Vektor ein Angriff erfolgt. Der Schutz ist geräteübergreifend und nicht an einzelne Anwendungen gebunden.'
    },
    {
      icon: 'landing/eu.png',
      title: 'Europäische Datenhaltung ohne rechtliche Abhängigkeiten',
      description: 'AVIRIS ist so aufgebaut, dass Datenverarbeitung und Betrieb vollständig in Deutschland stattfinden. Damit vermeiden Sie Drittstaatenzugriffe, komplexe Vertragskonstrukte und rechtliche Grauzonen. Datenschutz ist kein Zusatz, sondern Grundvoraussetzung.'
    }
  ];

  // Connection & Invite features
  const inviteFeatures = [
    'Sie teilen Ihre AVIRIS-Lizenz gezielt mit Nutzern und Geräten, für die Sie im Arbeitsalltag Verantwortung tragen.',
    'Die Einbindung erfolgt unkompliziert per E-Mail, Messenger oder Lizenzschlüssel. Keine separate Kontenverwaltung, keine technischen Einstiegshürden.',
    'Sobald ein weiteres Gerät aktiviert wird, erscheint es automatisch im zentralen Lizenz-Dashboard. Sie erkennen auf einen Blick, welche Nutzer geschützt sind und welche Geräte aktiv sind – jederzeit.',
    'Sie behalten die volle Kontrolle: Nutzer und Geräte lassen sich flexibel hinzufügen, pausieren oder entfernen, ohne den laufenden Betrieb zu beeinträchtigen.',
    'Wächst Ihr Bedarf – etwa durch neue Geräte, zusätzliche Teammitglieder oder veränderte Arbeitsstrukturen – erweitern Sie Ihre Lizenz direkt im Dashboard, ohne Umwege oder Neuaufsetzen der Umgebung.'
  ];

  const b2bFaqs = [
    {
      question: 'Wie viele Endgeräte lassen sich mit einer Lizenz absichern?',
      answer: 'Eine AVIRIS-Lizenz ist für den Einsatz in kleinen Organisationen und Teams ausgelegt und ermöglicht die Absicherung von bis zu 20 Geräten oder Nutzern innerhalb einer Lizenzstruktur. Die Nutzung ist nicht an einen bestimmten Gerätetyp oder Arbeitsplatz gebunden.',
      open: true
    },
    {
      question: 'Für welche Organisationsformen ist AVIRIS geeignet?',
      answer: 'AVIRIS richtet sich an Unternehmen, Agenturen und projektbasierte Teams, die mehrere Personen und Geräte zuverlässig absichern müssen – ohne eigene IT-Infrastruktur oder komplexe Rollenkonzepte. Sie entscheiden selbst, welche Arbeitsplätze und Nutzer eingebunden sind.'
    },
    {
      question: 'Wie erfolgt die Einbindung neuer Geräte oder Mitarbeitender?',
      answer: 'Die Anbindung erfolgt zentral über das Lizenz-Dashboard. Neue Nutzer oder Geräte werden per Einladung oder Lizenzschlüssel freigeschaltet. Der Prozess ist absichtlich reduziert und benötigt keine technische Vorbereitung.'
    },
    {
      question: 'Müssen Geräte zentral konfiguriert oder vorbereitet werden?',
      answer: 'Nein. Die Installation erfolgt durch die jeweiligen Nutzer selbst. Nach Aktivierung werden Geräte automatisch im System erfasst und sind sofort verwaltbar.'
    },
    {
      question: 'Wie behalten Sie den administrativen Überblick?',
      answer: 'Das Lizenz-Dashboard bietet eine konsolidierte Sicht auf: aktive Geräte und Nutzer, aktuelle Auslastung der Lizenz, verfügbare Kapazitäten. Änderungen lassen sich jederzeit vornehmen, ohne bestehende Arbeitsprozesse zu unterbrechen.'
    },
    {
      question: 'Wie ist die Datenverarbeitung organisiert?',
      answer: 'AVIRIS ist so konzipiert, dass sämtliche Datenverarbeitung innerhalb Deutschlands erfolgt. Es werden keine externen Cloud-Plattformen außerhalb Europas genutzt. Die Umsetzung entspricht vollständig den Anforderungen der DSGVO.'
    },
    {
      question: 'Besteht ein Abhängigkeitsverhältnis zu internationalen Cloud-Anbietern?',
      answer: 'Nein. AVIRIS ist technisch und organisatorisch unabhängig von US- oder Drittstaaten-Infrastrukturen. Damit verbleiben Daten und Kontrolle vollständig im europäischen Rechtsrahmen.'
    },
    {
      question: 'Kann die Lizenz an wachsende Anforderungen angepasst werden?',
      answer: 'Ja. Zusätzliche Kapazitäten lassen sich jederzeit erweitern, ohne Neuinstallation oder Migration bestehender Geräte. Das System wächst mit Ihrer Organisation.'
    },
    {
      question: 'Wie verändert sich der wirtschaftliche Rahmen bei größerem Umfang?',
      answer: 'Mit zunehmender Anzahl an Nutzern oder Geräten verbessert sich die Kostenrelation pro Einheit. Das Modell ist auf Skalierung im Team, nicht auf Einzelarbeitsplätze, ausgelegt.'
    },
    {
      question: 'Ist der Einsatz auch ohne technisches Fachwissen möglich?',
      answer: 'Ja. AVIRIS arbeitet automatisiert im Hintergrund, erfordert keine tägliche Bedienung und verursacht keine spürbaren Leistungseinbußen. Der Schutz integriert sich in den Arbeitsalltag, ohne zusätzlichen Aufwand zu erzeugen.'
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
  return (
    <>
      {/* Hero Section */}
      <HeroVideoSection
        videoSrc="/front/img/landing/b2b_banner.mp4"
        posterSrc="/front/img/landing/b2b.jpg"
        badgeIcon="fa-building"
        badgeText="Unternehmenssicherheit. Hergestellt in Deutschland."
        title="IT-Sicherheit aus Deutschland.<br />Für Teams mit Verantwortung."
        description="Digitale Sicherheit. Made in Germany."
        stats={[]}
      />

      <PricingHighlightSection steps={ultimateSteps} />
      

      <ContentImageSection
        imageSrc="/front/img/landing/b2b.jpg"
        imageAlt="Business team working together"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Souveräne Sicherheit."
        overlayDescription="Entwickelt und betrieben in Deutschland.<br class='d-none d-md-block'/>Ohne Datenweitergabe, ohne externe Abhängigkeiten."
        badgeIcon="fa-shield"
        badgeText="Sicherheit für den digitalen Arbeitsalltag"
        title="Digitale Welt."
        titleHighlight="Reale Angriffsflächen."
        paragraphs={[
          'Automatisierter Betrug, KI-gestütztes Phishing, Datenabgriff und manipulierte Anwendungen sind kein Randphänomen mehr, sondern skalierbarer Bestandteil des digitalen Arbeitsalltags.',
          'Wer digitale Systeme produktiv nutzt, weiß: Angriffe werden präziser, schneller und schwerer zu erkennen – insbesondere, wenn sie automatisiert erfolgen.',
          'AVIRIS wurde in Deutschland entwickelt, wird auf Servern in Deutschland betrieben und ist vollständig DSGVO-konform.',
          'Mit einer Lizenz sichern Sie Geräte und Nutzer zentral und strukturiert ab – ohne Datenweitergabe, ohne Abhängigkeit von US- oder russischen Anbietern und ohne unnötige Komplexität.',
          
        ]}
        subtitle="Ein System."
        subtitleHighlight="Volle Kontrolle."
        ctaText="Jetzt deine Liebsten schützen"
      />

      




      <FeatureCardsSection features={features} iconBasePath="/front/img/" layout="2-3-1" />

      {/* Team Management Section */}
      <FeaturesListSection
        badgeIcon="fa-users-cog"
        badgeText="Teams ist erhöhten Sicht"
        titleHighlight="So binden Sie weitere Nutzer und"
        title="Geräte ein"
        features={inviteFeatures}
        primaryButtonText="Jetzt deine Liebsten schützen"
        noteText="Zentrale Verwaltung für vollständigen Überblick und Sicherheit"
        imageSrc="/front/img/landing/family_banner.png"
        imageAlt="AVIRIS Dashboard"
      />

      <Testimonials />
      <BlogSection />
      <FAQs items={b2bFaqs} />
      <CTA />
    </>
  );
}