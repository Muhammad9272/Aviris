interface ContentImageSectionProps {
  imageSrc: string;
  imageAlt: string;
  overlayIcon?: string;
  overlayTitle?: string;
  overlayDescription?: string;
  badgeIcon: string;
  badgeText: string;
  title: string;
  titleHighlight?: string;
  paragraphs: string[];
  subtitle?: string;
  subtitleHighlight?: string;
  ctaText: string;
  ctaLink: string;
  imageOnLeft?: boolean;
}

export default function ContentImageSection({
  imageSrc,
  imageAlt,
  overlayIcon,
  overlayTitle,
  overlayDescription,
  badgeIcon,
  badgeText,
  title,
  titleHighlight,
  paragraphs,
  subtitle,
  subtitleHighlight,
  ctaText,
  ctaLink,
  imageOnLeft = true
}: ContentImageSectionProps) {
  return (
    <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-6 ${imageOnLeft ? 'order-lg-1 order-2' : 'order-lg-2 order-2'} mb-3 mb-lg-0`}>
            <div className="position-relative" style={{height: 'clamp(400px, 60vw, 550px)'}}>
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-100 h-100"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              
              {overlayIcon && overlayTitle && overlayDescription && (
                <div 
                  className="position-absolute rounded-4"
                  style={{
                    bottom: 'clamp(15px, 3vw, 30px)',
                    left: 'clamp(15px, 3vw, 30px)',
                    maxWidth: 'calc(100% - clamp(30px, 6vw, 60px))',
                    zIndex: 10,
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                    padding: 'clamp(16px, 3vw, 24px)'
                  }}
                >
                  <div className="text-start">
                    <div className="mb-2 mb-md-3">
                      <img 
                        src={overlayIcon} 
                        alt="AVIRIS" 
                        style={{width: 'clamp(36px, 8vw, 48px)', height: 'clamp(36px, 8vw, 48px)'}}
                      />
                    </div>
                    
                    <h6 className="mb-2 fw-bold" style={{fontSize: 'clamp(15px, 3vw, 18px)', color: '#111827', lineHeight: 1.3}}>
                      {overlayTitle}
                    </h6>
                    
                    <p className="mb-0" style={{fontSize: 'clamp(12px, 2.5vw, 14px)', color: '#6B7280', lineHeight: 1.5}} dangerouslySetInnerHTML={{__html: overlayDescription}} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`col-lg-6 ${imageOnLeft ? 'order-lg-2 order-1' : 'order-lg-1 order-1'} mb-4 mb-lg-0`}>
            <div className="platform-content">
              <p className="section-badge mb-3">
                <i className={`fas ${badgeIcon} me-2`}></i>
                {badgeText}
              </p>
              
              <h3 className="mb-3">
                {title} {titleHighlight && <span className="text-dark">{titleHighlight}</span>}
              </h3>
              
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index} className={`mb-${index === 1 ? '3' : '2'}`} style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  {paragraph}
                </p>
              ))}

              {subtitle && (
                <h3 className="mb-2">
                  {subtitle} {subtitleHighlight && <span className="text-dark">{subtitleHighlight}</span>}
                </h3>
              )}

              {paragraphs.slice(2).map((paragraph, index) => (
                <p key={index + 2} className={`mb-${index === paragraphs.slice(2).length - 1 ? '3' : '2'}`} style={{fontSize: '15px', color: '#6B7280', lineHeight: 1.6}}>
                  {paragraph}
                </p>
              ))}

              <a href={ctaLink} className="btn-secondary-custom">
                {ctaText}
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
