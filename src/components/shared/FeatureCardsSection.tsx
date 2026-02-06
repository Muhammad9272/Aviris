interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCardsSectionProps {
  features: Feature[];
  iconBasePath?: string;
}

export default function FeatureCardsSection({ features, iconBasePath = '/front/img/landing/' }: FeatureCardsSectionProps) {
  return (
    <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
      <div className="container">
        <div className="row g-3 g-md-4 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="feature-card" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', padding: 'clamp(20px, 4vw, 32px)'}}>
                <div className="feature-icon-wrapper" style={{width: 'clamp(56px, 12vw, 70px)', height: 'clamp(56px, 12vw, 70px)', margin: '0 auto clamp(16px, 3vw, 20px)'}}>
                  <img src={`${iconBasePath}${feature.icon}`} alt={feature.title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                </div>
                <h5>{feature.title}</h5>
                <p style={{fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: 0}}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {features.length > 3 && (
          <div className="row g-3 g-md-4 justify-content-center">
            {features.slice(3, 5).map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-12">
                <div className="feature-card" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', padding: 'clamp(20px, 4vw, 32px)'}}>
                  <div className="feature-icon-wrapper" style={{width: 'clamp(56px, 12vw, 70px)', height: 'clamp(56px, 12vw, 70px)', margin: '0 auto clamp(16px, 3vw, 20px)'}}>
                    <img src={`${iconBasePath}${feature.icon}`} alt={feature.title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <h5>{feature.title}</h5>
                  <p style={{fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: 0}}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
