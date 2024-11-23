import { useState, useMemo } from 'react';
import { Project } from '@/types';
import { GlowingCard } from '../ui/GlowingCard';
import { FilterTabs } from '../ui/FilterTabs';
import { Section } from '../ui/Section';
import { Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  // Utiliser useMemo pour calculer les catégories uniques
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map(p => p.category))
    );
    return ['Tous', ...uniqueCategories];
  }, [projects]);

  // Filtrer les projets en fonction de la catégorie active
  const filteredProjects = useMemo(() => {
    return activeCategory === 'Tous'
      ? projects
      : projects.filter(p => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <Section
      id="projects"
      title="Projets Réalisés"
      subtitle="Découvrez une sélection de mes projets les plus récents"
      gradient
    >
      <FilterTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <GlowingCard key={project.id} delay={index * 0.2}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 
                      rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                    flex items-center gap-2 transition-colors group"
                >
                  <Github size={20} />
                  <span>Code source</span>
                </a>
                <a 
                  href={`${project.link}/demo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                    flex items-center gap-2 transition-colors group"
                >
                  <ExternalLink size={20} />
                  <span>Démo live</span>
                </a>
              </div>
            </GlowingCard>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};