import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Certification } from '@/types';
import { SectionHeader } from './SectionHeader';

interface CertificationsProps {
  items: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ items }) => (
  <section id="certifications" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
    <div className="container mx-auto max-w-5xl">
      <SectionHeader
        title="Certifications"
        subtitle="Formations continues et certifications obtenues"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:border-amber-200 dark:hover:border-amber-800 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
              {/* Icon + title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-500/10">
                  <Award size={20} className="text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.platform}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5 mb-3 text-xs text-gray-400 dark:text-gray-500">
                <Calendar size={12} />
                {cert.date}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
              >
                Voir le certificat
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);