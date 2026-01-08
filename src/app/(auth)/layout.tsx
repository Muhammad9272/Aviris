import type { Metadata } from 'next';
import './auth.css';

export const metadata: Metadata = {
  title: {
    default: 'Authentication - AVIRIS',
    template: '%s - AVIRIS',
  },
  description: 'Sign in or create your AVIRIS account to access advanced VPN protection, AI threat detection, and comprehensive cybersecurity features.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
