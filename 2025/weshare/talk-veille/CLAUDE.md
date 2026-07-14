# CLAUDE.md — talk-veille (WeShare 2025)

## Package manager : pnpm

```bash
pnpm install   # une seule fois
pnpm dev       # serveur dev → http://localhost:3030 (ouvre auto le navigateur)
pnpm build     # SPA statique dans dist/
pnpm export    # export PDF
```

Dev server lance automatiquement le navigateur. Hot reload sur édition de `slides.md`.

## Thème local complet (`theme: ./`)

Ce talk **est** son propre thème Slidev. C'est une structure complète avec:
- `layouts/` — 8 layouts personnalisés
- `components/` — 3 components réutilisables
- `styles/` — CSS branding WeScale
- `pages/` — pages statiques
- `snippets/` — utilitaires TypeScript

Modifier les layouts/components affecte **toutes les slides** qui les utilisent.

### Layouts disponibles

| Layout | Fichier | Props frontmatter | Usage |
|--------|---------|------------------|-------|
| `cover` | `layouts/cover.vue` | `titre`, `subtitle`, `image`, `auteur`, `date` | Slide de couverture |
| `profile` | `layouts/profile.vue` | `section`, `sectionName`, `slideName`, `experience`, `quote`, `image` | Bio/profil |
| `section` | `layouts/section.vue` | `section`, `sectionName`, `slideName` | Ouverture de section |
| `toc` | `layouts/toc.vue` | — | Table des matières |
| `image-left` | `layouts/image-left.vue` | `image` | Contenu + image gauche |
| `image-right` | `layouts/image-right.vue` | `image` | Contenu + image droite |
| `default` | `layouts/default.vue` | — | Slide standard |
| `end` | `layouts/end.vue` | — | Slide de conclusion |

### Components réutilisables

```vue
<Counter />           <!-- Compteur interactif -->
<Header />            <!-- Entête de slide (titre) -->
<Footer />            <!-- Pied de page (numéro, info) -->
```

Utiliser dans `slides.md` :
```markdown
---
layout: default
---

# Titre

<Counter />
```

### Snippets & Utilitaires

- `snippets/external.ts` — utilitaires TypeScript importables
- Importer : `import { ... } from '../snippets/external'`

### Styles & Branding

`styles/index.css` contient:
```css
--wescale-teal: #45989e      /* couleur primaire */
--wescale-navy: #1e3a45      /* couleur secondaire */
--wescale-light-gray: #f3f4f6 /* fond */
```

Pour personnaliser les couleurs, modifier `styles/index.css` (affecte tous les layouts).

## Édition des slides

### Structure d'une slide

```markdown
---
layout: default
section: "01"
sectionName: "Introduction"
slideName: "Titre de la slide"
---

# Titre

Contenu markdown...

<!--
Notes du présentateur (non affichées à l'audience)
Visibles uniquement en mode présentateur (clavier: P)
-->
```

### Workflow d'édition

1. **Lancer le dev server** : `pnpm dev`
2. **Éditer `slides.md`** — hot reload automatique
3. **Ajouter des images** dans `public/images/` et référencer `/images/fichier.ext`
4. **Personnaliser un layout** :
   - Modifier `layouts/<nom>.vue` directement (affecte tous les usages)
   - Ou créer un nouveau layout dans `layouts/`
5. **Ajouter un component** — créer `components/MonComponent.vue` et utiliser dans slides.md
6. **Tester build/export** avant de commit :
   ```bash
   pnpm build    # Vérifier pas d'erreurs
   pnpm export   # Génère PDF (peut être long, nécessite playwright)
   ```

## Configuration & Déploiement

### Slidev Config

`slidev.config.ts` :
```typescript
canvasWidth: 1280  // Défaut Slidev: 980px — augmenté pour modernes écrans
```

### NPM Config

`.npmrc` (ne pas supprimer) :
```
shamefully-hoist=true     # Hoiste les dépendances
auto-install-peers=true   # Installe automatiquement les peers
```

### Déploiement

**Deux configurations disponibles :**

- **Netlify** (`netlify.toml`) — auto-déploie sur push
  ```toml
  command = "npm run build"
  publish = "dist"
  ```
- **Vercel** (`vercel.json`) — alternative cloud
  ```json
  { "buildCommand": "npm run build", "outputDirectory": "dist" }
  ```

**Note :** Les deux utilisent intentionnellement `npm run build` côté CI (ne pas changer).

En local : utiliser `pnpm build`.

## Structure du projet

```
slides.md                    # contenu (tous les layouts/components)
package.json                 # dépendances Slidev + Vue
public/
  ├── images/                # assets (PNG, JPG, SVG)
  └── ...
layouts/
  ├── cover.vue             # slide couverture
  ├── profile.vue           # bio/profil
  ├── section.vue           # titres de section
  ├── default.vue           # slide standard
  ├── image-left.vue        # contenu + image
  ├── image-right.vue
  ├── toc.vue               # table des matières
  └── end.vue               # conclusion
components/
  ├── Counter.vue           # composant interactif
  ├── Header.vue            # entête
  └── Footer.vue            # pied de page
snippets/
  └── external.ts           # utilitaires TypeScript
styles/
  └── index.css             # CSS branding (variables couleurs)
pages/                       # pages statiques (optionnel)
slidev.config.ts            # config Slidev (canvasWidth)
.npmrc                       # config npm (ne pas supprimer)
netlify.toml                # déploiement Netlify
vercel.json                 # déploiement Vercel
```

## Gotchas

- ⚠️ `.npmrc` est **critique** — `shamefully-hoist` et `auto-install-peers` sont obligatoires
- ⚠️ Modifier un layout affecte **toutes les slides** qui l'utilisent (impact large)
- ⚠️ Export PDF peut être long la première fois (installation playwright)
- ⚠️ `slides.md` doit utiliser `theme: ./` (thème local) — ligne 2 de frontmatter
- ⚠️ Comments HTML `<!-- -->` pour speaker notes (standard Slidev, pas la syntaxe `::`)
- ⚠️ Déploiement CI/CD utilise `npm run build` intentionnellement — ne pas changer
