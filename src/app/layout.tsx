import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://aviris.com'),
  title: {
    default: 'AVIRIS - Advanced VPN & Cybersecurity Protection',
    template: '%s | AVIRIS'
  },
  description: 'AVIRIS provides next-generation cybersecurity protection with AI-powered antivirus, secure VPN, and advanced threat detection for all your devices.',
  keywords: ['AVIRIS', 'VPN', 'cybersecurity', 'antivirus', 'AI security', 'online privacy', 'malware protection', 'secure browsing'],
  authors: [{ name: 'AVIRIS' }],
  creator: 'AVIRIS',
  publisher: 'AVIRIS',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/front/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/front/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/front/favicon/favicon.ico' },
    ],
    apple: [
      { url: '/front/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/front/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome',
        url: '/front/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/front/favicon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aviris.com',
    siteName: 'AVIRIS',
    title: 'AVIRIS - Advanced VPN & Cybersecurity Protection',
    description: 'AVIRIS provides next-generation cybersecurity protection with AI-powered antivirus, secure VPN, and advanced threat detection for all your devices.',
    images: [
      {
        url: '/front/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'AVIRIS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aviris',
    creator: '@aviris',
    title: 'AVIRIS - Advanced VPN & Cybersecurity Protection',
    description: 'AVIRIS provides next-generation cybersecurity protection with AI-powered antivirus, secure VPN, and advanced threat detection for all your devices.',
    images: ['/front/img/logo.png'],
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://aviris.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Remix Icon */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" />
        
        {/* Flag Icons */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icons/6.11.0/css/flag-icons.min.css" rel="stylesheet" />

  

      </head>
      <body>
        {children}
        
        {/* Bootstrap JS */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
