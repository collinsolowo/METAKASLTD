import { useEffect } from 'react';

declare global {
  interface Window {
    AOS: {
      init: (options?: unknown) => void;
      refresh: () => void;
    };
  }
}

export const useAOS = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  });
};
