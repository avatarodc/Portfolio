import { motion } from 'framer-motion';

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => (
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onCategoryChange(category)}
        className={`px-6 py-2 rounded-full transition-all relative ${
          activeCategory === category
            ? 'text-white'
            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
        }`}
      >
        {activeCategory === category && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
          />
        )}
        {category}
      </button>
    ))}
  </div>
);