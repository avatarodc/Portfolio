import { Section } from '@/components/ui/Section';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { references } from '@/data/references';
import { Reference } from '@/types';

interface ReferenceCardProps {
  reference: Reference;
}

const ReferenceCard = ({ reference }: ReferenceCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {reference.name}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {reference.title}
    </p>
    <div className="space-y-2 text-gray-700 dark:text-gray-300">
      <p className="flex items-center">
        <Mail className="w-5 h-5 mr-2" />
        <a href={`mailto:${reference.email}`} className="hover:text-blue-500">
          {reference.email}
        </a>
      </p>
      <p className="flex items-center">
        <Linkedin className="w-5 h-5 mr-2" />
        <a href={reference.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          LinkedIn
        </a>
      </p>
      <p className="flex items-center">
        <Phone className="w-5 h-5 mr-2" />
        <a href={`tel:${reference.phone}`} className="hover:text-blue-500">
          {reference.phone}
        </a>
      </p>
    </div>
  </div>
);

const References = () => {
  return (
    <Section
      id="references"
      title="Références"
      subtitle="Mes recommandations professionnelles"
      className="bg-gray-100 dark:bg-gray-800"
      gradient
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {references.map((reference) => (
          <ReferenceCard key={reference.id} reference={reference} />
        ))}
      </div>
    </Section>
  );
};

export default References;