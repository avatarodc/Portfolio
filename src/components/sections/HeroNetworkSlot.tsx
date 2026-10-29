import { lazy, Suspense, useEffect, useState } from 'react';

// Réseau du Hero chargé quand le navigateur est au repos, après l'affichage du texte
const HeroNetwork = lazy(() => import('./HeroNetwork'));

// Image fixe si mouvement réduit, appareil faible ou économie de données
const canAnimate = () => {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return (
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    (navigator.hardwareConcurrency || 8) > 4 &&
    !nav.connection?.saveData
  );
};

export const HeroNetworkSlot: React.FC = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1500);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <HeroNetwork animate={canAnimate()} />
    </Suspense>
  );
};
