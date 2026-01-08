# Routing System Documentation

## Overview
This project uses a centralized routing system similar to Laravel's named routes. All routes are defined in `/src/config/routes.ts`, making it easy to change URLs without updating links throughout the application.

## Folder Structure

The project uses Next.js App Router with a clean folder structure (without route groups):

```
src/app/
├── front/              # Public pages (no URL prefix)
│   ├── blogs/
│   │   ├── [id]/      # Dynamic blog details
│   │   └── page.tsx
│   ├── pricing/
│   ├── features/
│   └── ...
├── auth/               # Authentication pages (no URL prefix)
│   ├── login/
│   ├── register/
│   └── ...
└── user/               # Dashboard pages (/user prefix)
    ├── profile/
    ├── settings/
    └── ...
```

## Route Structure

### Front Pages (Public - No Prefix)
- Home: `/`
- Features: `/features`
- Pricing: `/pricing`
- Downloads: `/downloads`
- Blogs: `/blogs`
- Blog Details: `/blogs/{id}`
- Business: `/business`
- Contact: `/contact`
- Affiliate: `/affiliate`
- Terms: `/terms`
- Privacy: `/privacy`
- Imprint: `/imprint`

### Auth Pages (No auth/ Prefix)
- Login: `/login`
- Register: `/register`
- Forgot Password: `/forgot-password`
- Reset Password: `/reset-password`

### User Dashboard Pages (/user Prefix)
- Dashboard: `/user`
- Profile: `/user/profile`
- Settings: `/user/settings`
- Billing: `/user/billing`
- Pricing: `/user/pricing`
- Downloads: `/user/downloads`
- Support: `/user/support`

## How to Use

### Import routes in your component:
```typescript
import { routes } from '@/config/routes';
```

### Use in Link components:
```typescript
// Front pages
<Link href={routes.home}>Home</Link>
<Link href={routes.pricing}>Pricing</Link>

// Auth pages
<Link href={routes.auth.login}>Login</Link>
<Link href={routes.auth.register}>Register</Link>

// User dashboard
<Link href={routes.user.dashboard}>Dashboard</Link>
<Link href={routes.user.profile}>Profile</Link>

// Dynamic routes (blog details)
<Link href={routes.blogDetails('123')}>Blog Post</Link>
```

### Check active route:
```typescript
const pathname = usePathname();
const isActive = pathname === routes.pricing;
```

## Benefits

1. **Centralized Management**: Change URLs in one place
2. **Type Safety**: TypeScript autocomplete for all routes
3. **Easy Refactoring**: Update route paths without searching the entire codebase
4. **Professional URLs**: Clean URLs without framework prefixes
5. **Consistent**: All team members use the same route definitions

## Folder Structure

The actual folder structure uses Next.js route groups (parentheses) to organize files without affecting URLs:

```
src/app/
├── (front)/          # Public pages - no prefix in URL
│   ├── page.tsx      # → /
│   ├── pricing/      # → /pricing
│   ├── features/     # → /features
│   └── ...
├── (auth)/           # Auth pages - no prefix in URL
│   ├── login/        # → /login
│   ├── register/     # → /register
│   └── ...
└── user/             # User dashboard - /user prefix
    ├── page.tsx      # → /user
    ├── profile/      # → /user/profile
    └── ...
```

## Adding New Routes

1. Add the route to `/src/config/routes.ts`:
```typescript
export const routes = {
  // ... existing routes
  newPage: '/new-page',
};
```

2. Create the page file in the appropriate folder:
```
src/app/(front)/new-page/page.tsx
```

3. Use the route in your components:
```typescript
<Link href={routes.newPage}>New Page</Link>
```

## Migration Notes

All navigation components have been updated to use the centralized routing system:
- `FrontendNav.tsx` - Front page navigation
- `UserDashboardNav.tsx` - User dashboard header
- `Sidebar.tsx` - User dashboard sidebar
- All other components with links

When creating new links, always use the `routes` object instead of hardcoding URLs.
