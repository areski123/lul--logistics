import { useEffect } from 'react';

// Google Analytics component
const GoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    const GAID = import.meta.env.VITE_GA_ID || 'GA_MEASUREMENT_ID';
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GAID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GAID, {
      page_title: 'LULé - Logistique Urbaine de Livraison écologique',
      page_location: window.location.href,
    });

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', GAID, {
        page_path: window.location.pathname,
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default GoogleAnalytics;
