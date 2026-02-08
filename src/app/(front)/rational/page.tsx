import Testimonials from '@/components/shared/Testimonials';
import FAQs from '@/components/shared/FAQs';
import BlogSection from '@/components/shared/BlogSection';
import CTA from '@/components/shared/CTA';
import HeroVideoSection from '@/components/shared/HeroVideoSection';
import FeatureCardsSection from '@/components/shared/FeatureCardsSection';
import ContentImageSection from '@/components/shared/ContentImageSection';
import FeaturesListSection from '@/components/shared/FeaturesListSection';
import PricingHighlightSection from '@/components/shared/PricingHighlightSection';
import type { Metadata } from 'next';
import '@/styles/front/pages/home.css';
import '@/styles/front/pages/downloads.css';
import '@/styles/front/pages/pricing.css';

export const metadata: Metadata = {
  title: 'Rational Security - AVIRIS | Security from Germany Without Compromise',
  description: 'Digital security made in Germany. GDPR-compliant protection without compromises. AVIRIS keeps your data safe and private.',
};

export default function RationalPage() {
  const features = [
    {
      icon: 'landing/shield.png',
      title: 'Ressourcenschonender Dauerbetrieb',
      description: 'AVIRIS läuft permanent im Hintergrund, ohne spürbare Performanceeinbußen und ohne störende Pop-ups. Sicherheit, die den Arbeitsfluss nicht unterbricht.'
    },
    {
      icon: 'landing/recycle.png',
      title: 'Schutz vor bekannten und neuartigen Bedrohungen',
      description: 'Die KI-gestützte Threat Detection von AVIRIS erkennt auch unbekannte Angriffsformen, bevor sie offiziell klassifiziert sind. Nicht reaktiv, sondern präventiv.'
    },
    {
      icon: 'landing/fingerprint.png',
      title: 'Schutz sensibler Daten & Zugriffe',
      description: 'AVIRIS schützt Dokumente, Zugangsdaten und persönliche Inhalte vor unbefugtem Zugriff – unabhängig davon, ob der Angriff über Apps, Links oder manipulierte Systeme erfolgt.'
    },
    {
      icon: 'landing/search.png',
      title: 'Nachvollziehbarkeit statt Blackbox',
      description: 'AVIRIS dokumentiert sicherheitsrelevante Ereignisse strukturiert und nachvollziehbar. Kein Rätselraten, keine stillen Entscheidungen im System. Du behältst den Überblick über das, was passiert.'
    },
    {
      icon: 'landing/eu.png',
      title: 'DSGVO-konforme Datenverarbeitung',
      description: 'AVIRIS verarbeitet Daten ausschließlich in Deutschland. Kein Datenexport, keine Weitergabe, keine versteckten Abhängigkeiten von außereuropäischen Cloud-Anbietern. Du weißt, wo deine Daten liegen – und warum.'
    },
    {
      icon: 'landing/folder.png',
      title: 'Automatische Quarantäne statt Schadensanalyse',
      description: 'Verdächtige Dateien, Prozesse oder Zugriffe werden automatisch isoliert, bevor Hintertüren, Datenabfluss oder Systemmanipulation möglich sind. Eingreifen, bevor es relevant wird.'
    },
    {
      icon: 'landing/wifi.png',
      title: 'Sichere Verbindungen – auch unterwegs',
      description: 'Das integrierte AVIRIS VPN schützt deine Verbindung zuverlässig in unsicheren Netzwerken – etwa in Hotels, Zügen, Cafés oder unterwegs im mobilen Netz. Die Datenübertragung erfolgt verschlüsselt, schützt vor Mitlesen und Manipulation und wird nicht über außereuropäische Anbieter umgeleitet. Sicheres Surfen ist damit möglich, ohne separate Tools oder zusätzliche Konfiguration.'
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

  const rationalFaqs = [
    {
      question: 'Wie viele Endgeräte lassen sich mit einer Lizenz absichern?',
      answer: 'Eine AVIRIS-Lizenz deckt bis zu 20 Endgeräte ab. Die Absicherung erfolgt plattformübergreifend und zentral gesteuert – unabhängig von Gerätetyp oder Einsatzort.',
      open: true
    },
    {
      question: 'Für wen ist die Lizenz gedacht?',
      answer: 'Die Lizenz ist darauf ausgelegt, mehrere Personen und Geräte strukturiert abzusichern – etwa im privaten Umfeld, im Arbeitsalltag oder in einer Kombination aus beidem. Du legst selbst fest, welche Nutzer oder Geräte Teil der Lizenz sind.'
    },
    {
      question: 'Wie werden weitere Nutzer oder Geräte eingebunden?',
      answer: 'Die Anbindung erfolgt direkt über das zentrale Lizenz-Dashboard: per Einladung oder durch Weitergabe des Lizenzschlüssels. Der Prozess ist bewusst reduziert gehalten und erfordert keine technische Vorkonfiguration.'
    },
    {
      question: 'Ist eine zentrale Einrichtung aller Geräte notwendig?',
      answer: 'Nein. Neue Nutzer installieren AVIRIS eigenständig und aktivieren es mit der Lizenz. Das jeweilige Gerät wird automatisch im Dashboard erfasst.'
    },
    {
      question: 'Wie behältst du den Überblick?',
      answer: 'Im Lizenz-Dashboard siehst du jederzeit: welche Geräte aktiv geschützt sind, wie viele Slots genutzt werden, welche Kapazitäten noch verfügbar sind. Geräte oder Nutzer lassen sich bei Bedarf hinzufügen, pausieren oder entfernen.'
    },
    {
      question: 'Wie werden Daten verarbeitet?',
      answer: 'AVIRIS verarbeitet Daten ausschließlich innerhalb Deutschlands. Es findet keine Weitergabe an Dritte, kein Datenexport und keine Nutzung außereuropäischer Cloud-Infrastrukturen statt. Die Verarbeitung erfolgt vollständig DSGVO-konform.'
    },
    {
      question: 'Besteht eine Abhängigkeit von US- oder Drittstaaten-Anbietern?',
      answer: 'Nein. AVIRIS ist unabhängig von US- oder russischen Cloud-Anbietern. Die Datenhoheit verbleibt vollständig im europäischen Rechtsraum.'
    },
    {
      question: 'Lassen sich zusätzliche Kapazitäten flexibel erweitern?',
      answer: 'Ja. Weitere Slots können jederzeit direkt im Dashboard ergänzt werden, ohne bestehende Installationen zu verändern.'
    },
    {
      question: 'Wie wirkt sich eine größere Lizenz auf die Kostenstruktur aus?',
      answer: 'Mit steigender Anzahl an Slots sinkt der Kostenanteil pro abgesichertem Nutzer bzw. Gerät. Das Lizenzmodell ist auf Skalierbarkeit ausgelegt, nicht auf Einzellösungen.'
    },
    {
      question: 'Ist AVIRIS auch für weniger technikaffine Nutzer geeignet?',
      answer: 'Ja. Die Software arbeitet im Hintergrund, benötigt keine laufende Bedienung und verursacht keine spürbaren Performanceeinbußen. Der Schutz erfolgt automatisiert – ohne zusätzlichen Aufwand im Alltag oder Arbeitsfluss.'
    }
  ];
  return (
    <>
      <HeroVideoSection
        videoSrc="/front/img/landing/rational_banner.mp4"
        posterSrc="/front/img/landing/rational.jpg"
        badgeIcon="fa-shield"
        badgeText="Sicherheit aus Deutschland"
        title=" Sicherheit aus Deutschland. <br />Ohne Kompromisse."
        description="Digitale Sicherheit, Made in Germany."
        stats={[]}
      />

      <PricingHighlightSection steps={ultimateSteps} />

      <ContentImageSection
        imageSrc="/front/img/landing/rational.jpg"
        imageAlt="Professional using smartphone"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Unabhängig. Sicher. Kontrolliert."
        overlayDescription="Deutsche Infrastruktur, DSGVO-konform,<br /> ohne externe Abhängigkeiten."
        badgeIcon="fa-shield"
        badgeText="Digitaler Schutz im Zeitalter von KI"
        title="Digitale Welt."
        titleHighlight="Reale Angriffsflächen."
        paragraphs={[
          "Automatisierter Betrug, KI-gestütztes Phishing, Datenabgriff und manipulierte Apps sind kein Randphänomen mehr, sondern skalierbarer Alltag.",
          "Wer digitale Systeme nutzt, weiß: Angriffe werden präziser, schneller und schwerer zu erkennen – besonders dann, wenn sie automatisiert erfolgen.",
          "AVIRIS wurde in Deutschland entwickelt, läuft auf Servern in Deutschland und ist vollständig DSGVO-konform.",
          "Mit einer Lizenz schützt du Geräte und Menschen die dir wichtig sind. Zentral und strukturiert – ohne Datenweitergabe, ohne Abhängigkeit von US- oder russischen Anbietern.",
          "AVIRIS arbeitet ressourcenschonend im Hintergrund – ohne Einfluss auf die Systemperformance und ohne störende Pop-ups.",

        ]}
        subtitle="Ein System."
        subtitleHighlight="Volle Kontrolle."
        ctaText="Jetzt deine Liebsten schützen"
      />

      <FeatureCardsSection features={features} iconBasePath="/front/img/" layout="3-3-1" />

      <FeaturesListSection
        badgeIcon="fa-users"
        badgeText="Digitaler Schutz. Strukturiert verwaltet."
        titleHighlight="So bindest du weitere Menschen und Geräte ein"
        features={[
          "Du teilst deine AVIRIS-Lizenz gezielt mit Menschen und Geräten, für die du Verantwortung trägst.",
          "Die Einladung erfolgt unkompliziert per E-Mail, Messenger oder Lizenzschlüssel. Keine Kontenverwaltung, keine technischen Hürden.",
          "Sobald ein weiteres Gerät aktiviert wird, erscheint es automatisch im zentralen Lizenz-Dashboard. Du siehst auf einen Blick, wer geschützt ist und welche Geräte aktiv sind – jederzeit.",
          "Du behältst die volle Kontrolle: Nutzer lassen sich hinzufügen, pausieren oder entfernen – jederzeit.",
          "Wenn dein Bedarf wächst – etwa durch neue Geräte im Arbeitsalltag oder zusätzliche Personen – buchst du weitere Plätze direkt im Dashboard."
        ]}
        primaryButtonText="Jetzt deine Liebsten schützen"
        noteText="Ein System. Volle Kontrolle."
        imageSrc="/front/img/landing/family_banner.png"
        imageAlt="AVIRIS Dashboard"
      />

      <Testimonials />
      <BlogSection />
      <FAQs items={rationalFaqs} />
      <CTA />
    </>
  );
}