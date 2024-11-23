import { Section } from '../ui/Section';
import { GlowingCard } from '../ui/GlowingCard';
import { Calendar, Briefcase, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '@/types';

interface ExperienceProps {
  items: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => (
  <Section
    id="experience"
    title="Expérience Professionnelle"
    subtitle="Mon parcours et mes réalisations professionnelles"
    className="bg-gray-100 dark:bg-gray-800"
    gradient
  >
    <div className="relative space-y-8">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 
        hidden md:block" />
      
      {items.map((experience, index) => (
        <GlowingCard key={experience.id} className="ml-0 md:ml-12 relative" delay={index * 0.2}>
          <div className="absolute left-0 top-1/2 transform -translate-x-[2.8rem] -translate-y-1/2 
            w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hidden md:block" />
          
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar size={16} />
              <span>{experience.date}</span>
            </div>
            
            <h3 className="text-xl font-bold dark:text-white">{experience.title}</h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Briefcase size={16} />
              <span>{experience.company}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
            
            <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.role}</p>
            
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </GlowingCard>
      ))}
    </div>
  </Section>
);
