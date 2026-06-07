---
theme: neversink
layout: cover
color: navy
---

# Comment je fais ma veille technologique

De l'indigestion au déploiement

:: notes ::

Ouvrir directement sur l'anecdote — pas de bonjour d'abord. Contact visuel avec la salle.

---
layout: top-title
color: navy
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

En 18 mois avec un système différent : 20 articles, 12 newsletters, 3 talks dont celui-ci.
Aujourd'hui, je ne vais pas vous mentir mais je n'ai pas encore zéro onglet ouvert mais je me soigne.

Dans ce talk, je vais vous présenter le processus de veille qui m'a permis de créer du contenu."

---
layout: top-title-two-cols
color: navy
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
color: navy
---

:: title ::

# Au programme

:: content ::

::left::

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

:: right ::

<StickyNote color="amber-light" textAlign="left" width="180px" title="💡- But">
<br/>
Dans 25 minutes, vous repartez avec quelque chose d'installable ce soir.
</StickyNote>

---
layout: section
color: navy
---

# 01 · Le problème

<hr class="border-white/30"/>

Pourquoi votre veille actuelle ne fonctionne pas.

---
layout: top-title-two-cols
color: navy
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
    color="stone"
    number-color="navy"
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
    color="stone"
    number-color="navy"
    :show-border="true"
  />

:: notes ::

"Ce n'est pas un problème de mémoire. Ce n'est pas un problème de motivation.
C'est un problème de système. Et les systèmes, ça se conçoit."

---
layout: section
color: navy
---

# 02 · La philosophie

<hr class="border-white/30"/>

Le principe qui change tout.

---
layout: quote
color: navy
author: Tiago Forte
---

"La clé pour que vos notes survivent à leur voyage dans l'avenir est qu'elles soient **découvrables**"

:: notes ::

Tiago Forte est auteur du livre "Building a second brain (2022)" propose une méthode 
pour organiser son savoir et ses idées en prenant des notes. Même si il conseille une
méthodologie basée sur la capture, le traitement et la diffusion des informations, il
faut se l'approprier et adapter à ses besoins.

---
layout: top-title-three-cols
color: navy
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

---
layout: section
color: navy
---

# 03 · Le système

<hr class="my-4 border-white/30"/>

Les outils qui font tourner la machine


---
layout: top-title
color: navy
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
color: navy
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

<StickyNote color="amber-light" textAlign="left" width="180px" title="💡- Ma règle">
<br/>
si ça ne vaut pas la peine d'être surligné, ça ne vaut pas la peine d'être lu.
</StickyNote>

---
layout: top-title-two-cols
color:
color: navy
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
color: navy
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
color: navy
align: l
---

:: title ::

# Stockage & Connectivité — une note réelle

:: content ::

<img src="/images/obsidian.png" alt="Note avec connexions" class="h-72 mx-auto rounded-xl shadow-md"/>

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

---
layout: section
color: navy
---


# 05 · Par où commencer

<hr class="my-4 border-white/30"/>

Un seul geste ce soir.


---
layout: top-title-two-cols
color: navy
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

---
layout: top-title
color: navy
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
    color="stone"
    number-color="navy"
    :show-border="true"
  />

---
layout: top-title
color: navy
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
    color="stone"
    number-color="navy"
    :show-border="true"
  />

:: notes ::

"Il y a deux ans, 347 onglets. Aujourd'hui, zéro onglet et 20 articles publiés.
La différence entre lire beaucoup et produire beaucoup, c'est un système.

Installez Readwise Reader. Lisez un article. Surlignez trois passages.
Le reste vient après."

---
layout: top-title-two-cols
color: navy
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
color: navy
---

:: title ::
Questions ?

