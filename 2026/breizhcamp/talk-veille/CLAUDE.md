# CLAUDE.md — talk-veille (BreizhCamp 2026)

## Package manager : bun

```bash
bun install                # une seule fois
bun run dev                # serveur dev → http://localhost:3030
bun run build              # SPA statique dans dist/
bun run export             # export PDF (nécessite playwright)
```

## Thème : neversink

Ce talk utilise [`slidev-theme-neversink`](https://github.com/HertzZhu/slidev-theme-neversink) avec des **layouts et components personnalisés** en local.

### Syntaxe du thème neversink

Le thème utilise une syntaxe spéciale avec délimiteurs `:: nom ::` pour structurer le contenu des slides :

```markdown
---
layout: top-title
color: navy
---

:: title ::
# Mon titre

:: content ::
<img src="/images/mon-image.png" />

:: notes ::
Mes notes de présentation (non affichées)
```

**Délimiteurs courants :**
- `:: title ::` — titre de la slide
- `:: content ::` — contenu principal
- `:: notes ::` — notes du présentateur
- `:: left ::`, `:: right ::` — colonnes (layouts multi-col)
- `:: one ::`, `:: two ::`, `:: three ::` — sections (layouts 3-col)

### Layouts personnalisés

| Layout | Fichier | Usage |
|--------|---------|-------|
| `top-title` | neversink | Titre en haut + contenu |
| `top-title-two-cols` | neversink | Titre + 2 colonnes |
| `top-title-three-cols` | `layouts/top-title-three-cols.vue` | Titre + 3 colonnes |
| `cover` | neversink | Slide de couverture |

**Pour ajouter un layout :** Créer `layouts/<name>.vue` — Slidev le priorise sur le thème npm.

### Components personnalisés

- `<StepCard>` — carte avec numéro étape
- `<StepsList>` — liste de cartes étapes
- `layoutHelper.js` — utilitaires pour les layouts

## Assets et Images

```
public/
├── images/
│   └── *.png, *.jpg, *.svg
└── ...
```

Référencer dans slides.md : `<img src="/images/mon-image.png" />`

**Note :** Tous les assets doivent être dans `public/` et être versionés (pas de gitignore).

## Workflow de développement

1. **Éditer slides.md** — hot reload automatique sur le serveur dev
2. **Ajouter des images** — placer dans `public/images/` et référencer `/images/fichier.ext`
3. **Personnaliser un layout** — copier de neversink ou créer `layouts/<name>.vue`
4. **Tester build/export** avant de commit :
   ```bash
   bun run build
   bun run export  # Génère PDF
   ```

**Notes speaker :** Utilisez `:: notes ::` pour contexte/explications — ça n'apparait pas à l'écran mais aide le présentateur à retenir les points clés.

## Gotchas

- ⚠️ Thème est `neversink`, pas un thème standard Slidev
- ⚠️ Syntaxe `:: notes ::` est **spécifique à neversink** (pas des commentaires HTML `<!-- -->`)
- ⚠️ `package.json` minimaliste — pour ajouter des dépendances, utiliser `bun add`
- ⚠️ Export PDF nécessite playwright — peut prendre du temps la première fois
- ⚠️ `slides.md` peut être modifiée par un hook/linter — vérifier git diff après commit
- ⚠️ Démos vidéo — utiliser `[//]: # (<video ...>)` commenté au lieu de `<StickyNote>` rouge pour les TODO : plus propre à merge/refactor

## Structure du projet

```
slides.md                   # contenu (layouts neversink + custom)
package.json                # dépendances (neversink)
public/images/              # assets (versionés)
layouts/top-title-three-cols.vue    # layout custom
components/StepCard.vue     # components custom
components/StepsList.vue
components/layoutHelper.js  # utilitaires
```
