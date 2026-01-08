import Link from 'next/link';
import type { Metadata } from 'next';
import { routes } from '@/config/routes';

export const metadata: Metadata = {
  title: 'Sitemap - AVIRIS',
  description: 'Browse all AVIRIS pages organized by category.',
};

const SitemapLink = ({ href, title, description }: { href: string; title: string; description: string }) => (
  <div className="col-md-6 col-lg-4 mb-3">
    <Link href={href} className="sitemap-link d-block h-100">
      <div className="h-100 border rounded p-3 bg-white">
        <div className="d-flex align-items-start justify-content-between mb-2">
          <h6 className="mb-0 fw-semibold text-dark">{title}</h6>
          <i className="ri-arrow-right-line text-muted flex-shrink-0 ms-2"></i>
        </div>
        <p className="mb-0 text-muted small">{description}</p>
      </div>
    </Link>
  </div>
);

export default function SitemapPage() {
  return (
    <>
      {/* Header */}
      <section className="py-5 mt-5 bg-light border-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="mb-2">Sitemap</h1>
              <p className="text-muted mb-0">All AVIRIS pages organized by category</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-5 mt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Public Pages */}
              <div className="mb-5">
                <h3 className="mb-3 pb-2 border-bottom">Public Pages</h3>
                <div className="row">
                  <SitemapLink href={routes.home} title="Home" description="Main landing page" />
                  <SitemapLink href={routes.features} title="Features" description="Product features and capabilities" />
                  <SitemapLink href={routes.pricing} title="Pricing" description="Plans and pricing information" />
                  <SitemapLink href={routes.downloads} title="Downloads" description="Download apps for all platforms" />
                  <SitemapLink href={routes.business} title="Business Solutions" description="Enterprise security solutions" />
                  <SitemapLink href={routes.blogs} title="Blog" description="Articles and updates" />
                  <SitemapLink href={routes.blogDetails('1')} title="Blog Post" description="Individual article page" />
                  <SitemapLink href={routes.contact} title="Contact" description="Get in touch with us" />
                  <SitemapLink href={routes.terms} title="Terms & Conditions" description="Terms of service" />
                  <SitemapLink href={routes.privacy} title="Privacy Policy" description="Privacy and data protection" />
                  <SitemapLink href={routes.imprint} title="Imprint" description="Legal information" />
                </div>
              </div>

              {/* Authentication */}
              <div className="mb-5">
                <h3 className="mb-3 pb-2 border-bottom">Authentication</h3>
                <div className="row">
                  <SitemapLink href={routes.auth.login} title="Login" description="Sign in to your account" />
                  <SitemapLink href={routes.auth.register} title="Register" description="Create new account" />
                  <SitemapLink href={routes.auth.forgotPassword} title="Forgot Password" description="Reset your password" />
                  <SitemapLink href={routes.auth.resetPassword} title="Reset Password" description="Set new password" />
                </div>
              </div>

              {/* User Dashboard */}
              <div className="mb-5">
                <h3 className="mb-3 pb-2 border-bottom">User Dashboard</h3>
                <div className="row">
                  <SitemapLink href={routes.user.dashboard} title="Dashboard" description="Account overview" />
                  <SitemapLink href={routes.user.profile} title="Profile" description="Personal information" />
                  <SitemapLink href={routes.user.settings} title="Settings" description="Account preferences" />
                  <SitemapLink href={routes.user.billing} title="Billing" description="Payment methods and history" />
                  <SitemapLink href={routes.user.pricing} title="Subscription" description="Manage your plan" />
                  <SitemapLink href={routes.user.licenses} title="Licenses" description="Manage team access" />
                  <SitemapLink href={routes.user.downloads} title="Downloads" description="Download applications" />
                  <SitemapLink href={routes.user.support} title="Support" description="Help and support tickets" />
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center text-muted">
                <p className="mb-0 small">23 pages across 3 categories • Last updated January 8, 2026</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .sitemap-link {
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .sitemap-link .border {
          transition: all 0.2s ease;
        }
        
        .sitemap-link:hover .border {
          border-color: #000 !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .sitemap-link:hover .ri-arrow-right-line {
          color: #000 !important;
          transform: translateX(4px);
        }
        
        .sitemap-link .ri-arrow-right-line {
          transition: all 0.2s ease;
        }
      `}} />
    </>
  );
}
