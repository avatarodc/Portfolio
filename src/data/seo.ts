/**
 * Métadonnées SEO et aperçus de liens (Google, LinkedIn, WhatsApp, X…).
 * Injectées dans index.html au build par vite.config.ts : elles sont présentes
 * dans le HTML statique, sans attendre l'exécution de JavaScript.
 * Fichier séparé de profile.ts car il est lu par la configuration Vite (Node),
 * qui ne peut pas charger les icônes React de profile.ts.
 */
export const seo = {
  siteUrl: 'https://mamadou-gueye.vercel.app',
  lang: 'fr',
  locale: 'fr_FR',
  title: 'Mamadou Gueye — Développeur Full Stack',
  // 160 caractères maximum (vérifié au build)
  description:
    'Développeur Full Stack à Dakar : Java/Spring Boot, PHP/Laravel, Angular/React, Flutter et IA. Applications en production, produits SaaS et projets.',
  image: '/og-image.png',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Mamadou Gueye — Développeur Full Stack, Dakar',
};
