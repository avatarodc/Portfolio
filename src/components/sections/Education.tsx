import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { Education as EducationType } from '@/types';
import { SectionHeader } from './SectionHeader';

interface EducationProps {
  items: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ items }) => (
  <section id="education" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeader
        title="Formation"
        subtitle="Mon parcours académique"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent hidden md:block" />

        <div className="space-y-6">
          {items.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 hidden md:flex items-center justify-center">
                <div className="w-[13px] h-[13px] rounded-full bg-cyan-500 ring-4 ring-cyan-100 dark:ring-cyan-500/20" />
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:border-cyan-200 dark:hover:border-cyan-800 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5 font-medium text-cyan-600 dark:text-cyan-400">
                        <GraduationCap size={14} />
                        {edu.institution}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full whitespace-nowrap">
                    <Calendar size={12} />
                    {edu.date}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);