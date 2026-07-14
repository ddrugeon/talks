# Design — Restructuration des slides talk-veille

**Date :** 2026-06-10
**Talk :** Comment je fais ma veille technologique (BreizhCamp 2026)
**Fichier cible :** `slides.md`

---

## Contexte

La structure actuelle en 5 sections présente trois problèmes :

1. La slide "La première barrière — Sélectionner vos sources" a été ajoutée par erreur dans la Section 02 (La philosophie) alors qu'elle est opérationnelle, pas philosophique.
2. La Section 04 (La preuve) est trop faible : 2 slides dont une avec des chiffres `XX` manquants.
3. Les Sections 01 et 02 sont courtes et leur contenu s'enchaîne naturellement — les séparer crée une rupture artificielle.

---

## Structure cible (3 sections)

### Avant

```
Cover · Constat · À propos
Au programme (5 sections)

01 · Le problème
  - Veille passive vs Veille active

02 · La philosophie
  - Citation Tiago Forte
  - Les 3 étapes
  - La première barrière ← MAL PLACÉE

03 · Le système
  - Architecture du système
  - Capture multi-sources
  - La plomberie invisible — Readwise + Obsidian
  - Traiter — enrichir avec l'IA
  - Stockage & Connectivité — une note réelle

04 · La preuve ← SECTION FAIBLE
  - Ce que ce système a produit (XX) ← SUPPRIMÉE
  - De la note à l'article

05 · Par où commencer
  - Ce que ça coûte — vraiment
  - Mes 3 conseils
  - Ce soir — un seul geste

Merci · Questions
```

### Après

```
Cover · Constat · À propos
Au programme (3 sections) ← MIS À JOUR

01 · Le constat & la philosophie  ← FUSION 01+02
  - Veille passive vs Veille active
  - La première barrière ← DÉPLACÉE ICI
  - Citation Tiago Forte
  - Les 3 étapes

02 · Le système  ← ÉTAIT 03, enrichi
  - Architecture du système
  - Capture multi-sources
  - La plomberie invisible — Readwise + Obsidian
  - Traiter — enrichir avec l'IA
  - Stockage & Connectivité — une note réelle
  - De la note à l'article ← DÉPLACÉE + ÉCHO NARRATIF

03 · Par où commencer  ← ÉTAIT 05
  - Ce que ça coûte — vraiment
  - Mes 3 conseils
  - Ce soir — un seul geste

Merci · Questions
```

---

## Les 8 changements

| # | Type | Description |
|---|------|-------------|
| 1 | Mise à jour | Slide "Au programme" : passer de 5 à 3 sections avec nouveaux noms |
| 2 | Fusion | Section 01 "Le problème" + Section 02 "La philosophie" → "01 · Le constat & la philosophie" |
| 3 | Déplacement | "La première barrière" : Section 02 → après "Veille passive vs active" dans la nouvelle Section 01 |
| 4 | Suppression | Slide "Ce que ce système a produit" (chiffres XX manquants) |
| 5 | Suppression | En-tête "04 · La preuve" |
| 6 | Déplacement | "De la note à l'article" : Section 04 → fin de la nouvelle Section 02 |
| 7 | Enrichissement | "De la note à l'article" : ajouter une `StickyNote` avec le texte "Ce talk est né d'une note Obsidian connectée à 3 highlights de podcasts différents." — écho au hook d'ouverture |
| 8 | Notes speaker | Harmoniser la contradiction "zéro onglet" : slide Constat dit "je me soigne", slide finale dit "zéro onglet". Choisir la version honnête ("je me soigne") partout. |

---

## Raisonnement des décisions clés

### Fusion 01+02

Le problème (veille passive) appelle immédiatement la philosophie (Forte, les 3 étapes) — ce sont deux faces du même diagnostic. Les séparer en deux sections crée une rupture que l'audience ne ressent pas. La fusion donne un arc "constat → réponse conceptuelle" avant de plonger dans les outils.

### Placement de "La première barrière" dans la section fusionnée

La sélection des sources est un changement de mentalité *avant* le système — elle ponctue naturellement la partie "constat" (après le problème passif/actif) et sert de pont vers la philosophie (Forte).

### Dissolution de la Section 04

Intégrer "De la note à l'article" comme conclusion de la Section 02 (Le système) transforme la slide en preuve in-situ : l'audience voit le système en action juste après avoir vu le système. Plus efficace qu'une section "preuve" isolée.

### Écho narratif sur "De la note à l'article"

Le hook d'ouverture ("347 onglets") doit se refermer. "De la note à l'article" est l'endroit naturel pour écrire : "Ce talk est lui-même né d'une note Obsidian connectée à 3 highlights de podcasts." Ça transforme la slide de preuve en conclusion narrative.

---

## Contraintes

- Conserver le thème neversink et ses layouts inchangés
- Ne pas ajouter de nouvelles dépendances ou composants
- Les notes speaker existantes restent en place sauf pour la cohérence "zéro onglet"
- Durée cible : 25 minutes — la structure en 3 sections est plus compacte que les 5 actuelles
