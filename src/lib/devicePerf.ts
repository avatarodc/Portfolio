/**
 * Détection des appareils sur lesquels les animations doivent être figées.
 * Le nombre de cœurs (hardwareConcurrency) n'est pas fiable : des Android
 * bas de gamme annoncent 8 cœurs. On combine donc un critère statique
 * (mémoire, économie de données, mouvement réduit) et une mesure réelle
 * de la fluidité pendant la première seconde d'animation.
 */

type NavigatorExtras = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Image fixe d'emblée : peu de mémoire (quand l'information existe) ou économie de données
export const isLowEndDevice = () => {
  const nav = navigator as NavigatorExtras;
  return (nav.deviceMemory !== undefined && nav.deviceMemory <= 4) || Boolean(nav.connection?.saveData);
};

export const shouldStayStatic = () => prefersReducedMotion() || isLowEndDevice();

/**
 * Mesure le temps moyen entre deux images pendant `duration` ms, après `warmup` ms
 * ignorées (fin du chargement de la page, qui fausserait la mesure).
 * Appelle onSlow si la moyenne dépasse `budget` ms (~40 images/s).
 * Retourne une fonction d'arrêt.
 */
export const watchFrameRate = (onSlow: () => void, { duration = 1000, budget = 25, warmup = 500 } = {}) => {
  let frame = 0;
  let start = 0;
  let previous = 0;
  let total = 0;
  let count = 0;
  let begin = 0;

  const step = (time: number) => {
    if (begin === 0) begin = time;
    if (time - begin < warmup) {
      frame = requestAnimationFrame(step);
      return;
    }
    if (start === 0) {
      start = previous = time;
    } else {
      total += time - previous;
      count += 1;
      previous = time;
    }
    // onglet en arrière-plan : la mesure n'a pas de sens, on recommence au retour
    if (document.hidden) {
      start = previous = 0;
      total = count = 0;
    }
    if (start !== 0 && time - start >= duration && count > 0) {
      if (total / count > budget) onSlow();
      return;
    }
    frame = requestAnimationFrame(step);
  };

  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
};
