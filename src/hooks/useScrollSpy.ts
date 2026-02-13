// src/hooks/useScrollSpy.ts
import { useState, useEffect, useRef } from 'react';

/**
 * Hook qui détecte la section visible à l'écran via IntersectionObserver.
 * Beaucoup plus performant que l'ancien scroll listener.
 */
export const useScrollSpy = (
  sectionIds: string[],
  options?: { threshold?: number; rootMargin?: string }
) => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const { threshold = 0.3, rootMargin = '0px 0px -40% 0px' } = options || {};

    // Map pour stocker les ratios de visibilité de chaque section
    const visibilityMap = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // La section la plus visible devient active
        let maxRatio = 0;
        let mostVisible = activeSection;

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (mostVisible && maxRatio > 0) {
          setActiveSection(mostVisible);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1],
        rootMargin,
      }
    );

    // Observer chaque section
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
};