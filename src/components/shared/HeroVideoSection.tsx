interface HeroVideoSectionProps {
  videoSrc: string;
  posterSrc: string;
  badgeIcon: string;
  badgeText: string;
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export default function HeroVideoSection({
  videoSrc,
  posterSrc,
  badgeIcon,
  badgeText,
  title,
  description,
  stats
}: HeroVideoSectionProps) {
  return (
    <section className="aviris__bg-dark" style={{paddingTop: '120px', paddingBottom: '60px'}}>
      <div className="container">
        <div className="video-banner-wrapper position-relative" style={{height: '70vh', minHeight: '500px', overflow: 'hidden', borderRadius: '24px'}}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={posterSrc}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              borderRadius: '24px'
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%)',
            zIndex: 1,
            borderRadius: '24px'
          }}></div>

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 30%, transparent 100%)',
            zIndex: 1,
            borderRadius: '24px'
          }}></div>

          <div className="h-100 d-flex align-items-end" style={{position: 'relative', zIndex: 2, padding: 'clamp(20px, 5vw, 60px) clamp(20px, 5vw, 60px) clamp(30px, 5vw, 60px) clamp(20px, 5vw, 60px)'}}>
            <div className="row w-100">
              <div className="col-lg-9 col-md-10">
               <div className="d-inline-flex align-items-center gap-2 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20 rounded-pill mb-3" 
                  style={{
                    padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)',
                    fontSize: 'clamp(12px, 2vw, 14px)'
                  }}>
                  <i className={`fas ${badgeIcon} text-success`} style={{fontSize: 'clamp(12px, 2vw, 14px)'}}></i>
                  <span className="fw-semibold text-white" style={{fontSize: 'clamp(12px, 2vw, 14px)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    {badgeText}
                  </span>
                </div>

                <h2 className="mb-3 text-white section-title" dangerouslySetInnerHTML={{__html: title}} />

                <p className="mb-4 text-white" style={{fontSize: 'clamp(14px, 1vw, 16px)', lineHeight: 1.6, maxWidth: '600px', textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                  {description}
                </p>

                <div className="d-flex flex-wrap gap-4 mt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-white">
                      <div style={{fontSize: '24px', fontWeight: 700, lineHeight: 1}}>{stat.value}</div>
                      <div style={{fontSize: '12px', opacity: 0.9}}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
