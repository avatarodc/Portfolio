
import { Section } from '../ui/Section';
import { GlowingCard } from '../ui/GlowingCard';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Certification } from '@/types';

interface CertificationsProps {
  items: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ items }) => (
  <Section
    id="certifications"
    title="Certifications"
    subtitle="Mes certifications et formations continues"
    gradient
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((cert, index) => (
        <GlowingCard key={cert.id} delay={index * 0.2}>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <Award size={24} className="text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold dark:text-white">{cert.title}</h3>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-gray-600 dark:text-gray-400">{cert.platform}</p>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 
                    dark:text-blue-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 
                hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
            >
              Voir le certificat
              <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </GlowingCard>
      ))}
    </div>
  </Section>
);