import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { about, sections } from '@/data/profile';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeader
        title={sections.about.title}
        subtitle={sections.about.subtitle}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 sm:p-8 space-y-4"
        >
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Langues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <Languages size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {about.languagesTitle}
            </h3>
          </div>

          <ul className="space-y-3">
            {about.languages.map(({ name, level }) => (
              <li
                key={name}
                className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
                <span className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-right">
                  {level}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);
