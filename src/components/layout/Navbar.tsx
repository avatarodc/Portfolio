import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data';
import { useScrollSpy } from '@/hooks';
import cvPdf from '@/assets/cv/cvMamadouGUEYE.pdf';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.href.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile au resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-black/[0.03] dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group flex items-center gap-2"
          >
            <span className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 text-transparent bg-clip-text">
                MG
              </span>
              <span className="text-gray-800 dark:text-white">.dev</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2" />

            {/* Bouton CV */}
            <motion.a
              href={cvPdf}
              download="CV_Mamadou_GUEYE.pdf"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={16} />
              CV
            </motion.a>

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              aria-label="Changer le thème"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? (
                    <Sun size={18} className="text-yellow-400" />
                  ) : (
                    <Moon size={18} className="text-gray-700" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Changer le thème"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileMenuOpen ? (
                    <X size={20} className="text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu size={20} className="text-gray-700 dark:text-gray-300" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 top-[60px] bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="md:hidden fixed top-[60px] right-0 bottom-0 w-72 bg-white dark:bg-gray-950 shadow-2xl z-50 overflow-y-auto"
              >
                <div className="p-6 space-y-2">
                  {navItems.map((item, i) => {
                    const isActive = activeSection === item.href.replace('#', '');
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}

                  <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                    <a
                      href={cvPdf}
                      download="CV_Mamadou_GUEYE.pdf"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-lg transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Download size={16} />
                      Télécharger mon CV
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};