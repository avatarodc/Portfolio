/**
 * Source unique du contenu du portfolio.
 * Pour mettre à jour le site, modifier uniquement ce fichier :
 * les composants ne contiennent aucun texte ni lien en dur.
 */
import {
  NavItem,
  Project,
  Category,
  SocialLink,
  Education,
  Experience,
  Certification,
  Contact,
  Identity,
  Hero,
  CvInfo,
  SectionsContent,
  FooterContent,
  About,
  Distinction,
} from '@/types';
import {
  GithubIcon,
  GitBranch,
  LinkedinIcon,
  Mail,
  Layout,
  Server,
  Database,
  Smartphone,
  Sparkles,
  Cloud,
  Network,
  Trophy,
  GraduationCap,
  Users,
} from 'lucide-react';
import cvPdf from '@/assets/cv/cvMamadouGUEYE.pdf';

// ─── Identité ───
export const identity: Identity = {
  firstName: 'Mamadou',
  lastName: 'Gueye',
  logo: { main: 'MG', suffix: '.dev' },
};

// ─── Hero (haut de page) ───
export const hero: Hero = {
  typewriterWords: [
    'Développeur Full Stack',
    'Java / Spring Boot',
    'PHP / Laravel',
    'Angular / React',
    'Flutter',
    'IA appliquée',
  ],
  // `strong` = mot en gras, `accent` = mot en couleur
  bio: [
    { text: 'Développeur Full Stack — ' },
    { text: 'Java/Spring Boot', style: 'strong' },
    { text: ' · ' },
    { text: 'PHP/Laravel', style: 'strong' },
    { text: ' · ' },
    { text: 'Angular/React', style: 'strong' },
    { text: ' · ' },
    { text: 'Flutter', style: 'strong' },
    { text: ' · ' },
    { text: 'IA', style: 'strong' },
    { text: '. Actuellement chez ' },
    { text: 'DIOTALI', style: 'accent' },
    { text: ' et en Master Génie Logiciel à l\'ISI Dakar.' },
  ],
  company: 'DIOTALI',
  contactLabel: 'Me contacter',
  terminal: {
    prompt: 'mamadou@portfolio ~ %',
    variable: 'dev',
    fields: [
      { key: 'nom', value: 'Mamadou Gueye' },
      { key: 'rôle', value: 'Développeur Full Stack' },
      { key: 'entreprise', value: 'DIOTALI' },
      { key: 'stack', value: ['Java', 'Spring Boot', 'Laravel', 'Angular', 'React', 'Flutter'] },
      { key: 'passion', value: true },
    ],
  },
  stats: [
    { value: '~3', label: 'Ans d\'expérience' },
    { value: '~30', label: 'Développeurs formés' },
    { value: '3', label: 'Langues parlées' },
  ],
  scrollHint: 'Découvrir',
};

// ─── À propos ───
export const about: About = {
  paragraphs: [
    'Développeur Full Stack basé à Dakar, je conçois et livre depuis environ trois ans des applications utilisées en production par des clients réels, du back-end Java/Spring Boot ou PHP/Laravel jusqu\'aux interfaces Angular, React et Flutter.',
    'En parallèle, je fonde et fais grandir mes propres produits en ligne, de l\'idée jusqu\'au déploiement.',
    'Venu des sciences — physique-chimie à l\'UCAD, puis statistiques à l\'IRES — j\'ai basculé vers l\'informatique en gardant le goût de la rigueur et de la transmission : je forme des développeurs et j\'enseigne les sciences à des élèves de 3e.',
  ],
  languagesTitle: 'Langues',
  languages: [
    { name: 'Français', level: 'Courant' },
    { name: 'Wolof', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Intermédiaire (B1)' },
  ],
};

// ─── CV ───
export const cv: CvInfo = {
  file: cvPdf,
  downloadName: 'CV_Mamadou_GUEYE.pdf',
  viewUrl: 'https://drive.google.com/file/d/10QMzFWJ3yXcvXNaD-j-le4ixdHuIXxtR/view',
  downloadUrl: 'https://drive.google.com/uc?export=download&id=10QMzFWJ3yXcvXNaD-j-le4ixdHuIXxtR',
  labels: {
    navbar: 'CV',
    mobileMenu: 'Télécharger mon CV',
    heroView: 'Voir mon CV',
    heroDownload: 'Télécharger CV',
  },
};

// ─── Titres des sections et libellés d'interface ───
export const sections: SectionsContent = {
  about: {
    title: 'À propos',
    subtitle: 'Des sciences au génie logiciel',
  },
  projects: {
    title: 'Projets Réalisés',
    subtitle: 'Une sélection de mes projets les plus récents',
    allLabel: 'Tous',
    showAllLabel: 'Voir tous les projets',
    codeLabel: 'Code',
    privateLabel: 'Privé',
  },
  skills: {
    title: 'Compétences Techniques',
    subtitle: 'Les technologies et outils que j\'utilise au quotidien',
    countLabel: 'technologies',
  },
  education: {
    title: 'Formation et parcours',
    subtitle: 'Des sciences fondamentales au Master Génie Logiciel',
  },
  experience: {
    title: 'Expérience Professionnelle',
    subtitle: 'Postes occupés et réalisations',
    detailLabel: 'Voir le détail',
    clientsLabel: 'Sites clients',
  },
  distinctions: {
    title: 'Distinctions et engagements',
    subtitle: 'Compétitions, enseignement et transmission',
  },
  certifications: {
    title: 'Certifications',
    subtitle: 'Formations en ligne complémentaires',
    linkLabel: 'Voir le certificat',
  },
  contact: {
    title: 'Contact',
    subtitle: 'Un poste, une mission freelance ou un projet de formation ? Écrivez-moi.',
    labels: {
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      availability: 'Disponibilité',
      social: 'Retrouvez-moi',
    },
    cta: {
      title: 'Parlons de votre projet',
      text: 'Le bouton ci-dessous ouvre votre messagerie avec un e-mail pré-rempli : il ne reste qu\'à décrire votre besoin.',
      button: 'Écrire un e-mail',
      mailSubject: 'Prise de contact via votre portfolio',
      mailBody: 'Bonjour Mamadou,\n\n[Présentez votre projet, la mission ou le poste]\n\nCordialement,\n',
      hint: 'Pas de messagerie configurée ? Écrivez directement à',
    },
  },
};

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const projectList: Project[] = [
  // ─── Projets Freelance ───
  {
    id: 'rimemba',
    title: 'Rimemba — Albums Numériques d\'Événements',
    description: 'Plateforme SaaS de création d\'albums numériques pour événements (mariage, baptême, anniversaire, remise de diplôme...). Galerie photos plein écran avec lightbox et swipe mobile, thèmes visuels personnalisés, protection PIN, livre d\'or invités, dashboard admin complet avec audit logs. Déploiement continu via Railway.',
    tech: ['React.js', 'Vite', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'Cloudinary', 'Railway', 'Vercel'],
    link: 'https://rimemba.net',
    category: 'Full Stack',
    image: 'images/projects/rimemba.png',
    date: 'Mars 2026'
  },
  {
    id: 'pdd-production',
    title: 'PDD Production - Site Vitrine',
    description: 'Site vitrine one-page pour PDD Production, agence de communication événementielle à Dakar. Animations au scroll, filtres portfolio, lightbox, carrousel de témoignages, formulaire de contact et déploiement GitLab Pages via CI/CD.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitLab CI/CD'],
    link: 'https://pddproduction-f5a5bd.gitlab.io',
    category: 'Site Vitrine',
    image: 'images/projects/pddproduction.png',
    date: 'Février 2026'
  },
  // ─── Archives ───
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
    title: "Back-end",
    icon: Server,
    description: "APIs et logique métier",
    skills: [
      "Java / Spring Boot",
      "PHP / Laravel",
      "Node.js / Express",
      "Python / FastAPI",
    ]
  },
  {
    title: "Front-end",
    icon: Layout,
    description: "Interfaces web réactives",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML / CSS",
      "Angular",
      "React",
      "Tailwind CSS",
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    description: "Applications Flutter",
    skills: [
      "Flutter",
      "Riverpod",
      "Clean Architecture",
      "Offline-first",
    ]
  },
  {
    title: "Données",
    icon: Database,
    description: "Bases relationnelles, NoSQL et vectorielles",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "pgvector",
      "Supabase",
    ]
  },
  {
    title: "IA",
    icon: Sparkles,
    description: "Intégration de modèles dans des produits",
    skills: [
      "API LLM (OpenAI, Groq, Ollama)",
      "RAG",
      "Vision (YOLOv8)",
    ]
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Conteneurs, intégration continue et hébergement",
    skills: [
      "Docker",
      "CI/CD (GitLab, GitHub)",
      "AWS",
      "Railway",
      "Vercel",
      "SonarQube",
    ]
  },
  {
    title: "Architecture",
    icon: Network,
    description: "Conception de systèmes",
    skills: [
      "Microservices",
      "API REST",
      "JWT / OAuth2 / OIDC",
      "WebSocket",
    ]
  }
];

export const educationList: Education[] = [
  {
    id: 'isi-master',
    date: 'Diplôme prévu en juillet 2027',
    title: 'Master Génie Logiciel',
    institution: 'ISI Dakar',
    description: 'M2 en cours.',
    location: 'Dakar, Sénégal'
  },
  {
    id: 'isi-licence',
    date: '2025',
    title: 'Licence',
    institution: 'ISI Dakar',
    location: 'Dakar, Sénégal'
  },
  {
    id: 'sonatel-academy',
    date: 'Promotion 2024',
    title: 'Développeur Web / Mobile',
    institution: 'Sonatel Academy / Orange Digital Center',
    location: 'Dakar, Sénégal'
  },
  {
    id: 'simplon',
    date: '2020',
    title: '« Les Mains dans la Tech »',
    institution: 'Simplon Foundation',
  },
  {
    id: 'ucad-ires',
    date: '2018 – 2020',
    title: 'Physique-chimie, puis statistiques',
    institution: 'UCAD, Faculté des Sciences et Techniques, puis IRES',
    location: 'Dakar, Sénégal'
  },
  {
    id: 'bac-s2',
    date: '2018',
    title: 'Baccalauréat S2',
    institution: 'Lycée Cheikh Hamidou Kane de Mbao',
    location: 'Mbao, Sénégal'
  }
];

export const experienceList: Experience[] = [
  {
    id: 'diotali',
    date: 'Nov. 2025 – Aujourd\'hui',
    title: 'Développeur Full Stack',
    company: 'DIOTALI',
    location: 'Dakar, Sénégal',
    summary: 'Java / Spring Boot · Angular · PostgreSQL',
    highlights: [
      { text: 'GFA — système de gestion de files d\'attente en production à la BSIC et à la SENEAU', projectId: 'gfa' },
      { text: 'Billetterie de la Fédération Sénégalaise de Football — paiement ORABANK et transfert de tickets', projectId: 'billetterie-fsf' },
      { text: 'ECommune — plateforme de gestion fiscale pour les communes (en cours de déploiement)', projectId: 'ecommune' },
    ]
  },
  {
    id: 'wbcc',
    date: 'Déc. 2024 – Oct. 2025',
    title: 'Développeur Full Stack PHP / Laravel',
    company: 'WBCC',
    summary: 'PHP / Laravel · API ChatGPT',
    highlights: [
      { text: 'Intégration de l\'API ChatGPT dans des applications Laravel pour RYM PARTNERS et RYMHOLDING' },
    ],
    clientLinks: [
      { label: 'RYMHOLDING', url: 'https://job.rymholding.com' },
      { label: 'RYM PARTNERS', url: 'https://www.rympartners.com/' },
    ]
  },
  {
    id: 'telly-tech',
    date: 'Avr. – Oct. 2025',
    title: 'Formateur PHP / JavaScript / bases de données',
    company: 'Telly Tech',
    summary: 'En parallèle du poste chez WBCC',
    highlights: [
      { text: 'Formation d\'une trentaine de développeurs en PHP, JavaScript et bases de données' },
    ]
  },
  {
    id: 'lonase',
    date: 'Sept. – Oct. 2023',
    title: 'Stagiaire développeur',
    company: 'LONASE',
    location: 'Dakar, Sénégal',
    highlights: []
  },
  {
    id: 'teqlab',
    date: 'Juil. – Sept. 2023',
    title: 'Analyste concepteur',
    company: 'TEQLAB',
    summary: 'Analyse et conception',
    highlights: [
      { text: 'Rédaction des spécifications' },
      { text: 'Modélisation UML' },
    ]
  },
];

export const distinctions: Distinction[] = [
  {
    id: 'cadev',
    icon: Trophy,
    title: 'CADEV 2026',
    description: 'Coupe d\'Afrique des Développeurs.',
    date: '2026',
  },
  {
    id: 'hackathon-sonatel',
    icon: Trophy,
    title: 'Hackathon Sonatel',
    description: 'Participation au hackathon organisé par Sonatel.',
  },
  {
    id: 'formation-devs',
    icon: Users,
    title: 'Formation de développeurs',
    description: 'Une trentaine de développeurs formés en PHP, JavaScript et bases de données chez Telly Tech.',
    date: '2025',
  },
  {
    id: 'enseignement',
    icon: GraduationCap,
    title: 'Enseignement des sciences',
    description: 'Cours de mathématiques et de physique-chimie à des élèves de 3e depuis environ trois ans.',
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
    id: 'gitlab',
    Icon: GitBranch,
    label: 'GitLab',
    link: 'https://gitlab.com/odcmamadougueye',
    color: 'hover:text-orange-600'
  },
  {
    id: 'linkedin',
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mamadou-gueye-997b24200',
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
  address: 'Dakar, Sénégal',
  availability: 'Disponible pour des opportunités'
};

// ─── Pied de page ───
export const footer: FooterContent = {
  bio: 'Développeur Full Stack à Dakar — Java/Spring Boot · PHP/Laravel · Angular/React · Flutter · IA.',
  navigationTitle: 'Navigation',
  contactTitle: 'Contact',
  contactLabel: 'Me contacter',
  rights: 'Tous droits réservés.',
  madeWith: 'Fait avec',
  madeIn: 'au Sénégal',
};
