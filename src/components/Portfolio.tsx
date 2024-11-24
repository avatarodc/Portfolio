// src/components/Portfolio.tsx
import { useTheme } from '@/hooks/useTheme';
import { Layout } from './layout';
import { 
  Hero,
  Projects,
  Skills,
  Education,
  Experience,
  Certifications,
  Contact,
  References
} from './sections';

import {
  projectList,
  educationList,
  experienceList,
  certificationList,
} from '@/data';

const Portfolio = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <Hero />
      <Projects projects={projectList} />
      <Skills /> 
      <Education items={educationList} />
      <Experience items={experienceList} />
      <Certifications items={certificationList} />
      <References />
      <Contact />
    </Layout>
  );
};

export default Portfolio;