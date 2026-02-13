import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';

    // 1. Priorité au choix sauvegardé par l'utilisateur
    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;

    // 2. Sinon, préférence système
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const darkMode = theme === 'dark';

  // Synchronise la classe CSS et le localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    root.style.colorScheme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme, darkMode]);

  // Écoute les changements de préférence système
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      // Ne change que si l'utilisateur n'a pas fait de choix manuel
      if (!localStorage.getItem('portfolio-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, darkMode, setTheme, toggleTheme };
};