import type { Metadata } from 'next';
import '../globals.css';
import '@/styles/userdashboard/dashboard.css';

import UserDashboardNav from '@/components/layout/UserDashboardNav';
import Sidebar from '@/components/layout/Sidebar';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    default: 'Dashboard - AVIRIS | Security Management',
    template: '%s - AVIRIS',
  },
  description: 'Manage your AVIRIS security account, monitor devices, control licenses, and access advanced cybersecurity features.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#f5f6f8', minHeight: '100vh' }}>
      <UserDashboardNav />
      
      <div className="container-fluid px-4 py-4">
        {/* Welcome Section */}
        <div className="welcome-user-section mb-3 d-flex align-items-center gap-3">
          <Image 
            src="https://ui-avatars.com/api/?name=Carlo&background=0B3D2E&color=fff&bold=true" 
            alt="Carlo" 
            width={60}
            height={60}
            unoptimized
            className="welcome-user-avatar rounded-3" 
          />
          <div>
            <div className="avr__text-primary fs-4 fw-semibold mb-1">Welcome Back! Carlo 👋</div>
            <p className="welcome-subtitle mb-0 opacity-75">Good Morning ☀️</p>
          </div>
        </div>

        <div className="row">
          <Sidebar />
          
          {/* Main Content */}
          <div className="col-lg-9 col-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
