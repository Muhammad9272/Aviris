import Script from 'next/script';
import FrontendNav from '@/components/layout/FrontendNav';
import Footer from '@/components/layout/Footer';
import ClientInit from '@/components/ClientInit';
import '../globals.css';
import '@/styles/front/style.css';
import 'swiper/css/bundle';

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Front-End Specific CSS */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.11.0/css/flag-icons.min.css" rel="stylesheet" />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      
      <FrontendNav />
      {children}
      <Footer />
      
      <ClientInit />
      
      {/* Front-End Specific Scripts */}
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
    </>
  );
}
