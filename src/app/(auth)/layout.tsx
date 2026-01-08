import type { Metadata } from 'next';
import './auth.css';

export const metadata: Metadata = {
  title: 'Login - AVIRIS',
  description: 'Sign in to AVIRIS Dashboard',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
