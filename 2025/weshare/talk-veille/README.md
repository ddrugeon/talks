# Comment je fais ma veille technologique

Présentation WeShare sur le thème de la veille technologique active.

**Auteur:** David Drugeon-Hamon
**Date:** 15 Décembre 2025

## Description

Cette présentation explore comment transformer une veille technologique passive (accumulation d'onglets, lecture sans rétention) en une veille active et productive. Elle présente un workflow complet avec des outils comme Readwise Reader, Obsidian, et des techniques de prise de notes connectées.

## A propos de Slidev

Cette présentation est construite avec [Slidev](https://sli.dev/), un outil de présentation basé sur le web et conçu pour les développeurs.

Slidev permet de :
- Rédiger les slides en **Markdown** avec support Vue.js
- Bénéficier du **hot-reload** pour voir les modifications en temps réel
- Utiliser des **layouts personnalisés** et des composants Vue
- Exporter en **PDF** ou déployer en tant que **SPA**
- Intégrer du **code avec coloration syntaxique** et des animations

Pour en savoir plus, consultez la [documentation officielle de Slidev](https://sli.dev/).

## Prérequis

- Node.js 18+
- pnpm

## Lancer la présentation

### Installation des dépendances

```bash
pnpm install
```

### Mode développement (recommandé)

```bash
pnpm dev
```

Cette commande :
1. Démarre un serveur de développement local
2. Ouvre automatiquement votre navigateur sur <http://localhost:3030>
3. Active le hot-reload pour voir vos modifications en temps réel

### Navigation dans la présentation

- **Flèches gauche/droite** : Naviguer entre les slides
- **Espace** : Slide suivant
- **O** : Ouvrir la vue d'ensemble des slides
- **D** : Activer/désactiver le mode sombre
- **F** : Plein écran

### Build pour production

```bash
pnpm build
```

Génère une version statique dans le dossier `dist/`.

### Export PDF

```bash
pnpm export
```

Exporte la présentation en fichier PDF.

## Structure du projet

```
.
├── components/          # Composants Vue réutilisables
│   ├── Header.vue      # En-tête des slides
│   ├── Footer.vue      # Pied de page des slides
│   └── Counter.vue     # Compteur de slides
├── layouts/            # Layouts personnalisés
│   ├── cover.vue       # Page de couverture
│   ├── default.vue     # Layout par défaut
│   ├── profile.vue     # Présentation personnelle
│   ├── section.vue     # Séparateur de section
│   ├── toc.vue         # Table des matières
│   ├── image-left.vue  # Image à gauche, texte à droite
│   ├── image-right.vue # Texte à gauche, image à droite
│   └── end.vue         # Slide de fin
├── public/
│   ├── images/         # Images de la présentation
│   ├── logos/          # Logos (WeScale, etc.)
│   └── videos/         # Vidéos de démo
├── styles/
│   └── index.css       # Styles globaux et variables CSS
├── slides.md           # Contenu de la présentation
└── slidev.config.ts    # Configuration Slidev
```

## Layouts disponibles

| Layout | Description |
|--------|-------------|
| `cover` | Page de couverture avec image circulaire |
| `default` | Layout standard pour contenu texte/images |
| `profile` | Présentation personnelle avec photo, XP et QR code |
| `section` | Séparateur de section numéroté |
| `toc` | Table des matières |
| `image-right` | Texte à gauche, image pleine hauteur à droite |
| `image-left` | Image à gauche, texte à droite |
| `end` | Slide de fin avec informations de contact |

## Thème personnalisé

Ce projet utilise un thème WeScale personnalisé avec les couleurs :

- **Teal:** `#45989E` (couleur principale)
- **Navy:** `#1e3a45` (texte foncé)
- **Light Gray:** `#f3f4f6` (arrière-plans)

## Technologies

- [Slidev](https://sli.dev/) v52.11.0
- [Vue 3](https://vuejs.org/)
- CSS personnalisé avec variables

## Licence

Présentation interne WeScale.
