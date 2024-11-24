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
      id: 'wave-senegal-flutter',
      title: 'Wave Sénégal Mobile',
      description: 'Version mobile de Wave Sénégal développée avec Flutter. Application cross-platform permettant les transferts d\'argent et paiements avec une expérience utilisateur native.',
      tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'REST API', 'Google Maps API'],
      link: 'https://github.com/avatarodc/Flutter-Transfert-App',
      category: 'Mobile App',
      image: 'images/projects/wave.png',
      date: 'Octobre 2024'
    },
    {
      id: 'wave-senegal-refonte',
      title: 'Refonte Wave Sénégal',
      description: 'Amélioration de la plateforme Wave Sénégal avec de nouvelles fonctionnalités innovantes incluant un système d\'envoi programmé et périodique automatique pour optimiser les transactions des utilisateurs.',
      tech: ['Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis', 'Swagger'],
      link: 'https://github.com/avatarodc/money_transfert_angular',
      category: 'Full Stack',
      image: 'images/projects/wave1.png',
      date: 'Novembre 2024'
    },
    {
      id: 'gestion-tailleurs-react',
      title: 'Gestion des Tailleurs',
      description: 'Application web de gestion des tailleurs avec React JS. En tant que Chef de projet, direction de l\'équipe de développement et implémentation des meilleures pratiques pour une expérience utilisateur optimale.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'GitHub'],
      link: 'https://github.com/pousso2-0/Tailor',
      category: 'Frontend',
      image: 'images/projects/tailor.png',
      date: 'Octobre 2024'
    },
    {
      id: 'gestion-dettes',
      title: 'Gestion des Dettes Boutique',
      description: 'Système de gestion des dettes avec authentification sécurisée, gestion des produits et utilisateurs. Application des principes SOLID et mise en place d\'une architecture robuste.',
      tech: ['Java', 'Docker', 'Swagger', 'PostgreSQL', 'GitHub', 'Neon'],
      link: 'https://github.com/avatarodc/JavaDette',
      category: 'Backend',
      image: 'images/projects/Finance.png',
      date: 'Septembre 2024'
    },
    {
      id: 'gestion-apprenants-spring',
      title: 'Gestion des Apprenants',
      description: 'Système de gestion de presence des apprenants et des evenements de ODC. Application des principes SOLID et mise en place d\'une architecture robuste.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'Docker', 'Render', 'Swagger', 'PostgreSQL', 'GitHub', 'Neon'],
      link: 'https://github.com/3-mousquetaires/gestion_odc',
      category: 'Backend',
      image: 'images/projects/odc.png',
      date: 'Septembre 2024'
    },
    {
      id: 'gestion-apprenants-avril',
      title: 'Gestion des Apprenants',
      description: 'Application de gestion des apprenants des emplois du temps et de leurs presences. développée en tant que Développeur FullStack',
      tech: ['JavaScript', 'PHP', 'Tailwind CSS', 'MongoDB', 'CSV', 'Figma'],
      link: 'https://github.com/avatarodc/E221',
      category: 'Web App',
      image: 'images/projects/odc.png',
      date: 'Avril 2024'
    },
    {
      id: 'gestion-cargaison',
      title: 'Gestion de Cargaison Import/Export',
      description: 'Application complète pour la gestion des cargaisons import/export',
      tech: ['TypeScript', 'PHP', 'Tailwind CSS', 'MySQL', 'Prisma', 'Cloudinary', 'Figma'],
      link: 'https://github.com/avatarodc/cargaisonsT',
      category: 'Web App',
      image: 'images/projects/cargaison.png',
      date: 'Juin 2024'
    },
    {
      id: 'gestion-dettes-boutique',
      title: 'Gestion des Dettes Boutique',
      description: 'Application backend de gestion des dettes d\'une boutique avec notifications SMS',
      tech: ['Laravel', 'Firebase', 'MongoDB', 'PostgreSQL', 'Infobip/Twilio', 'Swagger', 'Docker', 'Render', 'Figma'],
      link: '',
      category: 'Backend',
      image: 'images/projects/Finance.png',
      date: 'Août 2024'
    },
    {
      id: 'gestion-apprenants-odc',
      title: 'Gestion des Apprenants React',
      description: 'Application fullstack de gestion des apprenants avec stack moderne',
      tech: ['React.js', 'Node.js', 'Firebase', 'PostgreSQL', 'Swagger', 'Docker', 'Render'],
      link: '',
      category: 'Full Stack',
      image: 'images/projects/odc.png',
      date: 'Octobre 2024'
    },
    {
      id: 'transfert-argent',
      title: 'Application de Transfert d\'Argent',
      description: 'Clone de Wave - Application de transfert d\'argent',
      tech: ['Angular.js', 'MongoDB', 'Swagger', 'Docker', 'Render'],
      link: 'https://github.com/avatarodc/money_transfert_angular',
      category: 'Full Stack',
      image: 'images/projects/Finance.png',
      date: 'Octobre 2024'
    },
    {
      id: 'gestion-apprenants-backend',
      title: 'Backend Gestion Apprenants',
      description: 'Application backend robuste pour la gestion des apprenants',
      tech: ['Laravel', 'Firebase', 'PostgreSQL', 'Swagger', 'Docker', 'Render'],
      link: '',
      category: 'Backend',
      image: 'images/projects/odc.png',
      date: 'Septembre 2024'
    }
  ];
  
  export const skillCategories: Category[] = [
    {
      title: "Frontend",
      icon: Layout,
      description: "Développement d'interfaces utilisateur modernes et réactives",
      skills: [
        // Frameworks JavaScript
        "React.js",
        "Angular",
        // Languages
        "TypeScript",
        // Frameworks CSS
        "Tailwind CSS",
        "Bootstrap",
        // Mobile
        "Flutter",
        // État & Performance
        "Redux",
        // Build Tools
        "Vite",
        "Webpack"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      description: "Développement de serveurs et APIs robustes", 
      skills: [
        // Node.js
        "Node.js (Express)",
        // PHP
        "Laravel",
        "PHP",
        // Java
        "Spring Boot",
        "Java",
        // API & Sécurité
        "REST API",
        "JWT Auth",
      ]
    },
    {
      title: "Bases de données",
      icon: Database,
      description: "Gestion et optimisation des données",
      skills: [
        // SQL
        "PostgreSQL",
        "MySQL",
        // NoSQL
        "MongoDB",
        // Cloud Databases
        "Firebase",
        "Neon",
        // ORM
        "Prisma",
        
      ]
    },
    {
      title: "DevOps & Architecture",
      icon: Code,
      description: "Outils et méthodologies de développement",
      skills: [
        // Version Control
        "Git & GitHub",
        // Containerization
        "Docker",
        // Architecture
        "Architecture MVC",
        "Architecture distribuée",
        "Architecture monolithique",
        // Méthodologies
        "Méthodologie Agile",
        // API Design
        "API REST"
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
      id: 'orange-digital-center',
      date: 'Fevrier 2024 / Décembre 2024',
      title: 'Stage développeur fullstack',
      company: 'Orange Digital Center',
      location: 'Dakar, Sénégal',
      role: 'Développeur Full Stack',
      achievements: [
        'Développement d\'applications web modernes ',
        'Travail en équipe avec méthodologie Agile/Scrum',
        'Participation à des projets innovants dans le domaine digital'
      ]
    },
    {
      id: 'teqlab',
      date: 'Janvier 2023 / Juillet 2023',
      title: 'Analyste Concepteur',
      company: 'TEQLAB',
      location: 'Thiès, Sénégal',
      role: 'Analyste Concepteur',
      achievements: [
        'Analyse des besoins utilisateurs et rédaction des spécifications',
        'Modélisation UML et création de diagrammes de conception',
      ]
    },
    {
      id: 'lonase',
      date: 'Août 2023 / Novembre 2023',
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