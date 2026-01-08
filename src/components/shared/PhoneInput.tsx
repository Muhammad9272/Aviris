'use client';

import { useEffect, useRef } from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  className?: string;
  placeholder?: string;
  showVerifiedBadge?: boolean;
}

export default function PhoneInput({ 
  value, 
  onChange, 
  id = 'phone', 
  className = 'form-control',
  placeholder = '',
  showVerifiedBadge = false
}: PhoneInputProps) {
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const itiInstanceRef = useRef<any>(null);
  const scriptLoadedRef = useRef(false);
  const cssLoadedRef = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const countryChangeListenerRef = useRef<(() => void) | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    // Load CSS
    if (!cssLoadedRef.current && typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.1/build/css/intlTelInput.css';
      document.head.appendChild(link);
      cssLoadedRef.current = true;
    }

    // Load JS
    const loadScript = () => {
      return new Promise<void>((resolve) => {
        if ((window as any).intlTelInput) {
          resolve();
          return;
        }

        if (scriptLoadedRef.current) {
          const checkInterval = setInterval(() => {
            if ((window as any).intlTelInput) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 50);
          setTimeout(() => clearInterval(checkInterval), 5000);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.1/build/js/intlTelInput.min.js';
        script.async = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
          resolve();
        };
        document.body.appendChild(script);
      });
    };

    const initializeIntlTelInput = () => {
      const inputElement = phoneInputRef.current;
      if (inputElement && (window as any).intlTelInput && !itiInstanceRef.current) {
        itiInstanceRef.current = (window as any).intlTelInput(inputElement, {
          initialCountry: "de",
          preferredCountries: ["de", "gb", "us", "fr"],
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.1/build/js/utils.js"
        });

        const handleCountryChange = () => {
          if (itiInstanceRef.current) {
            onChangeRef.current?.(itiInstanceRef.current.getNumber());
          }
        };

        inputElement.addEventListener('countrychange', handleCountryChange);
        countryChangeListenerRef.current = handleCountryChange;
      }
    };

    loadScript().then(initializeIntlTelInput);

    return () => {
      if (phoneInputRef.current && countryChangeListenerRef.current) {
        phoneInputRef.current.removeEventListener('countrychange', countryChangeListenerRef.current);
        countryChangeListenerRef.current = null;
      }

      if (itiInstanceRef.current) {
        itiInstanceRef.current.destroy?.();
        itiInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        .phone-wrapper {
          position: relative;
          width: 100%;
        }
        
        .iti {
          width: 100% !important;
        }
        
        .iti__selected-country-primary {
          background: #f3f3f3;
          border-radius: 10px 0px 0px 10px;
          padding: 12px;
        }
        
        .verified-badge {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          border-radius: 10px;
          padding: 4px 10px;
          background: #8bbcae45;
          color: #1a5e4a;
          font-size: 0.75rem;
          white-space: nowrap;
          z-index: 10;
        }
      `}</style>

      <div className="phone-wrapper" ref={wrapperRef}>
        <input
          type="tel"
          id={id}
          ref={phoneInputRef}
          className="form-control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        {showVerifiedBadge && (
          <span className="verified-badge">
            <i className="ri-checkbox-circle-fill me-1"></i>
            Verified
          </span>
        )}
      </div>
    </>
  );
}
