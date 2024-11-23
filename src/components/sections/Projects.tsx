import { useState, useMemo } from 'react';
import { Project } from '@/types';
import { GlowingCard } from '../ui/GlowingCard';
import { FilterTabs } from '../ui/FilterTabs';
import { Section } from '../ui/Section';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  className,
  variant = 'default'
}) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    outline: "border border-blue-200 text-blue-800 dark:border-blue-800 dark:text-blue-300"
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map(p => p.category))
    );
    return ['Tous', ...uniqueCategories];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const filtered = activeCategory === 'Tous'
      ? [...projects]
      : projects.filter(p => p.category === activeCategory);

    return filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'desc' ? 
        dateB.getTime() - dateA.getTime() : 
        dateA.getTime() - dateB.getTime();
    });
  }, [projects, activeCategory, sortOrder]);

  return (
    <Section
      id="projects"
      title="Projets Réalisés"
      subtitle="Découvrez une sélection de mes projets les plus récents"
      gradient
    >
      <div className="flex justify-between items-center mb-6">
        <FilterTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <button
          onClick={() => setSortOrder(order => order === 'desc' ? 'asc' : 'desc')}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Calendar size={16} />
          {sortOrder === 'desc' ? 'Plus récent d\'abord' : 'Plus ancien d\'abord'}
        </button>
      </div>
      
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlowingCard className="h-full flex flex-col">
                {project.image && (
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <Badge 
                      className="absolute top-2 right-2 bg-blue-500/90 text-white"
                    >
                      {project.date}
                    </Badge>
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 
                          dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};