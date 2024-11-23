import React from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative group bg-white dark:bg-gray-800 rounded-xl p-6 
      hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
      border border-gray-100 dark:border-gray-700 transition-all duration-300 ${className}`}
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 
      group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
    {children}
  </motion.div>
);