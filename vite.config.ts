import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { seo } from './src/data/seo';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Remplace les jetons %SEO_*% de index.html par les valeurs de src/data/seo.ts
const seoPlugin = (): Plugin => ({
  name: 'portfolio-seo',
  // « pre » : avant l'analyse des URL de index.html par Vite
  transformIndexHtml: { order: 'pre', handler: (html) => {
    if ([...seo.description].length > 160) {
      throw new Error(`seo.description dépasse 160 caractères (${[...seo.description].length})`);
    }
    const values: Record<string, string> = {
      LANG: seo.lang,
      LOCALE: seo.locale,
      TITLE: seo.title,
      DESCRIPTION: seo.description,
      URL: `${seo.siteUrl}/`,
      IMAGE: `${seo.siteUrl}${seo.image}`,
      IMAGE_WIDTH: String(seo.imageWidth),
      IMAGE_HEIGHT: String(seo.imageHeight),
      IMAGE_ALT: seo.imageAlt,
    };
    return html.replace(/%SEO_([A-Z_]+)%/g, (token, key: string) => {
      if (!(key in values)) throw new Error(`Jeton SEO inconnu dans index.html : ${token}`);
      return escapeHtml(values[key]);
    });
  } },
});

export default defineConfig({
  plugins: [react(), seoPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
