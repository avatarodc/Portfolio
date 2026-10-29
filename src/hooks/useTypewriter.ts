import { useEffect, useRef } from 'react';

interface TypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  // délai avant le premier mot : laisse le chargement de la page se terminer
  startDelay?: number;
}

/**
 * Effet machine à écrire.
 * Le texte est écrit directement dans l'élément via une ref : aucun re-rendu React
 * à chaque lettre (le curseur clignote en CSS). Avec prefers-reduced-motion,
 * le premier mot reste affiché sans animation.
 *
 * Usage:
 *   const ref = useTypewriter({ words: ['Développeur Full Stack', 'Flutter'] });
 *   <span ref={ref}>{words[0]}</span>
 */
export const useTypewriter = <T extends HTMLElement = HTMLSpanElement>({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000,
  startDelay = 1500,
}: TypewriterOptions) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || words.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = words[0];
      return;
    }

    let wordIndex = 0;
    let length = words[0].length;
    let deleting = true;
    let timeout: number;

    const tick = () => {
      const word = words[wordIndex];
      length += deleting ? -1 : 1;
      el.textContent = word.slice(0, length);

      if (!deleting && length === word.length) {
        deleting = true;
        timeout = window.setTimeout(tick, pauseTime);
        return;
      }
      if (deleting && length === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      timeout = window.setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
    };

    // Le premier mot est déjà affiché par le rendu initial : on commence par l'effacer
    timeout = window.setTimeout(tick, startDelay + pauseTime);
    return () => window.clearTimeout(timeout);
  }, [words, typingSpeed, deletingSpeed, pauseTime, startDelay]);

  return ref;
};
