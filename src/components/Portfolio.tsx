import { Layout } from './layout';
import {
  HeroSection,
  About,
  Projects,
  Products,
  AiProjects,
  Archives,
  Skills,
  Education,
  Experience,
  Distinctions,
  Certifications,
  Contact,
} from './sections';

import {
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
      <Projects />
      <Products />
      <AiProjects />
      <Archives />
      <Skills />
      <Education items={educationList} />
      <Distinctions />
      <Certifications items={certificationList} />
      <Contact />
    </Layout>
  );
};

export default Portfolio;