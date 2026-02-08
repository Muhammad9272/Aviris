interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureCardsSectionProps {
  features: Feature[];
  iconBasePath?: string;
  layout?: '3-3-1' | '2-3-1' | '3-2';
}

export default function FeatureCardsSection({
  features,
  iconBasePath = '/front/img/landing/',
  layout = '3-3-1'
}: FeatureCardsSectionProps) {
  const layoutMap: Record<NonNullable<FeatureCardsSectionProps['layout']>, number[]> = {
    '3-3-1': [3, 3, 1],
    '2-3-1': [2, 3, 1],
    '3-2': [3, 2]
  };

  const rowSizes = layoutMap[layout];
  const rows: Feature[][] = [];
  let cursor = 0;

  rowSizes.forEach((size) => {
    if (cursor < features.length) {
      rows.push(features.slice(cursor, cursor + size));
      cursor += size;
    }
  });

  while (cursor < features.length) {
    rows.push(features.slice(cursor, cursor + 3));
    cursor += 3;
  }

  const getColClassName = (rowSize: number) => {
    if (rowSize === 1) {
      return 'col-12';
    }

    if (rowSize === 2) {
      return 'col-lg-6 col-md-6 col-12';
    }

    return 'col-lg-4 col-md-6 col-12';
  };

  return (
    <section className="py-5 aviris__bg-dark" style={{paddingTop: '80px', paddingBottom: '80px'}}>
      <div className="container">
        {rows.map((row, rowIndex) => (
          <div
            key={`feature-row-${rowIndex}`}
            className={`row g-3 g-md-4 ${row.length < 3 ? 'justify-content-center' : ''} ${rowIndex < rows.length - 1 ? 'mb-4' : ''}`}
          >
            {row.map((feature, index) => (
              <div key={`${feature.title}-${index}`} className={getColClassName(row.length)}>
                <div className="feature-card" style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', padding: 'clamp(20px, 4vw, 32px)'}}>
                  <div className="feature-icon-wrapper" style={{width: 'clamp(56px, 12vw, 70px)', height: 'clamp(56px, 12vw, 70px)', margin: '0 auto clamp(16px, 3vw, 20px)'}}>
                    <img src={`${iconBasePath}${feature.icon}`} alt={feature.title} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <h5>{feature.title}</h5>
                  <p style={{ color: '#6B7280', lineHeight: 1.6, marginBottom: 0}}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
