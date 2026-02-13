// src/components/layout/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
import { socialLinks, navItems } from '@/data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-black mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                MG
              </span>
              <span className="text-white">.dev</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Développeur Full Stack passionné par l'innovation et les solutions digitales durables. Toujours en quête d'apprentissage.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ id, Icon, link, label }) => (
                <a
                  key={id}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1 text-gray-400 hover:text-white text-sm py-1 transition-colors duration-200"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200" />
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:mamadougueyeoff1@gmail.com"
                className="block hover:text-blue-400 transition-colors"
              >
                mamadougueyeoff1@gmail.com
              </a>
              <a
                href="tel:+221783116655"
                className="block hover:text-blue-400 transition-colors"
              >
                +221 78 311 66 55
              </a>
              <p>Mbao Pikine, Sénégal</p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Me contacter
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Mamadou Gueye. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1.5 text-gray-500 text-sm">
              Fait avec <Heart size={14} className="text-red-400 fill-red-400" /> au Sénégal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};