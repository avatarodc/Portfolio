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
    // ─── Projets Freelance ───
    {
      id: 'pdd-production',
      title: 'PDD Production - Site Vitrine',
      description: 'Site vitrine one-page pour PDD Production, agence de communication événementielle à Dakar. Animations au scroll, filtres portfolio, lightbox, carrousel de témoignages, formulaire de contact et déploiement GitLab Pages via CI/CD.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GitLab CI/CD'],
      link: 'https://pddproduction-f5a5bd.gitlab.io',
      category: 'Site Vitrine',
      image: 'images/projects/pddproduction.png',
      date: 'Février 2025'
    },
    // ─── Projets WBCC (2024-2025) ───
    {
      id: 'rym-holding',
      title: 'RYMHOLDING - Plateforme IA',
      description: 'Application web avec intégration IA (ChatGPT) pour RYMHOLDING. Développement fullstack avec interface React et backend PHP, incluant un assistant intelligent pour améliorer l\'expérience utilisateur.',
      tech: ['PHP', 'JavaScript', 'React.js', 'MySQL', 'ChatGPT API'],
      link: 'https://job.rymholding.com',
      category: 'Full Stack',
      image: 'images/projects/rymholding.jpg',
      date: 'Décembre 2024 - Novembre 2025'
    },
    {
      id: 'rym-partners',
      title: 'RYM PARTNERS',
      description: 'Application web complète pour RYM PARTNERS développée au sein du WBCC (World Business Contact Center). Gestion de contenu et interface professionnelle.',
      tech: ['PHP', 'JavaScript', 'MySQL'],
      link: 'https://www.rympartners.com/',
      category: 'Web App',
      image: 'images/projects/rympartners.jpg',
      date: 'Décembre 2024 - Novembre 2025'
    },
     {
      id: 'hbassurance',
      title: 'HB ASSURANCE',
      description: 'Application web complète pour HB ASSURANCE développée au sein du WBCC (World Business Contact Center). Gestion d\'assurance.',
      tech: ['WordPress'],
      link: 'https://hbassurance.com/',
      category: 'Web App',
      image: 'images/projects/hbassurance.png',
      date: 'Décembre 2024 - Novembre 2025'
    },
    // ─── Projets Sonatel Académie (2024) ───
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
      id: 'reseau-social-frontend',
      title: 'Réseau Social - Frontend',
      description: 'Application frontend d\'un réseau social avec interface moderne et réactive. Communication avec l\'API backend via Axios.',
      tech: ['React.js', 'Axios', 'MongoDB', 'Docker', 'Render', 'Cloudinary'],
      link: '',
      category: 'Frontend',
      image: 'images/projects/social.png',
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
      id: 'maquettage-gestion-scolaire',
      title: 'Maquettage Application Gestion Scolaire',
      description: 'Conception UI/UX complète d\'une application de gestion scolaire. Wireframes, maquettes et prototypes interactifs.',
      tech: ['Figma'],
      link: '',
      category: 'UI/UX Design',
      image: 'images/projects/social.png',
      date: 'Septembre 2024'
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
      id: 'reseau-social-backend',
      title: 'API Réseau Social - Backend',
      description: 'Conception d\'une API backend complète pour un réseau social. Architecture RESTful avec Node.js et TypeScript.',
      tech: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Docker', 'Render', 'Cloudinary'],
      link: '',
      category: 'Backend',
      image: 'images/projects/socialApi.png',
      date: 'Août 2024'
    },
    {
      id: 'gestion-dettes-boutique-laravel',
      title: 'Gestion des Dettes Boutique - Laravel',
      description: 'Application backend de gestion des dettes d\'une boutique avec notifications SMS via Infobip/Twilio.',
      tech: ['Laravel', 'Firebase', 'MongoDB', 'PostgreSQL', 'Infobip/Twilio', 'Swagger', 'Docker', 'Render'],
      link: '',
      category: 'Backend',
      image: 'images/projects/Finance.png',
      date: 'Août 2024'
    },
    {
      id: 'gestion-apprenants-spring',
      title: 'Gestion des Apprenants - API',
      description: 'Application API de gestion des apprenants et des événements de l\'ODC. Authentification sécurisée avec Spring Security.',
      tech: ['Java', 'Spring Boot', 'Spring Security', 'Docker', 'Render', 'Swagger', 'PostgreSQL', 'Firebase', 'Neon'],
      link: 'https://github.com/3-mousquetaires/gestion_odc',
      category: 'Backend',
      image: 'images/projects/odc.png',
      date: 'Juillet 2024'
    },
    {
      id: 'gestion-cargaison',
      title: 'Gestion de Cargaison Import/Export',
      description: 'Application complète pour la gestion des cargaisons import/export.',
      tech: ['TypeScript', 'PHP', 'Tailwind CSS', 'HTML', 'PostgreSQL'],
      link: 'https://github.com/avatarodc/cargaisonsT',
      category: 'Web App',
      image: 'images/projects/cargaison.png',
      date: 'Avril 2024'
    },
  ];
  
  export const skillCategories: Category[] = [
    {
      title: "Frontend",
      icon: Layout,
      description: "Développement d'interfaces utilisateur modernes et réactives",
      skills: [
        "React.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "Flutter",
        "Redux",
        "Vite",
        "Webpack"
      ]
    },
    {
      title: "Backend",
      icon: Server,
      description: "Développement de serveurs et APIs robustes", 
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Node.js (Express)",
        "Laravel",
        "PHP",
        "Python",
        "REST API",
        "JWT Auth",
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
        "Neon",
        "Prisma",
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Code,
      description: "Déploiement, conteneurisation et infrastructure cloud",
      skills: [
        "Docker",
        "AWS (S3, Lambda, EC2)",
        "Git & GitHub",
        "Render",
        "Cloudinary",
        "Architecture MVC",
        "Architecture distribuée",
        "Méthodologie Agile / Scrum",
        "Swagger",
      ]
    }
  ];
  
  export const educationList: Education[] = [
    {
      id: 'isi-master',
      date: 'Octobre 2024 - Aujourd\'hui',
      title: 'Master en Génie Logiciel',
      institution: 'Institut Supérieur d\'Informatique (ISI)',
      description: 'Formation avancée en génie logiciel, architecture des systèmes et management de projets.',
      location: 'Dakar, Sénégal'
    },
    {
      id: 'sonatel-academy',
      date: 'Février 2024 - Novembre 2024',
      title: 'Formation Développement Web & Mobile',
      institution: 'Sonatel Academy (Orange Digital Center)',
      description: 'Formation intensive en développement web et mobile, pratiques agiles, et architecture logicielle.',
      location: 'Dakar, Sénégal'
    },
    {
      id: 'isi-licence',
      date: '2021 - 2023',
      title: 'Licence en Génie Logiciel',
      institution: 'Institut Supérieur d\'Informatique (ISI)',
      description: 'Formation approfondie en génie logiciel, algorithmes et structures de données.',
      location: 'Dakar, Sénégal'
    },
    {
      id: 'bac-s2',
      date: '2018',
      title: 'Baccalauréat S2',
      institution: 'Lycée Cheikh Hamidou Kane (MBAO)',
      description: 'Baccalauréat série scientifique S2.',
      location: 'Mbao, Sénégal'
    }
  ];
  
  export const experienceList: Experience[] = [
    {
      id: 'diotali',
      date: 'Novembre 2025 - Aujourd\'hui',
      title: 'Développeur Backend',
      company: 'DIOTALI',
      location: 'Sénégal',
      role: 'Développeur Backend',
      achievements: [
        'Développement backend avec Java et Spring Boot',
        'Développement frontend avec Angular',
        'Gestion de bases de données MySQL et PostgreSQL',
        'Déploiement sur AWS (S3, Lambda, EC2)',
        'Conteneurisation avec Docker'
      ]
    },
    {
      id: 'telly-tech',
      date: 'Avril 2025 - Octobre 2025',
      title: 'Formateur en PHP',
      company: 'Telly_Tech',
      location: 'Sénégal',
      role: 'Formateur PHP',
      achievements: [
        'Formation en PHP et bonnes pratiques de développement',
        'Accompagnement des apprenants sur MySQL et PostgreSQL',
        'Conception de supports pédagogiques et exercices pratiques'
      ]
    },
    {
      id: 'wbcc',
      date: 'Décembre 2024 - Novembre 2025',
      title: 'Développeur Web',
      company: 'WBCC (World Business Contact Center)',
      location: 'Sénégal',
      role: 'Développeur Web',
      achievements: [
        'Réalisation de l\'application web RYM PARTNERS (PHP, JavaScript, MySQL)',
        'Réalisation de l\'application web RYMHOLDING avec intégration IA ChatGPT',
        'Développement frontend avec React.js',
        'Gestion et optimisation des bases de données MySQL'
      ]
    },
    {
      id: 'orange-digital-center',
      date: 'Février 2024 - Novembre 2024',
      title: 'Développeur Fullstack',
      company: 'Orange Digital Center (ODC)',
      location: 'Dakar, Sénégal',
      role: 'Développeur Full Stack',
      achievements: [
        'Développement d\'applications web modernes',
        'Travail en équipe avec méthodologie Agile/Scrum',
        'Participation à des projets innovants dans le domaine digital'
      ]
    },
    {
      id: 'lonase',
      date: 'Août 2023 - Novembre 2023',
      title: 'Développeur Web Front-End & Admin Systèmes',
      company: 'LONASE',
      location: 'Dakar, Sénégal',
      role: 'Développeur Front-End & Admin Sys/Réseaux',
      achievements: [
        'Administration système et réseau',
        'Développement ETL avec TALEND et Python',
        'Maintenance et optimisation des systèmes'
      ]
    },
    {
      id: 'teqlab',
      date: 'Juillet 2023 - Septembre 2023',
      title: 'Analyste Concepteur',
      company: 'TEQLAB',
      location: 'Sénégal',
      role: 'Analyste Concepteur',
      achievements: [
        'Analyse des besoins utilisateurs et rédaction des spécifications',
        'Modélisation UML et création de diagrammes de conception',
      ]
    },
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
      link: 'mailto:mamadougueyeoff1@gmail.com',
      color: 'hover:text-red-600'
    }
  ];
  
  export const contactInfo: Contact = {
    email: 'mamadougueyeoff1@gmail.com',
    phone: '+221 78 311 66 55',
    address: 'Mbao Pikine, Sénégal',
    availability: 'Disponible pour des opportunités'
  };