# Restructuration des slides — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructurer slides.md de 5 sections à 3 sections pour un arc narratif plus cohérent.

**Architecture:** Toutes les modifications sont dans un seul fichier `slides.md`. Les slides sont séparées par `---`, chaque slide peut avoir des délimiteurs `:: nom ::` (syntaxe neversink). Les changements sont séquentiels et indépendants — chacun peut être commité séparément.

**Tech Stack:** Slidev + thème neversink, Bun, Vue 3. Dev server : `bun run dev` → http://localhost:3030. Hot-reload automatique.

---

## Fichiers modifiés

- Modify: `slides.md` — unique fichier cible, 8 changements au total

---

## Task 1: Déplacer "La première barrière" après "Veille passive vs active"

**Files:**
- Modify: `slides.md`

La slide "La première barrière" (actuellement après "Les 3 étapes" dans l'ancienne Section 02)
doit passer juste après "Veille passive vs active" (ancienne Section 01).

- [ ] **Step 1 : Supprimer la slide "La première barrière" de son emplacement actuel**

Dans `slides.md`, localiser et supprimer le bloc suivant (il commence après la slide "Les 3 étapes") :

```markdown
---
layout: top-title
color: navy
align: l
---

:: title ::

# La première barrière — Sélectionner vos sources

:: content ::

<StepsList
    :steps="[
      { text: 'Listez vos sources actuelles', subtitle: 'Newsletters, podcasts, blogs, réseaux sociaux...' },
      { text: 'Gardez seulement celles qui créent de la valeur', subtitle: 'Pas des sources par inertie ou FOMO' },
      { text: 'Fixez un nombre maximum', subtitle: '3-5 newsletters, 2-5 podcasts. Pas plus.' },
      { text: 'Révisez trimestriellement', subtitle: 'Désinscrivez ce qui ne sert plus' },
    ]"
    color="stone"
    number-color="navy"
    :show-border="false"
  />

<StickyNote color="amber-light" textAlign="left" width="200px" title="💡- Règle">
<br/>
Avant de mettre en place un système, la vraie victoire est de dire NON. Peu de sources de qualité > beaucoup de sources de bruit.
</StickyNote>

:: notes ::

C'est contre-intuitif mais la clé n'est pas de consommer plus. C'est de consommer moins et mieux.
Si vous ajoutez un système sans d'abord élaguer vos sources, vous gardez juste le même bruit organisé.
```

- [ ] **Step 2 : Insérer la slide juste après "Veille passive vs active"**

Localiser la fin de la slide "Veille passive vs active" (elle se termine par `:: notes ::`). Insérer la slide "La première barrière" complète immédiatement après le bloc de notes, avant le `---` qui ouvre la section suivante :

```markdown
---
layout: top-title
color: navy
align: l
---

:: title ::

# La première barrière — Sélectionner vos sources

:: content ::

<StepsList
    :steps="[
      { text: 'Listez vos sources actuelles', subtitle: 'Newsletters, podcasts, blogs, réseaux sociaux...' },
      { text: 'Gardez seulement celles qui créent de la valeur', subtitle: 'Pas des sources par inertie ou FOMO' },
      { text: 'Fixez un nombre maximum', subtitle: '3-5 newsletters, 2-5 podcasts. Pas plus.' },
      { text: 'Révisez trimestriellement', subtitle: 'Désinscrivez ce qui ne sert plus' },
    ]"
    color="stone"
    number-color="navy"
    :show-border="false"
  />

<StickyNote color="amber-light" textAlign="left" width="200px" title="💡- Règle">
<br/>
Avant de mettre en place un système, la vraie victoire est de dire NON. Peu de sources de qualité > beaucoup de sources de bruit.
</StickyNote>

:: notes ::

C'est contre-intuitif mais la clé n'est pas de consommer plus. C'est de consommer moins et mieux.
Si vous ajoutez un système sans d'abord élaguer vos sources, vous gardez juste le même bruit organisé.
```

- [ ] **Step 3 : Vérifier dans le browser**

Le serveur dev doit déjà tourner (`bun run dev`). Naviguer jusqu'à la slide "Veille passive vs active" et confirmer que la slide suivante est bien "La première barrière — Sélectionner vos sources".

- [ ] **Step 4 : Commit**

```bash
git add slides.md
git commit -m "refactor(talk-veille): move 'La première barrière' after veille passive slide"
```

---

## Task 2: Fusionner les sections 01+02 en "Le constat & la philosophie"

**Files:**
- Modify: `slides.md`

Renommer l'en-tête de la Section 01 et supprimer entièrement l'en-tête de la Section 02.

- [ ] **Step 1 : Renommer l'en-tête de la Section 01**

Remplacer le bloc suivant :

```markdown
---
layout: section
color: navy
---

# 01 · Le problème

<hr class="border-white/30"/>

Pourquoi votre veille actuelle ne fonctionne pas.
```

Par :

```markdown
---
layout: section
color: navy
---

# 01 · Le constat & la philosophie

<hr class="border-white/30"/>

Du problème à l'état d'esprit qui change tout.
```

- [ ] **Step 2 : Supprimer l'en-tête de la Section 02**

Localiser et supprimer le bloc suivant (slide complète, y compris les `---`) :

```markdown
---
layout: section
color: navy
---

# 02 · La philosophie

<hr class="border-white/30"/>

Le principe qui change tout.
```

- [ ] **Step 3 : Vérifier dans le browser**

Naviguer jusqu'à la diapositive de section. Elle doit afficher "01 · Le constat & la philosophie". La slide suivante doit être "Veille passive vs active" (sans slide de section "02 · La philosophie" entre les deux groupes).

- [ ] **Step 4 : Commit**

```bash
git add slides.md
git commit -m "refactor(talk-veille): merge sections 01+02 into 'Le constat & la philosophie'"
```

---

## Task 3: Dissoudre la Section 04 et migrer "De la note à l'article"

**Files:**
- Modify: `slides.md`

Supprimer l'en-tête "04 · La preuve", supprimer la slide "Ce que ce système a produit" (XX), et déplacer "De la note à l'article" à la fin du système.

- [ ] **Step 1 : Supprimer l'en-tête "04 · La preuve" et la slide "Ce que ce système a produit"**

Localiser et supprimer le bloc suivant (deux slides successives) :

```markdown
---
layout: section
color: navy
---
# 04 · La preuve

<hr class="my-4 border-white/30"/>

Ce que le système produit concrètement

---
layout: top-title-three-cols
color: navy
---

:: title ::

# Ce que ce système a produit

:: left ::

<StepCard title="XX">
articles écrits sur mon blog
</StepCard>

:: center ::

<StepCard title="XX">
Newsletters mensuelles 
</StepCard>

:: right ::

<StepCard title="XX">
talks (internes et externes) comme celui-ci
</StepCard>

:: Content :: 
<div class="mt-6 p-4 rounded-xl bg-navy/20 border border-navy/30 text-center text-sm text-white/80">
  💡 Ce talk est né d'une note Obsidian connectée à trois highlights de podcasts différents.
</div>
```

- [ ] **Step 2 : Supprimer "De la note à l'article" de sa position actuelle**

Localiser et supprimer le bloc suivant (il suit directement la slide supprimée au Step 1) :

```markdown
---
layout: top-title-two-cols
color: navy
---

:: title ::

# De la note à l'article

:: left ::

<img src="/images/article-draft.png" alt="Article de blog produit depuis Obsidian" class="h-72 mx-auto rounded-xl shadow-md"/>

:: right ::

<img src="/images/article-blog.png" alt="Article de blog produit depuis Obsidian" class="h-72 mx-auto rounded-xl shadow-md"/>
```

- [ ] **Step 3 : Insérer "De la note à l'article" après "Stockage & Connectivité"**

Localiser la slide "Stockage & Connectivité — une note réelle". Elle se termine par une image Obsidian. Insérer la version enrichie de "De la note à l'article" immédiatement après cette slide, avant le `---` de la section suivante :

```markdown
---
layout: top-title-two-cols
color: navy
---

:: title ::

# De la note à l'article

:: left ::

<img src="/images/article-draft.png" alt="Article de blog produit depuis Obsidian" class="h-60 mx-auto rounded-xl shadow-md"/>

:: right ::

<img src="/images/article-blog.png" alt="Article de blog produit depuis Obsidian" class="h-60 mx-auto rounded-xl shadow-md"/>

<StickyNote color="amber-light" textAlign="left" width="220px" title="💡">
<br/>
Ce talk est né d'une note Obsidian connectée à 3 highlights de podcasts différents.
</StickyNote>
```

- [ ] **Step 4 : Vérifier dans le browser**

Naviguer jusqu'à "Stockage & Connectivité". La slide suivante doit être "De la note à l'article" avec les deux images et la StickyNote. Il ne doit plus y avoir de section "04 · La preuve" ni de slide avec des XX.

- [ ] **Step 5 : Commit**

```bash
git add slides.md
git commit -m "refactor(talk-veille): dissolve section 04, move 'De la note à l'article' to end of système"
```

---

## Task 4: Renommer les sections 03→02 et 05→03

**Files:**
- Modify: `slides.md`

Mettre à jour les numéros et titres des sections restantes.

- [ ] **Step 1 : Renommer l'en-tête "03 · Le système" en "02 · Le système"**

Remplacer :

```markdown
---
layout: section
color: navy
---

# 03 · Le système

<hr class="my-4 border-white/30"/>

Les outils qui font tourner la machine
```

Par :

```markdown
---
layout: section
color: navy
---

# 02 · Le système

<hr class="my-4 border-white/30"/>

Les outils qui font tourner la machine
```

- [ ] **Step 2 : Renommer l'en-tête "05 · Par où commencer" en "03 · Par où commencer"**

Remplacer :

```markdown
---
layout: section
color: navy
---


# 05 · Par où commencer

<hr class="my-4 border-white/30"/>

Un seul geste ce soir.
```

Par :

```markdown
---
layout: section
color: navy
---

# 03 · Par où commencer

<hr class="my-4 border-white/30"/>

Un seul geste ce soir.
```

- [ ] **Step 3 : Vérifier dans le browser**

Parcourir toutes les slides de section : elles doivent afficher "01 · Le constat & la philosophie", "02 · Le système", "03 · Par où commencer" — dans cet ordre, sans saut ni doublon.

- [ ] **Step 4 : Commit**

```bash
git add slides.md
git commit -m "refactor(talk-veille): renumber sections 03→02 and 05→03"
```

---

## Task 5: Mettre à jour la slide "Au programme"

**Files:**
- Modify: `slides.md`

La StepsList du sommaire liste encore 5 sections — la passer à 3.

- [ ] **Step 1 : Mettre à jour le StepsList**

Remplacer :

```markdown
<StepsList
    :steps="[
      { text: '01 - Le problème' },
      { text: '02 - La philosophie' },
      { text: '03 - Le système' },
      { text: '04 - La preuve' },
      { text: '05 - Par où commencer' },
    ]"
    color="stone"
    number-color="navy"
    :show-border="false"
  />
```

Par :

```markdown
<StepsList
    :steps="[
      { text: '01 - Le constat & la philosophie' },
      { text: '02 - Le système' },
      { text: '03 - Par où commencer' },
    ]"
    color="stone"
    number-color="navy"
    :show-border="false"
  />
```

- [ ] **Step 2 : Vérifier dans le browser**

La slide "Au programme" doit afficher 3 items numérotés 1, 2, 3 avec les bons noms.

- [ ] **Step 3 : Commit**

```bash
git add slides.md
git commit -m "refactor(talk-veille): update 'Au programme' to 3 sections"
```

---

## Task 6: Harmoniser les notes speaker "zéro onglet"

**Files:**
- Modify: `slides.md`

La slide "Ce soir — un seul geste" contient dans ses notes : "Aujourd'hui, zéro onglet et 20 articles publiés." — en contradiction avec la slide "Le constat" qui dit "je n'ai pas encore zéro onglet ouvert mais je me soigne."

- [ ] **Step 1 : Corriger les notes de la slide "Ce soir"**

Dans les `:: notes ::` de la slide "Ce soir — un seul geste", remplacer :

```
"Il y a deux ans, 347 onglets. Aujourd'hui, zéro onglet et 20 articles publiés.
La différence entre lire beaucoup et produire beaucoup, c'est un système.
```

Par :

```
"Il y a deux ans, 347 onglets. Aujourd'hui, beaucoup moins d'onglets — et 20 articles publiés.
La différence entre lire beaucoup et produire beaucoup, c'est un système.
```

- [ ] **Step 2 : Commit**

```bash
git add slides.md
git commit -m "fix(talk-veille): harmonize speaker notes - honest 'zero tabs' narrative"
```

---

## Task 7: Vérification finale bout en bout

- [ ] **Step 1 : Parcourir les slides dans l'ordre**

Sur http://localhost:3030, naviguer slide par slide de la couverture jusqu'à "Questions". Vérifier :
- [ ] Slide 1 : Cover
- [ ] Slide suivante : Constat (347 onglets) — notes : "je me soigne"
- [ ] À propos
- [ ] Au programme : **3 items** (01 Le constat, 02 Le système, 03 Par où commencer)
- [ ] Section **"01 · Le constat & la philosophie"**
- [ ] Veille passive vs active
- [ ] La première barrière — Sélectionner vos sources
- [ ] Citation Tiago Forte
- [ ] Les 3 étapes
- [ ] Section **"02 · Le système"**
- [ ] Architecture, Capture, Readwise+Obsidian, IA, Stockage
- [ ] De la note à l'article — **avec StickyNote en bas à droite**
- [ ] Section **"03 · Par où commencer"**
- [ ] Ce que ça coûte, 3 conseils, Ce soir — notes : "beaucoup moins d'onglets"
- [ ] Merci · Questions
- [ ] **Aucune slide** avec des `XX` ou un en-tête "04 · La preuve"

- [ ] **Step 2 : Commit final si tout est bon**

```bash
git add slides.md
git commit -m "refactor(talk-veille): complete slides restructuring - 5 sections to 3"
```
