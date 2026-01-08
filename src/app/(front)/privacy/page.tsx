'use client';

import { useEffect } from 'react';
import CTA from '@/components/shared/CTA';
import '@/styles/front/pages/privacy.css';

const privacyData = [
  {
    id: 1,
    title: 'Controller and General Information',
    navTitle: 'Controller Info',
    content: [
      { text: '<strong>Controller:</strong> AI Coding GmbH, Peter Müller Str. 3, 40468 Düsseldorf, Germany.', type: 'company_info' },
      { text: '<strong>Data Protection Officer:</strong> No data protection officer has been appointed, as there is no legal obligation under Art. 37(1) GDPR.' },
      { text: '<strong>Contact for privacy inquiries:</strong> <a href="mailto:datenschutz@aviris.com">datenschutz@aviris.com</a>' }
    ]
  },
  {
    id: 2,
    title: 'Scope of Application',
    navTitle: 'Scope',
    content: [
      { text: 'This Privacy Policy applies to the website www.aviris.com, the AVIRIS web application, the AVIRIS software (Windows, macOS, Android, iOS), and all associated digital services, communication, and support channels operated by AI Coding GmbH.' }
    ]
  },
  {
    id: 3,
    title: 'Principles of Data Processing',
    navTitle: 'Principles',
    content: [
      { 
        text: 'Personal data is processed exclusively based on the GDPR:', 
        type: 'list', 
        items: [
          'Performance of a contract (Art. 6(1)(b) GDPR)',
          'Compliance with legal obligations (Art. 6(1)(c) GDPR)',
          'Legitimate interests (Art. 6(1)(f) GDPR)',
          'Explicit consent (Art. 6(1)(a) GDPR)'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Categories of Processed Data',
    navTitle: 'Data Categories',
    content: [
      { 
        text: 'We process the following categories of personal data:', 
        type: 'list', 
        items: [
          '<strong>Account data:</strong> name, email address, password (hashed)',
          '<strong>Payment data:</strong> billing address, payment method (processed by third parties like Stripe, PayPal)',
          '<strong>Usage data:</strong> IP address, device information, browser type, operating system',
          '<strong>License data:</strong> subscription details, device IDs, activation status',
          '<strong>Communication data:</strong> emails, support messages, feedback',
          '<strong>Support data:</strong> communications, tickets, feedback'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Purposes of Data Processing',
    navTitle: 'Purposes',
    content: [
      { 
        text: 'Your personal data is processed for the following purposes:', 
        type: 'list', 
        items: [
          'Performance and administration of contracts',
          'Processing payments and invoicing',
          'License management and device activation',
          'Providing customer support',
          'Improving our services and user experience',
          'Marketing communications (with your consent)',
          'Compliance with legal documentation and retention requirements'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Hosting and Infrastructure',
    navTitle: 'Hosting',
    content: [
      { text: 'Our systems are hosted within the EU (primarily Germany and the Netherlands) using trusted infrastructure providers:' },
      { text: '<strong>Hosting partners:</strong> Cloudflare, Hostinger, Google Cloud, and possibly AWS (EU–Frankfurt region).' },
      { text: 'Data transfers outside the EU occur only with appropriate safeguards under Art. 44 ff. GDPR, including Standard Contractual Clauses (SCCs) and technical security measures.' }
    ]
  },
  {
    id: 7,
    title: 'Third-Party Providers and Recipients',
    navTitle: 'Third Parties',
    content: [
      { text: 'To fulfill contracts and provide functionality, we cooperate with selected service providers:', type: 'partners' }
    ]
  },
  {
    id: 8,
    title: 'Cookies, Analytics and Tracking',
    navTitle: 'Cookies & Analytics',
    content: [
      { 
        text: 'We use different types of cookies to improve your experience:', 
        type: 'list', 
        items: [
          '<strong>Essential cookies:</strong> Required for website functionality (login, shopping cart)',
          '<strong>Analytics cookies:</strong> Help us understand how visitors use our site',
          '<strong>Marketing cookies:</strong> Used only with your explicit consent for personalized content'
        ]
      },
      { text: '<strong>Legal basis:</strong> Art. 6(1)(a) GDPR, §25 TTDSG (German Telecommunications Telemedia Data Protection Act).' },
      { text: 'You can withdraw your consent at any time via our cookie banner or by contacting <a href="mailto:support@aviris.com">support@aviris.com</a>.' }
    ]
  },
  {
    id: 9,
    title: 'International Data Transfers',
    navTitle: 'International Transfers',
    content: [
      { text: 'For users outside the European Union, we ensure adequate data protection through:' },
      { text: '<strong>Standard Contractual Clauses (SCCs)</strong> under Art. 46 GDPR with all third-party processors.' },
      { text: '<strong>Technical safeguards</strong> including encryption, access controls, and regular security audits.' },
      { text: 'For users in the United States, our processing complies with the California Consumer Privacy Act (CCPA).' }
    ]
  },
  {
    id: 10,
    title: 'Data Retention',
    navTitle: 'Data Retention',
    content: [
      { text: 'Personal data is retained only as long as necessary for the purposes outlined in this policy.' },
      { text: 'Once the purpose of processing ceases to apply, data is deleted unless legal retention obligations require longer storage (e.g., commercial and tax law requirements may mandate retention for up to 10 years).' },
      { text: 'You can request earlier deletion of your data by contacting us, subject to any legal obligations we must fulfill.' }
    ]
  },
  {
    id: 11,
    title: 'Rights of Data Subjects',
    navTitle: 'Your Rights',
    content: [
      { text: 'Under GDPR, you have the following rights regarding your personal data:', type: 'rights' }
    ]
  },
  {
    id: 12,
    title: 'Data Security',
    navTitle: 'Security',
    content: [
      { 
        text: 'We implement comprehensive technical and organizational measures to protect your data:', 
        type: 'list', 
        items: [
          '<strong>Encryption</strong> (TLS/SSL for data in transit, AES-256 for data at rest)',
          '<strong>Access controls</strong> and role-based permissions',
          '<strong>Regular security audits</strong> and penetration testing',
          '<strong>Secure authentication</strong> with multi-factor authentication options',
          '<strong>Intrusion detection</strong> and monitoring systems',
          '<strong>Data backup</strong> and disaster recovery protocols'
        ]
      }
    ]
  },
  {
    id: 13,
    title: 'Minors',
    navTitle: 'Minors',
    content: [
      { text: 'Our services are intended for individuals aged 16 and above.' },
      { text: 'Users under the age of 16 require parental or guardian consent in accordance with Art. 8 GDPR.' },
      { text: 'We do not knowingly collect personal data from children under 16 without appropriate consent.' }
    ]
  },
  {
    id: 14,
    title: 'Automated Decision-Making and Profiling',
    navTitle: 'Automated Decisions',
    content: [
      { text: 'AVIRIS does not engage in automated decision-making or profiling within the meaning of Art. 22 GDPR.' },
      { text: 'All decisions regarding your account, subscriptions, or services involve human review when necessary.' }
    ]
  },
  {
    id: 15,
    title: 'Changes to this Privacy Policy',
    navTitle: 'Policy Changes',
    content: [
      { text: 'We reserve the right to modify this Privacy Policy to reflect legal, technical, or organizational changes.' },
      { text: 'Material changes will be communicated to you via email or through a prominent notice on our website.' },
      { text: 'The current version is always available at <a href="/front/privacy">www.aviris.com/privacy</a>.' }
    ]
  },
  {
    id: 16,
    title: 'Contact',
    navTitle: 'Contact',
    content: [
      { text: 'For any questions or concerns regarding this Privacy Policy or your personal data:', type: 'contact_info' }
    ]
  }
];

const companyInfo = [
  { icon: 'fa-building', label: 'Company:', value: 'AI Coding GmbH' },
  { icon: 'fa-map-marker-alt', label: 'Address:', value: 'Peter Müller Str. 3, 40468 Düsseldorf, Germany' },
  { icon: 'fa-file-alt', label: 'Commercial Register:', value: 'HRB 109727, District Court Düsseldorf' },
  { icon: 'fa-id-card', label: 'VAT ID:', value: 'DE456116205' },
  { icon: 'fa-envelope', label: 'E-Mail:', value: 'support@aviris.com', link: 'mailto:support@aviris.com' },
  { icon: 'fa-shield-alt', label: 'Data Protection:', value: 'datenschutz@aviris.com', link: 'mailto:datenschutz@aviris.com' },
  { icon: 'fa-globe', label: 'Website:', value: 'www.aviris.com', link: 'https://www.aviris.com' }
];

const thirdPartyProviders = [
  { name: 'Stripe Payments Europe Ltd.', purpose: 'Payment processing', location: 'Ireland' },
  { name: 'PayPal (Europe) S.à r.l.', purpose: 'Payment processing', location: 'Luxembourg' },
  { name: 'Klarna AB', purpose: 'Invoice/Installment payments', location: 'Sweden' },
  { name: 'Google Ireland Ltd.', purpose: 'Analytics', location: 'Ireland' },
  { name: 'Tidio / Zendesk', purpose: 'Customer Support', location: 'EU/USA' },
  { name: 'Mailchimp / Brevo', purpose: 'Email Communication', location: 'EU/USA' }
];

const dataSubjectRights = [
  { icon: 'fa-eye', title: 'Right to Access (Art. 15)', description: 'Obtain information about your personal data we process' },
  { icon: 'fa-edit', title: 'Right to Rectification (Art. 16)', description: 'Request correction of inaccurate personal data' },
  { icon: 'fa-trash-alt', title: 'Right to Erasure (Art. 17)', description: 'Request deletion of your personal data ("right to be forgotten")' },
  { icon: 'fa-ban', title: 'Right to Restriction (Art. 18)', description: 'Request limitation of data processing' },
  { icon: 'fa-file-export', title: 'Right to Data Portability (Art. 20)', description: 'Receive your data in a structured, machine-readable format' },
  { icon: 'fa-hand-paper', title: 'Right to Object (Art. 21)', description: 'Object to data processing based on legitimate interests' },
  { icon: 'fa-balance-scale', title: 'Right to Lodge a Complaint (Art. 77)', description: 'File a complaint with a supervisory authority' }
];

export default function Privacy() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('.privacy-nav-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // Update active link on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id^="section-"]');
      const navLinks = document.querySelectorAll('.privacy-nav-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= (sectionTop - 150)) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active', 'bg-success', 'text-white', 'border-success');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active', 'bg-success', 'text-white', 'border-success');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div data-aos="fade-up" data-aos-duration="800">
                <span className="section-badge">Our Values</span>
                <h1 className="section-title text-dark">Privacy Policy</h1>
                <p className="section-description mb-2">
                  <i className="fas fa-calendar-check text-success"></i>
                  Latest update: Nov 2025
                </p>
                <div className="d-inline-flex align-items-center gap-2 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-pill px-4 py-2 global-scope-badge">
                  <i className="fas fa-globe text-success"></i>
                  <span className="text-success">Global Scope: EU / EEA / Switzerland / UK / USA / Canada / Asia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="aviris__bg-dark">
        <div className="container">
          <div className="row">
            {/* Sidebar Navigation */}
            <div className="col-lg-3 mt-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="privacy-navigation privacy-navigation-sticky bg-white rounded-4 p-4 shadow-sm position-sticky">
                <h3 className="fs-5 fw-semibold text-dark mb-3 pe-2">Quick Navigation</h3>
                <ul className="list-unstyled pe-2 mb-0">
                  {privacyData.map((section) => (
                    <li key={section.id} className="mb-2">
                      <a href={`#section-${section.id}`} className="privacy-nav-link d-block text-secondary text-decoration-none rounded-3 px-3 py-2 fw-medium nav-link-text">
                        {section.id}. {section.navTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9 mt-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="bg-white rounded-4 p-5 shadow-sm">
                
                <div className="privacy-highlight-box">
                  <p><strong>Controller according to Art. 4 No. 7 GDPR:</strong> AI Coding GmbH, Peter Müller Str. 3, 40468 Düsseldorf, Germany</p>
                </div>

                {privacyData.map((section, index) => (
                  <div key={section.id} id={`section-${section.id}`} className="mb-5 section-scroll-margin">
                    <h2 className="fs-3 fw-semibold text-dark mb-3 pb-2 border-bottom border-2">{section.id}. {section.title}</h2>
                    
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.type === 'company_info' && (
                          <>
                            <p className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                            <div className="bg-white rounded-4 p-4 mt-4 text-start">
                              {companyInfo.map((info, infoIndex) => (
                                <div key={infoIndex} className="d-flex align-items-start gap-3 mb-3">
                                  <i className={`fas ${info.icon} text-success mt-1 flex-shrink-0`}></i>
                                  <div className="text-dark company-info-text">
                                    <strong className="d-inline-block company-info-label">{info.label}</strong>{' '}
                                    {info.link ? (
                                      <a href={info.link} className="text-success text-decoration-none" target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>{info.value}</a>
                                    ) : (
                                      info.value
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {item.type === 'list' && item.items && (
                          <>
                            <p className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                            <ul className="mb-4 ps-4">
                              {item.items.map((listItem, listIndex) => (
                                <li key={listIndex} className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: listItem }} />
                              ))}
                            </ul>
                          </>
                        )}
                        
                        {item.type === 'partners' && (
                          <>
                            <p className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                            <div className="row g-3 my-4">
                              {thirdPartyProviders.map((provider, providerIndex) => (
                                <div key={providerIndex} className="col-md-6 col-lg-4">
                                  <div className="partner-card bg-light border rounded-3 p-3 h-100">
                                    <h4 className="fs-6 fw-semibold text-dark mb-2">{provider.name}</h4>
                                    <p className="text-secondary mb-2 provider-purpose">{provider.purpose}</p>
                                    <span className="d-inline-flex align-items-center gap-2 text-success fw-medium provider-location">
                                      <i className="fas fa-map-marker-alt"></i>
                                      {provider.location}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-secondary fst-italic mt-3 italic-note"><em>Transfers to third countries occur only under appropriate safeguards (Art. 46 GDPR).</em></p>
                          </>
                        )}
                        
                        {item.type === 'rights' && (
                          <>
                            <p className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                            <div className="row g-3 my-4">
                              {dataSubjectRights.map((right, rightIndex) => (
                                <div key={rightIndex} className="col-md-6">
                                  <div className="right-card bg-light border rounded-3 p-4 h-100">
                                    <div className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3 mb-3 rights-icon-box">
                                      <i className={`fas ${right.icon} text-success fs-5`}></i>
                                    </div>
                                    <h4 className="fw-semibold text-dark mb-2 rights-title">{right.title}</h4>
                                    <p className="text-secondary mb-0 rights-description">{right.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="bg-warning bg-opacity-25 border border-2 border-warning rounded-3 p-4 my-4">
                              <h4 className="fs-6 fw-semibold d-flex align-items-center gap-2 mb-3 supervisory-title">
                                <i className="fas fa-landmark"></i> Supervisory Authority
                              </h4>
                              <p className="mb-0 supervisory-text">
                                <strong>LDI NRW (State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia)</strong><br />
                                Kavalleriestraße 2–4, 40213 Düsseldorf, Germany<br />
                                Website: <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-decoration-underline supervisory-link">www.ldi.nrw.de</a>
                              </p>
                            </div>
                          </>
                        )}
                        
                        {item.type === 'contact_info' && (
                          <>
                            <p className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                            <div className="bg-white rounded-4 p-4 mt-4">
                              {companyInfo.map((info, infoIndex) => (
                                <div key={infoIndex} className="d-flex align-items-start gap-3 mb-3">
                                  <i className={`fas ${info.icon} text-success mt-1 flex-shrink-0`}></i>
                                  <div className="text-dark company-info-text">
                                    {info.link ? (
                                      <a href={info.link} className="text-success text-decoration-none" target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>{info.value}</a>
                                    ) : (
                                      info.value
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        
                        {!item.type && (
                          <p className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Contact Box */}
                <div className="aviris__bg-dark rounded-4 p-4 p-md-5 mt-5 text-center">
                  <h3 className="fs-4 fw-semibold text-dark mb-3">Questions About Your Privacy?</h3>
                  <p className="text-secondary mb-4 content-text">If you have any questions about how we handle your personal data, our team is here to help.</p>
                  <a href="/front/contact" className="btn-secondary-custom">
                    Contact Us
                    <i className="fas fa-arrow-right"></i>
                  </a>
                  
                  <div className="bg-white rounded-4 p-4 mt-4 text-start">
                    <div className="text-center mb-3">
                      <strong className="fs-6">AI Coding GmbH</strong>
                    </div>
                    {companyInfo.map((info, infoIndex) => (
                      <div key={infoIndex} className="d-flex align-items-start gap-3 mb-3">
                        <i className={`fas ${info.icon} text-success mt-1 flex-shrink-0`}></i>
                        <div className="text-dark company-info-text">
                          {info.link ? (
                            <a href={info.link} className="text-success text-decoration-none" target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>{info.value}</a>
                          ) : (
                            info.value
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mt-4 mb-0 fst-italic text-success fw-semibold">
                    &quot;Made in Germany – Worldwide Protection by AVIRIS&quot;
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
