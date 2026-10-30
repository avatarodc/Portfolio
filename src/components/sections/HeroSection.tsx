import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowDownRight,
  Mail,
  Download,
  FileText,
  MapPin,
  Briefcase,
} from 'lucide-react';
import { identity, hero, cv, socialLinks, contactInfo, projectList } from '@/data/profile';
import { HeroNetworkSlot } from './HeroNetworkSlot';

// Fiches mises en avant dans la carte « En production » (ordre de hero.production.projectIds)
const productionProjects = hero.production.projectIds
  .map((id) => projectList.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const HeroSection: React.FC = () => {
  const { stats } = hero;

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
      {/* Halos : dégradés radiaux plutôt que des éléments floutés (filtre blur coûteux) */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(closest-side,rgba(96,165,250,0.2),transparent)] dark:bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(closest-side,rgba(34,211,238,0.15),transparent)] dark:bg-[radial-gradient(closest-side,rgba(6,182,212,0.09),transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(closest-side,rgba(192,132,252,0.1),transparent)] dark:bg-[radial-gradient(closest-side,rgba(168,85,247,0.06),transparent)]" />

      {/* Réseau des compétences (canvas chargé au repos du navigateur) */}
      <HeroNetworkSlot />

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
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
                <span className="motion-safe:animate-ping [animation-iteration-count:3] absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {contactInfo.availability}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                <span className="text-gray-900 dark:text-white">{identity.firstName}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 text-transparent bg-clip-text">
                  {identity.lastName}
                </span>
              </h1>
            </motion.div>

            {/* Rôle principal */}
            <motion.div variants={item}>
              <p className="flex items-center gap-3 text-xl sm:text-2xl font-light text-gray-700 dark:text-gray-300">
                <span className="w-8 h-px bg-blue-500 flex-shrink-0" />
                {hero.title}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              {hero.bio.map(({ text, style }, i) =>
                style === 'strong' ? (
                  <span key={i} className="text-gray-900 dark:text-white font-medium">{text}</span>
                ) : style === 'accent' ? (
                  <span key={i} className="text-blue-600 dark:text-blue-400 font-medium">{text}</span>
                ) : (
                  <React.Fragment key={i}>{text}</React.Fragment>
                )
              )}
            </motion.p>

            {/* Location & Company */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-blue-500" />
                {contactInfo.address}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="flex items-center gap-1.5">
                <Briefcase size={15} className="text-blue-500" />
                {hero.company}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl overflow-hidden transition duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail size={18} className="relative z-10" />
                <span className="relative z-10">{hero.contactLabel}</span>
              </a>

              <a
                href={cv.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/5 transition duration-300 hover:-translate-y-0.5"
              >
                <FileText size={18} />
                {cv.labels.heroView}
              </a>

              <a
                href={cv.file}
                download={cv.downloadName}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/5 transition duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} />
                {cv.labels.heroDownload}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ id, link, Icon, label }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10"
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
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10 rounded-3xl blur-xl" />

              {/* Card */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/80 dark:border-gray-800/80 shadow-2xl shadow-black/5 dark:shadow-black/30 overflow-hidden">
                {/* Card header accent */}
                <div className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />

                {/* En-tête */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 dark:border-gray-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{hero.production.title}</span>
                </div>

                {/* Card content */}
                <div className="p-6 space-y-5">
                  {/* Systèmes en production, chacun relié à sa fiche */}
                  <ul className="space-y-2">
                    {productionProjects.map((project) => {
                      const Icon = project.coverIcon;
                      return (
                        <li key={project.id}>
                          <a
                            href={`#projet-${project.id}`}
                            className="group/item flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-500/5 transition"
                          >
                            <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex-shrink-0">
                              <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                {project.shortTitle ?? project.title}
                              </span>
                              <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">
                                {project.context}
                                {project.statusNote && ` · ${project.statusNote}`}
                              </span>
                            </span>
                            <ArrowDownRight size={16} className="text-gray-400 group-hover/item:text-blue-500 flex-shrink-0" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>

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

      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-wider uppercase">
          {hero.scrollHint}
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