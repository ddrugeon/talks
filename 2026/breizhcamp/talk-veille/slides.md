---
theme: neversink
layout: cover
color: matrix
neversink_slug: 'David Drugeon-Hamon - Breizhcamp 2026'
slide_info: false
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

<!--

Comme beaucoup de monde dans cette salle, j'empilais les onglets dans mon navigateur pour stocker les articles ou autre vidéos qui me semblait intéressants.

Des articles sur Kubernetes que j'allais lire 'ce weekend'.
Des vidéos Devoxx en 'watch later'. Des PDFs téléchargés 'au cas où'.

Le problème ? Je n'ai jamais rouvert aucun de ces onglets.
Ce que je faisais, ce n'était pas de la veille. C'était de la collection d'articles que je ne lirai jamais.

Depuis un talk que j'ai vu à Devoxx en 2023, je me suis dit qu'il fallait que cela change.

Le résultat, j'ai mis en place un système qui me permet de devenir acteur de ma veille. Je peux ainsi capitaliser sur ces sources d'information et d'inspiration pour créer du contenu que ce soit sur mon blog ou dans des talks comme celui-ci.

Je ne suis pas là, pour vous vendre une solution miracle comme nous pouvons voir sur YouTube ou LinkedIn mais je vous présenterai le processus de veille qui m'a permis de créer du contenu.

Aujourd'hui, je ne vais pas vous mentir mais je n'ai pas encore zéro onglet ouvert mais je me soigne.

-->

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

<!-- 
Tout d'abord, je me présente. Je m'appelle David Drugeon-Hamon, je suis actuellement architecte mais aussi SRE au sein de Teralab, une entité de l'IMT Transfert, à l'institut Mines et Télécom.

A mes heures perdues, je pratique l'escrime de spectacle, mais aussi joue de l'accordeon diatonique. Depuis octobre 2025, j'ai ouvert mon blog où je publie des articles aussi bien sur l'informatique mais pas que.
-->

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
      { text: 'la philosophie' },
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

<!--
J'ai divisé ce talk en trois parties:
La philosophie derrière le système
Le système que j'ai mis en place
Et des conseils pour commencer
-->

---
layout: section
color: matrix
---

# 01 · La philosophie

<hr class="border-white/30"/>

Du problème à l'état d'esprit qui change tout.

<!--
Pause. Respirer. Ce titre dit tout — on part du constat (le problème que tout le monde reconnaît) pour arriver à l'état d'esprit qui rend le système possible.
-->

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

<!--

Le constat. Lorsque nous faisons de la veille, nous lisons, écoutons ou regardons des sources qui nous semblent intéressantes. Le problème est l'accumulation d'information que nous traitons régulièrement, et nous passons d'une nouveauté à une autre. Notre cerveau n'est pas forcément capable de tout retenir et fera naturellement le tri parmi toutes ces informations.

Est-ce que cela vous ai déjà arrivé de vous souvenir d'une information mais impossible de retrouver la source ?

En faisant de la veille passive, nous ne faisons que consommer du contenu et c'est le but de bien des sites que nous visitons.

Avec une veille active, le but est d'au contraire, consommer du contenu en soulignant les informations qui nous semblent pertinentes ou en prenant des notes sur ce que nous regardons. Une fois ces informations lues, nous pourrons les connecter entre elles - relier les idées ou les citations avec ce que nous avons déjà consommé par le passé. Ainsi, ce sera un nouveau moyen pour créer du contenu.

-->

---
layout: quote
color: matrix
author: Tiago Forte
---

"La clé pour que vos notes survivent à leur voyage dans l'avenir est qu'elles soient **découvrables**"

<!--
Tiago Forte est auteur du livre "Building a second brain (2022)" propose une méthode 
pour organiser son savoir et ses idées en prenant des notes. Même si il conseille une
méthodologie basée sur la capture, le traitement et la diffusion des informations, il
faut se l'approprier et adapter à ses besoins.

Tiago Forte est l'auteur du livre à succès "Building a second brain". Dans ce livre, il explique comment il organise ses notes pour ne plus oublier les informations qu'il a lu, les tâches qu'il a à faire sur un projet etc. Le coeur de son système sont les notes et leurs liaisons entre elles.

Cette citation explique qu'une note prise dans le passé peut servir dans un projet sur lequel nous travaillons. Un projet qui est aussi bien un article de blog, un voyage ou même le réaménagement de notre bureau.
-->

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

<!--
C'est contre-intuitif mais la clé n'est pas de consommer plus. C'est de consommer moins et mieux.

Si vous ajoutez un système sans d'abord élaguer vos sources, vous gardez juste le même bruit même si il est organisé !

Pour commencer à mettre en place ce système, il faut d'abord faire un inventaire de ce que vous consommez. Par exemple, de mon côté, j'adore écouter des podcasts que ce soit en cuisinant ou en faisant mes activités sportives (running ou renforcement). J'accumule les podcasts et je n'aurai pas le temps de tout écouter malheureusement. J'ai donc sélectionner les thématiques que j'aime pour ne prendre que les podcasts qui m'apportent de la valeur. Pour bien débuter, fixer vous au début un nombre restreint, ce qui vous permettra d'éviter le fameux FOMO (Fear of Missing Out)
-->

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

<!--
Capturer, traiter, créer. Tout ce qu'on verra ensuite — les outils, les workflows, les habitudes — c'est l'implémentation concrète de ces trois verbes. Si vous ne retenez qu'une chose de ce talk, c'est ce triangle-là.

La première étape sera de capturer l'information. C'est à dire sauvegarder le lien vers l'article original, la vidéo YouTube ou l'épisode de podcast par exemple. Mais il ne faut pas le laisser dans votre navigateur, plutôt le stocker dans un logiciel dédié de type Read it later. Ainsi si l'article original n'est plus présent, il sera toujours disponible dans votre système.

Deuxième étape, Traiter l'information. Comme je vous l'ai dit précédemment, il faut devenir acteur de votre veille. L'information que vous avez enregistré vous semblait pertinente, il faut donc la traiter pour en extraire les idées qui retiennent votre attention. Mais attention à ne pas trop surligner aussi l'article... Ensuite, essayer de relier ces notes avec des notes que vous avez déjà dans votre système. Ce sera la clé pour réussir l'étape suivante.

La création. A partir des notes ou des articles que vous avez reliés, ce sera plus simple pour commencer à créer un article, un talk ou une solution concrète à un probleme. Par exemple, je travaille actuellement sur l'identité numérique décentralisé. J'ai donc recherché tous les articles sur le sujet (et c'est dense). Je me suis fait des notes de synthèse à partir de ce que j'ai lu et ce devrait être un prochain article qui arrivera sur mon blog.
-->
---
layout: section
color: matrix
---

# 02 · Le système

<hr class="my-4 border-white/30"/>

Les outils qui font tourner la machine

<!-- 
Concrètement comment j'ai mis en place le système qui me permet de faire cette veille ?
-->

---
layout: top-title
color: matrix
align: l
---

:: title ::

# Architecture du système

:: content ::

<img src="/images/architecture-veille.png" alt="Architecture du système de veille" class="h-72 mx-auto"/>

<StickyNote color="matrix" textAlign="left" width="200px" title="💡- Règle">
<br/>
schéma à refaire : enlever NotebookLM et rajouter l'étape de traitement avec Claude
</StickyNote>


<!--
Mon système repose sur quatre couches :
1. Les sources — tout ce que je consomme : des flux RSS, des réseaux sociaux, des newsletters, des vidéos Youtube, des podcasts et même les livres que je lis. Pour capturer toutes ces sources, j'utilise différents logiciels mais le principal est le Reader de Readwise.
2. Readwise — le hub central. Il collecte tout, formate, synchronise. C'est un logiciel en mode SaaS qui permet justement de pouvoir garder les hightlights que j'ai fait, les taggués et pouvoir les relire et les annoter.
3. Claude — le traitement intelligent : J'utilise un LLM pour retagguer les highlights pour avoir un système cohérent. Le LLM est aussi capable de me faire un résumé de la source pour pouvoir facilement traiter l'information. Je ne l'utilise pas comme un LLM Wiki (le système à la mode) mais plutôt pour faciliter la connexion entre mes sources.
4. Obsidian — mon cerveau numérique. C'est un logiciel de prise de notes en markdown. Il n'est pas open source mais il est gratuit pour une utilisation perso comme professionnelle. L'avantage de cet outil est que les notes sont dans un format pérenne et qu'elles restent en local sur ma machine. Je peux les synchroniser entre mes devices et ainsi créer du contenu en continu.
-->

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
i

<!--
Readwise reader propose une extension pour le navigateur qui permet de sauvegarder un article, une vidéo, un pdf ou autre. Et depuis la page, nous pouvons souligner ce qui nous intéresse, annoter l'article et tout sera automatiquement sauvegardé. Il est ensuite possible d'ajouter des tags et autres métadonnées qui seront utiles par la suite. Et cela fonctionne aussi pour les vidéos Youtube, le transcript est alors téléchargé, et les passages intéressants peuvent être alors soulignés et annotés. Ainsi plus d'excuses pour oublier des informations sur une vidéo d'un talk ou autre.

Pour les podcasts, j'utilise une application dédié depuis plusieurs années : Snipd. C'est un lecteur intelligent qui permet de faire le transcript de ce qui est dit, et un traitement IA est capable de résumer ce qui a été dit quand je double tap sur mes écouteurs. Pratique quand on ne peut pas prendre de notes en courant. Et le tout est synchronisé avec Readwise.
-->

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

<!--

PARA = Projects, Areas, Resources, Archive. C'est la méthode de structuration proposée par Tiago Forte dans "Building a Second Brain".
- **Projects** : travaux avec une date limite et un objectif
- **Areas** : domaines de responsabilité continu (tech, santé, finances)
- **Resources** : collections de références utiles pour l'avenir
- **Archive** : projets/areas terminés, mais conservés pour référence

-->

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

<!--
Initialement, je faisais le traitement manuellement ce qui pouvait être chronophage : relier les notes entre elles, les synthétiser etc.
Depuis quelques mois, j'utilise la puissance des LLMs pour faire le traitement et le tri. Ce que je faisais en l'espace d'une heure est fait maintenant en l'espace de 5 minutes.
Je valide, j'ajuste, et je passe à la création. Je n'utilise pas les LLMs pour la phase de création, je veux rester maître de ce que je produit. Mais c'est un fabuleux outil pour traiter de l'information et m'aider à la retrouver.
-->

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

<!--
L'article que j'ai écrit sur le re:invent 2025 est basé sur un ensemble d'articles que j'ai lus sur le sujet. Claude m'a aidé à traiter les tags, le résumé puis j'ai pu voir quels étaient les sujets qui m'ont parus importants. Et ainsi j'ai pu écrire cette restitution avec mon point de vue sur mon blog et sur LinkedIn.
-->

---
layout: section
color: matrix
---

# 03 · Par où commencer

<hr class="my-4 border-white/30"/>

Un seul geste ce soir.

<!--
Dernière ligne droite. On a vu le pourquoi, le quoi, le comment. La vraie question maintenant : qu'est-ce que vous faites ce soir concrètement ? Pas dans une semaine, ce soir.
-->

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

<!--
Ces trois erreurs, je les ai faites. Installer les quatre outils le même week-end, passer plus de temps à configurer Obsidian qu'à l'utiliser, transformer la veille en devoir jusqu'à l'abandonner en janvier. Commencez petit. Un outil. Un geste.
-->
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

<!--
La transparence sur le coût évite la déception. Readwise est le seul outil payant obligatoire si on veut la sync automatique mais des projets open source commence à voir le jour. Obsidian est gratuit, Snipd a un tier gratuit. Setup minimum pour démarrer ce soir : Readwise Reader uniquement — le reste peut attendre.
-->

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

<!--
Si vous voulez passer à l'action comme moi, une chose à faire

Installez Readwise Reader. Lisez un article. Surlignez trois passages.
et c'est le début du cercle vertueux qui vous aménèra à la création.
-->

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

<!-- 
Merci d'avoir assisté à ce talk. N'hésitez pas à mettre vos commentaires sur openfeedback, ils me seront utiles pour l'améliorer. 
Et je vous ai mis le lien de mon blog. 
Je suis disponible pour répondre à vos questions.
-->

---
layout: top-title
color: matrix
---

:: title ::

Questions ?
