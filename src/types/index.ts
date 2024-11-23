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