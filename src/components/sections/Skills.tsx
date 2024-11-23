import React from 'react';
import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/GlowingCard';
import { Section } from '../ui/Section';
import { skillCategories } from '@/data';
import { Category } from '@/types';

// Puisque nous n'acceptons pas de props, nous pouvons simplement utiliser React.FC
export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Compétences Techniques"
      subtitle="Les technologies et outils que je maîtrise"
      className="bg-gray-100 dark:bg-gray-800"
      gradient
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category: Category, index: number) => (
          <GlowingCard key={category.title} delay={index * 0.2}>
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="text-blue-600 dark:text-blue-400" size={24} />
              <h3 className="text-xl font-bold dark:text-white">{category.title}</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {category.description}
            </p>
            
            <ul className="space-y-2">
              {category.skills.map((skill: string, skillIndex: number) => (
                <motion.li
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                />
              </div>
            </div>
          </GlowingCard>
        ))}
      </div>
    </Section>
  );
};