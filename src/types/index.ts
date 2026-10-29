import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  category: string;
  date: string;
}

export interface Category {
  title: string;
  icon: LucideIcon;
  skills: string[];
  description: string;
}

export interface Education {
  id: string;
  date: string;
  title: string;
  institution: string;
  description: string;
  location: string;
}

export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  location: string;
  role: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  platform: string;
  date: string;
  link: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  id: string;
  Icon: LucideIcon;
  label: string;
  link: string;
  color: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  availability: string;
}

export interface Reference {
  id: string;
  name: string;
  title: string;
  email: string;
  linkedin: string;
  phone: string;
}

export interface Identity {
  firstName: string;
  lastName: string;
  logo: { main: string; suffix: string };
}

export interface RichTextSegment {
  text: string;
  style?: 'strong' | 'accent';
}

export interface TerminalField {
  key: string;
  value: string | string[] | boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Hero {
  typewriterWords: string[];
  bio: RichTextSegment[];
  company: string;
  contactLabel: string;
  terminal: {
    prompt: string;
    variable: string;
    fields: TerminalField[];
  };
  stats: Stat[];
  scrollHint: string;
}

export interface CvInfo {
  file: string;
  downloadName: string;
  viewUrl: string;
  downloadUrl: string;
  labels: {
    navbar: string;
    mobileMenu: string;
    heroView: string;
    heroDownload: string;
  };
}

export interface SectionText {
  title: string;
  subtitle: string;
}

export interface FormField {
  label: string;
  placeholder: string;
}

export interface SectionsContent {
  projects: SectionText & {
    allLabel: string;
    showAllLabel: string;
    codeLabel: string;
    privateLabel: string;
  };
  skills: SectionText & { countLabel: string };
  education: SectionText;
  experience: SectionText;
  certifications: SectionText & { linkLabel: string };
  references: SectionText;
  contact: SectionText & {
    labels: {
      email: string;
      phone: string;
      location: string;
      availability: string;
      social: string;
    };
    form: {
      name: FormField;
      email: FormField;
      subject: FormField;
      message: FormField;
      submit: string;
      success: string;
    };
  };
}

export interface FooterContent {
  bio: string;
  navigationTitle: string;
  contactTitle: string;
  contactLabel: string;
  rights: string;
  madeWith: string;
  madeIn: string;
}
