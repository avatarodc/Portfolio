# Captures d'écran à fournir

Les fiches sans capture affichent une couverture générée (nom du projet, icône du domaine
`coverIcon` et motif tiré de la constellation). Pour la remplacer par une vraie capture :

1. Déposer le fichier dans `public/images/projects/` sous le nom indiqué ci-dessous
   (`.png`, `.jpg` ou `.webp`, ratio ~16:9, ≤ 300 Ko).
2. C'est tout : au build suivant, la capture remplace la couverture automatiquement
   (aucune modification de `profile.ts` nécessaire ; le champ `image` reste possible
   pour un autre nom de fichier).

| Projet | Section | Fichier attendu |
|---|---|---|
| GFA — Gestion de files d'attente | Réalisations en production | `gfa.png` |
| Billetterie FSF | Réalisations en production | `billetterie-fsf.png` |
| ECommune | Réalisations en production | `ecommune.png` |
| Diotali Events | Réalisations en production | `diotali-events.png` |
| COSKAS | Produits | `coskas.png` |
| BorYi | Produits | `boryi.png` |
| SamaDahira | Produits | `samadahira.png` |
| Verifia | Produits | `verifia.png` |
| Chatbot RAG de recherche documentaire | IA et projets techniques | `chatbot-rag.png` |
| Système de diagnostic ECG | IA et projets techniques | `diagnostic-ecg.png` |
| Détecteur de téléphones | IA et projets techniques | `detecteur-telephones.png` |
| Architecture microservices GestionProduits | IA et projets techniques | `gestion-produits.png` |
| Ce portfolio | IA et projets techniques | `portfolio.png` |

Déjà en place : Rimemba (`rimemba.png`), RYMHOLDING (`rymholding.jpg`), RYM PARTNERS (`rympartners.jpg`).

Attention aux captures de projets clients (GFA, Billetterie FSF, ECommune, Diotali Events, COSKAS) :
vérifier qu'elles ne montrent aucune donnée réelle ni information confidentielle.
