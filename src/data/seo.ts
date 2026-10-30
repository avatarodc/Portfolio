/**
 * Métadonnées SEO et aperçus de liens (Google, LinkedIn, WhatsApp, X…), par langue.
 * Injectées dans index.html au build par vite.config.ts (version française), puis
 * recopiées dans dist/en/index.html avec les valeurs anglaises : chaque langue a
 * son propre HTML statique, sans attendre l'exécution de JavaScript.
 * Fichier séparé de profile.ts car il est lu par la configuration Vite (Node),
 * qui ne peut pas charger les icônes React de profile.ts.
 */
export const seo = {
  siteUrl: 'https://mamadou-gueye.vercel.app',
  image: '/og-image.png',
  imageWidth: 1200,
  imageHeight: 630,
  // 160 caractères maximum pour chaque description (vérifié au build)
  fr: {
    lang: 'fr',
    locale: 'fr_FR',
    path: '/',
    title: 'Mamadou Gueye — Développeur Full Stack',
    description:
      'Développeur Full Stack à Dakar : Java/Spring Boot, PHP/Laravel, Angular/React, Flutter et IA. Applications en production, produits SaaS et projets.',
    imageAlt: 'Mamadou Gueye — Développeur Full Stack, Dakar',
  },
  en: {
    lang: 'en',
    locale: 'en_US',
    path: '/en/',
    title: 'Mamadou Gueye — Full Stack Developer',
    description:
      'Full Stack Developer in Dakar: Java/Spring Boot, PHP/Laravel, Angular/React, Flutter and AI. Applications in production, SaaS products and projects.',
    imageAlt: 'Mamadou Gueye — Full Stack Developer, Dakar',
  },
};
