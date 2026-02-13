import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Quote } from 'lucide-react';
import { references } from '@/data/references';
import { Reference } from '@/types';
import { SectionHeader } from './SectionHeader';

const ReferenceCard: React.FC<{ reference: Reference; index: number }> = ({
  reference,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
  >
    <div className="h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 p-6 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
      {/* Quote icon */}
      <div className="mb-4">
        <Quote size={24} className="text-blue-200 dark:text-blue-800" />
      </div>

      {/* Name & Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
        {reference.name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
        {reference.title}
      </p>

      {/* Contact links */}
      <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
        <a
          href={`mailto:${reference.email}`}
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
          aria-label={`Email ${reference.name}`}
        >
          <Mail size={16} />
        </a>
        <a
          href={reference.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
          aria-label={`LinkedIn ${reference.name}`}
        >
          <Linkedin size={16} />
        </a>
        <a
          href={`tel:${reference.phone}`}
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
          aria-label={`Appeler ${reference.name}`}
        >
          <Phone size={16} />
        </a>

        <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">
          {reference.phone}
        </span>
      </div>
    </div>
  </motion.div>
);

const References: React.FC = () => (
  <section id="references" className="py-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <SectionHeader
        title="Références"
        subtitle="Mes recommandations professionnelles"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((ref, i) => (
          <ReferenceCard key={ref.id} reference={ref} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default References;