import React from 'react';
import { FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section } from '../ui/Section';

const CV = () => {
  const cvPath = '/src/assets/cv/MAMADOU_GUEYE_CV.pdf';

  const handleViewCV = () => {
    window.open(cvPath, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'MAMADOU_GUEYE_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="cv" title="Mon CV" subtitle="Découvrez mon parcours professionnel">
      <div className="max-w-4xl mx-auto">
        {/* Glassmorphism container avec gradient effect */}
        <div className={cn(
          "relative p-6 rounded-2xl overflow-hidden",
          "backdrop-blur-xl shadow-2xl",
          "bg-white/90 dark:bg-gray-800/90",
          "border border-gray-200/50 dark:border-gray-700/50"
        )}>
          {/* Gradient blur effect */}
          <div className={cn(
            "absolute -inset-1 rounded-2xl blur-xl opacity-50",
            "bg-gradient-to-r from-blue-300/30 via-purple-300/30 to-emerald-300/30",
            "dark:from-blue-500/30 dark:via-purple-500/30 dark:to-emerald-500/30"
          )} />

          {/* Content container */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Visualiser */}
            <div
              onClick={handleViewCV}
              className={cn(
                "group flex flex-col items-center justify-center p-8",
                "rounded-xl cursor-pointer overflow-hidden",
                "bg-gradient-to-br from-blue-50/80 to-purple-50/80",
                "dark:from-blue-900/20 dark:to-purple-900/20",
                "border border-blue-200/50 dark:border-blue-700/30",
                "transition-all duration-500",
                "hover:shadow-lg hover:shadow-blue-500/20",
                "hover:border-blue-300/50 dark:hover:border-blue-600/50",
                "transform hover:scale-[1.02]",
                "relative"
              )}
            >
              {/* Animated gradient overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                "translate-x-[-200%] group-hover:translate-x-[200%]",
                "transition-transform duration-1000"
              )} />

              <FileText className={cn(
                "w-12 h-12 mb-4",
                "text-blue-600 dark:text-blue-400",
                "transition-transform duration-300",
                "group-hover:scale-110 group-hover:rotate-6"
              )} />
              <span className={cn(
                "text-lg font-medium",
                "text-blue-600 dark:text-blue-400",
                "transition-colors duration-300"
              )}>
                Visualiser le CV
              </span>
            </div>

            {/* Télécharger */}
            <button
              onClick={handleDownload}
              className={cn(
                "group flex flex-col items-center justify-center p-8",
                "rounded-xl overflow-hidden",
                "bg-gradient-to-br from-emerald-50/80 to-blue-50/80",
                "dark:from-emerald-900/20 dark:to-blue-900/20",
                "border border-emerald-200/50 dark:border-emerald-700/30",
                "transition-all duration-500",
                "hover:shadow-lg hover:shadow-emerald-500/20",
                "hover:border-emerald-300/50 dark:hover:border-emerald-600/50",
                "transform hover:scale-[1.02]",
                "relative"
              )}
            >
              {/* Animated gradient overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                "translate-x-[-200%] group-hover:translate-x-[200%]",
                "transition-transform duration-1000"
              )} />

              <Download className={cn(
                "w-12 h-12 mb-4",
                "text-emerald-600 dark:text-emerald-400",
                "transition-transform duration-300",
                "group-hover:scale-110 group-hover:rotate-6"
              )} />
              <span className={cn(
                "text-lg font-medium",
                "text-emerald-600 dark:text-emerald-400",
                "transition-colors duration-300"
              )}>
                Télécharger le CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CV;