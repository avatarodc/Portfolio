/// <reference types="vite/client" />

// Fichiers de public/images/projects (voir projectImagesPlugin dans vite.config.ts)
declare module 'virtual:project-images' {
  const files: string[];
  export default files;
}
