import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AVIRIS - Advanced VPN & Cybersecurity Protection",
  description: "AVIRIS provides next-generation cybersecurity protection with AI-powered antivirus, secure VPN, and advanced threat detection for all your devices.",
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
