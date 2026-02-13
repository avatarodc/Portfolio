import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
  >
    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div
      className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 ${
        align === 'center' ? 'mx-auto' : ''
      }`}
    />
  </motion.div>
);