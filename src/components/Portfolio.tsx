import { Layout } from './layout';
import {
  HeroSection,
  Projects,
  Skills,
  Education,
  Experience,
  Certifications,
  Contact,
  References,
} from './sections';

import {
  projectList,
  educationList,
  experienceList,
  certificationList,
} from '@/data';

const Portfolio = () => {
  return (
    <Layout>
      <HeroSection />
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