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

type SeoLang = 'fr' | 'en';
const SEO_START = '<!-- seo:start -->';
const SEO_END = '<!-- seo:end -->';

// Remplace les jetons %SEO_*% par les valeurs de src/data/seo.ts pour une langue
const fillSeo = (html: string, lang: SeoLang) => {
  const page = seo[lang];
  const other = seo[lang === 'fr' ? 'en' : 'fr'];
  const values: Record<string, string> = {
    LANG: page.lang,
    LOCALE: page.locale,
    LOCALE_ALT: other.locale,
    TITLE: page.title,
    DESCRIPTION: page.description,
    URL: `${seo.siteUrl}${page.path}`,
    URL_FR: `${seo.siteUrl}${seo.fr.path}`,
    URL_EN: `${seo.siteUrl}${seo.en.path}`,
    IMAGE: `${seo.siteUrl}${seo.image}`,
    IMAGE_WIDTH: String(seo.imageWidth),
    IMAGE_HEIGHT: String(seo.imageHeight),
    IMAGE_ALT: page.imageAlt,
  };
  return html.replace(/%SEO_([A-Z_]+)%/g, (token, key: string) => {
    if (!(key in values)) throw new Error(`Jeton SEO inconnu dans index.html : ${token}`);
    return escapeHtml(values[key]);
  });
};

// Page française : jetons remplacés dans index.html. Page anglaise : après le build,
// copie de dist/index.html (avec ses scripts et styles) dont le bloc SEO et la
// langue sont remplacés par les valeurs anglaises -> dist/en/index.html (servie sur /en/).
const seoPlugin = (): Plugin => {
  let template = '';
  let outDir = 'dist';
  return {
    name: 'portfolio-seo',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    // « pre » : avant l'analyse des URL de index.html par Vite
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => {
        for (const lang of ['fr', 'en'] as const) {
          const length = [...seo[lang].description].length;
          if (length > 160) throw new Error(`seo.${lang}.description dépasse 160 caractères (${length})`);
        }
        const start = html.indexOf(SEO_START);
        const end = html.indexOf(SEO_END);
        if (start < 0 || end < 0) throw new Error('Marqueurs seo:start / seo:end absents de index.html');
        template = html.slice(start, end + SEO_END.length);
        return fillSeo(html, 'fr');
      },
    },
    closeBundle() {
      const file = path.join(outDir, 'index.html');
      if (!template || !fs.existsSync(file)) return;
      const html = fs.readFileSync(file, 'utf8');
      const start = html.indexOf(SEO_START);
      const end = html.indexOf(SEO_END) + SEO_END.length;
      const english = (html.slice(0, start) + fillSeo(template, 'en') + html.slice(end)).replace(
        /<html lang="[a-z]+"/,
        `<html lang="${seo.en.lang}"`
      );
      fs.mkdirSync(path.join(outDir, 'en'), { recursive: true });
      fs.writeFileSync(path.join(outDir, 'en', 'index.html'), english);
    },
  };
};

export default defineConfig({
  plugins: [react(), seoPlugin(), projectImagesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
