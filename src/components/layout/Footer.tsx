import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Mamadou Gueye</h3>
            <p className="text-gray-400 mb-4">
              Développeur Full Stack Junior passionné par les nouvelles technologies
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ id, Icon, link, label, color }) => (
                <a
                  key={id}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full ${color}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-right"
          >
            <p className="text-gray-400">© {new Date().getFullYear()} Mamadou Gueye</p>
            <p className="text-gray-400">Tous droits réservés</p>
          </motion.div>
        </div>

        {/* Navigation du site */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Accueil
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projets
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Compétences
            </a>
            <a href="#education" className="text-gray-400 hover:text-white transition-colors">
              Formation
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
              Expérience
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};