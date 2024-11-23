import { Section } from '../ui/Section';
import { GlowingCard } from '../ui/GlowingCard';
import { Book, Calendar, MapPin } from 'lucide-react';
import { Education as EducationType } from '@/types';

interface EducationProps {
  items: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ items }) => (
  <Section
    id="education"
    title="Formation"
    subtitle="Mon parcours académique et mes formations"
    gradient
  >
    <div className="relative space-y-8">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 
        hidden md:block" />
      
      {items.map((education, index) => (
        <GlowingCard key={education.id} className="ml-0 md:ml-12 relative" delay={index * 0.2}>
          <div className="absolute left-0 top-1/2 transform -translate-x-[2.8rem] -translate-y-1/2 
            w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hidden md:block" />
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar size={16} />
              <span>{education.date}</span>
            </div>
            
            <h3 className="text-xl font-bold dark:text-white">{education.title}</h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Book size={16} />
              <span>{education.institution}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={16} />
              <span>{education.location}</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mt-2">{education.description}</p>
          </div>
        </GlowingCard>
      ))}
    </div>
  </Section>
);
