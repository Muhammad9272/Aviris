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
  title: 'Family Protection - AVIRIS | Keep Your Loved Ones Safe Online',
  description: 'Protect your entire family with AVIRIS comprehensive cybersecurity. Parental controls, safe browsing for kids, and complete digital protection for up to 20 devices.',
};

export default function FamilyPage() {
  // Feature cards data
  const features = [
    {
      icon: 'protector.png',
      title: 'Sicheres Surfen für Kinder',
      description: 'Schützt vor unseriösen Websites, Betrugsseiten und gefährlichen Inhalten – bevor überhaupt etwas passieren kann.',
      delay: 100
    },
    {
      icon: 'folder.png',
      title: 'Quarantäne statt Risiko',
      description: 'Gefährliche Dateien werden automatisch isoliert, bevor sie Schaden anrichten oder Daten abgreifen können.',
      delay: 200
    },
    {
      icon: 'locked.png',
      title: 'Schutz privater Bilder & Dateien',
      description: 'Fotos, Dokumente und persönliche Inhalte bleiben privat – geschützt vor unbefugtem Zugriff und Datendiebstahl.',
      delay: 300
    },
    {
      icon: 'radar.png',
      title: 'Frühzeitige Erkennung von Bedrohungen',
      description: 'Dank KI-gestützter Erkennung erkennt AVIRIS schädliche Links, Malware und neue Bedrohungen frühzeitig – auch solche, die noch unbekannt sind.',
      delay: 400
    },
    {
      icon: 'technology.png',
      title: 'Umfassender Geräteschutz',
      description: 'Alle Geräte werden regelmäßig auf Viren, Schadsoftware und Sicherheitslücken geprüft – im Hintergrund und ohne Aufwand.',
      delay: 500
    }
  ];

  const inviteFeatures = [
    'Du kannst deine AVIRIS-Lizenz ganz einfach per E-Mail, WhatsApp oder Messenger mit den Menschen teilen, die dir wichtig sind.',
    'Sobald ein weiteres Gerät aktiviert wird, erscheint es automatisch in deinem zentralen Lizenz-Dashboard – übersichtlich und jederzeit einsehbar.',
    'Dort lädst du weitere Personen per E-Mail ein oder teilst den Lizenzschlüssel direkt selbst. Ohne Umwege. Ohne Technik.',
    'Du behältst die volle Kontrolle: Nutzer lassen sich hinzufügen, pausieren oder entfernen – jederzeit.',
    'Wenn du mehr Menschen schützen möchtest, buchst du zusätzliche Plätze direkt im Dashboard.',
    'Je mehr Slots, desto günstiger wird der Schutz pro Person.'
  ];

  const familyFaqs = [
    {
      question: 'Wie viele Geräte kann ich mit einer Lizenz schützen?',
      answer: 'Mit einer AVIRIS-Lizenz kannst du bis zu 20 Geräte schützen – z. B. Smartphones, Tablets, Laptops und Computer. Plattformübergreifend.',
      open: true
    },
    {
      question: 'Wen kann ich in meine Lizenz einladen?',
      answer: 'Du kannst Familienmitglieder und weitere Personen, die dir wichtig sind, einladen – ganz flexibel. Du entscheidest, wer geschützt wird.'
    },
    {
      question: 'Wie lade ich andere Personen ein?',
      answer: 'Ganz einfach: per E-Mail-Einladung aus dem Lizenz-Dashboard oder durch Teilen des Lizenzschlüssels, z. B. per WhatsApp, Messenger oder wie damals: auf Papier und Stift.'
    },
    {
      question: 'Muss ich jedes Gerät selbst einrichten?',
      answer: 'Nein. Die eingeladene Person installiert AVIRIS selbst und meldet sich mit deiner Lizenz an. Das Gerät erscheint automatisch in deinem Dashboard.'
    },
    {
      question: 'Habe ich Kontrolle über alle Geräte?',
      answer: 'Ja. Im zentralen Lizenz-Dashboard siehst du jederzeit: alle aktiven Geräte, alle Nutzer, freie und belegte Plätze. Du kannst Geräte oder Nutzer hinzufügen, pausieren oder entfernen.'
    },
    {
      question: 'Was passiert mit unseren Daten?',
      answer: 'AVIRIS wird in Deutschland entwickelt, läuft auf Servern in Deutschland und ist vollständig DSGVO-konform. Es findet keine Datenweitergabe an Dritte statt.'
    },
    {
      question: 'Ist AVIRIS von US- oder ausländischen Anbietern abhängig?',
      answer: 'Nein. AVIRIS ist nicht abhängig von US- oder russischen Cloud-Anbietern. Deine Daten bleiben unter europäischer Kontrolle.'
    },
    {
      question: 'Kann ich später weitere Plätze dazubuchen?',
      answer: 'Ja. Bei Lizenzen mit mehreren Slots sinkt der Preis pro geschützter Person deutlich im Vergleich zu Einzelabos.'
    },
    {
      question: 'Ist AVIRIS auch für weniger technikaffine Menschen geeignet?',
      answer: 'Ja. AVIRIS schützt Geräte im Hintergrund und ist einfach zu bedienen – ideal für Kinder, Eltern und auch ältere Familienmitglieder.'
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
        videoSrc="/front/img/landing/family_banner.mp4"
        posterSrc="/front/img/landing/family-home.png"
        badgeIcon="fa-shield-alt"
        badgeText="Schutz für die ganze Familie"
        title="Schutz für die Menschen, <br />die dir am wichtigsten sind"
        description='Digitale Sicherheit, Made in Germany.'
        stats={[]}
      />

      <PricingHighlightSection steps={ultimateSteps} />



      <ContentImageSection
        imageSrc="/front/img/landing/family_banner.jpg"
        imageAlt="Family with Tablet"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Sorgenfrei für deine Kinder"
        overlayDescription="Digitale Sicherheit für die ganze Familie - <br />  automatisch im Hintergrund."
        badgeIcon="fa-shield"
        badgeText="Digitale Sicherheit, die Verantwortung übernimmt"
        title="Digitale Welt."
        titleHighlight="Echte Risiken."
        paragraphs={[
          "Phishing-Links, Datenklau, unsichere Apps und Plattformen, die nicht für Familien gemacht sind, gehören heute zum Alltag.",
          "Besonders Kinder und ältere Familienmitglieder erkennen digitale Gefahren oft zu spät – während ihre Daten längst weitergegeben werden.",
          "AVIRIS wurde in Deutschland entwickelt, läuft auf Servern in Deutschland und ist vollständig DSGVO-konform.",
          "Mit einer Lizenz schützt du deine Familie und weitere Menschen, die dir wichtig sind – zentral verwaltet, ohne Datenweitergabe und ohne Abhängigkeit von US- oder russischen Anbietern."
        ]}
        subtitle="Ein System."
        subtitleHighlight="Volle Kontrolle."
        ctaText="Jetzt deine Liebsten schützen"
      />

      {/* Family Features Section */}
      <FeatureCardsSection features={features} iconBasePath="/front/img/landing/" layout="3-2" />

      <FeaturesListSection
        badgeIcon="fa-users"
        badgeText="Verwalten ohne Umwege"
        titleHighlight="So lädst du weitere Menschen ein"
        features={inviteFeatures}
        primaryButtonText="Jetzt deine Liebsten schützen"
        noteText="Ein System. Volle Kontrolle."
        imageSrc="/front/img/landing/family_banner.png"
        imageAlt="AVIRIS Dashboard"
      />

      <Testimonials />
      <BlogSection />
      <FAQs items={familyFaqs} />
      <CTA />
    </>
  )
}