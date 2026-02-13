import { useState, useMemo } from 'react';
import { Project } from '@/types';
import { Github, ExternalLink, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ['Tous', ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const filtered =
      activeCategory === 'Tous'
        ? [...projects]
        : projects.filter((p) => p.category === activeCategory);

    return filtered.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [projects, activeCategory]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          title="Projets Réalisés"
          subtitle="Une sélection de mes projets les plus récents"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="group"
              >
                <div className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                  {/* Image */}
                  {project.image && (
                    <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Category badge */}
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
                        {project.category}
                      </span>

                      {/* Date badge */}
                      <span className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1 text-xs font-medium bg-black/60 backdrop-blur-sm rounded-full text-white">
                        <Calendar size={12} />
                        {project.date}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-lg">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {!project.link && (
                        <span className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
                          <Github size={16} />
                          Privé
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more */}
        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-all duration-300"
            >
              Voir tous les projets ({filteredProjects.length})
              <ChevronDown size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};