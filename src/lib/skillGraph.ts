/**
 * Construit le graphe de la constellation à partir des données de profile.ts :
 * compétences (section Compétences) reliées aux projets et aux postes
 * (les archives de formation n'y figurent pas).
 * qui les utilisent. Aucune donnée n'est saisie deux fois.
 */
import { Category, Experience, Project } from '@/types';
import { expandSkillLabel, techKey } from './skills';

export type GraphNodeKind = 'skill' | 'project' | 'company';

export interface GraphNode {
  id: string;
  kind: GraphNodeKind;
  label: string;
  // index de la catégorie de compétence (couleur)
  category?: number;
  // ancre vers la fiche détaillée sur la page
  anchor?: string;
  degree: number;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface SkillGraph {
  nodes: GraphNode[];
  links: GraphLink[];
  neighbors: Map<string, Set<string>>;
  // compétences de la liste sans aucun projet ni poste lié
  unlinkedSkills: string[];
}

interface GraphInput {
  skillCategories: Category[];
  projects: Project[];
  experiences: Experience[];
  aliases: Record<string, string[]>;
}

export const buildSkillGraph = ({
  skillCategories,
  projects,
  experiences,
  aliases,
}: GraphInput): SkillGraph => {
  // Nœuds compétences : les libellés de la section Compétences, décomposés
  const skills = new Map<string, GraphNode>();
  skillCategories.forEach((category, index) => {
    category.skills.forEach((label) => {
      expandSkillLabel(label).forEach((part) => {
        const key = techKey(part);
        if (!skills.has(key)) {
          skills.set(key, { id: `skill:${key}`, kind: 'skill', label: part, category: index, degree: 0 });
        }
      });
    });
  });

  const aliasMap = new Map(
    Object.entries(aliases).map(([from, to]) => [techKey(from), to.map(techKey)])
  );
  // Une techno d'une stack compte pour elle-même et pour ses équivalences
  const skillKeysOf = (stack: string[]) => {
    const keys = new Set<string>();
    stack.forEach((tech) => {
      [techKey(tech), ...(aliasMap.get(techKey(tech)) || [])].forEach((key) => {
        if (skills.has(key)) keys.add(key);
      });
    });
    return keys;
  };

  // companyId : entreprise qui a réalisé le site client
  const owners: { node: GraphNode; keys: Set<string>; companyId?: string }[] = [
    ...projects.map((p) => ({
      node: { id: `project:${p.id}`, kind: 'project' as const, label: p.shortTitle ?? p.title, anchor: `#projet-${p.id}`, degree: 0 },
      keys: skillKeysOf(p.stack),
    })),
    ...experiences.map((e) => ({
      node: { id: `company:${e.id}`, kind: 'company' as const, label: e.company, anchor: '#experience', degree: 0 },
      keys: skillKeysOf(e.stack || []),
    })),
    // sites clients avec une stack renseignée (ex. réalisations WBCC) : traités comme des projets
    ...experiences.flatMap((e) =>
      (e.clientLinks || [])
        .filter((c) => c.stack && c.stack.length > 0)
        .map((c) => ({
          node: { id: `client:${e.id}:${techKey(c.label)}`, kind: 'project' as const, label: c.label, anchor: '#experience', degree: 0 },
          keys: skillKeysOf(c.stack!),
          companyId: `company:${e.id}`,
        }))
    ),
  ].filter((owner) => owner.keys.size > 0);

  const links: GraphLink[] = [];
  // site client relié à l'entreprise qui l'a réalisé
  owners.forEach((owner) => {
    const company = owner.companyId ? owners.find((o) => o.node.id === owner.companyId) : undefined;
    if (!company) return;
    links.push({ source: company.node.id, target: owner.node.id });
    company.node.degree += 1;
    owner.node.degree += 1;
  });
  owners.forEach(({ node, keys }) => {
    keys.forEach((key) => {
      const skill = skills.get(key)!;
      links.push({ source: node.id, target: skill.id });
      skill.degree += 1;
      node.degree += 1;
    });
  });

  const linkedSkills = [...skills.values()].filter((s) => s.degree > 0);
  const nodes = [...linkedSkills, ...owners.map((o) => o.node)];

  const neighbors = new Map<string, Set<string>>(nodes.map((n) => [n.id, new Set<string>()]));
  links.forEach(({ source, target }) => {
    neighbors.get(source)!.add(target);
    neighbors.get(target)!.add(source);
  });

  return {
    nodes,
    links,
    neighbors,
    unlinkedSkills: [...skills.values()].filter((s) => s.degree === 0).map((s) => s.label),
  };
};
