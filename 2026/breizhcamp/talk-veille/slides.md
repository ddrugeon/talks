---
theme: neversink
layout: cover
color: matrix
---

<img src="/logos/breizhcamp-logo-2024.svg" class="absolute top-6 right-6 h-12"/>

## Comment je fais ma veille technologique : De l'indigestion à la création

David Drugeon-Hamon - juin 2026

---
layout: top-title
color: matrix
---

:: title ::

# Le constat

:: content ::

<img src="/images/vivaldi-tabs.png" alt="Navigateur avec des centaines d'onglets ouverts" class="h-80 mx-auto rounded-lg shadow-md"/>

:: notes ::

"Il y a deux ans, j'avais 347 onglets ouverts dans mon navigateur.
Je dis 347 parce que c'est le moment où Vivaldi a arrêté de compter.

Des articles sur Kubernetes que j'allais lire 'ce weekend'.
Des vidéos Devoxx en 'watch later'. Des PDFs téléchargés 'au cas où'.

Le problème ? Je n'ai jamais rouvert aucun de ces onglets.
Ce que je faisais, ce n'était pas de la veille. C'était de la thésaurisation numérique.

En 1 an avec un système différent : 20 articles, 12 newsletters, 3 talks dont celui-ci.
Aujourd'hui, je ne vais pas vous mentir mais je n'ai pas encore zéro onglet ouvert mais je me soigne.

Dans ce talk, je vais vous présenter le processus de veille qui m'a permis de créer du contenu."

---
layout: top-title-two-cols
color: matrix
---
:: title ::

# À propos de moi

:: left ::

<img src="/images/photo-david.jpg" alt="" class="rounded-xl shadow-md h-50"/>

**Cloud Architect & SRE** - 28 ans d'expérience

- 🖊️ Blogueur
- ⚔️ Bretteur & accordéoniste

:: right ::

<div class="flex flex-col items-center gap-2">
<QRCode value="https://david.drugeon-hamon.bzh" :size="200" render-as="svg" class="rounded-xl shadow-md h-50"/>
Mon blog : david.drugeon-hamon.bzh
</div>

:: notes ::

Court — 30 secondes max. Les chiffres de production parlent déjà pour toi.

---
layout: top-title-two-cols
color: matrix
---

:: title ::

# Au programme

:: content ::

::left::

<StepsList
    :steps="[
      { text: 'Le constat & la philosophie' },
      { text: 'Le système' },
      { text: 'Par où commencer' },
    ]"
    color="matrix"
    number-color="#0f1b2d"
    :show-border="false"
  />

:: right ::

<StickyNote color="matrix" textAlign="left" width="180px" title="💡- But">
<br/>
Dans 25 minutes, vous repartez avec quelque chose d'installable ce soir.
</StickyNote>

:: notes ::

Vingt-cinq minutes. On va vite. Trois parties : le diagnostic, le système, l'action. Pas de théorie sans pratique — chaque partie se termine avec quelque chose de concret.

---
layout: section
color: matrix
---

# 01 · Le constat & la philosophie

<hr class="border-white/30"/>

Du problème à l'état d'esprit qui change tout.

:: notes ::

Pause. Respirer. Ce titre dit tout — on part du constat (le problème que tout le monde reconnaît) pour arriver à l'état d'esprit qui rend le système possible.

---
layout: top-title-two-cols
color: matrix
columns: is-6
align: l-lt-lt
---

:: title ::

# Veille passive vs Veille active

:: left ::

# Veille passive

<StepsList
    :steps="[
      { text: 'Lire' },
      { text: 'Oublier' },
      { text: 'Consommer' },
    ]"
    color="matrix"
    number-color="#0f1b2d"
    :show-border="false"
  />

:: right ::

# Veille active

<StepsList
    :steps="[
      { text: 'Lire + surligner' },
      { text: 'Connecter les informations entre elles' },
      { text: 'Créer du contenu' },
    ]"
    color="matrix"
    number-color="#0f1b2d"
    :show-border="true"
  />

:: notes ::

"Ce n'est pas un problème de mémoire. Ce n'est pas un problème de motivation.
C'est un problème de système. Et les systèmes, ça se conçoit."

---
layout: quote
color: matrix
author: Tiago Forte
---

"La clé pour que vos notes survivent à leur voyage dans l'avenir est qu'elles soient **découvrables**"

:: notes ::

Tiago Forte est auteur du livre "Building a second brain (2022)" propose une méthode 
pour organiser son savoir et ses idées en prenant des notes. Même si il conseille une
méthodologie basée sur la capture, le traitement et la diffusion des informations, il
faut se l'approprier et adapter à ses besoins.

---
layout: top-title
color: matrix
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
    color="matrix"
    number-color="#0f1b2d"
    :show-border="false"
  />

<StickyNote color="matrix" textAlign="left" width="200px" title="💡- Règle">
<br/>
Avant de mettre en place un système, la vraie victoire est de dire NON. Peu de sources de qualité > beaucoup de sources de bruit.
</StickyNote>

:: notes ::

C'est contre-intuitif mais la clé n'est pas de consommer plus. C'est de consommer moins et mieux.
Si vous ajoutez un système sans d'abord élaguer vos sources, vous gardez juste le même bruit organisé.

---
layout: top-title-three-cols
color: matrix
---

:: title ::

# Les 3 étapes

:: left ::

<StepCard icon="🎯" title="Capturer">
Sauvegarder ce qui m'intéresse dans un système dédié, pas dans des onglets.
</StepCard>

:: center ::

<StepCard icon="🤖" title="Traiter">
Lire activement, surligner, connecter les idées entre elles.
</StepCard>

:: right ::

<StepCard icon="🚀" title="Créer">
Ces notes deviennent des articles, des talks, des solutions concrètes.
</StepCard>

:: notes ::

Capturer, traiter, créer. Tout ce qu'on verra ensuite — les outils, les workflows, les habitudes — c'est l'implémentation concrète de ces trois verbes. Si vous ne retenez qu'une chose de ce talk, c'est ce triangle-là. Pointer chaque carte en la nommant.

---
layout: section
color: matrix
---

# 02 · Le système

<hr class="my-4 border-white/30"/>

Les outils qui font tourner la machine

:: notes ::

Pivot. On quitte la philosophie pour entrer dans la salle des machines. Je vais vous montrer le système exact — les quatre outils, comment ils s'enchaînent, pourquoi ceux-là et pas d'autres.

---
layout: top-title
color: matrix
align: l
---

:: title ::

# Architecture du système

:: content ::

<img src="/images/architecture-veille.png" alt="Architecture du système de veille" class="h-72 mx-auto"/>

:: notes ::

"Mon système repose sur quatre couches :
1. Les sources — tout ce que je consomme.
2. Readwise — le hub central. Il collecte tout, formate, synchronise.
3. Obsidian — mon cerveau numérique.
4. Claude — le traitement intelligent : tags, résumés, connexions."

---
layout: top-title-two-cols
color: matrix
columns: is-6
align: l-lt-lt
---

:: title ::

# Capture multi-sources

:: left ::

### Écrit
Extension navigateur → 1 clic

<img src="/images/reader.png" alt="Capture d'articles" class="rounded-xl shadow-md w-full mt-2"/>

**Active :** surligner + commenter

:: right ::

### Audio
Podcasts sans les mains

- Double-tap sur les écouteurs
- Transcription automatique
- Sync vers le système central

**Résultat :** notes partout, peu importe le format

<StickyNote color="matrix" textAlign="left" width="180px" title="💡- Ma règle">
<br/>
si ça ne vaut pas la peine d'être surligné, ça ne vaut pas la peine d'être lu.
</StickyNote>

:: notes ::

Deux gestes de capture. Pour le texte : l'extension navigateur, un clic, l'article entre dans le système — pas dans un onglet. Pour l'audio : double-tap sur les écouteurs pendant le podcast, Snipd transcrit et synchronise automatiquement. Principe commun : friction zéro, sinon on ne le fait pas.

---
layout: top-title-two-cols
color:
color: matrix
columns: is-6
align: l-lt-lt
---

:: title ::

# La plomberie invisible — Readwise + Obsidian

:: left ::

### Readwise
Le middleware du système. Agrège tout :
* Reader (articles, YouTube)
* Snipd (podcasts)
* Kindle (livres)

<div class="mt-4 text-xs font-mono bg-emerald-50 border border-emerald-200 rounded px-2 py-1 text-emerald-700">sync auto · toutes les heures</div>

:: right ::

### Obsidian
La destination finale :
- Notes atomiques
- Connexions entre idées
- Vault PARA structuré
<div class="mt-4 text-xs font-mono bg-emerald-50 border border-emerald-200 rounded px-2 py-1 text-emerald-700">je ne fais rien manuellement</div>

:: notes ::

PARA = Projects, Areas, Resources, Archive. C'est la méthode de structuration proposée par Tiago Forte dans "Building a Second Brain".
- **Projects** : travaux avec une date limite et un objectif
- **Areas** : domaines de responsabilité continu (tech, santé, finances)
- **Resources** : collections de références utiles pour l'avenir
- **Archive** : projets/areas terminés, mais conservés pour référence

---
layout: top-title-two-cols
color: matrix
columns: is-6
align: l-lt-lt
---

:: title ::

# Traiter — enrichir avec l'IA

:: left ::

**Note brute :**

<div class="mt-3 p-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-mono leading-relaxed text-xs">
"Kubernetes admission webhooks allow you to intercept API requests..."
</div>

:: right ::

**Après enrichissement :**

<div class="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-sm space-y-2">
  <div><span class="font-mono text-xs text-emerald-700 font-bold">TAGS</span><br/><code class="text-xs">#kubernetes #security</code></div>
  <div><span class="font-mono text-xs text-emerald-700 font-bold">RÉSUMÉ</span><br/><span class="text-slate-600 text-xs">Intercepter les requêtes API pour valider/muter les objets</span></div>
  <div><span class="font-mono text-xs text-emerald-700 font-bold">CONNEXIONS</span><br/><code class="text-xs">[[OPA]] · [[Gatekeeper]]</code></div>
</div>

:: notes ::

"L'IA fait le travail ingrat du tri — 30 secondes au lieu de 5 minutes.
Je valide, j'ajuste, et je passe à la création."

---
layout: top-title
color: matrix
align: l
---

:: title ::

# Stockage & Connectivité — une note réelle

:: content ::

<img src="/images/obsidian.png" alt="Note avec connexions" class="h-72 mx-auto rounded-xl shadow-md"/>

:: notes ::

Une note réelle. Tags automatiques, résumé généré par Claude, connexions vers d'autres notes de la vault. Ce n'est pas de l'archivage — c'est un réseau d'idées qui grossit à chaque lecture. Plus la vault est ancienne, plus les connexions sont pertinentes.

---
layout: top-title-two-cols
color: matrix
---

:: title ::

# De la note à l'article

:: left ::

<img src="/images/article-draft.png" alt="Article de blog produit depuis Obsidian" class="h-60 mx-auto rounded-xl shadow-md"/>

:: right ::

<img src="/images/article-blog.png" alt="Article de blog produit depuis Obsidian" class="h-60 mx-auto rounded-xl shadow-md"/>

<StickyNote color="matrix" textAlign="left" width="220px" title="💡">
<br/>
Ce talk est né d'une note Obsidian connectée à 3 highlights de podcasts différents.
</StickyNote>

:: notes ::

À gauche : le brouillon dans Obsidian, construit depuis des highlights et des notes connectées. À droite : l'article publié. Entre les deux : quelques heures de travail, pas quelques semaines de procrastination. Pointer la StickyNote — ce talk lui-même est le meilleur exemple.

---
layout: section
color: matrix
---

# 03 · Par où commencer

<hr class="my-4 border-white/30"/>

Un seul geste ce soir.

:: notes ::

Dernière ligne droite. On a vu le pourquoi, le quoi, le comment. La vraie question maintenant : qu'est-ce que vous faites ce soir concrètement ? Pas dans une semaine, ce soir.

---
layout: top-title-two-cols
color: matrix
columns: is-6
align: l-lt-lt
---

:: title ::

# Ce que ça coûte — vraiment

:: left ::

| Outil | Coût |
| ----- | ---- |
| **Readwise** (Reader inclus) | 10 € / mois |
| **Snipd** | 0 € → 11,99 € / mois |
| **Obsidian** | Gratuit |
| **Claude** | Variable |

:: right ::

| Étape | Temps |
| ----- | ----- |
| Setup initial | Une demi-journée |
| Routine quotidienne | 10-15 min |
| Routine hebdomadaire | 1 heure |

:: notes ::

La transparence sur le coût évite la déception. Readwise est le seul outil payant obligatoire si on veut la sync automatique. Obsidian est gratuit, Snipd a un tier gratuit. Setup minimum pour démarrer ce soir : Readwise Reader uniquement — le reste peut attendre.

---
layout: top-title
color: matrix
align: l
---

:: title ::

# Mes 3 conseils

:: content ::

  <StepsList
    :steps="[
      { text: 'KISS — commencez avec un seul outil', subtitle: 'N\'installez pas les quatre outils ce week-end. Un seul geste d\'abord.' },
      { text: 'L\'outil n\'est pas la finalité', subtitle: 'Le système sert la création, pas l\'inverse. Configurer Obsidian n\'est pas faire de la veille.' },
      { text: 'Faites-vous plaisir', subtitle: 'Si votre veille ressemble à une corvée, vous abandonnerez.' },
    ]"
    color="matrix"
    number-color="#0f1b2d"
    :show-border="true"
  />

:: notes ::

Ces trois erreurs, je les ai faites. Installer les quatre outils le même week-end, passer plus de temps à configurer Obsidian qu'à l'utiliser, transformer la veille en devoir jusqu'à l'abandonner en janvier. Commencez petit. Un outil. Un geste.

---
layout: top-title
color: matrix
align: l
---

:: title ::

# Ce soir — un seul geste

:: content ::

<StepsList
    :steps="[
      { text: 'Ouvrez un compte gratuit sur Readwise.' },
      { text: 'Installez l\'extension Readwise Reader dans votre navigateur' },
      { text: 'Lisez un article' },
      { text: 'Surlignez trois passages' },
    ]"
    color="matrix"
    number-color="#0f1b2d"
    :show-border="true"
  />

:: notes ::

"Il y a deux ans, 347 onglets. Aujourd'hui, beaucoup moins d'onglets — et 20 articles publiés.
La différence entre lire beaucoup et produire beaucoup, c'est un système.

Installez Readwise Reader. Lisez un article. Surlignez trois passages.
Le reste vient après."

---
layout: top-title-two-cols
color: matrix
---

:: title ::

# Merci ! 🙏

:: left :: 

<div class="flex flex-col items-center gap-2">
<QRCode value="https://openfeedback.io" :size="200" render-as="svg" class="rounded-xl shadow-md h-50"/>
OpenFeedback
</div>


:: right ::
<div class="flex flex-col items-center gap-2">
<QRCode value="https://david.drugeon-hamon.bzh" :size="200" render-as="svg" class="rounded-xl shadow-md h-50"/>
Mon blog : david.drugeon-hamon.bzh
</div>

:: notes ::

Laisser la slide visible pendant le Q&A.
Mentionner l'article de blog pour le workflow complet et le prompt Claude.

---
layout: section
color: matrix
---

:: title ::
Questions ?

:: notes ::

Laisser la slide visible. Ne pas fermer le laptop. Si la salle est silencieuse, amorcer avec : "Est-ce que certains d'entre vous ont déjà un système de veille ? Qu'est-ce qui bloque ?" Mentionner l'article de blog pour le workflow complet et le prompt Claude.
