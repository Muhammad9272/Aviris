import Link from 'next/link';
import type { Metadata } from 'next';
import { routes } from '@/config/routes';

export const metadata: Metadata = {
  title: 'Sitemap - AVIRIS | All Pages',
  description: 'Complete sitemap of all AVIRIS pages for easy navigation and testing.',
};

export default function SitemapPage() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-white mb-3">
                <i className="fas fa-sitemap me-3"></i>
                AVIRIS Sitemap
              </h1>
              <p className="lead text-white opacity-75">Complete list of all pages for easy navigation and testing</p>
            </div>

            {/* Front Pages Section */}
            <div className="card shadow-lg mb-4" style={{ borderRadius: '15px', border: 'none' }}>
              <div className="card-header text-white" style={{ background: 'linear-gradient(135deg, #0B3D2E 0%, #16a34a 100%)', borderRadius: '15px 15px 0 0', padding: '20px' }}>
                <h3 className="mb-0 fw-bold">
                  <i className="fas fa-globe me-2"></i>
                  Public Pages
                </h3>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <Link href={routes.home} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f0fdf4' }}>
                            <i className="fas fa-home text-success fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Home</h6>
                          <small className="text-muted">/</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.pricing} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#fef3c7' }}>
                            <i className="fas fa-tags text-warning fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Pricing</h6>
                          <small className="text-muted">/pricing</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.features} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#dbeafe' }}>
                            <i className="fas fa-shield-alt text-primary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Features</h6>
                          <small className="text-muted">/features</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.downloads} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#e0e7ff' }}>
                            <i className="fas fa-download text-info fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Downloads</h6>
                          <small className="text-muted">/downloads</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.blogs} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#fce7f3' }}>
                            <i className="fas fa-blog text-danger fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Blogs</h6>
                          <small className="text-muted">/blogs</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.blogDetails('1')} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#fce7f3' }}>
                            <i className="fas fa-file-alt text-danger fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Blog Details (Sample)</h6>
                          <small className="text-muted">/blogs/1</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.business} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-briefcase text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">For Business</h6>
                          <small className="text-muted">/business</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.contact} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#fed7aa' }}>
                            <i className="fas fa-envelope text-orange fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Contact Us</h6>
                          <small className="text-muted">/contact</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.terms} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#e5e7eb' }}>
                            <i className="fas fa-file-contract text-secondary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Terms & Conditions</h6>
                          <small className="text-muted">/terms</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.privacy} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#e5e7eb' }}>
                            <i className="fas fa-user-shield text-secondary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Privacy Policy</h6>
                          <small className="text-muted">/privacy</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.imprint} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#e5e7eb' }}>
                            <i className="fas fa-info-circle text-secondary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Imprint</h6>
                          <small className="text-muted">/imprint</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Auth Pages Section */}
            <div className="card shadow-lg mb-4" style={{ borderRadius: '15px', border: 'none' }}>
              <div className="card-header text-white" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', borderRadius: '15px 15px 0 0', padding: '20px' }}>
                <h3 className="mb-0 fw-bold">
                  <i className="fas fa-lock me-2"></i>
                  Authentication Pages
                </h3>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <Link href={routes.auth.login} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#dbeafe' }}>
                            <i className="fas fa-sign-in-alt text-primary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Login</h6>
                          <small className="text-muted">/login</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.auth.register} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#dbeafe' }}>
                            <i className="fas fa-user-plus text-primary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Register</h6>
                          <small className="text-muted">/register</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.auth.forgotPassword} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#dbeafe' }}>
                            <i className="fas fa-key text-primary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Forgot Password</h6>
                          <small className="text-muted">/forgot-password</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.auth.resetPassword} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#dbeafe' }}>
                            <i className="fas fa-redo text-primary fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Reset Password</h6>
                          <small className="text-muted">/reset-password</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* User Dashboard Section */}
            <div className="card shadow-lg mb-4" style={{ borderRadius: '15px', border: 'none' }}>
              <div className="card-header text-white" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', borderRadius: '15px 15px 0 0', padding: '20px' }}>
                <h3 className="mb-0 fw-bold">
                  <i className="fas fa-user-circle me-2"></i>
                  User Dashboard Pages
                </h3>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <Link href={routes.user.dashboard} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-tachometer-alt text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Dashboard</h6>
                          <small className="text-muted">/user</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.user.profile} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-user text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Profile</h6>
                          <small className="text-muted">/user/profile</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.user.settings} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-cog text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Settings</h6>
                          <small className="text-muted">/user/settings</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.user.billing} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-credit-card text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Billing</h6>
                          <small className="text-muted">/user/billing</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.user.pricing} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-dollar-sign text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Pricing Plans</h6>
                          <small className="text-muted">/user/pricing</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.user.downloads} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-download text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Downloads</h6>
                          <small className="text-muted">/user/downloads</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link href={routes.user.support} className="d-block p-3 border rounded text-decoration-none hover-shadow" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', background: '#f3e8ff' }}>
                            <i className="fas fa-headset text-purple fs-5"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0 fw-semibold text-dark">Support</h6>
                          <small className="text-muted">/user/support</small>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="text-center mt-4">
              <div className="alert alert-light shadow-sm" style={{ borderRadius: '15px' }}>
                <i className="fas fa-info-circle text-primary me-2"></i>
                <strong>Total Pages:</strong> <span className="badge bg-primary">25</span>
                <span className="mx-2">|</span>
                <strong>Last Updated:</strong> January 7, 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hover-shadow:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-2px);
        }
        .text-purple {
          color: #7c3aed !important;
        }
        .text-orange {
          color: #f97316 !important;
        }
      `}} />
    </div>
  );
}
