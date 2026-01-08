'use client';

import { useEffect } from 'react';
import CTA from '@/components/shared/CTA';
import '@/styles/front/pages/terms.css';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions - AVIRIS | Service Agreement';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read AVIRIS Terms & Conditions. Complete terms of service, usage policy, license agreement, and legal information for AVIRIS cybersecurity products.');
    }
  }, []);

  const termsData = [
  {
    id: 1,
    title: 'Provider, Scope and Contracting Parties',
    navTitle: 'Provider & Scope',
    content: [
      { num: '1.1', text: 'The provider and contracting party for all services related to the use, purchase, and provision of the AVIRIS software is:', type: 'company_info' },
      { num: '1.2', text: 'These Terms & Conditions (hereinafter "Terms") apply to all contracts, services, and deliveries related to AVIRIS, including desktop, mobile, and web applications, and the associated license and account management system.' },
      { num: '1.3', text: 'These Terms apply worldwide, both to customers located within the European Union and outside of it (e.g., the United Kingdom, the United States, Canada, Asia, and other regions).' },
      { num: '1.4', text: 'Customers may be consumers (as defined in § 13 BGB) or businesses (as defined in § 14 BGB).' },
      { num: '1.5', text: 'Any terms or conditions of the customer deviating from or supplementing these Terms shall not apply unless expressly accepted in writing by AI Coding GmbH.' },
      { num: '1.6', text: 'When purchasing through app stores (e.g., Google Play Store, Apple App Store), the respective store terms and conditions apply in addition. In case of conflict, the store terms prevail.' }
    ]
  },
  {
    id: 2,
    title: 'Service Description',
    navTitle: 'Service Description',
    content: [
      { num: '2.1', text: 'AVIRIS is an advanced cybersecurity software suite ("Next Generation Antivirus & AI Threat Detection Suite") designed to detect, analyze, isolate, and remove malware and other digital threats. It utilizes artificial intelligence, heuristic scanning, cloud-based analysis, and process sandboxing.' },
      { num: '2.2', text: 'The Free Version allows users to perform a system scan and remove or isolate the first detected threat. Extended functions (e.g., real-time protection, multi-device management, firewall, network monitoring) require a paid license.' },
      { num: '2.3', text: 'The features, prices, supported systems, and subscription terms are specified in the current product descriptions available at www.aviris.com.' },
      { num: '2.4', text: 'AI Coding GmbH may enhance, modify, or restrict the features of AVIRIS in line with technical progress, provided such modifications are reasonable for the customer.' }
    ]
  },
  {
    id: 3,
    title: 'Contract Formation and Activation',
    navTitle: 'Contract Formation',
    content: [
      { num: '3.1', text: 'The presentation of products and pricing on the website or in app stores does not constitute a legally binding offer but an invitation to submit an order.' },
      { num: '3.2', text: 'A contract is concluded once the customer submits an order and AI Coding GmbH accepts it by providing, activating, or delivering a license key.' },
      { num: '3.3', text: 'Certain functions (e.g., license management, billing, device management) require a user account. The customer is responsible for keeping their login credentials confidential.' }
    ]
  },
  {
    id: 4,
    title: 'License and Usage Rights',
    navTitle: 'License & Usage Rights',
    content: [
      { num: '4.1', text: 'Upon full payment of the applicable fee, the customer receives a non-exclusive, non-transferable, non-sublicensable license to use AVIRIS on the agreed number of devices for the agreed term.' },
      { num: '4.2', text: 'Each license is bound to a specific device. Through the AVIRIS web app, users can unlink one device and transfer the license to another.' },
      { 
        num: '4.3', 
        text: 'The customer is expressly prohibited from:', 
        type: 'list', 
        items: [
          '(a) reverse engineering, decompiling, or disassembling the software;',
          '(b) removing or altering copyright notices, trademarks, or proprietary rights;',
          '(c) distributing, sublicensing, or publicly displaying the software;',
          '(d) using the software in violation of export control laws;',
          '(e) using the software for illegal purposes.'
        ]
      },
      { num: '4.4', text: 'Open-source components, if included, are governed by their respective license terms; AI Coding GmbH provides the relevant notices.' }
    ]
  },
  {
    id: 5,
    title: 'Prices, Payment, and Invoicing',
    navTitle: 'Prices & Payment',
    content: [
      { num: '5.1', text: 'The applicable prices are those stated at the time of the order. All prices include statutory VAT (if applicable).' },
      { num: '5.2', text: 'Payments are processed via the payment services offered (e.g., Stripe, PayPal, Klarna, Apple Pay, Google Pay) according to their respective terms.' },
      { num: '5.3', text: 'Invoices are provided electronically by email or through the user account. The customer consents to electronic invoicing.' }
    ]
  },
  {
    id: 6,
    title: 'Term, Renewal, and Termination',
    navTitle: 'Term & Termination',
    content: [
      { num: '6.1', text: 'License agreements are valid for the agreed term (e.g., monthly or yearly) and automatically renew unless renewal is disabled by the customer.' },
      { num: '6.2', text: 'Cancellations may be made at any time via the cancellation button (as required by §312k BGB) or through the respective app store platform.' },
      { num: '6.3', text: 'The right to terminate for cause remains unaffected.' }
    ]
  },
  {
    id: 7,
    title: 'Updates, Upgrades, and Support',
    navTitle: 'Updates & Support',
    content: [
      { num: '7.1', text: 'AI Coding GmbH provides the necessary security and functionality updates during the contract term in accordance with §§ 327f BGB.' },
      { num: '7.2', text: 'Upgrades (e.g., higher editions or add-on modules) may be offered separately.' },
      { num: '7.3', text: 'Support requests can be submitted via the contact form or by email to support@aviris.com. Incoming messages are automatically acknowledged; responses are typically provided within 24 hours on business days.' }
    ]
  },
  {
    id: 8,
    title: 'Customer Obligations',
    navTitle: 'Customer Obligations',
    content: [
      { num: '8.1', text: 'The customer undertakes to use the software lawfully and in accordance with these Terms.' },
      { num: '8.2', text: 'The customer is responsible for regular data backups. AI Coding GmbH is liable for data loss only as provided in Section 11.' },
      { num: '8.3', text: 'Errors should be documented in a reproducible manner (e.g., screenshots, logs, or reproduction steps).' }
    ]
  },
  {
    id: 9,
    title: 'Data Protection and Processing',
    navTitle: 'Data Protection',
    content: [
      { num: '9.1', text: 'The processing of personal data is carried out in accordance with the applicable data protection laws, in particular the GDPR.' },
      { num: '9.2', text: 'Details can be found in our <a href="/front/privacy">Privacy Policy</a>.' },
      { num: '9.3', text: 'The customer consents to the processing of their data as described in the Privacy Policy by using the software.' }
    ]
  },
  {
    id: 10,
    title: 'Warranty',
    navTitle: 'Warranty',
    content: [
      { num: '10.1', text: 'For contracts with consumers, the statutory warranty provisions apply.' },
      { num: '10.2', text: 'AI Coding GmbH warrants that the software is substantially free of defects and operates in accordance with the product description at the time of delivery.' },
      { num: '10.3', text: 'The warranty does not cover defects arising from improper use, modifications by the customer, or incompatible third-party software.' },
      { num: '10.4', text: 'For business customers, the warranty period is limited to one year from delivery, unless otherwise required by law.' }
    ]
  },
  {
    id: 11,
    title: 'Liability',
    navTitle: 'Liability',
    content: [
      { num: '11.1', text: 'AI Coding GmbH is liable without limitation for damages arising from injury to life, body, or health, as well as for damages caused by intentional or grossly negligent conduct.' },
      { num: '11.2', text: 'In cases of slight negligence, AI Coding GmbH is only liable for the breach of essential contractual obligations (cardinal obligations). In such cases, liability is limited to foreseeable, typically occurring damages.' },
      { num: '11.3', text: 'Liability under the Product Liability Act remains unaffected.' },
      { num: '11.4', text: 'Any further liability is excluded to the extent permitted by law.' },
      { num: '11.5', text: 'The limitations of liability also apply to the personal liability of employees, representatives, and vicarious agents of AI Coding GmbH.' }
    ]
  },
  {
    id: 12,
    title: 'Intellectual Property',
    navTitle: 'Intellectual Property',
    content: [
      { num: '12.1', text: 'All intellectual property rights in the software, documentation, and related materials remain with AI Coding GmbH or its licensors.' },
      { num: '12.2', text: 'The customer acquires only the rights of use expressly granted in these Terms.' },
      { num: '12.3', text: 'Any use beyond the granted rights requires the prior written consent of AI Coding GmbH.' }
    ]
  },
  {
    id: 13,
    title: 'Right of Withdrawal for Consumers',
    navTitle: 'Right of Withdrawal',
    content: [
      { num: '13.1', text: 'Consumers have a statutory right of withdrawal in accordance with § 355 BGB.' },
      { num: '13.2', text: 'The withdrawal period is 14 days from the date of contract conclusion.' },
      { num: '13.3', text: 'The right of withdrawal expires prematurely if the customer expressly consents to the commencement of performance before the end of the withdrawal period and acknowledges the loss of the right of withdrawal (§ 356(5) BGB).' },
      { num: '13.4', text: 'Detailed withdrawal instructions and a model withdrawal form are provided below.' }
    ]
  },
  {
    id: 14,
    title: 'Withdrawal Instructions',
    navTitle: 'Withdrawal Instructions',
    content: [
      { num: '14.1', text: 'You have the right to withdraw from this contract within 14 days without giving any reason.' },
      { num: '14.2', text: 'The withdrawal period will expire after 14 days from the day of the conclusion of the contract.' },
      { num: '14.3', text: 'To exercise the right of withdrawal, you must inform us (AI Coding GmbH, Peter Müller Str. 3, 40468 Düsseldorf, Germany, support@aviris.com) of your decision to withdraw from this contract by an unequivocal statement (e.g., a letter sent by post or email).' },
      { num: '14.4', text: 'You may use the attached model withdrawal form, but it is not obligatory.' },
      { num: '14.5', text: 'To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.' },
      { num: '14.6', text: 'If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw from this contract.' }
    ]
  },
  {
    id: 15,
    title: 'Model Withdrawal Form',
    navTitle: 'Withdrawal Form',
    content: [
      { num: '15.1', text: 'If you wish to withdraw from the contract, please complete and return this form:', type: 'withdrawal_form' }
    ]
  },
  {
    id: 16,
    title: 'Amendments to the Terms',
    navTitle: 'Amendments',
    content: [
      { num: '16.1', text: 'AI Coding GmbH reserves the right to amend these Terms with reasonable notice, provided the amendments are reasonable for the customer.' },
      { num: '16.2', text: 'Customers will be notified of amendments by email at least 30 days before they take effect.' },
      { num: '16.3', text: 'If the customer does not object within 30 days of notification, the amended Terms shall be deemed accepted. AI Coding GmbH will specifically inform the customer of this consequence in the notification.' }
    ]
  },
  {
    id: 17,
    title: 'Governing Law, Global Applicability, and Translations',
    navTitle: 'Governing Law',
    content: [
      { num: '17.1', text: 'These Terms are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).' },
      { num: '17.2', text: 'For contracts with consumers, the mandatory consumer protection provisions of the country in which the consumer has their habitual residence also apply, provided they are more favorable to the consumer.' },
      { num: '17.3', text: 'If these Terms are provided in multiple languages, the German version shall prevail in case of discrepancies.' },
      { num: '17.4', text: 'The place of performance and, if the customer is a merchant, legal entity under public law, or special fund under public law, the exclusive place of jurisdiction for all disputes arising from or in connection with these Terms is Düsseldorf, Germany.' }
    ]
  },
  {
    id: 18,
    title: 'Dispute Resolution',
    navTitle: 'Dispute Resolution',
    content: [
      { num: '18.1', text: 'The European Commission provides a platform for online dispute resolution (ODR), which can be accessed at: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>' },
      { num: '18.2', text: 'AI Coding GmbH is not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.' },
      { num: '18.3', text: 'This does not affect the consumer\'s right to bring an action before the competent courts.' }
    ]
  },
  {
    id: 19,
    title: 'Final Provisions',
    navTitle: 'Final Provisions',
    content: [
      { num: '19.1', text: 'Should individual provisions of these Terms be or become invalid or unenforceable, the validity of the remaining provisions shall not be affected.' },
      { num: '19.2', text: 'The invalid or unenforceable provision shall be replaced by a valid and enforceable provision that comes closest to the economic intent of the invalid or unenforceable provision.' },
      { num: '19.3', text: 'The same shall apply to any gaps in these Terms.' }
    ]
  }
];

const companyInfo = [
  { icon: 'fa-building', label: 'Company:', value: 'AI Coding GmbH' },
  { icon: 'fa-map-marker-alt', label: 'Address:', value: 'Peter Müller Str. 3, 40468 Düsseldorf, Germany' },
  { icon: 'fa-file-alt', label: 'Commercial Register:', value: 'HRB 109727, Local Court of Düsseldorf' },
  { icon: 'fa-id-card', label: 'VAT ID:', value: 'DE456116205' },
  { icon: 'fa-envelope', label: 'E-Mail:', value: 'support@aviris.com', link: 'mailto:support@aviris.com' },
  { icon: 'fa-globe', label: 'Website:', value: 'www.aviris.com', link: 'https://www.aviris.com' }
];

export default function Terms() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('.terms-nav-link');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = (this as HTMLAnchorElement).getAttribute('href');
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
      const navLinks = document.querySelectorAll('.terms-nav-link');
      
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
                <span className="section-badge">Legal Information</span>
                <h1 className="section-title text-dark">Terms & Conditions</h1>
                <p className="section-description mb-2">
                  <i className="fas fa-calendar-check text-success"></i>
                  Latest update: Nov 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="aviris__bg-dark">
        <div className="container">
          <div className="row">
            {/* Sidebar Navigation */}
            <div className="col-lg-3 mt-2" data-aos="fade-up" data-aos-duration="1000">
              <div className="terms-navigation terms-navigation-sticky bg-white rounded-4 p-4 shadow-sm position-sticky">
                <h3 className="fs-5 fw-semibold text-dark mb-3 pe-2">Quick Navigation</h3>
                <ul className="list-unstyled pe-2 mb-0">
                  {termsData.map((section) => (
                    <li key={section.id} className="mb-2">
                      <a href={`#section-${section.id}`} className="terms-nav-link d-block text-secondary text-decoration-none rounded-3 px-3 py-2 fw-medium nav-link-text">
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
                
                <div className="terms-highlight-box">
                  <p><strong>AI Coding GmbH</strong> &middot; Peter Müller Str. 3 &middot; 40468 Düsseldorf, Germany</p>
                </div>

                {termsData.map((section, index) => (
                  <div key={section.id} id={`section-${section.id}`} className="mb-5 section-scroll-margin">
                    <h2 className="fs-3 fw-semibold text-dark mb-3 pb-2 border-bottom border-2">{section.id}. {section.title}</h2>
                    
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.type === 'company_info' && (
                          <>
                            <p className="text-dark mb-3 content-text">
                              <strong>{item.num}</strong> {item.text}
                            </p>
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
                        
                        {item.type === 'list' && item.items && (
                          <>
                            <p className="text-dark mb-3 content-text">
                              <strong>{item.num}</strong> {item.text}
                            </p>
                            <ul className="mb-4 ps-4">
                              {item.items.map((listItem, listIndex) => (
                                <li key={listIndex} className="text-dark mb-3 content-text" dangerouslySetInnerHTML={{ __html: listItem }} />
                              ))}
                            </ul>
                          </>
                        )}
                        
                        {item.type === 'withdrawal_form' && (
                          <>
                            <p className="text-dark mb-3 content-text">
                              <strong>{item.num}</strong> {item.text}
                            </p>
                            <div className="withdrawal-form-box">
                              <h3 className="fs-5 fw-semibold text-dark mt-4 mb-3">Withdrawal Form Template</h3>
                              <p className="text-dark mb-3 content-text fst-italic">
                                (If you wish to withdraw from the contract, please fill out this form and send it to us.)
                              </p>
                              <div className="bg-light border rounded-3 p-4">
                                <p className="mb-2"><strong>To:</strong></p>
                                <p className="mb-3">AI Coding GmbH, Peter Müller Str. 3, 40468 Düsseldorf, Germany<br />
                                Email: support@aviris.com</p>
                                <p className="mb-3">
                                  I/We (*) hereby revoke the contract concluded by me/us (*) for the purchase of the following goods (*)/provision of the following service (*)
                                </p>
                                <p className="mb-2">Ordered on (*)/Received on (*): _________________</p>
                                <p className="mb-2">Name of consumer(s): _________________</p>
                                <p className="mb-2">Address of consumer(s): _________________</p>
                                <p className="mb-2">Signature of consumer(s) (only for paper notification): _________________</p>
                                <p className="mb-0">Date: _________________</p>
                                <p className="mt-3 mb-0 text-muted small">(*) Delete as applicable.</p>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {!item.type && (
                          <p className="text-dark mb-3 content-text">
                            <strong>{item.num}</strong> {item.text}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Contact Box */}
                <div className="aviris__bg-dark rounded-4 p-4 p-md-5 mt-5 text-center">
                  <h3 className="fs-4 fw-semibold text-dark mb-3">Questions About Our Terms?</h3>
                  <p className="text-secondary mb-4 content-text">If you have any questions about these terms, our team is here to help.</p>
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
