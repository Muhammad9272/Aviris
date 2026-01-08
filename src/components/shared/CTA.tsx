import { routes } from '@/config/routes';
import '@/styles/front/components/cta.css';

export default function CTA() {
  return (
    <section className="cta-section aviris__bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="cta-box">
              {/* Background Image */}
              <div className="cta-background">
                <img src="/front/img/map.png" alt="World Map" className="cta-map-bg" />
              </div>
              
              {/* CTA Content */}
              <div className="cta-content text-center">
                {/* Logo Icon */}
                <div className="cta-icon-wrapper" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                  <img src="/front/img/logo_icon.png" alt="AVIRIS" className="cta-icon" />
                </div>

                {/* Title */}
                <h2 className="section-title text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  Your Digital Freedom<br/>
                  Starts With AVIRIS.
                </h2>

                {/* Description */}
                <p className="section-description text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                  Connect securely, protect your identity, and experience true online independence with AVIRIS — your trusted shield against digital threats.
                </p>

                {/* CTA Buttons */}
                <div className="cta-buttons" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                  <a href="/front/downloads" className="btn-outline-custom btn-cta-white">
                    Download Now
                    <i className="fas fa-download"></i>
                  </a>
                  <a href={routes.pricing} className="btn-secondary-custom">
                    Get Premium
                    <i className="fas fa-crown"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
