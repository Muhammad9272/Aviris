import PricingCards from '@/components/shared/PricingCards';

export default function PricingPage() {
  return (
    <div className="main-content-wrapper">
      <div className="card-custom p-4 mb-4">
        {/* Header */}
        <div className="d-flex align-items-start align-items-sm-center gap-2 gap-sm-3 mb-4">
          <div className="stat-icon badge-success-custom flex-shrink-0">
            <i className="ri-file-list-3-line"></i>
          </div>
          <div className="flex-grow-1 min-w-0">
            <h2 className="welcome-heading mb-1 fs-5 fs-md-4">Subscription Plans</h2>
            <p className="welcome-description mb-0 small">Explore plans and choose the one which fits your needs.</p>
          </div>
        </div>

        {/* Pricing Cards Component */}
        <PricingCards />
      </div>
    </div>
  );
}
