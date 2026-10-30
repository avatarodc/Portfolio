import {
  skillCategories,
  projectList,
  experienceList,
  archiveProjects,
  techAliases,
  sections,
} from '@/data/profile';
import { buildSkillGraph, SkillGraph } from '@/lib/skillGraph';
import { Project } from '@/types';

// Mêmes teintes que la constellation et les cartes Compétences
const categoryColors = ['#3b82f6', '#10b981', '#a855f7', '#f59e0b'];

let graph: SkillGraph | null = null;
const getGraph = () =>
  (graph ??= buildSkillGraph({
    skillCategories,
    projects: projectList,
    experiences: experienceList,
    archives: archiveProjects,
    archivesLabel: sections.constellation.archivesLabel,
    aliases: techAliases,
  }));

// Nombre pseudo-aléatoire stable dérivé de l'identifiant : même couverture à chaque visite
const hashOf = (text: string) => [...text].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7);

/**
 * Couverture générée pour un projet sans capture : nom, icône du domaine et motif
 * abstrait tiré de la constellation (le projet au centre, ses compétences en anneau).
 * Volontairement sans rien qui imite une interface.
 */
export const ProjectCover: React.FC<{ project: Project }> = ({ project }) => {
  const g = getGraph();
  const skills = [...(g.neighbors.get(`project:${project.id}`) || [])]
    .map((id) => g.nodes.find((n) => n.id === id)!)
    .filter(Boolean);
  const seed = hashOf(project.id);
  const rotation = ((seed >>> 0) % 360) * (Math.PI / 180);
  const cx = 300;
  const cy = 88;
  const ring = 62;
  const points = skills.map((skill, i) => {
    const angle = rotation + (2 * Math.PI * i) / Math.max(skills.length, 1);
    const wobble = ((seed >>> (i % 16)) & 7) - 3;
    return {
      x: cx + (ring + wobble * 3) * Math.cos(angle),
      y: cy + (ring + wobble * 3) * Math.sin(angle),
      color: categoryColors[(skill.category ?? 0) % categoryColors.length],
      r: 3 + Math.min(skill.degree, 5) * 0.7,
    };
  });
  const Icon = project.coverIcon;

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/60">
      <svg viewBox="0 0 400 176" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <circle cx={cx} cy={cy} r={ring} fill="none" className="stroke-blue-200 dark:stroke-blue-500/20" strokeDasharray="2 5" />
        <circle cx={cx} cy={cy} r={ring + 34} fill="none" className="stroke-blue-100 dark:stroke-blue-500/10" />
        {points.map((p, i) => (
          <line key={`l${i}`} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={p.color} strokeOpacity={0.35} strokeWidth={1} />
        ))}
        {points.map((p, i) => (
          <circle key={`p${i}`} cx={p.x} cy={p.y} r={p.r} fill={p.color} fillOpacity={0.8} />
        ))}
        <rect x={cx - 7} y={cy - 7} width={14} height={14} rx={3} className="fill-slate-500 dark:fill-slate-400" />
      </svg>
      <div className="absolute left-5 bottom-5 right-32 flex items-center gap-3">
        <span className="p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 flex-shrink-0">
          <Icon size={26} className="text-blue-600 dark:text-blue-400" />
        </span>
        <span className="text-lg font-black tracking-tight leading-tight text-gray-900 dark:text-white">
          {project.shortTitle ?? project.title}
        </span>
      </div>
    </div>
  );
};
