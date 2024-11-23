import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  id,
  gradient = false 
}) => (
  <section id={id} className={`py-32 px-6 ${className}`}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto"
    >
      <h2 className={`text-4xl font-bold mb-4 text-center ${
        gradient ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text' : ''
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  </section>
);
