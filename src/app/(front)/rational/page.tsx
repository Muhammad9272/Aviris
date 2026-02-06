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
  title: 'Rational Security - AVIRIS | Security from Germany Without Compromise',
  description: 'Digital security made in Germany. GDPR-compliant protection without compromises. AVIRIS keeps your data safe and private.',
};

export default function RationalPage() {
  const features = [
    {
      icon: 'landing/technology.png',
      title: 'Resource-Efficient Continuous Operation',
      description: 'AVIRIS runs permanently in the background without affecting your productivity. Protects without pop-ups or distracting notifications that disrupt your workflow.'
    },
    {
      icon: 'landing/recycle.png',
      title: 'Protection Against Known and New Threats',
      description: 'AI-powered threat detection protects you from malware, trojans, ransomware, and phishing. Known threats as well as completely new ones - none get through.'
    },
    {
      icon: 'landing/fingerprint.png',
      title: 'Protection of Sensitive Data & Access',
      description: 'AVIRIS helps protect documents, passwords and login information from unauthorized access - whether from apps, links or compromised credentials.'
    },
    {
      icon: 'landing/search.png',
      title: 'Transparency Instead of Black Box',
      description: 'AVIRIS documents security-relevant processes in a structured and traceable way. You see what happened - and can make informed decisions. Full overview instead of blind trust.'
    },
    {
      icon: 'landing/eu.png',
      title: 'GDPR-Compliant Data Processing',
      description: 'AVIRIS processes data exclusively in Germany. No data transfer, no third parties. Transparent, traceable and according to German and European data protection. You know where your data is - and why.'
    },
    {
      icon: 'landing/folder.png',
      title: 'Automatic Quarantine & System Restoration',
      description: 'Suspicious files or access attempts are automatically isolated. No system installation possible. Frozen. Your system stays clean.'
    },
    {
      icon: 'landing/wifi.png',
      title: 'Secure Connections - Even On The Go',
      description: 'The integrated AVIRIS VPN protects your connection in public WiFi, cafes, train stations - without limitations. Data, access and activities remain private. Encryption is automatic, protects against eavesdropping and manipulation. Safe browsing made simple.'
    }
  ];

  return (
    <>
      <HeroVideoSection
        videoSrc="/front/img/landing/rational_banner.mp4"
        posterSrc="/front/img/landing/rational.jpg"
        badgeIcon="fa-shield"
        badgeText="Security from Germany"
        title="Security from Germany.<br />Without Compromise."
        description="Digital security. Made in Germany."
        stats={[]}
      />

        {/* Advanced Security Modules Section */}
        <section className="hero-section aviris__bg-dark">
            <div className="container">
    
            <PricingCards />
            </div>
        </section>

      <ContentImageSection
        imageSrc="/front/img/landing/rational.jpg"
        imageAlt="Professional using smartphone"
        overlayIcon="/front/img/login_icon.png"
        overlayTitle="Independent. Secure. Controlled."
        overlayDescription="Data protection according to German GDPR,<br class='d-none d-md-block'/>fully traceable."
        badgeIcon="fa-shield"
        badgeText="Digital Protection in the Age of AI"
        title="Digital World."
        titleHighlight="Real Attack Surfaces."
        paragraphs={[
          "Automated fraud, phishing, data theft and malicious apps have become increasingly sophisticated and realistic.",
          "Anyone using digital systems becomes a potential target. Attacks are harder to detect - especially in a business context.",
          "AVIRIS was developed in Germany, runs on servers in Germany and is fully GDPR compliant.",
          "We protect your data with guaranteed structure - without stress, without data sharing.",
          "AVIRIS works resource-efficiently in the background. Automatically without impact on system performance and without annoying pop-ups."
        ]}
        subtitle="One System."
        subtitleHighlight="Full Control."
        ctaText="Secure Your Licenses Now"
        ctaLink="#download"
      />

      <FeatureCardsSection features={features} iconBasePath="/front/img/" />

      <FeaturesListSection
        badgeIcon="fa-users"
        badgeText="Digital Protection. Structured Management."
        titleHighlight="How To Connect"
        title="More People and Devices"
        features={[
          "The integrated AVIRIS VPN protects your connection in public WiFi - without speed loss. For security on the go.",
          "Activate via email/one-click activation through email, messenger or SMS (WhatsApp, Telegram, iMessage) - no registration required. No waiting time.",
          "Install additional devices easily - they appear automatically in your dashboard. All grouped, organized and device aliases are justified.",
          "Retain full control: Users have access, pause and remove. This way you keep control even after regulation.",
          "Need more protection? Simply increase devices in activity or licensing. This way you can add employees or family members."
        ]}
        primaryButtonText="Secure Your Licenses Now"
        primaryButtonLink="#pricing"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#features"
        noteText="Central management for complete overview and control"
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