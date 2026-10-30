import { lazy, Suspense, useEffect, useState } from 'react';
import { shouldStayStatic } from '@/lib/devicePerf';

// Réseau du Hero chargé quand le navigateur est au repos, après l'affichage du texte
const HeroNetwork = lazy(() => import('./HeroNetwork'));

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
      {/* image fixe d'emblée si mouvement réduit, peu de mémoire ou économie de données */}
      <HeroNetwork animate={!shouldStayStatic()} />
    </Suspense>
  );
};
