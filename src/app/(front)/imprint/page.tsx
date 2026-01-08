import type { Metadata } from 'next';
import '@/styles/front/pages/imprint.css';

export const metadata: Metadata = {
  title: 'Imprint - AVIRIS | Legal Information & Company Details',
  description: 'Legal notice and imprint for AVIRIS. Company information, contact details and regulatory disclosure according to German Telemedia Act (TMG).',
};

export default function Imprint() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section aviris__bg-dark">
        <div className="container">
          <div className="text-center">
            <div className="section-badge mb-4" data-aos="fade-down" data-aos-duration="800">
              <span>Legal Information</span>
            </div>
            
            <h1 className="section-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <span className="text-dark">Imprint</span><br />
              Impressum
            </h1>
            
            <p className="section-description mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Legal notice according to § 5 TMG (German Telemedia Act)
            </p>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="imprint-section aviris__bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Company Details */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="imprint-heading">
                  <i className="fas fa-building"></i>
                  Company Information
                </h2>
                <div className="imprint-content">
                  <p><strong>Company Name:</strong></p>
                  <p className="mb-3">AI Coding GmbH</p>

                  <p><strong>Address:</strong></p>
                  <p className="mb-3">
                    Peter Müller Str. 3<br />
                    40468 Düsseldorf<br />
                    Germany
                  </p>

                  <p><strong>Managing Director:</strong></p>
                  <p className="mb-3">Mr. Dr. Tolga Akcay</p>

                  <p><strong>Commercial Register:</strong></p>
                  <p className="mb-3">
                    Registration Number: HRB 109727<br />
                    District Court Düsseldorf
                  </p>

                  <p><strong>VAT Identification Number:</strong></p>
                  <p className="mb-0">DE456116205</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2 className="imprint-heading">
                  <i className="fas fa-envelope"></i>
                  Contact
                </h2>
                <div className="imprint-content">
                  <p><strong>Email:</strong></p>
                  <p className="mb-3">
                    <a href="mailto:hi@aicoding.ai" className="imprint-link">hi@aicoding.ai</a>
                  </p>

                  <p><strong>Website:</strong></p>
                  <p className="mb-0">
                    <a href="https://www.aicoding.ai" target="_blank" rel="noopener noreferrer" className="imprint-link">www.aicoding.ai</a>
                  </p>
                </div>
              </div>

              {/* Person Responsible for Content */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h2 className="imprint-heading">
                  <i className="fas fa-user-shield"></i>
                  Person Responsible for Content
                </h2>
                <div className="imprint-content">
                  <p className="mb-1"><strong>According to § 55 para. 2 RStV:</strong></p>
                  <p className="mb-3">Mr. Dr. Tolga Akcay</p>
                  <p className="mb-0">
                    Peter Müller Str. 3<br />
                    40468 Düsseldorf<br />
                    Germany
                  </p>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <h2 className="imprint-heading">
                  <i className="fas fa-balance-scale"></i>
                  Dispute Resolution
                </h2>
                <div className="imprint-content">
                  <p className="mb-3">
                    The European Commission provides a platform for online dispute resolution (ODR): 
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="imprint-link"> https://ec.europa.eu/consumers/odr</a>
                  </p>
                  <p className="mb-0">
                    We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                  </p>
                </div>
              </div>

              {/* Liability for Content */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <h2 className="imprint-heading">
                  <i className="fas fa-file-contract"></i>
                  Liability for Content
                </h2>
                <div className="imprint-content">
                  <p className="mb-3">
                    As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                  </p>
                  <p className="mb-0">
                    Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which knowledge of a specific infringement becomes known. If we become aware of any such legal infringements, we will remove the content in question immediately.
                  </p>
                </div>
              </div>

              {/* Liability for Links */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <h2 className="imprint-heading">
                  <i className="fas fa-link"></i>
                  Liability for Links
                </h2>
                <div className="imprint-content">
                  <p className="mb-3">
                    Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                  </p>
                  <p className="mb-0">
                    The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. If we become aware of any legal infringements, we will remove such links immediately.
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <h2 className="imprint-heading">
                  <i className="fas fa-copyright"></i>
                  Copyright
                </h2>
                <div className="imprint-content">
                  <p className="mb-3">
                    The content and works on these pages created by the site operators are subject to German copyright law. The reproduction, editing, distribution and any kind of use outside the limits of copyright require the written consent of the respective author or creator.
                  </p>
                  <p className="mb-0">
                    Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
                  </p>
                </div>
              </div>

              {/* Privacy */}
              <div className="imprint-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                <h2 className="imprint-heading">
                  <i className="fas fa-shield-alt"></i>
                  Data Protection
                </h2>
                <div className="imprint-content">
                  <p className="mb-0">
                    For information on how we handle your personal data, please refer to our <a href="/front/privacy" className="imprint-link">Privacy Policy</a>.
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="imprint-info" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                <p className="text-center mb-0">
                  <i className="fas fa-info-circle"></i>
                  <strong>Note:</strong> This imprint applies to the following online presences:<br />
                  www.aicoding.ai and all associated subdomains
                </p>
              </div>

              <div className="text-center mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                <p className="text-muted small">Last updated: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
