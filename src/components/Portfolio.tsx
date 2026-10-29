import { Layout } from './layout';
import {
  HeroSection,
  About,
  Projects,
  Skills,
  Education,
  Experience,
  Distinctions,
  Certifications,
  Contact,
} from './sections';

import {
  projectList,
  educationList,
  experienceList,
  certificationList,
} from '@/data/profile';

const Portfolio = () => {
  return (
    <Layout>
      <HeroSection />
      <About />
      <Experience items={experienceList} />
      <Projects projects={projectList} />
      <Skills />
      <Education items={educationList} />
      <Distinctions />
      <Certifications items={certificationList} />
      <Contact />
    </Layout>
  );
};

export default Portfolio;