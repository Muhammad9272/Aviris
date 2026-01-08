'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    AOS: any;
    bootstrap: any;
  }
}

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS when component mounts and window is ready
    const initAOS = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          once: true,
          mirror: false,
          anchorPlacement: 'top-bottom',
          duration: 1000,
          offset: 100,
        });
        
        // Refresh AOS to detect elements
        setTimeout(() => {
          window.AOS.refresh();
        }, 100);
      }
    };

    // Try to initialize immediately
    initAOS();

    // Also try after a delay to ensure AOS library is loaded
    const timer = setTimeout(initAOS, 500);
    
    // Additional refresh after longer delay for route changes
    const refreshTimer = setTimeout(() => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    }, 1000);

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-custom');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(refreshTimer);
      window.removeEventListener('scroll', handleScroll);
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
