---
theme: ./
layout: cover
image: "/images/banner.jpg"
colorSchema: light
auteur: "David Drugeon-Hamon"
date: "15 Décembre 2025"
titre: "Comment je fais ma veille technologique"
subtitle: "Hackez votre veille techno : De la lecture passive à l'apprentissage actif."
---


<!--
Bonjour à tous !

Pour ceux qui ne me connaisse pas, je m'appelle David Drugeon-Hamon, consultant chez WeScale depuis quatre ans.
J'ai écrit de nombreux articles de blog sur le blog WeScale, fait de nombreuses présentations
aussi bien en WeShare qu'en conférences externes. En plus de cela, j'ai aussi animé le cercle Cloud Providers
et le cercle IA. Et vu l'actualité autour de ces deux sujets, il était nécessaire de transformer mon
processus de veille technologique pour ne pas être vite dépassé.

[Pause, contact visuel avec l'audience]

Prêts alors à reprendre le contrôle de votre veille ?
-->

---
layout: toc
---

1. Introduction
2. Le workflow  
3. Conclusion

<!--
Avant de commencer, voici le programme de cette présentation :
Tout d'abord, une introduction rapide sur quel sera le but de mon processus de veille.
Dans un second temps, quel est le workflow et les outils que j'utilise.
Enfin, une récapitulatif de ce que nous avons vu.
-->

---
layout: section
number: "01"
---

Introduction

---
layout: default
section: "01"
sectionName: "Introduction"
slideName: "Le constat"
---


<img src="/images/vivaldi-tabs.png" class="h-100 mx-auto" alt="Vivaldi browser avec plusieurs onglets ouverts"/>

<!--
Alors comme beaucoup, je lis des articles de blogs, j'écoute des podcasts,
je regarde des vidéos sur YouTube sur différents sujets qui m'intéressent.

J'accumule les onglets sur mon navigateur, je ne les ferme pas, je les laisse ouverts en me disant
que je pourrais en avoir besoin un jour.
Le problème, c'est que "plus tard" n'arrive jamais.

On accumule par peur de manquer quelque chose — ce qu'on appelle le FOMO, Fear Of Missing Out.

Résultat : on stocke, on collection, mais on ne traite pas.
On ne retient rien. C'est de la thésaurisation numérique, pas de la veille.
-->

---
layout: default
section: "01"
sectionName: "Introduction"
slideName: "Veille passive vs Veille active"
---

| Veille Passive | Veille Active    |
| -------------- | ---------------- |
| Lire           | Lire + Surligner |
| Oublier        | Connecter        |
| Consommer      | Créer            |

<!--
- **Notes du speaker :**
> Avant de plonger dans les outils, prenons 2 minutes pour parler de la philosophie derrière.
>
> *[Montrer le tableau]*
>
> À gauche, la veille passive. C'est ce qu'on fait tous naturellement : on lit un article, on se dit "intéressant", et une semaine plus tard, on a tout oublié. On consomme de l'information comme on scrolle sur les réseaux sociaux.
>
> À droite, la veille active. La différence fondamentale ? **On interagit avec le contenu.**
>
> - On ne lit pas, on lit ET on surligne les passages importants.
> - On ne stocke pas dans un coin, on connecte avec ce qu'on sait déjà.
> - On ne consomme pas pour consommer, on consomme pour créer quelque chose.
>
> Le principe clé à retenir : **le but n'est pas l'archivage, c'est la création**. Vos notes doivent servir à produire — un article, un talk, une solution technique.
>
> Si une note ne ressort jamais, elle ne servait à rien.
-->

---
layout: image-right
image: /images/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg
section: "01"
sectionName: "Introduction"
slideName: "La philosophie"
---

**"le but n'est pas l'archivage, c'est la création"**
<!--
- **Notes du speaker :**
> Avant de plonger dans les outils, prenons 2 minutes pour parler de la philosophie derrière.
>
> *[Montrer le tableau]*
>
> À gauche, la veille passive. C'est ce qu'on fait tous naturellement : on lit un article, on se dit "intéressant", et une semaine plus tard, on a tout oublié. On consomme de l'information comme on scrolle sur les réseaux sociaux.
>
> À droite, la veille active. La différence fondamentale ? **On interagit avec le contenu.**
>
> - On ne lit pas, on lit ET on surligne les passages importants.
> - On ne stocke pas dans un coin, on connecte avec ce qu'on sait déjà.
> - On ne consomme pas pour consommer, on consomme pour créer quelque chose.
>
> Le principe clé à retenir : **le but n'est pas l'archivage, c'est la création**. Vos notes doivent servir à produire — un article, un talk, une solution technique.
>
> Si une note ne ressort jamais, elle ne servait à rien.
-->

---
layout: section
number: "02"
---

Le Workflow

---
layout: image-right
image: /images/diego-ph-fIq0tET6llw-unsplash.jpg
section: "02"
sectionName: "Le workflow"
slideName: "Les étapes"
---

* **Capturer** — Je sauvegarde ce qui m'intéresse, mais pas dans des onglets. Dans un système dédié.
* **Traiter** — Je lis activement, je surligne, je connecte les idées entre elles.
* **Créer** — Ces notes deviennent des articles, des talks, des solutions à des problèmes réels.

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Architecture du système"
---
![📊 Voir l'architecture complète du système →](/images/architecture-veille.png)

<!--
- **Notes du speaker :**
> Mon système repose sur trois couches :
>
> 1. **Les sources** — Tout ce que je consomme : articles web, vidéo youtube, podcasts, livres physiques ou numériques.
> 2. **Readwise** — C'est le hub central. Il collecte tout, nettoie, formate.
> 3. **Obsidian** — Mon cerveau numérique. C'est là que tout atterrit et que je travaille.
> 4. **NotebookLM** - Un outil qui permet à partir de sources de pouvoir brainstormer avec ses notes à l'aide de Google Gemini.
>
> Le point crucial : je ne fais presque rien manuellement. L'info circule automatiquement de gauche à droite.
>
> Voyons chaque étape.
-->

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Capturer l'écrit avec Readwise Reader"
---

![screenshot de Readwise Reader](/images/reader.png)

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Démo"
---

![Demo de Readwise Reader](/images/01-demo-time.png)

<!--
- **Notes du speaker :**
> Premier outil : **Readwise Reader**. C'est mon app de lecture pour tout ce qui est écrit.
>
> *[Démo ou vidéo pré-enregistrée]*
>
> Je trouve un article intéressant sur le web. Au lieu de l'ouvrir dans un onglet, je clique sur l'extension — l'article est sauvegardé dans Reader.
>
> Ensuite, quand je lis — vraiment lis — je surligne les passages importants. Comme ça.
>
> *[Montrer le surlignage]*
>
> Et voici le petit plus : **Ghostreader**, l'IA intégrée. Je peux lui demander de résumer l'article, ou de m'expliquer un passage technique. "Explain this code snippet" — et hop, j'ai une explication.
>
> Ma règle personnelle : **si ça ne vaut pas la peine d'être surligné, ça ne vaut pas la peine d'être lu**. Ça m'oblige à lire activement.

-->

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Capturer les podcasts avec Snipd"
---

![Snipd Home](/images/snipd-1.png)
![Snipd Capture](/images/snipd-2.png)

<!--
- **Notes du speaker :**
> Deuxième source : les podcasts. J'en écoute beaucoup, notamment en courant,  en marchant ou dans les transports.
>
> Le problème ? Impossible de prendre des notes quand on fait son sport.
>
> *[Montrer Snipd]*
>
> Snipd résout ça. C'est une app de podcast avec une fonctionnalité géniale : les **AI-generated snips**.
>
> Quand j'entends un passage intéressant, je double-tape sur mes écouteurs. L'IA transcrit automatiquement les dernières secondes et génère un résumé.
>
> *[Montrer un snip généré]*
>
> Je capture des idées **sans les mains**. Et ces snips se synchronisent automatiquement avec... devinez quoi ? Readwise.

-->

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Démo"
---

<video src="/videos/snipd.mp4" controls autoplay muted loop></video>

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Gérer les surlignages avec Readwise"
---

![Screenshot de Readwise](/images/readwise.png)

<!--
> Readwise, c'est le **middleware de mon système**. C'est lui qui fait tout le travail ingrat.
>
> *[Montrer le dashboard]*
>
> Il récupère mes highlights de partout :
> - Reader pour les articles
> - Snipd pour les podcasts
> - Kindle pour les ebooks
> - Même les tweets que je like
>
> Et il fait deux choses essentielles :
>
> 1. **Il nettoie et formate** — Les données arrivent propres, avec auteur, URL, date.
> 2. **Il synchronise vers Obsidian** — Automatiquement, toutes les heures.
>
> Je n'ai rien à faire. Mes highlights apparaissent dans Obsidian comme par magie.

-->

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Démo"
---

![Démo de Readwise](/images/02-demo-time.jpg)

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "La destination : Obsidian"
---

![Screenshot d'Obsidian](/images/obsidian.png)

<!--
- **Notes du speaker :**
> Et on arrive à la destination finale : **Obsidian**.
>
> *[Ouvrir le dossier Readwise]*
>
> Voici mon dossier de synchronisation. Chaque article, chaque podcast devient une note avec :
> - Les métadonnées (auteur, URL, date de lecture)
> - Tous mes highlights
> - Les tags automatiques
>
> *[Ouvrir une note]*
>
> Regardez cette note. Elle vient d'un podcast que j'ai écouté la semaine dernière. Je n'ai rien tapé — tout est arrivé automatiquement.
>
> Maintenant, le travail intéressant commence. Je prends un highlight qui me parle, et je le transforme en **note atomique** — une idée autonome que je peux connecter à d'autres.
>
> *[Montrer la création d'un lien]*
>
> C'est ça, la veille active : transformer de l'information brute en connaissance personnelle.

-->

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Démo"
---

![Démo d'Obsidian](/images/03-demo-time.jpg)

---
layout: default
section: "02"
sectionName: "Le workflow"
slideName: "Le résultat"
---

![Démo d'Obsidian](/images/article-blog.png)

---
layout: section
number: "03"
---

# Conclusion

---
layout: image-right
image: /images/gaia-co-B0NptANzbww-unsplash.jpg
section: "03"
sectionName: "Conclusion"
slideName: "Mes conseils"
---

1. **KISS** : commencer simplement
2. **L'outil n'est pas la finalité**
3. **Faites vous plaisir** : le but est de vous aider à apprendre et à produire de la valeur


---
layout: default
section: "03"
sectionName: "Conclusion"
slideName: "La mise en place"
---


| Investissement temps | Durée            |
| -------------------- | ---------------- |
| Setup initial        | Une demi-journée |
| Routine quotidienne  | 10-15 min        |
| Routine hebdomadaire | 1 heure          |

---
layout: default
section: "03"
sectionName: "Conclusion"
slideName: "Combien ça coûte ?"
---

| Outil                    | Coût                                             |
| ------------------------ | ------------------------------------------------ |
| Readwise (Reader inclus) |10 € / mois                                       |
| Snipd                    | 0€ / mois (free) jusqu'à 11.99€ / mois (premium) |
| Obsidian                 | 0€ / mois                                        |

---
layout: image-left
image: /images/jan-tinneberg-gJJhG4gM7NA-unsplash.jpg
---

# Feedbacks

![QR Code](/images/qrcode-openfeedpack.png)
