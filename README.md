# 🎤 Talks — Conference Slide Decks

Mono-repo de présentations de conférence, organisées par année et événement. Chaque présentation est un projet [Slidev](https://sli.dev/) autonome avec son propre thème et structure.

## ⚡ Quick Start

Chaque talk est dans son propre répertoire. Pour travailler sur une présentation:

```bash
cd {year}/{event}/{talk-name}
# Installer les dépendances (une seule fois)
bun install    # ou pnpm install (voir CLAUDE.md du talk)
# Lancer le serveur dev
bun run dev    # ou pnpm dev → http://localhost:3030
```

Le serveur dev relance automatiquement le navigateur et hot-reload les slides lors de l'édition de `slides.md`.

## 📚 Présentations

| Date       | Événement | Titre | Slides | Status |
|------------|-----------|-------|--------|--------|
| 26/06/2026 | [BreizhCamp 2026](https://www.breizhcamp.org/) | Comment je fais ma veille technologique | [Slides](2026/breizhcamp/talk-veille/) | 🟡 En cours |
| 15/12/2025 | [WeShare](https://www.wescale.fr/) | Comment je fais ma veille technologique | [Slides](2025/weshare/talk-veille/) | ✅ Présenté |

## 📁 Structure du Projet

```
talks/
├── README.md                          # Ce fichier
├── CLAUDE.md                          # Guide général (racine)
├── 2025/
│   └── weshare/talk-veille/
│       ├── CLAUDE.md                  # Guide spécifique WeShare
│       ├── slides.md                  # Contenu des slides
│       ├── layouts/                   # 8 layouts personnalisés
│       ├── components/                # Components Vue
│       ├── styles/                    # CSS branding
│       ├── public/images/             # Assets
│       ├── package.json               # Dépendances (pnpm)
│       └── README.md                  # Notes du talk
├── 2026/
│   └── breizhcamp/talk-veille/
│       ├── CLAUDE.md                  # Guide spécifique BreizhCamp
│       ├── slides.md                  # Contenu des slides
│       ├── layouts/                   # Layout custom
│       ├── components/                # Components custom
│       ├── public/images/             # Assets
│       ├── package.json               # Dépendances (bun)
│       └── ...
```

**Chaque talk a sa propre structure** — voir le CLAUDE.md du talk pour les détails spécifiques.

## 🚀 Commandes Courantes

### Développement

```bash
cd {year}/{event}/{talk-name}
pnpm dev    # ou bun run dev — serveur dev + hot reload
```

### Build & Export

```bash
pnpm build   # SPA statique dans dist/
pnpm export  # Export PDF (nécessite playwright)
```

### Vérification avant merge

```bash
pnpm build   # Vérifier pas d'erreurs
pnpm export  # Générer PDF
git status   # Vérifier les changements
```

## 📖 Guides Spécifiques

Chaque talk a un **CLAUDE.md** avec ses commandes, gotchas et structure propre:

- **WeShare 2025** — Thème local complet, 8 layouts, components, déploiement Netlify/Vercel
  - [Voir le guide](2025/weshare/talk-veille/CLAUDE.md)
  - Package manager: `pnpm`
  - Thème: Local (`theme: ./`)

- **BreizhCamp 2026** — Thème npm (neversink), syntaxe `:: délimiteurs ::`
  - [Voir le guide](2026/breizhcamp/talk-veille/CLAUDE.md)
  - Package manager: `bun`
  - Thème: `slidev-theme-neversink`

## 🛠️ Outils Requis

Les outils de développement sont gérés **globalement** via [mise](https://mise.jdx.dev/):

```bash
mise install   # Installe les outils manquants (Node, bun, pnpm, etc.)
```

## 📝 Éditer les Slides

1. **Ouvrir le dev server** : `pnpm dev` ou `bun run dev`
2. **Éditer `slides.md`** — hot reload automatique
3. **Ajouter des images** dans `public/images/` et référencer `/images/fichier.ext`
4. **Personnaliser** les layouts ou components (voir le CLAUDE.md du talk)
5. **Tester** : `pnpm build` et `pnpm export` avant commit

### Syntaxe des Slides

Chaque talk utilise sa propre syntaxe selon le thème:

**WeShare 2025** — Standard Slidev + HTML comments:
```markdown
---
layout: default
---
# Titre

Contenu...

<!-- Notes du présentateur -->
```

**BreizhCamp 2026** — Neversink avec délimiteurs `::`:
```markdown
---
layout: top-title
---
:: title ::
# Titre

:: content ::
Contenu...

:: notes ::
Notes du présentateur
```

Voir les CLAUDE.md spécifiques pour plus de détails.

## 🔄 Git Workflow

```bash
# Créer une branche
git checkout -b feat/talk-name-feature

# Éditer les slides localement
# Le dev server auto-relance

# Commit et push
git add .
git commit -m "feat(talk): description"
git push origin feat/talk-name-feature

# Ouvrir une PR sur main
```

**Avant de merger:** Vérifier que `pnpm build` (ou `bun run build`) passe sans erreurs.

## 📦 Dépendances

Chaque talk utilise son propre `package.json`. Les dépendances principales sont:

- [@slidev/cli](https://sli.dev/) — Framework de slides
- [Vue 3](https://vuejs.org/) — Framework pour components
- **WeShare 2025** — pnpm, thème local personnalisé
- **BreizhCamp 2026** — bun, slidev-theme-neversink

Aucune dépendance commune à la racine du mono-repo.

## 👤 À Propos

**David Drugeon-Hamon**
- 🔗 GitHub: [@ddrugeon](https://github.com/ddrugeon)
- 📝 Blog: [david.drugeon-hamon.bzh](https://david.drugeon-hamon.bzh)
- 🦋 Bluesky: [@zebeurton](https://bsky.app/profile/zebeurton.bsky.social)
- 💼 LinkedIn: [@ddrugeon](https://www.linkedin.com/in/ddrugeon/)
- 𝕏 X: [@zebeurton](https://x.com/zebeurton)

Consultant Cloud & DevOps chez [WeScale](https://www.wescale.fr/), créateur de contenu technique, et passionné par les pratiques modernes de développement logiciel.

## 📄 License

Sauf indication contraire, tout le contenu de ce référentiel est disponible sous la licence [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Les slides sont libres de réutilisation, adaptation et partage avec attribution.
