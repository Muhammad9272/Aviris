import type { ReactNode } from 'react';
import PricingCards from '@/components/shared/PricingCards';

interface PricingStep {
  number: string;
  title: string;
  description: string;
}

interface PricingHighlightSectionProps {
  steps: PricingStep[];
  headerTitle?: string;
  headerDescription?: ReactNode;
  headerId?: string;
  backgroundImageSrc?: string;
}

export default function PricingHighlightSection({
  steps,
  headerTitle,
  headerDescription,
  headerId,
  backgroundImageSrc = '/front/img/hero_vector_bg.png'
}: PricingHighlightSectionProps) {
  return (
    <section className="hero-section aviris__bg-dark free-funnel-pricing pt-3">
      <div className="container">
        {headerTitle && headerDescription && (
          <div className="text-center mb-5">
            <div className="mt-4" id={headerId}>
              <h3 className="section-title mb-2 text-dark">{headerTitle}</h3>
              <p className="section-description mx-auto">
                {headerDescription}
              </p>
            </div>
          </div>
        )}

        <div className="card card2">
          <div className="row align-items-stretch g-4">
            <div
              className="col-lg-6"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(16, 185, 129, 0.18), rgba(16, 185, 129, 0)), url('${backgroundImageSrc}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '24px',
                padding: 'clamp(24px, 4vw, 36px)',
                height: '100%'
              }}
            >
              <div className="mb-4">
                <h2 className="section-title mb-2">Bis zu 20 Geräte. Eine Lizenz.</h2>
                <p className="section-description mb-0">
                  Digitale Sicherheit, die Verantwortung übernimmt
                </p>
                <p className="section-description mt-2">
                  Mit nur einer AVIRIS-Lizenz schützt du die Geräte deiner Familie sowie weiterer Menschen, die dir wichtig sind – unabhängig vom Gerät oder Betriebssystem.
                </p>
              </div>

              <h3 className="mb-3">Wie funktioniert&apos;s?</h3>

              <div className="d-flex flex-column gap-4">
                {steps.map((step) => (
                  <div key={step.number} className="d-flex gap-3">
                    <div
                      className="badge rounded-pill text-white align-self-start"
                      style={{
                        minWidth: '36px',
                        height: '36px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#16A34A'
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h5 className="mb-1">{step.title}</h5>
                      <p className="mb-2" style={{color: '#6B7280'}}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6" style={{height: '100%'}}>
              <div className="h-100 free-funnel-pricing-card">
                <PricingCards />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section .card2{
            border-radius: 16px;
             /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06); */
             border: none;
             padding: 0px 24px;
        }
        .free-funnel-pricing .col-lg-5 {
          display: none;
        }

        .free-funnel-pricing .col-lg-7 {
          flex: 0 0 100%;
          max-width: 100%;
        }

        .free-funnel-pricing .premium-bottom,
        .free-funnel-pricing .text-center.py-3 {
          display: none;
        }

        .free-funnel-pricing .card-custom {
          background: transparent;
          box-shadow: none;
          padding-right: 0 !important;
          
        }

        .free-funnel-pricing .row.g-3.mb-4 {
          margin-bottom: 0;
        }
        .free-funnel-pricing .row.align-items-stretch.g-4 {
        --bs-gutter-y:0rem;
        --bs-gutter-x:0rem;
        }

        .free-funnel-pricing .premium-card-wrapper {
          height: 100%;
        }

        .free-funnel-pricing .premium-top {
          height: 100%;
          border-radius: 24px;
        }

        .free-funnel-pricing .free-funnel-pricing-card {
          // display: flex;
          height: 100%;
        }
          @media (max-width: 991px) {
         .free-funnel-pricing .card-custom {
           padding: 0px !important;
           margin-top: 10px;
         }
       }
      `}</style>
    </section>
  );
}
