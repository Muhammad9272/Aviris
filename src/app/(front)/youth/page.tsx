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
  title: 'Youth Protection - AVIRIS | Stay Safe Online',
  description: 'Digital security made in Germany for young people. Protect yourself from phishing, fake news, and online threats with AVIRIS.',
};

export default function YouthPage() {
  const features = [
    {
      icon: 'landing/global_security.png',
      title: 'Sicher unterwegs im Netz',
      description: 'Schützt dich vor Fake-Websites, Betrugs-Links und unseriösen Apps – bevor etwas passieren kann. Egal ob Social Media, Messenger oder Streaming.'
    },
    {
      icon: 'landing/wifi.png',
      title: 'Sicher surfen – auch unterwegs',
      description: 'Das integrierte VPN schützt deine Verbindung in öffentlichen WLANs und mobilen Netzwerken – deine Daten bleiben privat, egal wo du bist.'
    },
    {
      icon: 'landing/folder.png',
      title: 'Schutz privater Bilder & Dateien',
      description: 'Fotos, Dokumente und persönliche Inhalte bleiben privat – geschützt vor unbefugtem Zugriff und Datendiebstahl.'
    },
    {
      icon: 'landing/radar.png',
      title: 'Bedrohungen erkennen. In Echtzeit.',
      description: 'AVIRIS scannt dein Smartphone kontinuierlich auf Phishing-Links, Malware und neue Bedrohungen – automatisch und ohne dass du etwas tun musst.'
    },
    {
      icon: 'landing/mobile_shield.png',
      title: 'Dein Smartphone. Dein Schutz.',
      description: 'Apps, Dateien und Systemzugriffe werden regelmäßig geprüft. Im Hintergrund, ohne Akku-Stress und ohne dich zu nerven.'
    }
  ];

  const youthFaqs = [
    {
      question: 'Wie viele Geräte kann ich mit einer Lizenz schützen?',
      answer: 'Mit einer AVIRIS-Lizenz kannst du bis zu 20 Geräte schützen – verteilt auf Menschen, die dir wichtig sind: z. B. Mama, Papa, Oma, Opa, Geschwister, Partner oder enge Freunde.',
      open: true
    },
    {
      question: 'Wen kann ich zu meiner Lizenz einladen?',
      answer: 'Du kannst jede Person einladen, die du schützen möchtest. Alter, technisches Wissen oder Wohnort spielen keine Rolle – du entscheidest, wer dabei ist.'
    },
    {
      question: 'Wie lade ich meine Liebsten ein?',
      answer: 'Ganz einfach: per E-Mail-Einladung aus deinem Lizenz-Dashboard oder durch Teilen des Lizenzschlüssels, z. B. per WhatsApp, Messenger oder DM. Kein Account-Chaos, keine komplizierten Schritte.'
    },
    {
      question: 'Müssen meine Eltern oder Großeltern etwas einstellen?',
      answer: 'Nein. Die eingeladene Person installiert AVIRIS und meldet sich mit deiner Lizenz an. Der Schutz läuft automatisch im Hintergrund – ohne Technik-Stress.'
    },
    {
      question: 'Habe ich den Überblick über alle geschützten Personen?',
      answer: 'Ja. Im zentralen Lizenz-Dashboard siehst du jederzeit: welche Geräte aktiv geschützt sind, wie viele Plätze frei oder belegt sind, wen du aktuell absicherst. Du kannst Geräte oder Personen hinzufügen, pausieren oder entfernen.'
    },
    {
      question: 'Was passiert mit unseren Daten?',
      answer: 'AVIRIS wird in Deutschland entwickelt, läuft auf Servern in Deutschland und ist vollständig DSGVO-konform. Es gibt keinen Datenverkauf und keine Weitergabe an Dritte.'
    },
    {
      question: 'Ist AVIRIS von ausländischen Anbietern abhängig?',
      answer: 'Nein. AVIRIS ist nicht abhängig von US- oder russischen Cloud-Anbietern. Deine Daten bleiben unter europäischer Kontrolle.'
    },
    {
      question: 'Kann ich später weitere Personen hinzufügen?',
      answer: 'Ja. Zusätzliche Plätze kannst du jederzeit direkt im Dashboard dazubuchen.'
    },
    {
      question: 'Lohnt sich eine gemeinsame Lizenz?',
      answer: 'Ja. Je mehr Plätze du nutzt, desto günstiger wird der Preis pro geschützter Person im Vergleich zu Einzellösungen.'
    },
    {
      question: 'Ist AVIRIS auch für weniger technikaffine Menschen geeignet?',
      answer: 'Ja. AVIRIS wurde so entwickelt, dass es selbstständig im Hintergrund läuft und dich sowie deine Liebsten schützt. Keine Performanceeinbußen, kein Gefrickel.'
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
      <HeroVideoSection
        videoSrc="/front/img/landing/youth_banner.mp4"
        posterSrc="/front/img/landing/youth.jpg"
        badgeIcon="fa-shield-alt"
        badgeText="Schutz für Jugendliche"
        title="Schutz vor Phishing, Fake-Nachrichten <br />und Betrug."
        description='Digitale Sicherheit, Made in Germany.'
        stats={[        ]}
      />

      <PricingHighlightSection steps={ultimateSteps} />

      <ContentImageSection
        imageSrc="/front/img/landing/youth.jpg"
        imageAlt="Young Person with Laptop"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Sicher. Privat. Deutsch."
        overlayDescription="AVIRIS schützt, was dir wichtig ist –<br /> ohne Datenverkauf, ohne Kompromisse."
        badgeIcon="fa-shield"
        badgeText="Sicherheit in einer digitalen Welt"
        title="Digitale Welt."
        titleHighlight="Echte Risiken."
        paragraphs={[
          "Fake-Nachrichten, Phishing-Links, Betrugs-DMs und Apps, die mehr Daten wollen als sie sollten, gehören heute zum Alltag.",
          "Gerade wenn alles schnell gehen soll, merkt man oft zu spät, dass etwas nicht stimmt – während Zugriffe, Daten oder Accounts bereits kompromittiert sind.",
          "AVIRIS wurde in Deutschland entwickelt, läuft auf Servern in Deutschland und ist vollständig DSGVO-konform.",
          "Eine Lizenz schützt all deine Geräte – und auf Wunsch auch die Menschen, die dir wichtig sind. Zentral verwaltet, ohne Datenverkauf und ohne Abhängigkeit von US- oder russichen Anbietern.",
          "Du behältst die Kontrolle. AVIRIS läuft im Hintergrund.",
        ]}
        subtitle="Ein System."
        subtitleHighlight="Volle Kontrolle."
        ctaText="Jetzt deine Liebsten schützen"
      />

      {/* Features Section */}
      <FeatureCardsSection features={features} iconBasePath="/front/img/" layout="3-2" />

      <FeaturesListSection
        badgeIcon="fa-users"
        badgeText="Sicherheit wächst mit dir"
        titleHighlight="So lädst du weitere Menschen ein"
        features={[
          "Du kannst deine AVIRIS-Lizenz ganz einfach per E-Mail, WhatsApp oder Messenger mit den Menschen teilen, die dir wichtig sind.",
          "Sobald ein weiteres Gerät aktiviert wird, erscheint es automatisch in deinem zentralen Lizenz-Dashboard – übersichtlich und jederzeit einsehbar.",
          "Dort lädst du weitere Personen per E-Mail ein oder teilst den Lizenzschlüssel direkt selbst. Ohne Umwege. Ohne Technik.",
          "Du behältst die volle Kontrolle: Nutzer lassen sich hinzufügen, pausieren oder entfernen – jederzeit.",
          "Wenn du mehr Menschen schützen möchtest, buchst du zusätzliche Plätze direkt im Dashboard.",
          "Je mehr Slots, desto günstiger wird der Schutz pro Person."
        ]}
        primaryButtonText="Jetzt deine Liebsten schützen"
        noteText="Ein System. Volle Kontrolle."
        imageSrc="/front/img/landing/family_banner.png"
        imageAlt="AVIRIS Dashboard"
      />

      <Testimonials />
      <BlogSection />
      <FAQs items={youthFaqs} />
      <CTA />
    </>
  );
}