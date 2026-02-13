import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { Experience as ExperienceType } from '@/types';
import { SectionHeader } from './SectionHeader';

interface ExperienceProps {
  items: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => (
  <section id="experience" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
    <div className="container mx-auto max-w-4xl">
      <SectionHeader
        title="Expérience Professionnelle"
        subtitle="Mon parcours et mes réalisations"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent hidden md:block" />

        <div className="space-y-8">
          {items.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                <div className="w-[13px] h-[13px] rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-500/20" />
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5 font-medium text-blue-600 dark:text-blue-400">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full whitespace-nowrap">
                    <Calendar size={12} />
                    {exp.date}
                  </span>
                </div>

                {/* Role */}
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  {exp.role}
                </p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <ChevronRight
                        size={14}
                        className="mt-0.5 text-blue-500 flex-shrink-0"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);