import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { distinctions, sections } from '@/data/profile';
import { SectionHeader } from './SectionHeader';

export const Distinctions: React.FC = () => (
  <section id="distinctions" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
    <div className="container mx-auto max-w-5xl">
      <SectionHeader
        title={sections.distinctions.title}
        subtitle={sections.distinctions.subtitle}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {distinctions.map(({ id, icon: Icon, title, description, date }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="h-full flex items-start gap-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex-shrink-0">
                <Icon size={22} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
                {date && (
                  <span className="inline-flex items-center gap-1.5 mt-3 text-xs text-gray-400 dark:text-gray-500">
                    <Calendar size={12} />
                    {date}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
