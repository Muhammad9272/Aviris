import '@/styles/front/components/faqs.css';

const faqs = [
  {
    question: 'How Many VPN Servers Does AVIRIS Offer?',
    answer: 'AVIRIS provides access to hundreds of secure servers across multiple countries, ensuring fast and private browsing anytime.',
    open: true
  },
  {
    question: 'Can I Connect To A Specific IP Or Region?',
    answer: 'Yes! AVIRIS allows you to connect to specific regions and even select dedicated IPs in supported locations. This gives you full control over your virtual location and ensures consistent access to region-specific content.',
    open: false
  },
  {
    question: 'Does AVIRIS Slow Down My Internet Speed?',
    answer: 'Not at all! AVIRIS is optimized for high-speed connections with minimal latency. Our advanced network infrastructure and premium servers ensure you enjoy fast browsing, streaming, and downloading without compromising security.',
    open: false
  },
  {
    question: 'Is My Activity Tracked While Using AVIRIS VPN?',
    answer: 'Absolutely not. AVIRIS follows a strict no-logs policy. We do not track, collect, or store any of your browsing activity, ensuring complete privacy and anonymity while you\'re online.',
    open: false
  },
  {
    question: 'Can I Use AVIRIS On Multiple Devices?',
    answer: 'Yes! One AVIRIS account lets you protect all your devices - smartphones, tablets, laptops, and desktops. You can connect up to 5 devices simultaneously with a single subscription.',
    open: false
  },
  {
    question: 'Do I Need Technical Knowledge To Use AVIRIS?',
    answer: 'Not at all! AVIRIS is designed with simplicity in mind. Just download the app, sign in, and connect with a single click. Our intuitive interface makes it easy for anyone to stay protected online.',
    open: false
  }
];

export default function FAQs() {
  return (
    <section className="faq-section aviris__bg-dark">
      <div className="container">
        <div className="row g-4">
          {/* Left Column: Header & CTA */}
          <div className="col-lg-5" data-aos="fade-right" data-aos-duration="1000">
            <div className="faq-header-wrapper">
              <div className="section-badge mb-4">
                <span>FAQ&apos;s</span>
              </div>

              <h2 className="section-title">
                <span className="text-dark">Frequently Asked</span><br/>
                Questions&apos;s
              </h2>

              <p className="section-description">
                Stay informed — here&apos;s everything you need to know.
              </p>

              <a href="/front/contact" className="btn-secondary-custom">
                Contact us
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="faq-accordion-wrapper">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item faq-item">
                    <h2 className="accordion-header" id={`faqHeading${index}`}>
                      <button 
                        className={`accordion-button faq-question ${!faq.open ? 'collapsed' : ''}`}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#faqCollapse${index}`}
                        aria-expanded={faq.open ? 'true' : 'false'}
                        aria-controls={`faqCollapse${index}`}>
                        <span className="faq-question-text">{faq.question}</span>
                        <span className="faq-icon">
                          <i className="fas fa-minus minus-icon"></i>
                          <i className="fas fa-plus plus-icon"></i>
                        </span>
                      </button>
                    </h2>
                    <div 
                      id={`faqCollapse${index}`}
                      className={`accordion-collapse collapse ${faq.open ? 'show' : ''}`}
                      aria-labelledby={`faqHeading${index}`}
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body faq-answer">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
