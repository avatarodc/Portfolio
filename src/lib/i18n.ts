/**
 * Textes bilingues : dans profile.ts, chaque chaîne traduisible s'écrit { fr, en }.
 * La langue est fixée au chargement par l'URL (/en = anglais) ; changer de langue
 * recharge la page sur l'autre URL, ce qui donne à chaque langue son propre HTML
 * (titre, description, aperçus de liens) sans pré-rendu.
 */

export type Lang = 'fr' | 'en';

export interface L {
  fr: string;
  en: string;
}

// Type « source » d'une donnée : toute chaîne peut être fournie en { fr, en }.
// Les composants React (icônes lucide) et les fonctions restent tels quels.
export type Localizable<T> = T extends string
  ? string | L
  : T extends { $$typeof: symbol }
    ? T
    : T extends (...args: never[]) => unknown
      ? T
      : T extends readonly (infer U)[]
        ? Localizable<U>[]
        : T extends object
          ? { [K in keyof T]: Localizable<T[K]> }
          : T;

export const isL = (value: unknown): value is L =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  Object.keys(value).length === 2 &&
  typeof (value as L).fr === 'string' &&
  typeof (value as L).en === 'string';

// Remplace récursivement chaque { fr, en } par la chaîne de la langue demandée
export const localize = <T>(value: Localizable<T>, lang: Lang): T => {
  const walk = (v: unknown): unknown => {
    if (isL(v)) return v[lang];
    if (Array.isArray(v)) return v.map(walk);
    if (typeof v === 'object' && v !== null && !('$$typeof' in v)) {
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    }
    return v;
  };
  return walk(value) as T;
};

export const LANG_STORAGE_KEY = 'portfolio-lang';

export const currentLang: Lang =
  typeof window !== 'undefined' && /^\/en(\/|$)/.test(window.location.pathname) ? 'en' : 'fr';

// Chemin de la page dans l'autre langue (même ancre)
export const pathFor = (lang: Lang) => (lang === 'en' ? '/en/' : '/');

// Mémorise le choix (try/catch : stockage parfois indisponible, ex. navigation privée)
export const rememberLang = (lang: Lang) => {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* préférence non mémorisée : sans conséquence */
  }
};
