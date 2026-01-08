/**
 * Centralized Route Configuration
 * All application routes are defined here for easy maintenance
 * 
 * Note: Folders (front) and (auth) use route groups (parentheses)
 * which organize files without creating URL segments.
 * This means (front)/pricing/page.tsx creates URL: /pricing (not /front/pricing)
 */

export const routes = {
  // Front Pages (Public - No URL prefix)
  home: '/',
  features: '/features',
  pricing: '/pricing',
  downloads: '/downloads',
  blogs: '/blogs',
  blogDetails: (id: string) => `/blogs/${id}`,
  business: '/business',
  contact: '/contact',
  terms: '/terms',
  privacy: '/privacy',
  imprint: '/imprint',
  sitemap: '/sitemap',

  // Auth Pages (No URL prefix)
  auth: {
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
  },

  // User Dashboard Pages (/user prefix)
  user: {
    dashboard: '/user',
    profile: '/user/profile',
    settings: '/user/settings',
    billing: '/user/billing',
    pricing: '/user/pricing',
    downloads: '/user/downloads',
    support: '/user/support',
    licenses: '/user/licenses',
  },
} as const;

// Helper function to get route
export const getRoute = (path: string) => {
  return path;
};

// Type for route keys
export type Routes = typeof routes;
