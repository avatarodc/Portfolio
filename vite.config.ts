import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { seo } from './src/data/seo';

// Liste des captures présentes dans public/images/projects, exposée au code par
// le module virtuel « virtual:project-images » : déposer gfa.png suffit à remplacer
// la couverture générée de la fiche GFA, sans toucher au code ni aux données.
const projectImagesPlugin = (): Plugin => {
  const moduleId = 'virtual:project-images';
  const resolvedId = '\0' + moduleId;
  const dir = path.resolve(__dirname, 'public/images/projects');
  return {
    name: 'project-images',
    resolveId: (id) => (id === moduleId ? resolvedId : undefined),
    load(id) {
      if (id !== resolvedId) return;
      const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)) : [];
      return `export default ${JSON.stringify(files)};`;
    },
    configureServer(server) {
      // en développement : nouvelle capture -> rechargement de la liste
      server.watcher.add(dir);
      server.watcher.on('add', (file) => {
        if (!file.startsWith(dir)) return;
        const mod = server.moduleGraph.getModuleById(resolvedId);
        if (mod) server.reloadModule(mod);
      });
    },
  };
};

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
  plugins: [react(), seoPlugin(), projectImagesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
