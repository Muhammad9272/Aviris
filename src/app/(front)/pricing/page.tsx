import PricingCards from '@/components/shared/PricingCards';
import CTA from '@/components/shared/CTA';
import FAQs from '@/components/shared/FAQs';
import type { Metadata } from 'next';
import '@/styles/front/pages/pricing.css';

export const metadata: Metadata = {
  title: 'Pricing - AVIRIS | Affordable Antivirus & VPN Plans',
  description: 'Compare AVIRIS pricing plans: Free basic protection or Premium with AI threat detection, unlimited VPN, system optimizer, and 24/7 support. Starting from €3.99/month. Choose the best security plan for your needs.',
};

const comparisonFeatures = [
  { feature: 'Protection Level', free: 'Basic Malware Protection', pro: 'Advanced Ai-Powered Real-Time Protection' },
  { feature: 'Device Support', free: '1 Device', pro: '1 Device (Extendable)' },
  { feature: 'AI Threat Detection', free: false, pro: 'Advanced' },
  { feature: 'System Optimizer', free: false, pro: 'Built In' },
  { feature: 'VPN Protection', free: 'Limited Bandwidth', pro: 'Unlimited' },
  { feature: 'Quarantine & File Isolation', free: false, pro: 'Smart System' },
  { feature: 'Real-Time Updates', free: 'Manual', pro: 'Automatic' },
  { feature: 'Cloud Sync & Backup', free: false, pro: 'Secured' },
  { feature: 'AI Analytics Dashboard', free: false, pro: 'Deep Insights' },
  { feature: 'Customer Support', free: 'Email Only', pro: '24/7 Priority' },
  { feature: 'Price', free: 'Free Forever', pro: '$3.99 / Month', price: true }
];

export default function PricingPage() {
  return (
    <>
      {/* Advanced Security Modules Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>🚀 The Most Valuable Features of AVIRIS</span>
            </div>
            
            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Advanced <span className="text-dark">Security Modules</span><br />
              To Empower You
            </h2>
            
            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Discover AVIRIS&apos;s core features designed to protect and optimize your digital life.
            </p>
          </div>

          <PricingCards />
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison-section aviris__bg-dark">
        <div className="container">
          {/* Section Header */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <p className="section-badge">Its all in the details</p>
              <h2 className="section-title">
                <span className="text-dark">Compare Plans</span> Features
              </h2>
              <p className="section-description">
                Stay informed — here&apos;s everything you need to know.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#pricing-cards" className="btn-secondary-custom">
                Get start with Pro
              </a>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="comparison-table-wrapper" data-aos="fade-up" data-aos-duration="1000">
            {/* Table Header */}
            <div className="comparison-header">
              <div className="comparison-header-cell">
                <span className="header-label">Features</span>
              </div>
              <div className="comparison-header-cell">
                <div className="plan-title">AVIRIS Free</div>
              </div>
              <div className="comparison-header-cell">
                <div className="plan-title">
                  AVIRIS Pro
                  <span>⭐</span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            {comparisonFeatures.map((item, index) => (
              <div key={index} className="comparison-row">
                <div className="comparison-cell">
                  {item.feature}
                </div>
                <div className="comparison-cell">
                  {item.free === false ? (
                    <span className="icon-cross">
                      <i className="fas fa-times"></i>
                    </span>
                  ) : item.price ? (
                    <span className="price-cell">{item.free}</span>
                  ) : (
                    <span style={{textAlign: 'center'}}>{item.free}</span>
                  )}
                </div>
                <div className="comparison-cell highlighted">
                  {['Advanced', 'Built In', 'Unlimited', 'Smart System', 'Automatic', 'Secured', 'Deep Insights'].includes(item.pro as string) ? (
                    <div className="feature-check">
                      <span className="icon-check">
                        <i className="fas fa-check"></i>
                      </span>
                      <span>{item.pro}</span>
                    </div>
                  ) : item.price ? (
                    <span className="price-cell">{item.pro}</span>
                  ) : (
                    <span style={{textAlign: 'center'}}>{item.pro}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQs />
      <CTA />
    </>
  );
}
