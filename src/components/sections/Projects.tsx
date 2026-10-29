import { useState } from 'react';
import { ArchiveProject, Project, ProjectGroup, ProjectStatus, SectionText } from '@/types';
import {
  Github,
  Calendar,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Lock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { sections, projectList, archiveProjects } from '@/data/profile';

const labels = sections.projectLabels;

const statusStyles: Record<ProjectStatus, string> = {
  production: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  deploiement: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  encours: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  developpement: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  terrain: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
  pilote: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400',
  prototype: 'bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400',
  academique: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
};

// Lien vers un dépôt GitHub/GitLab : « Code », sinon « Site »
const isRepoUrl = (url: string) => /^https:\/\/(github|gitlab)\.com\//.test(url);

const StatusBadge: React.FC<{ project: Project; className?: string }> = ({ project, className = '' }) => (
  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[project.status]} ${className}`}>
    {labels.statuses[project.status]}
    {project.statusNote && ` · ${project.statusNote}`}
  </span>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.article
    id={`projet-${project.id}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: (index % 3) * 0.1, duration: 0.4 }}
    className="group scroll-mt-24"
  >
    <div className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 transition duration-300 hover:-translate-y-1">
      {/* Capture d'écran : affichée seulement si elle existe (liste des captures attendues : docs/captures-a-fournir.md) */}
      {project.image && (
        <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <StatusBadge project={project} className="absolute top-3 left-3 backdrop-blur-sm" />
        </div>
      )}

      <div className="flex-1 p-5 flex flex-col">
        {!project.image && <StatusBadge project={project} className="self-start mb-3" />}

        {/* Cadre du projet */}
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
          {project.contextAnchor ? (
            <a href={project.contextAnchor} className="inline-flex items-center gap-1 hover:underline">
              {project.context}
              <span className="normal-case tracking-normal font-medium text-gray-400 dark:text-gray-500">
                · {labels.contextLink}
              </span>
            </a>
          ) : (
            project.context
          )}
        </p>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
          {project.problem}
        </p>

        {project.details && project.details.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {project.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <ChevronRight size={14} className="mt-0.5 text-blue-500 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Stack */}
        {project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span className="font-semibold text-gray-700 dark:text-gray-300">{labels.role} :</span>{' '}
          {project.role}
        </p>

        {/* Liens */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.links.map(({ kind, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {kind === 'code' ? <Github size={16} /> : <ExternalLink size={16} />}
              {labels.links[kind]}
            </a>
          ))}
          {project.privateCode && (
            <span className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
              <Lock size={14} />
              {labels.privateCode}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.article>
);

interface ProjectGroupSectionProps {
  id: string;
  group: ProjectGroup;
  text: SectionText;
  shaded?: boolean;
  children?: React.ReactNode;
}

const ProjectGroupSection: React.FC<ProjectGroupSectionProps> = ({ id, group, text, shaded, children }) => {
  const projects = projectList.filter((p) => p.group === group);
  return (
    <section id={id} className={`py-24 px-6 ${shaded ? 'bg-gray-50/50 dark:bg-gray-900/50' : ''}`}>
      <div className="container mx-auto max-w-7xl">
        <SectionHeader title={text.title} subtitle={text.subtitle} />
        {children}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects: React.FC = () => (
  <ProjectGroupSection id="projects" group="production" text={sections.projects} />
);

export const Products: React.FC = () => (
  <ProjectGroupSection id="produits" group="produits" text={sections.products} shaded />
);

export const AiProjects: React.FC = () => (
  <ProjectGroupSection id="ia" group="ia" text={sections.ai}>
    {/* Méthode de travail avec l'IA */}
    <div className="max-w-3xl mx-auto mb-10 flex items-start gap-4 p-5 rounded-2xl border border-blue-200/60 dark:border-blue-500/20 bg-blue-50/50 dark:bg-blue-500/5">
      <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex-shrink-0">
        <Sparkles size={20} className="text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 dark:text-white">{sections.ai.workflowTitle}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{sections.ai.workflowText}</p>
      </div>
    </div>
  </ProjectGroupSection>
);

const ArchiveCard: React.FC<{ project: ArchiveProject }> = ({ project }) => (
  <div className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 overflow-hidden">
    {project.image && (
      <div className="relative h-36 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
          {project.category}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm rounded-full text-white">
          <Calendar size={12} />
          {project.date}
        </span>
      </div>
    )}
    <div className="flex-1 p-5 flex flex-col">
      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.link && (
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {isRepoUrl(project.link) ? <Github size={16} /> : <ArrowUpRight size={16} />}
            {isRepoUrl(project.link) ? labels.links.code : labels.links.site}
          </a>
        </div>
      )}
    </div>
  </div>
);

export const Archives: React.FC = () => {
  const [open, setOpen] = useState(false);
  const text = sections.archives;

  return (
    <section id="archives" className="pb-24 px-6">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">{text.title}</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{text.subtitle}</p>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="archives-list"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-500/20 transition duration-300"
        >
          {open ? text.hideLabel : `${text.showLabel} (${archiveProjects.length})`}
          <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="archives-list"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 text-left">
                {archiveProjects.map((project) => (
                  <ArchiveCard key={project.id} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
