// src/data/index.ts
import {
    NavItem,
    Project,
    Category,
    SocialLink,
    Education,
    Experience,
    Certification,
    Contact
  } from '@/types';
  import {
    GithubIcon,
    LinkedinIcon,
    Mail,
    Layout,
    Server,
    Database,
    Code,

  } from 'lucide-react';
  
  export const navItems: NavItem[] = [
    { label: 'Accueil', href: '#home' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Formation', href: '#education' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];
  
  export const projectList: Project[] = [
    {
      id: 'gestion-etudiants',
      title: 'Gestion des étudiants',
      description: 'Application de gestion des inscriptions, notes et absences avec système CRUD complet',
      tech: ['Laravel', 'Java(API)', 'TypeScript', 'PostgreSQL', 'Firebase', 'MongoDB'],
      link: 'https://github.com/avatarodc/gestion_odc',
      category: 'Web App',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'reseau-couture',
      title: 'Réseau de couture',
      description: 'Plateforme connectant couturiers et clients avec gestion de profils et boutiques en ligne',
      tech: ['Node.js', 'React', 'Cloudinary', 'PostgreSQL', 'Prisma', 'MongoDB'],
      link: 'https://github.com/pousso2-0/Tailor',
      category: 'E-commerce',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'gestion-dettes',
      title: 'Gestion des dettes',
      description: 'Application de suivi des dettes et gestion des stocks avec notifications',
      tech: ['JavaScript', 'Laravel', 'PostgreSQL', 'Neon'],
      link: 'https://github.com/avatarodc/Getsion_DETTES-LARAVEL',
      category: 'Web App',
      image: '/api/placeholder/400/300'
    }
  ];
  
  export const skillCategories: Category[] = [
    {
      title: "Frontend",
      icon: Layout,
      description: "Développement d'interfaces utilisateur modernes et réactives",
      skills: [
        "React",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      description: "Développement de serveurs et APIs robustes",
      skills: [
        "Node.js (Express)",
        "Laravel",
        "Spring Boot",
        "Java",
        "PHP"
      ]
    },
    {
      title: "Bases de données",
      icon: Database,
      description: "Gestion et optimisation des données",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase",
        "Neon"
      ]
    },
    {
      title: "DevOps & Autres",
      icon: Code,
      description: "Outils et méthodologies de développement",
      skills: [
        "Git & GitHub",
        "Docker",
        "API REST",
        "Méthodologie Agile",
        "Architecture distribuée"
      ]
    }
  ];
  
  export const educationList: Education[] = [
    {
      id: 'sonatel-academy',
      date: '2023-2024',
      title: 'Formation Développement Web',
      institution: 'École du code Sonatel Academy',
      description: 'Formation intensive en développement web et mobile, pratiques agiles, et architecture logicielle.',
      location: 'Dakar, Sénégal'
    },
    {
      id: 'isi-licence',
      date: '2021-2023',
      title: 'Licence en Génie Logiciel',
      institution: 'Institut Supérieur d\'Informatique (ISI)',
      description: 'Formation approfondie en génie logiciel, algorithmes et structures de données.',
      location: 'Dakar, Sénégal'
    }
  ];
  
  export const experienceList: Experience[] = [
    {
      id: 'orange-digital',
      date: '2024',
      title: 'Stage développeur fullstack',
      company: 'Orange Digital Center',
      location: 'Dakar, Sénégal',
      role: 'Développeur Full Stack',
      achievements: [
        'Développement d\'applications web modernes avec React et Node.js',
        'Travail en équipe avec méthodologie Agile/Scrum',
        'Participation à des projets innovants dans le domaine digital'
      ]
    },
    {
      id: 'lonase',
      date: '2023',
      title: 'Administrateur Systèmes et Réseaux',
      company: 'LONASE',
      location: 'Dakar, Sénégal',
      role: 'Admin Sys & Développeur ETL',
      achievements: [
        'Administration système et réseau',
        'Développement ETL avec TALEND et Python',
        'Maintenance et optimisation des systèmes'
      ]
    }
  ];
  
  export const certificationList: Certification[] = [
    {
      id: 'web-dev-cert',
      title: 'Web Development',
      platform: 'Coursera',
      date: '2024',
      link: 'https://coursera.org/share/c6368640a4932a7783ce75b38936860b',
      description: 'Formation complète en développement web moderne',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React']
    },
    {
      id: 'db-cert',
      title: 'Database Management',
      platform: 'Coursera',
      date: '2024',
      link: 'https://coursera.org/share/c194bbfccea24c3d3ac8901a3d76b739',
      description: 'Gestion avancée des bases de données',
      skills: ['SQL', 'NoSQL', 'Database Design']
    }
  ];
  
  export const socialLinks: SocialLink[] = [
    {
      id: 'github',
      Icon: GithubIcon,
      label: 'GitHub',
      link: 'https://github.com/avatarodc',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      id: 'linkedin',
      Icon: LinkedinIcon,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/Mamadou_GUEYE',
      color: 'hover:text-blue-700'
    },
    {
      id: 'email',
      Icon: Mail,
      label: 'Email',
      link: 'mailto:mamadougueye@groupeisi.com',
      color: 'hover:text-red-600'
    }
  ];
  
  export const contactInfo: Contact = {
    email: 'mamadougueye@groupeisi.com',
    phone: '+221 78 311 66 55',
    address: 'Dakar, Pikine, Mbao',
    availability: 'Disponible pour des opportunités'
  };