import { useEffect, useRef, useState, type RefObject } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook pour animer les éléments quand ils apparaissent dans le viewport.
 *
 * Usage:
 *   const { ref, isVisible } = useScrollReveal();
 *   <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
 */
export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options?: ScrollRevealOptions
): { ref: RefObject<T | null>; isVisible: boolean } => {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const { threshold = 0.15, rootMargin = '0px', triggerOnce = true } = options || {};

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options]);

  return { ref, isVisible };
};