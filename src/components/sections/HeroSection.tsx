import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Download,
  FileText,
  MapPin,
  Briefcase,
  GitBranch,
} from 'lucide-react';
import { useTypewriter } from '@/hooks';

const HeroSection: React.FC = () => {
  const { text, cursor } = useTypewriter({
    words: [
      'Développeur Backend',
      'Développeur Full Stack',
      'Formateur PHP',
      'Passionné d\'innovation',
    ],
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseTime: 2500,
  });

  const socialLinks = [
    {
      href: 'https://github.com/avatarodc',
      icon: GithubIcon,
      label: 'GitHub',
    },
    {
      href: 'https://gitlab.com/odcmamadougueye',
      icon: GitBranch,
      label: 'GitLab',
    },
    {
      href: 'https://linkedin.com/in/Mamadou_GUEYE',
      icon: LinkedinIcon,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:mamadougueyeoff1@gmail.com',
      icon: Mail,
      label: 'Email',
    },
  ];

  const stats = [
    { value: '3+', label: 'Ans d\'expérience' },
    { value: '10+', label: 'Projets réalisés' },
    { value: '5+', label: 'Technologies maîtrisées' },
  ];

  // Stagger animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <header id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-950" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-400/15 dark:bg-cyan-500/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-purple-400/10 dark:bg-purple-500/5 blur-3xl" />

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* ── Left: Text content (3 cols) ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-3 space-y-8"
          >
            {/* Status badge */}
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Disponible pour des opportunités
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                <span className="text-gray-900 dark:text-white">Mamadou</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 text-transparent bg-clip-text">
                  Gueye
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={item}>
              <div className="flex items-center gap-3 text-xl sm:text-2xl font-light text-gray-700 dark:text-gray-300">
                <span className="w-8 h-px bg-blue-500" />
                <span>
                  {text}
                  <span className="text-blue-500 font-normal">{cursor}</span>
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Développeur Full Stack passionné par l'innovation, spécialisé en{' '}
              <span className="text-gray-900 dark:text-white font-medium">Java/Spring Boot</span>,{' '}
              <span className="text-gray-900 dark:text-white font-medium">React</span> et{' '}
              <span className="text-gray-900 dark:text-white font-medium">Angular</span>.
              Actuellement développeur backend chez{' '}
              <span className="text-blue-600 dark:text-blue-400 font-medium">DIOTALI</span> et en
              Master Génie Logiciel à l'ISI.
            </motion.p>

            {/* Location & Company */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-blue-500" />
                Mbao Pikine, Sénégal
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="flex items-center gap-1.5">
                <Briefcase size={15} className="text-blue-500" />
                DIOTALI
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail size={18} className="relative z-10" />
                <span className="relative z-10">Me contacter</span>
              </a>

              <a
                href="https://drive.google.com/file/d/10QMzFWJ3yXcvXNaD-j-le4ixdHuIXxtR/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FileText size={18} />
                Voir mon CV
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=10QMzFWJ3yXcvXNaD-j-le4ixdHuIXxtR"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Télécharger CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <Icon
                    size={18}
                    className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Visual card (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10 rounded-3xl blur-2xl" />

              {/* Card */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/80 dark:border-gray-800/80 shadow-2xl shadow-black/5 dark:shadow-black/30 overflow-hidden">
                {/* Card header accent */}
                <div className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />

                {/* Terminal-style header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono ml-2">
                    mamadou@portfolio ~ %
                  </span>
                </div>

                {/* Card content */}
                <div className="p-6 space-y-5">
                  {/* Code block */}
                  <div className="font-mono text-sm space-y-1.5">
                    <p>
                      <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
                      <span className="text-blue-600 dark:text-blue-400">dev</span>{' '}
                      <span className="text-gray-500">=</span>{' '}
                      <span className="text-gray-500">{'{'}</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-600 dark:text-emerald-400">nom</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">"Mamadou Gueye"</span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-600 dark:text-emerald-400">rôle</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">"Backend Developer"</span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-600 dark:text-emerald-400">entreprise</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">"DIOTALI"</span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-600 dark:text-emerald-400">stack</span>
                      <span className="text-gray-500">: [</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-amber-600 dark:text-amber-400">"Java"</span>
                      <span className="text-gray-500">,</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">"Spring Boot"</span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-amber-600 dark:text-amber-400">"Angular"</span>
                      <span className="text-gray-500">,</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">"React"</span>
                      <span className="text-gray-500">,</span>
                    </p>
                    <p className="pl-8">
                      <span className="text-amber-600 dark:text-amber-400">"Docker"</span>
                      <span className="text-gray-500">,</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400">"AWS"</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-gray-500">],</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-emerald-600 dark:text-emerald-400">passion</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-cyan-600 dark:text-cyan-400">true</span>
                    </p>
                    <p>
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-500">;</span>
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="text-center">
                        <p className="text-2xl font-black bg-gradient-to-b from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 text-transparent bg-clip-text">
                          {value}
                        </p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile stats (visible on small screens) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="lg:hidden grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black bg-gradient-to-b from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 text-transparent bg-clip-text">
                {value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-wider uppercase">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;