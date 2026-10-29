/**
 * Règles qui relient les technologies écrites dans profile.ts (stacks des projets
 * et des postes, liste des compétences), sans dupliquer de données.
 */

// Retire un numéro de version final : « Java 21 » → « Java », « Angular 18 » → « Angular ».
// « YOLOv8 » est conservé (version collée au nom).
export const normalizeTech = (name: string): string =>
  name.trim().replace(/\s+v?\d+(\.\d+)*$/i, '');

export const techKey = (name: string): string => normalizeTech(name).toLowerCase();

// Décompose un libellé de la section Compétences en technologies :
// « Java / Spring Boot » → [Java, Spring Boot] ; « CI/CD (GitLab, GitHub) » → [CI/CD, GitLab, GitHub]
export const expandSkillLabel = (label: string): string[] => {
  const match = /^(.*?)\s*\(([^)]*)\)\s*$/.exec(label);
  const base = match ? match[1] : label;
  const inner = match ? match[2].split(',') : [];
  return [...base.split(' / '), ...inner].map((part) => normalizeTech(part)).filter(Boolean);
};
