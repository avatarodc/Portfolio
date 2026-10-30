/**
 * Source unique du contenu du portfolio.
 * Pour mettre à jour le site, modifier uniquement ce fichier :
 * les composants ne contiennent aucun texte ni lien en dur.
 */
import {
  NavItem,
  Project,
  ArchiveProject,
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
  ListOrdered,
  Ticket,
  CalendarDays,
  Landmark,
  HandCoins,
  NotebookPen,
  ShieldCheck,
  Bot,
  HeartPulse,
  ScanSearch,
  Boxes,
  CodeXml,
} from 'lucide-react';

// ─── Identité ───
export const identity: Identity = {
  firstName: 'Mamadou',
  lastName: 'Gueye',
  logo: { main: 'MG', suffix: '.dev' },
};

// ─── Hero (haut de page) ───
export const hero: Hero = {
  title: 'Développeur Full Stack Java / Spring Boot & Angular',
  // `strong` = mot en gras, `accent` = mot en couleur
  bio: [
    { text: 'Également ' },
    { text: 'PHP / Laravel', style: 'strong' },
    { text: ', ' },
    { text: 'Flutter', style: 'strong' },
    { text: ' et ' },
    { text: 'IA', style: 'strong' },
    { text: '. Actuellement chez ' },
    { text: 'DIOTALI', style: 'accent' },
    { text: ' et en Master Génie Logiciel à l\'ISI Dakar.' },
  ],
  company: 'DIOTALI',
  contactLabel: 'Me contacter',
  production: {
    title: 'En production',
    projectIds: ['gfa', 'billetterie-fsf', 'rimemba'],
  },
  stats: [
    { value: '3', label: 'Ans d\'expérience' },
    { value: '3', label: 'Systèmes en production' },
    { value: '30', label: 'Développeurs formés' },
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
// Pour mettre à jour le CV : remplacer public/CV_Mamadou_Gueye.pdf (même nom de fichier).
export const cv: CvInfo = {
  file: '/CV_Mamadou_Gueye.pdf',
  downloadName: 'CV_Mamadou_Gueye.pdf',
  labels: {
    navbar: 'CV',
    mobileMenu: 'Télécharger mon CV',
    heroView: 'Voir mon CV',
    heroDownload: 'Télécharger mon CV',
  },
};

// ─── Titres des sections et libellés d'interface ───
export const sections: SectionsContent = {
  about: {
    title: 'À propos',
    subtitle: 'Des sciences au génie logiciel',
  },
  projects: {
    title: 'Réalisations en production',
    subtitle: 'Applications livrées et utilisées par de vrais clients',
  },
  products: {
    title: 'Produits',
    subtitle: 'Produits que j\'ai fondés ou développés en freelance',
  },
  ai: {
    title: 'IA et projets techniques',
    subtitle: 'Projets d\'équipe du Master à l\'ISI, et ce portfolio',
    workflowTitle: 'Développement assisté par IA',
    workflowText: 'J\'utilise Claude Code au quotidien, avec relecture et tests systématiques du code généré.',
  },
  archives: {
    title: 'Archives',
    subtitle: 'Premiers sites et projets de formation (2024 – 2026)',
    showLabel: 'Afficher les archives',
    hideLabel: 'Masquer les archives',
  },
  projectLabels: {
    statuses: {
      production: 'En production',
      deploiement: 'En cours de déploiement',
      developpement: 'En développement',
      encours: 'En cours',
      terrain: 'Testé sur le terrain',
      pilote: 'Phase pilote',
      prototype: 'Prototype',
      academique: 'Académique',
    },
    links: {
      site: 'Site',
      code: 'Code',
      demo: 'Démo',
    },
    code: 'Code',
    privateCode: 'Code privé — démo sur demande',
    role: 'Rôle',
    contextLink: 'Voir le poste',
  },
  skills: {
    title: 'Compétences Techniques',
    subtitle: 'Les technologies et outils que j\'utilise au quotidien',
    countLabel: 'technologies',
  },
  constellation: {
    title: 'Constellation de compétences',
    subtitle: 'Chaque compétence est reliée aux projets et aux postes où je l\'ai utilisée.',
    hint: 'Choisissez une compétence, un projet ou une entreprise pour voir ses liens.',
    loading: 'Chargement de la constellation…',
    graphLabel: 'Graphe des compétences reliées aux projets et aux entreprises',
    skillsTitle: 'Compétences',
    ownersTitle: 'Projets et entreprises',
    archivesLabel: 'Projets de formation',
    projectsLabel: 'Projets',
    companiesLabel: 'Entreprises',
    linkedSkillsLabel: 'Compétences utilisées',
    detailLink: 'Voir la fiche',
    clearLabel: 'Tout afficher',
    legend: {
      skill: 'Compétence',
      project: 'Projet',
      company: 'Entreprise',
      archives: 'Projets de formation',
    },
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
    subtitle: 'Une mission, un projet ou simplement un échange ? Écrivez-moi.',
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

// Projets classés du plus fort au plus modeste : production réelle > produits > académique.
// Pour ajouter une capture : déposer le fichier dans public/images/projects/ puis renseigner `image`
// (liste des captures attendues : docs/captures-a-fournir.md). Sans `image`, la fiche s'affiche sans zone image.
export const projectList: Project[] = [
  // ─── Réalisations en production ───
  {
    id: 'gfa',
    // TODO(impact) : nombre d'agences, tickets par jour, gain mesuré après la correction HikariCP — renseigner impact: ['…'] (rien n'est affiché tant que c'est vide)
    group: 'production',
    coverIcon: ListOrdered,
    title: 'GFA — Gestion de files d\'attente',
    shortTitle: 'GFA',
    context: 'DIOTALI',
    contextAnchor: '#experience',
    problem: 'Système de gestion de files d\'attente en production à la BSIC et à la SENEAU.',
    details: [
      'Correction d\'une fuite de connexions HikariCP',
      'Notifications temps réel par WebSocket',
      'Optimisation des index de la base de données',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'WebSocket'],
    role: 'Développeur Full Stack',
    status: 'production',
    statusNote: 'BSIC, SENEAU',
    links: [],
    privateCode: true,
  },
  {
    id: 'billetterie-fsf',
    // TODO(impact) : billets vendus, matchs couverts — renseigner impact: ['…'] (rien n'est affiché tant que c'est vide)
    group: 'production',
    coverIcon: Ticket,
    title: 'Billetterie de la Fédération Sénégalaise de Football',
    shortTitle: 'Billetterie FSF',
    context: 'DIOTALI',
    contextAnchor: '#experience',
    problem: 'Plateforme de billetterie de la Fédération Sénégalaise de Football.',
    details: [
      'Intégration du paiement ORABANK',
      'Transfert de tickets',
      'Configuration des partenaires',
      'Refactoring guidé par SonarQube',
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'SonarQube'],
    role: 'Développeur Full Stack',
    status: 'production',
    links: [],
    privateCode: true,
  },
  {
    id: 'rimemba',
    // TODO(impact) : événements créés, photos et vidéos partagées — renseigner impact: ['…'] (rien n'est affiché tant que c'est vide)
    group: 'production',
    coverIcon: CalendarDays,
    title: 'Rimemba',
    context: 'Produit personnel',
    problem: 'SaaS de sites d\'événements personnalisés avec partage de photos et de vidéos, décliné en marque blanche.',
    details: [
      'CI/CD GitLab → GitHub → Railway',
      'Déclinaison white-label',
    ],
    stack: ['React', 'HTML', 'CSS', 'Node.js', 'Express', 'Supabase', 'Cloudinary', 'Railway', 'CI/CD', 'GitLab', 'GitHub'],
    role: 'Fondateur',
    status: 'production',
    links: [{ kind: 'site', url: 'https://rimemba.net' }],
    privateCode: true,
    image: 'images/projects/rimemba.png',
  },
  {
    id: 'ecommune',
    group: 'production',
    coverIcon: Landmark,
    title: 'ECommune',
    context: 'DIOTALI',
    contextAnchor: '#experience',
    problem: 'Plateforme de gestion fiscale pour les communes.',
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    role: 'Développeur Full Stack',
    status: 'deploiement',
    links: [],
    privateCode: true,
  },

  {
    id: 'diotali-events',
    group: 'production',
    coverIcon: Ticket,
    title: 'Diotali Events',
    context: 'DIOTALI',
    contextAnchor: '#experience',
    problem: 'Plateforme de billetterie événementielle.',
    // points techniques (details) et stack : à compléter une fois confirmés
    stack: [],
    role: 'Développeur backend (API de l\'application mobile)',
    status: 'encours',
    links: [{ kind: 'site', url: 'https://event.diotali.com' }],
    privateCode: true,
  },

  // ─── Produits ───
  {
    id: 'coskas',
    group: 'produits',
    coverIcon: HandCoins,
    title: 'COSKAS',
    context: 'Mission freelance',
    problem: 'Gestion des cotisations multi-niveaux.',
    details: [
      'Moteur de calcul des cotisations (pattern Strategy)',
      'Quittances avec QR code, exports PDF et Excel',
      'Tableaux de bord temps réel par WebSocket',
      'Notifications SMS, WhatsApp et e-mail',
      'Authentification JWT / OAuth2',
    ],
    stack: ['Java 21', 'Spring Boot 3', 'API REST', 'MySQL', 'Flyway', 'Angular 18', 'TypeScript', 'Tailwind CSS', 'JWT', 'OAuth2', 'Docker', 'Railway'],
    role: 'Développeur Full Stack',
    status: 'developpement',
    links: [],
    privateCode: true,
  },
  {
    id: 'boryi',
    // TODO(impact) : nombre de boutiquiers testeurs — renseigner impact: ['…'] (rien n'est affiché tant que c'est vide)
    group: 'produits',
    coverIcon: NotebookPen,
    title: 'BorYi',
    context: 'Produit personnel',
    problem: 'Carnet de crédit digital pour les boutiquiers.',
    details: [
      'Fonctionne hors connexion (offline-first)',
      'Authentification par OTP',
      'Interface bilingue français / wolof',
    ],
    stack: ['Flutter', 'Riverpod', 'Clean Architecture', 'Offline-first', 'Drift', 'PowerSync', 'Supabase'],
    role: 'Fondateur',
    status: 'terrain',
    links: [],
    privateCode: true,
  },
  {
    id: 'samadahira',
    // TODO(impact) : nombre de dahiras pilotes — renseigner impact: ['…'] (rien n'est affiché tant que c'est vide)
    group: 'produits',
    coverIcon: Users,
    title: 'SamaDahira',
    context: 'Produit personnel',
    problem: 'Gestion des cotisations des dahiras.',
    details: [
      'Architecture multi-tenant avec Row Level Security',
      'Authentification par OTP',
      'Import CSV des membres',
    ],
    stack: ['Flutter', 'Supabase'],
    role: 'Fondateur',
    status: 'pilote',
    statusNote: 'avec de vrais utilisateurs',
    links: [],
    privateCode: true,
  },
  {
    id: 'verifia',
    group: 'produits',
    coverIcon: ShieldCheck,
    title: 'Verifia',
    context: 'Projet collectif',
    problem: 'Détection de désinformation en français et en wolof.',
    details: ['Présenté dans un cadre UNESCO'],
    stack: [],
    role: 'Co-créateur',
    status: 'prototype',
    links: [],
    privateCode: true,
  },

  // ─── IA et projets techniques ───
  {
    id: 'chatbot-rag',
    group: 'ia',
    coverIcon: Bot,
    title: 'Chatbot RAG de recherche documentaire',
    shortTitle: 'Chatbot RAG',
    context: 'ISI',
    problem: 'Recherche dans la documentation de l\'ISI par questions en langage naturel.',
    details: [
      'Recherche vectorielle avec pgvector',
      'Double fournisseur LLM : Groq en ligne, Ollama en local',
    ],
    stack: ['RAG', 'FastAPI', 'API REST', 'sentence-transformers', 'pgvector', 'Supabase', 'Groq', 'Ollama'],
    role: 'Membre de l\'équipe de développement',
    status: 'academique',
    links: [],
    privateCode: true,
  },
  {
    id: 'diagnostic-ecg',
    group: 'ia',
    coverIcon: HeartPulse,
    title: 'Système de diagnostic ECG',
    shortTitle: 'Diagnostic ECG',
    context: 'ISI · projet Scrum',
    problem: 'Analyse d\'électrocardiogrammes multi-dérivations et classification d\'anomalies.',
    details: [
      'Microservice d\'analyse FastAPI',
      '42 tests automatisés',
    ],
    stack: ['Python', 'FastAPI', 'neurokit2'],
    role: 'Membre de l\'équipe de développement',
    status: 'academique',
    links: [],
    privateCode: true,
  },
  {
    id: 'detecteur-telephones',
    group: 'ia',
    coverIcon: ScanSearch,
    title: 'Détecteur de téléphones',
    shortTitle: 'Détecteur YOLOv8',
    context: 'ISI',
    problem: 'Détection de téléphones par vision par ordinateur.',
    stack: ['Python', 'Vision', 'YOLOv8'],
    role: 'Membre de l\'équipe de développement',
    status: 'academique',
    links: [],
    privateCode: true,
  },
  {
    id: 'gestion-produits',
    group: 'ia',
    coverIcon: Boxes,
    title: 'Architecture microservices GestionProduits',
    shortTitle: 'GestionProduits',
    context: 'ISI',
    problem: 'Architecture microservices complète avec authentification centralisée et entrepôt de données.',
    details: [
      'Passerelle YARP devant 3 microservices',
      'Schémas PostgreSQL isolés par service',
      'Stockage de fichiers MinIO',
      'Authentification Keycloak (OIDC)',
    ],
    stack: ['Microservices', 'API REST', 'YARP', 'PostgreSQL', 'MinIO', 'Keycloak', 'OIDC'],
    role: 'Membre de l\'équipe de développement',
    status: 'academique',
    links: [],
    privateCode: true,
  },
  {
    id: 'portfolio',
    group: 'ia',
    coverIcon: CodeXml,
    title: 'Ce portfolio',
    context: 'Projet personnel',
    problem: 'Le site que vous consultez : tout son contenu provient d\'un fichier de données unique.',
    stack: ['React', 'Vite', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vercel', 'Claude Code'],
    role: 'Conception et développement',
    status: 'production',
    links: [{ kind: 'site', url: 'https://mamadou-gueye.vercel.app' }],
    privateCode: true,
  },
];

// Équivalences entre technologies, utilisées pour relier les compétences dans la constellation
// (ex. « API ChatGPT » chez WBCC compte comme OpenAI et API LLM).
export const techAliases: Record<string, string[]> = {
  'API ChatGPT': ['OpenAI', 'API LLM'],
};

// ─── Archives (bloc repliable) ───
export const archiveProjects: ArchiveProject[] = [
  {
    id: 'pdd-production',
    // TODO(cadre) : préciser « Site client — freelance » ou « Site client — WBCC »
    title: 'PDD Production — site client',
    description: 'Site vitrine one-page pour PDD Production, agence de communication événementielle à Dakar. Animations au scroll, filtres portfolio, lightbox, carrousel de témoignages, formulaire de contact et déploiement GitLab Pages via CI/CD.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitLab', 'CI/CD'],
    link: 'https://pddproduction-f5a5bd.gitlab.io',
    category: 'Site Vitrine',
    image: 'images/projects/pddproduction.png',
    date: 'Février 2026'
  },
  {
    id: 'hbassurance',
    title: 'HB Assurance — site client réalisé chez WBCC',
    description: 'Site d\'une compagnie d\'assurance, réalisé pour un client du WBCC (World Business Contact Center).',
    tech: ['WordPress'],
    link: 'https://hbassurance.com/',
    category: 'Web App',
    image: 'images/projects/hbassurance.png',
    date: 'Déc. 2024 – Oct. 2025'
  },
  // ─── Projets Sonatel Académie (2024) ───
  {
    id: 'wave-senegal-flutter',
    title: 'Clone pédagogique inspiré de Wave (mobile) — projet Sonatel Academy',
    description: 'Exercice de formation : application mobile de transfert d\'argent et de paiement inspirée de Wave, réalisée avec Flutter. Sans lien avec l\'entreprise Wave.',
    tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'API REST', 'Google Maps API'],
    link: 'https://github.com/avatarodc/Flutter-Transfert-App',
    category: 'Mobile App',
    // pas d'image : wave.png reprend le visuel officiel de Wave (ambigu pour un exercice)
    date: 'Octobre 2024'
  },
  {
    id: 'reseau-social-frontend',
    title: 'Réseau Social - Frontend',
    description: 'Application frontend d\'un réseau social avec interface moderne et réactive. Communication avec l\'API backend via Axios.',
    tech: ['React', 'HTML', 'CSS', 'Axios', 'MongoDB', 'Docker', 'Render', 'Cloudinary'],
    link: '',
    category: 'Frontend',
    image: 'images/projects/social.png',
    date: 'Octobre 2024'
  },
  {
    id: 'wave-senegal-refonte',
    title: 'Clone pédagogique inspiré de Wave — projet Sonatel Academy',
    description: 'Exercice de formation : interface web de transfert d\'argent inspirée de Wave, avec envoi programmé et périodique. Sans lien avec l\'entreprise Wave.',
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'PostgreSQL', 'Docker', 'Redis', 'Swagger'],
    link: 'https://github.com/avatarodc/money_transfert_angular',
    category: 'Full Stack',
    image: 'images/projects/wave1.png',
    date: 'Novembre 2024'
  },
  {
    id: 'gestion-tailleurs-react',
    title: 'Gestion des Tailleurs',
    description: 'Application web de gestion des tailleurs avec React JS. En tant que Chef de projet, direction de l\'équipe de développement et implémentation des meilleures pratiques pour une expérience utilisateur optimale.',
    tech: ['React', 'HTML', 'CSS', 'Redux', 'Tailwind CSS', 'GitHub'],
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
    tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Docker', 'Render', 'Cloudinary'],
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
    tech: ['TypeScript', 'PHP', 'Tailwind CSS', 'HTML', 'CSS', 'PostgreSQL'],
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
    date: 'Oct. 2024 – juil. 2027',
    title: 'Master Génie Logiciel',
    institution: 'ISI Dakar',
    description: 'M2 en cours.',
    location: 'Dakar, Sénégal'
  },
  {
    id: 'isi-licence',
    date: '2025',
    title: 'Licence Génie Logiciel',
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
    stack: ['Java', 'Spring Boot', 'API REST', 'Angular', 'TypeScript', 'PostgreSQL', 'MySQL', 'Docker', 'AWS'],
    highlights: [
      { text: 'GFA — système de gestion de files d\'attente en production à la BSIC et à la SENEAU', projectId: 'gfa' },
      { text: 'Billetterie de la Fédération Sénégalaise de Football — paiement ORABANK et transfert de tickets', projectId: 'billetterie-fsf' },
      { text: 'ECommune — plateforme de gestion fiscale pour les communes (en cours de déploiement)', projectId: 'ecommune' },
      { text: 'Diotali Events — plateforme de billetterie événementielle : backend (API) de l\'application mobile', projectId: 'diotali-events' },
    ]
  },
  {
    id: 'wbcc',
    date: 'Déc. 2024 – Oct. 2025',
    title: 'Développeur Full Stack PHP / Laravel',
    company: 'WBCC',
    stack: ['PHP', 'Laravel', 'JavaScript', 'React', 'MySQL', 'API ChatGPT'],
    highlights: [
      { text: 'Intégration de l\'API ChatGPT dans des applications Laravel pour RYM PARTNERS et RYMHOLDING' },
    ],
    clientLinks: [
      { label: 'RYMHOLDING', url: 'https://job.rymholding.com', image: 'images/projects/rymholding.jpg' },
      { label: 'RYM PARTNERS', url: 'https://www.rympartners.com/', image: 'images/projects/rympartners.jpg' },
    ]
  },
  {
    id: 'telly-tech',
    date: 'Avr. – Oct. 2025',
    title: 'Formateur PHP / JavaScript / bases de données',
    company: 'Telly Tech',
    stack: ['PHP', 'JavaScript', 'MySQL', 'PostgreSQL'],
    note: 'En parallèle du poste chez WBCC',
    highlights: [
      { text: 'Formation d\'une trentaine de développeurs en PHP, JavaScript et bases de données' },
    ]
  },
  {
    id: 'lonase',
    date: 'Sept. – Oct. 2023',
    title: 'Stagiaire développement et administration systèmes',
    company: 'LONASE',
    location: 'Dakar, Sénégal',
    highlights: [
      { text: 'Développement de flux ETL avec Talend et Python' },
    ]
  },
  {
    id: 'teqlab',
    date: 'Juil. – Sept. 2023',
    title: 'Analyste concepteur',
    company: 'TEQLAB',
    note: 'Analyse et conception',
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
  availability: 'Ouvert aux échanges'
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
