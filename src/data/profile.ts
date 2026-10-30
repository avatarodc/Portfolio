/**
 * Source unique du contenu du portfolio.
 * Pour mettre à jour le site, modifier uniquement ce fichier :
 * les composants ne contiennent aucun texte ni lien en dur.
 *
 * Textes bilingues : toute chaîne traduisible s'écrit { fr: '…', en: '…' }.
 * Les noms propres, technologies, identifiants et URL restent de simples chaînes.
 * Chaque export est résolu dans la langue de la page (voir src/lib/i18n.ts).
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
  UiLabels,
} from '@/types';
import { currentLang, localize, Localizable } from '@/lib/i18n';
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
  MessageSquareText,
} from 'lucide-react';

// Langue de la page et résolution des textes { fr, en }
export const lang = currentLang;
const t = <T,>(value: Localizable<T>): T => localize<T>(value, lang);

const DAKAR = { fr: 'Dakar, Sénégal', en: 'Dakar, Senegal' };
const TEAM_MEMBER = { fr: 'Membre de l\'équipe de développement', en: 'Member of the development team' };
const PERSONAL_PRODUCT = { fr: 'Produit personnel', en: 'Personal product' };
const FOUNDER = { fr: 'Fondateur', en: 'Founder' };

// ─── Identité ───
export const identity: Identity = {
  firstName: 'Mamadou',
  lastName: 'Gueye',
  logo: { main: 'MG', suffix: '.dev' },
};

// ─── Libellés d'interface (accessibilité, sélecteur de langue) ───
export const ui: UiLabels = t<UiLabels>({
  themeToggle: { fr: 'Changer le thème', en: 'Toggle theme' },
  menu: { fr: 'Menu', en: 'Menu' },
  backToTop: { fr: 'Retour en haut', en: 'Back to top' },
  languageSwitch: { fr: 'Read in English', en: 'Lire en français' },
  otherLanguage: { fr: 'EN', en: 'FR' },
});

// ─── Hero (haut de page) ───
export const hero: Hero = t<Hero>({
  title: {
    fr: 'Développeur Full Stack Java / Spring Boot & Angular',
    en: 'Full Stack Developer — Java / Spring Boot & Angular',
  },
  // `strong` = mot en gras, `accent` = mot en couleur
  bio: [
    { text: { fr: 'Également ', en: 'Also ' } },
    { text: 'PHP / Laravel', style: 'strong' },
    { text: ', ' },
    { text: 'Flutter', style: 'strong' },
    { text: { fr: ' et ', en: ' and ' } },
    { text: { fr: 'IA', en: 'AI' }, style: 'strong' },
    { text: { fr: '. Actuellement chez ', en: '. Currently at ' } },
    { text: 'DIOTALI', style: 'accent' },
    { text: { fr: ' et en Master Génie Logiciel à l\'ISI Dakar.', en: ' and studying for a Master\'s in Software Engineering at ISI Dakar.' } },
  ],
  company: 'DIOTALI',
  contactLabel: { fr: 'Me contacter', en: 'Contact me' },
  production: {
    title: { fr: 'En production', en: 'In production' },
    projectIds: ['gfa', 'billetterie-fsf', 'rimemba'],
  },
  stats: [
    { value: '3', label: { fr: 'Ans d\'expérience', en: 'Years of experience' } },
    { value: '3', label: { fr: 'Systèmes en production', en: 'Systems in production' } },
    { value: '30', label: { fr: 'Développeurs formés', en: 'Developers trained' } },
  ],
  scrollHint: { fr: 'Découvrir', en: 'Explore' },
});

// ─── À propos ───
export const about: About = t<About>({
  paragraphs: [
    {
      fr: 'Développeur Full Stack basé à Dakar, je conçois et livre depuis environ trois ans des applications utilisées en production par des clients réels, du back-end Java/Spring Boot ou PHP/Laravel jusqu\'aux interfaces Angular, React et Flutter.',
      en: 'I am a Full Stack Developer based in Dakar. For about three years, I have been designing and delivering applications used in production by real clients, from Java/Spring Boot or PHP/Laravel back ends to Angular, React and Flutter interfaces.',
    },
    {
      fr: 'En parallèle, je fonde et fais grandir mes propres produits en ligne, de l\'idée jusqu\'au déploiement.',
      en: 'Alongside this, I found and grow my own online products, from the initial idea to deployment.',
    },
    {
      fr: 'Venu des sciences — physique-chimie à l\'UCAD, puis statistiques à l\'IRES — j\'ai basculé vers l\'informatique en gardant le goût de la rigueur et de la transmission : je forme des développeurs et j\'enseigne les sciences à des élèves de 3e.',
      en: 'I came from the sciences — physics and chemistry at UCAD, then statistics at IRES — and moved into software while keeping a taste for rigour and teaching: I train developers and teach science to middle-school students.',
    },
  ],
  languagesTitle: { fr: 'Langues', en: 'Languages' },
  languages: [
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'Courant', en: 'Fluent' } },
    { name: 'Wolof', level: { fr: 'Langue maternelle', en: 'Native' } },
    { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Intermédiaire (B1)', en: 'Intermediate (B1)' } },
  ],
});

// ─── CV ───
// Pour mettre à jour le CV : remplacer public/CV_Mamadou_Gueye.pdf (même nom de fichier).
// Le CV n'existe qu'en français : la version anglaise du site l'indique.
export const cv: CvInfo = t<CvInfo>({
  file: '/CV_Mamadou_Gueye.pdf',
  downloadName: 'CV_Mamadou_Gueye.pdf',
  labels: {
    navbar: { fr: 'CV', en: 'CV (French)' },
    mobileMenu: { fr: 'Télécharger mon CV', en: 'Download my CV (French)' },
    heroView: { fr: 'Voir mon CV', en: 'View my CV (French)' },
    heroDownload: { fr: 'Télécharger mon CV', en: 'Download my CV (French)' },
  },
});

// ─── Titres des sections et libellés d'interface ───
export const sections: SectionsContent = t<SectionsContent>({
  about: {
    title: { fr: 'À propos', en: 'About' },
    subtitle: { fr: 'Des sciences au génie logiciel', en: 'From science to software engineering' },
  },
  projects: {
    title: { fr: 'Réalisations en production', en: 'Work in production' },
    subtitle: { fr: 'Applications livrées et utilisées par de vrais clients', en: 'Applications delivered to and used by real clients' },
  },
  products: {
    title: { fr: 'Produits', en: 'Products' },
    subtitle: { fr: 'Produits que j\'ai fondés ou développés en freelance', en: 'Products I founded or built as a freelancer' },
  },
  ai: {
    title: { fr: 'IA', en: 'AI' },
    subtitle: { fr: 'Intégrations d\'IA en production et en projet', en: 'AI integrations, in production and in projects' },
    workflowTitle: { fr: 'Développement assisté par IA', en: 'AI-assisted development' },
    workflowText: {
      fr: 'J\'utilise Claude Code au quotidien, avec relecture et tests systématiques du code généré.',
      en: 'I use Claude Code every day, with systematic review and testing of the generated code.',
    },
  },
  academic: {
    title: { fr: 'Projets académiques', en: 'Academic projects' },
    subtitle: { fr: 'Projets d\'équipe du Master à l\'ISI, et ce portfolio', en: 'Team projects from my Master\'s at ISI, and this portfolio' },
  },
  archives: {
    title: { fr: 'Archives', en: 'Archive' },
    subtitle: { fr: 'Premiers sites et projets de formation (2024 – 2026)', en: 'Early websites and training projects (2024 – 2026)' },
    showLabel: { fr: 'Afficher les archives', en: 'Show archive' },
    hideLabel: { fr: 'Masquer les archives', en: 'Hide archive' },
  },
  projectLabels: {
    statuses: {
      production: { fr: 'En production', en: 'In production' },
      deploiement: { fr: 'En cours de déploiement', en: 'Being deployed' },
      developpement: { fr: 'En développement', en: 'In development' },
      encours: { fr: 'En cours', en: 'In progress' },
      terrain: { fr: 'Testé sur le terrain', en: 'Field-tested' },
      pilote: { fr: 'Phase pilote', en: 'Pilot phase' },
      prototype: { fr: 'Prototype', en: 'Prototype' },
      academique: { fr: 'Académique', en: 'Academic' },
    },
    links: {
      site: { fr: 'Site', en: 'Website' },
      code: 'Code',
      demo: { fr: 'Démo', en: 'Demo' },
    },
    code: 'Code',
    privateCode: { fr: 'Code privé — démo sur demande', en: 'Private code — demo on request' },
    role: { fr: 'Rôle', en: 'Role' },
    contextLink: { fr: 'Voir le poste', en: 'See the position' },
  },
  skills: {
    title: { fr: 'Compétences Techniques', en: 'Technical Skills' },
    subtitle: { fr: 'Les technologies et outils que j\'utilise au quotidien', en: 'The technologies and tools I use every day' },
    countLabel: { fr: 'technologies', en: 'technologies' },
  },
  constellation: {
    title: { fr: 'Constellation de compétences', en: 'Skills constellation' },
    subtitle: {
      fr: 'Chaque compétence est reliée aux projets et aux postes où je l\'ai utilisée.',
      en: 'Each skill is linked to the projects and positions where I used it.',
    },
    hint: {
      fr: 'Choisissez une compétence, un projet ou une entreprise pour voir ses liens.',
      en: 'Choose a skill, a project or a company to see its links.',
    },
    clickHint: { fr: 'Cliquez sur une compétence', en: 'Click a skill' },
    demoSkill: 'Spring Boot',
    hubCount: 8,
    loading: { fr: 'Chargement de la constellation…', en: 'Loading the constellation…' },
    graphLabel: {
      fr: 'Graphe des compétences reliées aux projets et aux entreprises',
      en: 'Graph of skills linked to projects and companies',
    },
    skillsTitle: { fr: 'Compétences', en: 'Skills' },
    ownersTitle: { fr: 'Projets et entreprises', en: 'Projects and companies' },
    projectsLabel: { fr: 'Projets', en: 'Projects' },
    companiesLabel: { fr: 'Entreprises', en: 'Companies' },
    linkedSkillsLabel: { fr: 'Compétences utilisées', en: 'Skills used' },
    detailLink: { fr: 'Voir la fiche', en: 'See the details' },
    clearLabel: { fr: 'Tout afficher', en: 'Show all' },
    legend: {
      skill: { fr: 'Compétence', en: 'Skill' },
      project: { fr: 'Projet', en: 'Project' },
      company: { fr: 'Entreprise', en: 'Company' },
    },
  },
  education: {
    title: { fr: 'Formation et parcours', en: 'Education and background' },
    subtitle: { fr: 'Des sciences fondamentales au Master Génie Logiciel', en: 'From the natural sciences to a Master\'s in Software Engineering' },
  },
  experience: {
    title: { fr: 'Expérience Professionnelle', en: 'Professional Experience' },
    subtitle: { fr: 'Postes occupés et réalisations', en: 'Positions held and achievements' },
    detailLabel: { fr: 'Voir le détail', en: 'See the details' },
    clientsLabel: { fr: 'Sites clients', en: 'Client websites' },
  },
  distinctions: {
    title: { fr: 'Distinctions et engagements', en: 'Distinctions and commitments' },
    subtitle: { fr: 'Compétitions, enseignement et transmission', en: 'Competitions, teaching and mentoring' },
  },
  certifications: {
    title: 'Certifications',
    subtitle: { fr: 'Projets guidés Coursera, vérifiables en ligne', en: 'Coursera guided projects, verifiable online' },
    linkLabel: { fr: 'Vérifier le certificat', en: 'Verify the certificate' },
  },
  contact: {
    title: 'Contact',
    subtitle: {
      fr: 'Une mission, un projet ou simplement un échange ? Écrivez-moi.',
      en: 'A mission, a project or simply a conversation? Write to me.',
    },
    labels: {
      email: 'Email',
      phone: { fr: 'Téléphone', en: 'Phone' },
      location: { fr: 'Localisation', en: 'Location' },
      availability: { fr: 'Disponibilité', en: 'Availability' },
      social: { fr: 'Retrouvez-moi', en: 'Find me online' },
    },
    cta: {
      title: { fr: 'Parlons de votre projet', en: 'Let\'s talk about your project' },
      text: {
        fr: 'Le bouton ci-dessous ouvre votre messagerie avec un e-mail pré-rempli : il ne reste qu\'à décrire votre besoin.',
        en: 'The button below opens your email client with a pre-filled message: all that is left is to describe what you need.',
      },
      button: { fr: 'Écrire un e-mail', en: 'Write an email' },
      mailSubject: { fr: 'Prise de contact via votre portfolio', en: 'Getting in touch via your portfolio' },
      mailBody: {
        fr: 'Bonjour Mamadou,\n\n[Présentez votre projet ou votre besoin]\n\nCordialement,\n',
        en: 'Hello Mamadou,\n\n[Describe your project or what you need]\n\nBest regards,\n',
      },
      hint: { fr: 'Pas de messagerie configurée ? Écrivez directement à', en: 'No email client set up? Write directly to' },
    },
  },
});

export const navItems: NavItem[] = t<NavItem[]>([
  { label: { fr: 'Accueil', en: 'Home' }, href: '#home' },
  { label: { fr: 'À propos', en: 'About' }, href: '#about' },
  { label: { fr: 'Expérience', en: 'Experience' }, href: '#experience' },
  { label: { fr: 'Projets', en: 'Projects' }, href: '#projects' },
  { label: { fr: 'Compétences', en: 'Skills' }, href: '#skills' },
  { label: { fr: 'Formation', en: 'Education' }, href: '#education' },
  { label: 'Contact', href: '#contact' },
]);

// Projets classés du plus fort au plus modeste : production réelle > produits > académique.
// Pour ajouter une capture : déposer le fichier dans public/images/projects/ puis renseigner `image`
// (liste des captures attendues : docs/captures-a-fournir.md). Sans `image`, la fiche s'affiche sans zone image.
const allProjects: Project[] = t<Project[]>([
  // ─── Réalisations en production ───
  {
    id: 'gfa',
    // TODO(impact) : nombre d'agences, tickets par jour, gain mesuré après la correction HikariCP — renseigner impact: ['…'] (rien n'est affiché tant que c'est vide)
    group: 'production',
    coverIcon: ListOrdered,
    title: { fr: 'GFA — Gestion de files d\'attente', en: 'GFA — Queue management' },
    shortTitle: 'GFA',
    context: 'DIOTALI',
    contextAnchor: '#experience',
    problem: {
      fr: 'Système de gestion de files d\'attente en production à la BSIC et à la SENEAU.',
      en: 'Queue management system in production at BSIC and SENEAU.',
    },
    details: [
      { fr: 'Correction d\'une fuite de connexions HikariCP', en: 'Fixed a HikariCP connection leak' },
      { fr: 'Notifications temps réel par WebSocket', en: 'Real-time notifications over WebSocket' },
      { fr: 'Optimisation des index de la base de données', en: 'Database index optimisation' },
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'WebSocket'],
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
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
    title: { fr: 'Billetterie de la Fédération Sénégalaise de Football', en: 'Senegalese Football Federation ticketing' },
    shortTitle: { fr: 'Billetterie FSF', en: 'FSF ticketing' },
    context: 'DIOTALI',
    contextAnchor: '#experience',
    problem: {
      fr: 'Plateforme de billetterie de la Fédération Sénégalaise de Football.',
      en: 'Ticketing platform for the Senegalese Football Federation (FSF).',
    },
    details: [
      { fr: 'Intégration du paiement ORABANK', en: 'ORABANK payment integration' },
      { fr: 'Transfert de tickets', en: 'Ticket transfer' },
      { fr: 'Configuration des partenaires', en: 'Partner configuration' },
      { fr: 'Refactoring guidé par SonarQube', en: 'SonarQube-driven refactoring' },
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'SonarQube'],
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
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
    context: PERSONAL_PRODUCT,
    problem: {
      fr: 'SaaS de sites d\'événements personnalisés avec partage de photos et de vidéos, décliné en marque blanche.',
      en: 'SaaS for custom event websites with photo and video sharing, also offered as a white-label product.',
    },
    details: [
      'CI/CD GitLab → GitHub → Railway',
      { fr: 'Déclinaison white-label', en: 'White-label edition' },
    ],
    stack: ['React', 'HTML', 'CSS', 'Node.js', 'Express', 'Supabase', 'Cloudinary', 'Railway', 'CI/CD', 'GitLab', 'GitHub'],
    role: FOUNDER,
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
    problem: { fr: 'Plateforme de gestion fiscale pour les communes.', en: 'Tax management platform for municipalities.' },
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
    status: 'deploiement',
    links: [],
    privateCode: true,
  },

  {
    id: 'diotali-events',
    // TODO(fiche) : points techniques (details) et stack à renseigner, puis retirer visible: false
    visible: false,
    group: 'production',
    coverIcon: Ticket,
    title: 'Diotali Events',
    context: 'DIOTALI',
    contextAnchor: '#experience',
    problem: { fr: 'Plateforme de billetterie événementielle.', en: 'Event ticketing platform.' },
    // points techniques (details) et stack : à compléter une fois confirmés
    stack: [],
    role: { fr: 'Développeur backend (API de l\'application mobile)', en: 'Back-end developer (mobile app API)' },
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
    context: { fr: 'Mission freelance', en: 'Freelance project' },
    problem: { fr: 'Gestion des cotisations multi-niveaux.', en: 'Multi-level membership fee management.' },
    details: [
      { fr: 'Moteur de calcul des cotisations (pattern Strategy)', en: 'Fee calculation engine (Strategy pattern)' },
      { fr: 'Quittances avec QR code, exports PDF et Excel', en: 'Receipts with QR codes, PDF and Excel exports' },
      { fr: 'Tableaux de bord temps réel par WebSocket', en: 'Real-time dashboards over WebSocket' },
      { fr: 'Notifications SMS, WhatsApp et e-mail', en: 'SMS, WhatsApp and email notifications' },
      { fr: 'Authentification JWT / OAuth2', en: 'JWT / OAuth2 authentication' },
    ],
    stack: ['Java 21', 'Spring Boot 3', 'API REST', 'MySQL', 'Flyway', 'Angular 18', 'TypeScript', 'Tailwind CSS', 'JWT', 'OAuth2', 'Docker', 'Railway'],
    role: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
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
    context: PERSONAL_PRODUCT,
    problem: { fr: 'Carnet de crédit digital pour les boutiquiers.', en: 'Digital credit ledger for shopkeepers.' },
    details: [
      { fr: 'Fonctionne hors connexion (offline-first)', en: 'Works offline (offline-first)' },
      { fr: 'Authentification par OTP', en: 'OTP authentication' },
      { fr: 'Interface bilingue français / wolof', en: 'Bilingual French / Wolof interface' },
    ],
    stack: ['Flutter', 'Riverpod', 'Clean Architecture', 'Offline-first', 'Drift', 'PowerSync', 'Supabase'],
    role: FOUNDER,
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
    context: PERSONAL_PRODUCT,
    problem: {
      fr: 'Gestion des cotisations des dahiras.',
      en: 'Membership fee management for dahiras (religious associations).',
    },
    details: [
      { fr: 'Architecture multi-tenant avec Row Level Security', en: 'Multi-tenant architecture with Row Level Security' },
      { fr: 'Authentification par OTP', en: 'OTP authentication' },
      { fr: 'Import CSV des membres', en: 'CSV import of members' },
    ],
    stack: ['Flutter', 'Supabase'],
    role: FOUNDER,
    status: 'pilote',
    statusNote: { fr: 'avec de vrais utilisateurs', en: 'with real users' },
    links: [],
    privateCode: true,
  },
  {
    id: 'verifia',
    // TODO(fiche) : stack et points techniques à renseigner, puis retirer visible: false
    visible: false,
    group: 'produits',
    coverIcon: ShieldCheck,
    title: 'Verifia',
    context: { fr: 'Projet collectif', en: 'Team project' },
    problem: {
      fr: 'Détection de désinformation en français et en wolof.',
      en: 'Misinformation detection in French and Wolof.',
    },
    details: [{ fr: 'Présenté dans un cadre UNESCO', en: 'Presented in a UNESCO setting' }],
    stack: [],
    role: { fr: 'Co-créateur', en: 'Co-creator' },
    status: 'prototype',
    links: [],
    privateCode: true,
  },

  // ─── IA ───
  {
    id: 'chatgpt-wbcc',
    group: 'ia',
    coverIcon: MessageSquareText,
    title: { fr: 'Intégration de l\'API ChatGPT — WBCC', en: 'ChatGPT API integration — WBCC' },
    shortTitle: 'ChatGPT · WBCC',
    context: 'WBCC',
    contextAnchor: '#experience',
    problem: {
      fr: 'Intégration de l\'API ChatGPT dans des applications Laravel pour RYM PARTNERS et RYMHOLDING.',
      en: 'Integration of the ChatGPT API into Laravel applications for RYM PARTNERS and RYMHOLDING.',
    },
    stack: ['PHP', 'Laravel', 'API ChatGPT'],
    role: { fr: 'Développeur Full Stack PHP / Laravel', en: 'Full Stack PHP / Laravel Developer' },
    status: 'production',
    links: [],
    privateCode: true,
  },
  {
    id: 'chatbot-rag',
    group: 'ia',
    coverIcon: Bot,
    title: { fr: 'Chatbot RAG de recherche documentaire', en: 'RAG chatbot for document search' },
    shortTitle: { fr: 'Chatbot RAG', en: 'RAG chatbot' },
    context: 'ISI',
    problem: {
      fr: 'Recherche dans la documentation de l\'ISI par questions en langage naturel.',
      en: 'Searching ISI\'s documentation by asking questions in natural language.',
    },
    details: [
      { fr: 'Recherche vectorielle avec pgvector', en: 'Vector search with pgvector' },
      { fr: 'Double fournisseur LLM : Groq en ligne, Ollama en local', en: 'Two LLM providers: Groq online, Ollama locally' },
    ],
    stack: ['RAG', 'FastAPI', 'API REST', 'sentence-transformers', 'pgvector', 'Supabase', 'Groq', 'Ollama'],
    role: TEAM_MEMBER,
    status: 'academique',
    links: [],
    privateCode: true,
  },

  // ─── Projets académiques ───
  {
    id: 'diagnostic-ecg',
    group: 'academique',
    coverIcon: HeartPulse,
    title: { fr: 'Système de diagnostic ECG', en: 'ECG diagnosis system' },
    shortTitle: { fr: 'Diagnostic ECG', en: 'ECG diagnosis' },
    context: { fr: 'ISI · projet Scrum', en: 'ISI · Scrum project' },
    problem: {
      fr: 'Analyse d\'électrocardiogrammes multi-dérivations et classification d\'anomalies.',
      en: 'Multi-lead electrocardiogram analysis and anomaly classification.',
    },
    details: [
      { fr: 'Microservice d\'analyse FastAPI', en: 'FastAPI analysis microservice' },
      { fr: '42 tests automatisés', en: '42 automated tests' },
    ],
    stack: ['Python', 'FastAPI', 'neurokit2'],
    role: TEAM_MEMBER,
    status: 'academique',
    links: [],
    privateCode: true,
  },
  {
    id: 'detecteur-telephones',
    group: 'academique',
    coverIcon: ScanSearch,
    title: { fr: 'Détecteur de téléphones', en: 'Phone detector' },
    shortTitle: { fr: 'Détecteur YOLOv8', en: 'YOLOv8 detector' },
    context: 'ISI',
    problem: { fr: 'Détection de téléphones par vision par ordinateur.', en: 'Phone detection using computer vision.' },
    stack: ['Python', 'Vision', 'YOLOv8'],
    role: TEAM_MEMBER,
    status: 'academique',
    links: [],
    privateCode: true,
  },
  {
    id: 'gestion-produits',
    group: 'academique',
    coverIcon: Boxes,
    title: { fr: 'Architecture microservices GestionProduits', en: 'GestionProduits microservices architecture' },
    shortTitle: 'GestionProduits',
    context: 'ISI',
    problem: {
      fr: 'Architecture microservices complète avec authentification centralisée et entrepôt de données.',
      en: 'Complete microservices architecture with centralised authentication and a data warehouse.',
    },
    details: [
      { fr: 'Passerelle YARP devant 3 microservices', en: 'YARP gateway in front of 3 microservices' },
      { fr: 'Schémas PostgreSQL isolés par service', en: 'Isolated PostgreSQL schemas per service' },
      { fr: 'Stockage de fichiers MinIO', en: 'MinIO file storage' },
      { fr: 'Authentification Keycloak (OIDC)', en: 'Keycloak authentication (OIDC)' },
    ],
    stack: ['Microservices', 'API REST', 'YARP', 'PostgreSQL', 'MinIO', 'Keycloak', 'OIDC'],
    role: TEAM_MEMBER,
    status: 'academique',
    links: [],
    privateCode: true,
  },
  {
    id: 'portfolio',
    group: 'academique',
    coverIcon: CodeXml,
    title: { fr: 'Ce portfolio', en: 'This portfolio' },
    context: { fr: 'Projet personnel', en: 'Personal project' },
    problem: {
      fr: 'Le site que vous consultez : tout son contenu provient d\'un fichier de données unique.',
      en: 'The site you are reading: all of its content comes from a single data file.',
    },
    stack: ['React', 'Vite', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Vercel', 'Claude Code'],
    role: { fr: 'Conception et développement', en: 'Design and development' },
    status: 'production',
    links: [{ kind: 'site', url: 'https://mamadou-gueye.vercel.app' }],
    privateCode: true,
  },
]);

// Fiches affichées sur le site (les fiches visible: false sont masquées partout)
export const projectList: Project[] = allProjects.filter((p) => p.visible !== false);

// Équivalences entre technologies, utilisées pour relier les compétences dans la constellation
// (ex. « API ChatGPT » chez WBCC compte comme OpenAI et API LLM).
export const techAliases: Record<string, string[]> = {
  'API ChatGPT': ['OpenAI', 'API LLM'],
};

// ─── Archives (bloc repliable) ───
export const archiveProjects: ArchiveProject[] = t<ArchiveProject[]>([
  {
    id: 'pdd-production',
    // TODO(cadre) : préciser « Site client — freelance » ou « Site client — WBCC »
    title: { fr: 'PDD Production — site client', en: 'PDD Production — client website' },
    description: {
      fr: 'Site vitrine one-page pour PDD Production, agence de communication événementielle à Dakar. Animations au scroll, filtres portfolio, lightbox, carrousel de témoignages, formulaire de contact et déploiement GitLab Pages via CI/CD.',
      en: 'One-page showcase website for PDD Production, an event communication agency in Dakar. Scroll animations, portfolio filters, lightbox, testimonial carousel, contact form and GitLab Pages deployment through CI/CD.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'GitLab', 'CI/CD'],
    link: 'https://pddproduction-f5a5bd.gitlab.io',
    category: { fr: 'Site vitrine', en: 'Showcase website' },
    image: 'images/projects/pddproduction.png',
    date: { fr: 'Février 2026', en: 'February 2026' },
  },
  {
    id: 'hbassurance',
    title: { fr: 'HB Assurance — site client réalisé chez WBCC', en: 'HB Assurance — client website built at WBCC' },
    description: {
      fr: 'Site d\'une compagnie d\'assurance, réalisé pour un client du WBCC (World Business Contact Center).',
      en: 'Website for an insurance company, built for a client of WBCC (World Business Contact Center).',
    },
    tech: ['WordPress'],
    link: 'https://hbassurance.com/',
    category: 'Web App',
    image: 'images/projects/hbassurance.png',
    date: { fr: 'Déc. 2024 – Oct. 2025', en: 'Dec 2024 – Oct 2025' },
  },
  // ─── Projets Sonatel Académie (2024) ───
  {
    id: 'wave-senegal-flutter',
    title: {
      fr: 'Clone pédagogique inspiré de Wave (mobile) — projet Sonatel Academy',
      en: 'Wave-inspired training clone (mobile) — Sonatel Academy project',
    },
    description: {
      fr: 'Exercice de formation : application mobile de transfert d\'argent et de paiement inspirée de Wave, réalisée avec Flutter. Sans lien avec l\'entreprise Wave.',
      en: 'Training exercise: a Wave-inspired mobile money transfer and payment app built with Flutter. Not affiliated with the company Wave.',
    },
    tech: ['Flutter', 'Dart', 'Provider', 'Dio', 'QR code'],
    link: 'https://github.com/avatarodc/Flutter-Transfert-App',
    category: { fr: 'Application mobile', en: 'Mobile app' },
    // pas d'image : wave.png reprend le visuel officiel de Wave (ambigu pour un exercice)
    date: { fr: 'Octobre 2024', en: 'October 2024' },
  },
  {
    id: 'reseau-social-frontend',
    title: { fr: 'Réseau social — front-end', en: 'Social network — front end' },
    description: { fr: 'Interface web d\'un réseau social, en React.', en: 'Web interface for a social network, built with React.' },
    tech: ['React'],
    link: '',
    category: 'Frontend',
    image: 'images/projects/social.png',
    date: { fr: 'Octobre 2024', en: 'October 2024' },
  },
  {
    id: 'wave-senegal-refonte',
    title: {
      fr: 'Clone pédagogique inspiré de Wave — projet Sonatel Academy',
      en: 'Wave-inspired training clone — Sonatel Academy project',
    },
    description: {
      fr: 'Exercice de formation : interface web de transfert d\'argent inspirée de Wave, avec envoi programmé et périodique. Sans lien avec l\'entreprise Wave.',
      en: 'Training exercise: a Wave-inspired money transfer web interface, with scheduled and recurring transfers. Not affiliated with the company Wave.',
    },
    tech: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
    link: 'https://github.com/avatarodc/money_transfert_angular',
    category: 'Frontend',
    image: 'images/projects/wave1.png',
    date: { fr: 'Novembre 2024', en: 'November 2024' },
  },
  {
    id: 'gestion-tailleurs-react',
    title: { fr: 'Gestion des tailleurs', en: 'Tailor shop management' },
    description: {
      fr: 'Application web de gestion des tailleurs avec React JS. En tant que Chef de projet, direction de l\'équipe de développement et implémentation des meilleures pratiques pour une expérience utilisateur optimale.',
      en: 'Web application for managing tailors, built with React. As project lead, I directed the development team and put best practices in place for a smooth user experience.',
    },
    tech: ['React', 'Redux Toolkit', 'Axios', 'Tailwind CSS', 'SCSS'],
    link: 'https://github.com/pousso2-0/Tailor',
    category: 'Frontend',
    image: 'images/projects/tailor.png',
    date: { fr: 'Octobre 2024', en: 'October 2024' },
  },
  {
    id: 'maquettage-gestion-scolaire',
    title: { fr: 'Maquettes d\'une application de gestion scolaire', en: 'School management app mock-ups' },
    description: {
      fr: 'Conception UI/UX complète d\'une application de gestion scolaire. Wireframes, maquettes et prototypes interactifs.',
      en: 'Complete UI/UX design of a school management application: wireframes, mock-ups and interactive prototypes.',
    },
    tech: ['Figma'],
    link: '',
    category: 'UI/UX Design',
    date: { fr: 'Septembre 2024', en: 'September 2024' },
  },
  {
    id: 'gestion-dettes',
    title: { fr: 'Gestion des dettes d\'une boutique', en: 'Shop debt management' },
    description: {
      fr: 'Application console Java : gestion des articles d\'une boutique, avec stockage interchangeable (JDBC ou en mémoire) derrière des interfaces, selon les principes SOLID.',
      en: 'Java console application: managing a shop\'s items, with interchangeable storage (JDBC or in-memory) behind interfaces, following SOLID principles.',
    },
    tech: ['Java', 'Spring Data JPA', 'MySQL'],
    link: 'https://github.com/avatarodc/JavaDette',
    category: 'Backend',
    image: 'images/projects/Finance.png',
    date: { fr: 'Septembre 2024', en: 'September 2024' },
  },
  {
    id: 'reseau-social-backend',
    title: { fr: 'Réseau social — API back-end', en: 'Social network — back-end API' },
    description: { fr: 'API back-end d\'un réseau social, en Node.js.', en: 'Back-end API for a social network, built with Node.js.' },
    tech: ['Node.js'],
    link: '',
    category: 'Backend',
    image: 'images/projects/socialApi.png',
    date: { fr: 'Août 2024', en: 'August 2024' },
  },
  {
    id: 'gestion-dettes-boutique-laravel',
    title: { fr: 'Gestion des dettes d\'une boutique — Laravel', en: 'Shop debt management — Laravel' },
    description: {
      fr: 'Application back-end de gestion des dettes d\'une boutique, en Laravel.',
      en: 'Back-end application for managing a shop\'s debts, built with Laravel.',
    },
    tech: ['Laravel'],
    link: '',
    category: 'Backend',
    image: 'images/projects/Finance.png',
    date: { fr: 'Août 2024', en: 'August 2024' },
  },
  {
    id: 'gestion-cargaison',
    title: { fr: 'Gestion de cargaisons import/export', en: 'Import/export cargo management' },
    description: {
      fr: 'Application complète pour la gestion des cargaisons import/export.',
      en: 'Complete application for managing import/export cargo.',
    },
    tech: ['PHP', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/avatarodc/cargaisonsT',
    category: 'Web App',
    image: 'images/projects/cargaison.png',
    date: { fr: 'Avril 2024', en: 'April 2024' },
  },
]);

// Libellés de compétences : noms de technologies, identiques dans les deux langues
// (ils servent aussi de clés pour relier la constellation).
export const skillCategories: Category[] = t<Category[]>([
  {
    title: 'Back-end',
    icon: Server,
    description: { fr: 'APIs et logique métier', en: 'APIs and business logic' },
    skills: ['Java / Spring Boot', 'PHP / Laravel', 'Node.js / Express', 'Python / FastAPI'],
  },
  {
    title: 'Front-end',
    icon: Layout,
    description: { fr: 'Interfaces web réactives', en: 'Responsive web interfaces' },
    skills: ['JavaScript', 'TypeScript', 'HTML / CSS', 'Angular', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    description: { fr: 'Applications Flutter', en: 'Flutter applications' },
    skills: ['Flutter', 'Riverpod', 'Clean Architecture', 'Offline-first'],
  },
  {
    title: { fr: 'Données', en: 'Data' },
    icon: Database,
    description: { fr: 'Bases relationnelles et vectorielles', en: 'Relational and vector databases' },
    skills: ['PostgreSQL', 'MySQL', 'pgvector', 'Supabase'],
  },
  {
    title: { fr: 'IA', en: 'AI' },
    icon: Sparkles,
    description: { fr: 'Intégration de modèles dans des produits', en: 'Integrating models into products' },
    skills: ['API LLM (OpenAI, Groq, Ollama)', 'RAG', 'Vision (YOLOv8)'],
  },
  {
    title: 'DevOps',
    icon: Cloud,
    description: { fr: 'Conteneurs, intégration continue et hébergement', en: 'Containers, continuous integration and hosting' },
    skills: ['Docker', 'CI/CD (GitLab, GitHub)', 'AWS', 'Railway', 'Vercel', 'SonarQube'],
  },
  {
    title: 'Architecture',
    icon: Network,
    description: { fr: 'Conception de systèmes', en: 'System design' },
    skills: ['Microservices', 'API REST', 'JWT / OAuth2 / OIDC', 'WebSocket'],
  },
]);

export const educationList: Education[] = t<Education[]>([
  {
    id: 'isi-master',
    date: { fr: 'Oct. 2024 – juil. 2027', en: 'Oct 2024 – Jul 2027' },
    title: { fr: 'Master Génie Logiciel', en: 'Master\'s in Software Engineering' },
    institution: 'ISI Dakar',
    description: { fr: 'M2 en cours.', en: 'Currently in the second year.' },
    location: DAKAR,
  },
  {
    id: 'isi-licence',
    date: '2025',
    title: { fr: 'Licence Génie Logiciel', en: 'Bachelor\'s in Software Engineering' },
    institution: 'ISI Dakar',
    location: DAKAR,
  },
  {
    id: 'sonatel-academy',
    date: { fr: 'Promotion 2024', en: 'Class of 2024' },
    title: { fr: 'Développeur Web / Mobile', en: 'Web / Mobile Developer' },
    institution: 'Sonatel Academy / Orange Digital Center',
    location: DAKAR,
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
    title: { fr: 'Physique-chimie, puis statistiques', en: 'Physics and chemistry, then statistics' },
    institution: {
      fr: 'UCAD, Faculté des Sciences et Techniques, puis IRES',
      en: 'UCAD, Faculty of Science and Technology, then IRES',
    },
    location: DAKAR,
  },
  {
    id: 'bac-s2',
    date: '2018',
    title: { fr: 'Baccalauréat S2', en: 'Baccalauréat S2 (science)' },
    institution: 'Lycée Cheikh Hamidou Kane de Mbao',
    location: { fr: 'Mbao, Sénégal', en: 'Mbao, Senegal' },
  },
]);

export const experienceList: Experience[] = t<Experience[]>([
  {
    id: 'diotali',
    date: { fr: 'Nov. 2025 – Aujourd\'hui', en: 'Nov 2025 – Present' },
    title: { fr: 'Développeur Full Stack', en: 'Full Stack Developer' },
    company: 'DIOTALI',
    location: DAKAR,
    stack: ['Java', 'Spring Boot', 'API REST', 'Angular', 'TypeScript', 'PostgreSQL', 'MySQL', 'Docker', 'AWS'],
    highlights: [
      {
        text: {
          fr: 'GFA — système de gestion de files d\'attente en production à la BSIC et à la SENEAU',
          en: 'GFA — queue management system in production at BSIC and SENEAU',
        },
        projectId: 'gfa',
      },
      {
        text: {
          fr: 'Billetterie de la Fédération Sénégalaise de Football — paiement ORABANK et transfert de tickets',
          en: 'Senegalese Football Federation ticketing — ORABANK payment and ticket transfer',
        },
        projectId: 'billetterie-fsf',
      },
      {
        text: {
          fr: 'ECommune — plateforme de gestion fiscale pour les communes (en cours de déploiement)',
          en: 'ECommune — tax management platform for municipalities (being deployed)',
        },
        projectId: 'ecommune',
      },
      {
        text: {
          fr: 'Diotali Events — plateforme de billetterie événementielle : backend (API) de l\'application mobile',
          en: 'Diotali Events — event ticketing platform: back end (API) of the mobile app',
        },
        projectId: 'diotali-events',
      },
    ],
  },
  {
    id: 'wbcc',
    date: { fr: 'Déc. 2024 – Oct. 2025', en: 'Dec 2024 – Oct 2025' },
    title: { fr: 'Développeur Full Stack PHP / Laravel', en: 'Full Stack PHP / Laravel Developer' },
    company: 'WBCC',
    stack: ['PHP', 'Laravel', 'JavaScript', 'React', 'MySQL', 'API ChatGPT'],
    highlights: [
      {
        text: {
          fr: 'Intégration de l\'API ChatGPT dans des applications Laravel pour RYM PARTNERS et RYMHOLDING',
          en: 'Integration of the ChatGPT API into Laravel applications for RYM PARTNERS and RYMHOLDING',
        },
        projectId: 'chatgpt-wbcc',
      },
    ],
    clientLinks: [
      { label: 'RYMHOLDING', url: 'https://job.rymholding.com', image: 'images/projects/rymholding.jpg' },
      { label: 'RYM PARTNERS', url: 'https://www.rympartners.com/', image: 'images/projects/rympartners.jpg' },
    ],
  },
  {
    id: 'telly-tech',
    date: { fr: 'Avr. – Oct. 2025', en: 'Apr – Oct 2025' },
    title: { fr: 'Formateur PHP / JavaScript / bases de données', en: 'PHP / JavaScript / Databases Trainer' },
    company: 'Telly Tech',
    stack: ['PHP', 'JavaScript', 'MySQL', 'PostgreSQL'],
    note: { fr: 'En parallèle du poste chez WBCC', en: 'Alongside my position at WBCC' },
    highlights: [
      {
        text: {
          fr: 'Formation d\'une trentaine de développeurs en PHP, JavaScript et bases de données',
          en: 'Trained around thirty developers in PHP, JavaScript and databases',
        },
      },
    ],
  },
  {
    id: 'lonase',
    date: { fr: 'Sept. – Oct. 2023', en: 'Sep – Oct 2023' },
    title: { fr: 'Stagiaire développement et administration systèmes', en: 'Development and Systems Administration Intern' },
    company: 'LONASE',
    location: DAKAR,
    highlights: [{ text: { fr: 'Développement de flux ETL avec Talend et Python', en: 'Built ETL pipelines with Talend and Python' } }],
  },
  {
    id: 'teqlab',
    date: { fr: 'Juil. – Sept. 2023', en: 'Jul – Sep 2023' },
    title: { fr: 'Analyste concepteur', en: 'Systems Analyst' },
    company: 'TEQLAB',
    note: { fr: 'Analyse et conception', en: 'Analysis and design' },
    highlights: [
      { text: { fr: 'Rédaction des spécifications', en: 'Wrote specifications' } },
      { text: { fr: 'Modélisation UML', en: 'UML modelling' } },
    ],
  },
]);

export const distinctions: Distinction[] = t<Distinction[]>([
  {
    id: 'cadev',
    icon: Trophy,
    title: 'CADEV 2026',
    description: { fr: 'Coupe d\'Afrique des Développeurs.', en: 'African Developers Cup.' },
    date: '2026',
  },
  {
    id: 'hackathon-sonatel',
    icon: Trophy,
    title: 'Hackathon Sonatel',
    description: { fr: 'Participation au hackathon organisé par Sonatel.', en: 'Took part in the hackathon organised by Sonatel.' },
  },
  {
    id: 'formation-devs',
    icon: Users,
    title: { fr: 'Formation de développeurs', en: 'Training developers' },
    description: {
      fr: 'Une trentaine de développeurs formés en PHP, JavaScript et bases de données chez Telly Tech.',
      en: 'Around thirty developers trained in PHP, JavaScript and databases at Telly Tech.',
    },
    date: '2025',
  },
  {
    id: 'enseignement',
    icon: GraduationCap,
    title: { fr: 'Enseignement des sciences', en: 'Teaching science' },
    description: {
      fr: 'Cours de mathématiques et de physique-chimie à des élèves de 3e depuis environ trois ans.',
      en: 'Teaching mathematics, physics and chemistry to middle-school students for about three years.',
    },
  },
]);

export const certificationList: Certification[] = t<Certification[]>([
  {
    id: 'coursera-php-mysql',
    title: 'Using MySQL Database with PHP',
    platform: { fr: 'Coursera — projet guidé', en: 'Coursera — guided project' },
    // TODO(date) : date reprise de l'ancien site, à confirmer sur la page de vérification
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/5C5JV4PODFHB',
    description: { fr: 'Certificat de réussite vérifiable sur Coursera.', en: 'Certificate of completion, verifiable on Coursera.' },
    skills: ['PHP', 'MySQL'],
  },
  {
    id: 'coursera-node-api',
    title: 'APIs in Node.js: Write a RESTful API Backend Application',
    platform: { fr: 'Coursera — projet guidé', en: 'Coursera — guided project' },
    // TODO(date) : date reprise de l'ancien site, à confirmer sur la page de vérification
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/CIZ7RQ1VDYUM',
    description: { fr: 'Certificat de réussite vérifiable sur Coursera.', en: 'Certificate of completion, verifiable on Coursera.' },
    skills: ['Node.js', 'API REST'],
  },
]);

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

export const contactInfo: Contact = t<Contact>({
  email: 'mamadougueyeoff1@gmail.com',
  phone: '+221 78 311 66 55',
  address: DAKAR,
  availability: { fr: 'Ouvert aux échanges', en: 'Open to conversations' },
});

// ─── Pied de page ───
export const footer: FooterContent = t<FooterContent>({
  bio: {
    fr: 'Développeur Full Stack Java / Spring Boot & Angular à Dakar — également PHP / Laravel, Flutter et IA.',
    en: 'Full Stack Developer — Java / Spring Boot & Angular — based in Dakar. Also PHP / Laravel, Flutter and AI.',
  },
  navigationTitle: 'Navigation',
  contactTitle: 'Contact',
  contactLabel: { fr: 'Me contacter', en: 'Contact me' },
  rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  madeWith: { fr: 'Fait avec', en: 'Made with' },
  madeIn: { fr: 'au Sénégal', en: 'in Senegal' },
});
