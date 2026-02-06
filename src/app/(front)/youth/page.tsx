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
  title: 'Youth Protection - AVIRIS | Stay Safe Online',
  description: 'Digital security made in Germany for young people. Protect yourself from phishing, fake news, and online threats with AVIRIS.',
};

export default function YouthPage() {
  const features = [
    {
      icon: 'landing/global_security.png',
      title: 'Social Media Safety',
      description: 'Protects you from fake websites, scam links and suspicious apps - before anything can happen. Whether social media, messenger or streaming.'
    },
    {
      icon: 'landing/wifi.png',
      title: 'Gaming Security',
      description: 'The integrated VPN protects your connection in public WiFi and mobile networks - your data stays private, no matter where you are.'
    },
    {
      icon: 'landing/folder.png',
      title: 'Privacy Protection',
      description: 'Photos, documents and personal content stay private - protected from unauthorized access and data theft.'
    },
    {
      icon: 'landing/radar.png',
      title: 'Real-Time Threat Detection',
      description: 'AVIRIS continuously scans your smartphone for phishing links, malware and new threats - automatically and without you having to do anything.'
    },
    {
      icon: 'landing/mobile_shield.png',
      title: 'Multi-Device Coverage',
      description: 'Apps, files and system access are regularly checked. In the background, without battery stress and without annoying you.'
    }
  ];

  return (
    <>
      <HeroVideoSection
        videoSrc="/front/img/landing/youth_banner.mp4"
        posterSrc="/front/img/landing/youth.jpg"
        badgeIcon="fa-shield-alt"
        badgeText="Protection for Youth & Teens"
        title="Stay Safe Online Without <br /> Losing Your Freedom"
        description="With AVIRIS, protect yourself from phishing, fake news, and online scams. Your digital security - made in Germany."
        stats={[
          { value: '24/7', label: 'Real-Time Protection' },
          { value: '100%', label: 'Safe Browsing' }
        ]}
      />

        {/* Advanced Security Modules Section */}
        <section className="hero-section aviris__bg-dark">
            <div className="container">
    
            <PricingCards />
            </div>
        </section>

      <ContentImageSection
        imageSrc="/front/img/landing/youth.jpg"
        imageAlt="Young Person with Laptop"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Safe. Private. German."
        overlayDescription="AVIRIS protects what matters to you - without<br class='d-none d-md-block'/>data sharing and transparently."
        badgeIcon="fa-shield"
        badgeText="Security in a Digital World"
        title="Digital World."
        titleHighlight="Real Risks."
        paragraphs={[
          "Fake news (phishing), scammers, dubious apps that want more data than they should, dangerous apps and malware.",
          "Especially when it catches you off guard, you're also fully exposed. But suddenly links - even long-trusted access. Data or access can be transmitted or deleted.",
          "AVIRIS was developed in Germany, runs on German servers, and is fully GDPR compliant.",
          "Your license is private - not sold or passed on to third parties. Never taxed. Without hassle or stress.",
          "You decide the control. AVIRIS stays in the background."
        ]}
        subtitle="One System."
        subtitleHighlight="Full Control."
        ctaText="Secure Your License Now"
        ctaLink="#download"
      />

      {/* Features Section */}
      <FeatureCardsSection features={features} iconBasePath="/front/img/" />

      <FeaturesListSection
        badgeIcon="fa-users"
        badgeText="Growing Safer Together"
        titleHighlight="How To Invite"
        title="More People"
        features={[
          "You can easily send your AVIRIS license via email, WhatsApp, or SMS.",
          "As soon as another device is activated, it automatically appears in your central dashboard - clear and secure.",
          "Invite more people via email or share the activation link directly. No detours. No waiting time.",
          "You retain full control: manage installs, pause or adjust central settings - anytime - centrally from your account.",
          "If you want to protect more people: Get additional licenses - simply with a click. Then grandparents, siblings or other people outside your family can also be added.",
          "Everything at a glance: Everything grouped and organized by person."
        ]}
        primaryButtonText="Secure Your License Now"
        primaryButtonLink="#pricing"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#features"
        noteText="Central management for your entire family's security"
        imageSrc="/front/img/landing/youth_banner.png"
        imageAlt="AVIRIS Dashboard"
      />

      <Testimonials />
      <BlogSection />
      <FAQs />
      <CTA />
    </>
  );
}