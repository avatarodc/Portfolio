import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export type ProjectGroup = 'production' | 'produits' | 'ia';

export type ProjectStatus =
  | 'production'
  | 'deploiement'
  | 'developpement'
  | 'encours'
  | 'terrain'
  | 'pilote'
  | 'prototype'
  | 'academique';

export interface ProjectLink {
  kind: 'site' | 'code' | 'demo';
  url: string;
}

export interface Project {
  id: string;
  group: ProjectGroup;
  title: string;
  // cadre du projet : employeur, fondateur, freelance, école…
  context: string;
  // renvoi interne vers une autre section (ex. le poste correspondant)
  contextAnchor?: string;
  problem: string;
  details?: string[];
  stack: string[];
  role: string;
  status: ProjectStatus;
  // précision affichée après le statut (ex. « BSIC, SENEAU »)
  statusNote?: string;
  links: ProjectLink[];
  // true : affiche « Code privé — démo sur demande » au lieu d'un lien vers le code
  privateCode?: boolean;
  // capture d'écran dans public/ ; absente : un emplacement réservé est affiché
  image?: string;
}

// Anciens projets (formation, premiers sites) affichés dans le bloc Archives
export interface ArchiveProject {
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
  description?: string;
  location?: string;
}

export interface ExternalLinkItem {
  label: string;
  url: string;
  // capture du site dans public/
  image?: string;
}

export interface ExperienceHighlight {
  text: string;
  // id d'un projet détaillé dans la section Projets : affiche un renvoi vers sa fiche
  projectId?: string;
}

export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  location?: string;
  // ligne affichée sous l'entreprise (stack ou précision du poste)
  summary?: string;
  highlights: ExperienceHighlight[];
  // sites des clients livrés pendant ce poste
  clientLinks?: ExternalLinkItem[];
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

export interface Language {
  name: string;
  level: string;
}

export interface About {
  paragraphs: string[];
  languagesTitle: string;
  languages: Language[];
}

export interface Distinction {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  date?: string;
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
  // chemin public du PDF, utilisé pour l'affichage et le téléchargement
  file: string;
  downloadName: string;
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

export interface SectionsContent {
  projects: SectionText;
  products: SectionText;
  ai: SectionText & { workflowTitle: string; workflowText: string };
  archives: SectionText & { showLabel: string; hideLabel: string };
  projectLabels: {
    statuses: Record<ProjectStatus, string>;
    links: Record<ProjectLink['kind'], string>;
    code: string;
    privateCode: string;
    role: string;
    contextLink: string;
  };
  skills: SectionText & { countLabel: string };
  about: SectionText;
  education: SectionText;
  experience: SectionText & { detailLabel: string; clientsLabel: string };
  distinctions: SectionText;
  certifications: SectionText & { linkLabel: string };
  contact: SectionText & {
    labels: {
      email: string;
      phone: string;
      location: string;
      availability: string;
      social: string;
    };
    // carte d'appel à l'action : ouvre la messagerie avec un e-mail pré-rempli
    cta: {
      title: string;
      text: string;
      button: string;
      mailSubject: string;
      mailBody: string;
      hint: string;
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
