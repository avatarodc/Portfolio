import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data';
import { Category } from '@/types';
import { SectionHeader } from './SectionHeader';

export const Skills: React.FC = () => {
  const cardColors = [
    { bg: 'from-blue-500/10 to-cyan-500/10', accent: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' },
    { bg: 'from-emerald-500/10 to-teal-500/10', accent: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
    { bg: 'from-purple-500/10 to-pink-500/10', accent: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400' },
    { bg: 'from-amber-500/10 to-orange-500/10', accent: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', badge: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400' },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          title="Compétences Techniques"
          subtitle="Les technologies et outils que je maîtrise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category: Category, index: number) => {
            const color = cardColors[index % cardColors.length];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color.bg}`}>
                      <Icon size={22} className={color.text} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                    {category.description}
                  </p>

                  {/* Skills as badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg ${color.badge} transition-all duration-200 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Skill count */}
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {category.skills.length} technologies
                    </span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: Math.min(category.skills.length, 8) }).map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className={`w-1 rounded-full ${color.accent}`}
                            style={{ height: `${8 + Math.random() * 12}px` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};