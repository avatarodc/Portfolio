import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { sections } from '@/data/profile';

// Module de la constellation (et d3-force) téléchargé seulement à l'approche de la section
const Constellation = lazy(() => import('./Constellation'));

const text = sections.constellation;

const Placeholder = () => (
  <div className="flex items-center justify-center min-h-[24rem] rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 text-sm text-gray-400 dark:text-gray-500">
    {text.loading}
  </div>
);

export const ConstellationSlot: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id="constellation" className="mt-20 scroll-mt-24">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white">{text.title}</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{text.subtitle}</p>
      </div>
      {visible ? (
        <Suspense fallback={<Placeholder />}>
          <Constellation />
        </Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};
