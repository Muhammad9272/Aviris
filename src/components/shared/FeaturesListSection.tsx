import { routes } from '@/config/routes';

interface FeaturesListSectionProps {
  badgeIcon: string;
  badgeText: string;
  title: string;
  titleHighlight?: string;
  features: string[];
  primaryButtonText: string;
  noteText: string;
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
}

export default function FeaturesListSection({
  badgeIcon,
  badgeText,
  title,
  titleHighlight,
  features,
  primaryButtonText,
  noteText,
  imageSrc,
  imageAlt,
  imageOnRight = true
}: FeaturesListSectionProps) {
  return (
    <section className="py-5 aviris__bg-dark" style={{paddingTop: '100px', paddingBottom: '100px'}}>
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Content Column */}
          <div className={`col-lg-6 ${imageOnRight ? 'order-lg-1 order-2' : 'order-lg-2 order-2'} mb-4 mb-lg-0`}>
            <div className="download-content">
              {/* Badge */}
              <div className="section-badge mb-4">
                <i className={`fas ${badgeIcon} me-2`}></i>
                <span>{badgeText}</span>
              </div>

              {/* Title */}
              <h2 className="section-title">
                {titleHighlight && <span className="text-dark">{titleHighlight}</span>} {title}
              </h2>

              {/* Features List */}
              <ul className="download-features-list">
                {features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="download-buttons">
                <a href={routes.pricing} className="btn-secondary-custom">
                  {primaryButtonText}
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>

              {/* Note */}
              <p className="download-note">
                {noteText}
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className={`col-lg-6 ${imageOnRight ? 'order-lg-2 order-1' : 'order-lg-1 order-1'} mb-4 mb-lg-0`}>
            <div className="download-image-wrapper">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="download-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
