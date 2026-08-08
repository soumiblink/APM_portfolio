'use client';

import { useEffect } from 'react';

/**
 * Suppresses console errors from browser extensions like MetaMask
 * that try to inject into the page but aren't needed for this application.
 * Only active in development mode.
 */
export function ExtensionErrorSuppressor() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message = reason?.message || String(reason);
      
      // Suppress known browser extension errors
      if (
        message.includes('MetaMask') ||
        message.includes('chrome-extension://') ||
        message.includes('Failed to connect to')
      ) {
        event.preventDefault();
        // Silently ignore these errors
        return;
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}
