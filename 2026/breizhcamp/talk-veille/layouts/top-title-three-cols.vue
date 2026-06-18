<script setup lang="js">
import { computed } from 'vue'
import { compute_column_size, compute_alignment, compute_margin_class } from './layoutHelper'

const props = defineProps({
  columns: {
    default: 'is-one-third',
  },
  align: {
    default: 'l-lt-lt-lt',
  },
  color: {
    default: 'light',
  },
  margin: {
    default: 'normal',
  },
})

const colwidth = computed(() => compute_column_size(props.columns))

const alignment = computed(() => {
  const parts = props.align.split('-')

  // Title: single letter (c, l, r)
  const titleAlign = parts[0]

  // Columns: two letters each (horizontal + vertical)
  const leftAlign = parts[1] || 'lt'
  const centerAlign = parts[2] || 'lt'
  const rightAlign = parts[3] || 'lt'

  return {
    t: titleAlign ? `text-${titleAlign === 'c' ? 'center' : titleAlign === 'l' ? 'left' : 'right'}` : 'error',
    l: compute_alignment(leftAlign[0], leftAlign[1]),
    c: compute_alignment(centerAlign[0], centerAlign[1]),
    r: compute_alignment(rightAlign[0], rightAlign[1]),
  }
})

const colorscheme = computed(() => {
  return `neversink-${props.color}-scheme`
})

const marginClass = computed(() => {
  return compute_margin_class(props.margin)
})
</script>

<template>
  <div
    v-if="
      colwidth == 'error' ||
      !alignment.t ||
      alignment.t == 'error' ||
      alignment.l == 'error' ||
      alignment.c == 'error' ||
      alignment.r == 'error'
    "
    class="slidev-layout default error"
  >
    <span class="ns-c-warning"><b>Erreur</b>: paramètres de layout invalides.</span>
    <hr />
    <p>
      Il y a quatre paramètres: <code>columns</code>, <code>align</code>, et <code>color</code>. Actuellement:
      <code>columns: {{ props.columns }} </code>, <code>align: {{ props.align }} </code>, et
      <code>color: {{ props.color }} </code>.
    </p>
    <p>
      Les "slots" de la page sont: <code>:: title ::</code>, <code>:: left ::</code>, <code>:: center ::</code>, et
      <code>:: right ::</code>
    </p>
    <p>
      Les options pour <code>columns</code> sont divisées en 12 unités de colonne. Par exemple
      <code>columns: is-3-6-3</code> rend la colonne gauche 3/12, centrale 6/12, droite 3/12. Les raccourcis incluent
      <code>columns: is-one-third</code> (4-4-4), <code>columns: is-one-quarter</code> (3-3-6).
    </p>
    <p>
      Le paramètre <code>align</code> détermine comment les colonnes sont alignées. La notation est par exemple
      <code>align: c-lt-lt-lt</code>. La première partie est pour le titre, puis pour chaque colonne. La première
      lettre est (<code>c</code> pour center, <code>l</code> pour left, <code>r</code> pour right). Pour les colonnes,
      la deuxième lettre est l'alignement vertical (<code>t</code> pour top, <code>m</code> pour middle,
      <code>b</code> pour bottom).
    </p>
    <p>Le paramètre <code>color</code> détermine la couleur du titre.</p>
  </div>
  <div v-else>
    <div class="flex flex-col h-full w-full">
      <!-- Barre de titre colorée -->
      <div class="w-full h-fit min-h-13 pt-2 pb-2 slidecolor" :class="colorscheme">
        <div class="slidev-layout toptitle title p-0 ml-6 mr-6 mt-auto mb-auto" :class="alignment.t">
          <slot name="title" />
        </div>
      </div>

      <!-- Contenu avec trois colonnes -->
      <div class="slidev-layout toptitle content w-full flex-1 min-h-0 flex flex-row gap-6" :class="marginClass">
        <div class="col-left" :class="alignment.l">
          <slot name="left" />
        </div>
        <div class="col-center" :class="alignment.c">
          <slot name="center" />
        </div>
        <div class="col-right" :class="alignment.r">
          <slot name="right" />
        </div>
      </div>

      <!-- Slot optionnel pour le footer -->
      <div v-if="$slots.default" class="slidev-layout default h-fit w-full" :class="marginClass">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<style>
.slidev-layout.toptitle .content {
  padding-top: 1.3rem;
}

.slidev-layout.toptitle .content h1 + ul {
  margin-top: 0em;
}
.slidev-layout.toptitle .content h2 + ul {
  margin-top: 0em;
}

.slidev-layout.toptitle .content h3 + ul {
  margin-top: 0em;
}

li li {
  margin-top: 0.5em;
}

.slidev-layout.toptitle .content h2 {
  font-size: 1.4em;
  font-family: var(--neversink-title-font);
  font-weight: 500;
  margin-bottom: 0rem;
}

.slidev-layout.toptitle .content h3 {
  font-size: 1.1em;
  font-family: var(--neversink-title-font);
  font-weight: 500;
  margin-bottom: 0rem;
}

.slidev-layout .toptitle .title {
  padding: 0;
  margin: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.slidev-layout.toptitle.title h1 {
  font-size: 1.8em;
  font-family: var(--neversink-title-font);
  font-weight: 500;
  letter-spacing: 0.07em;
}

.slidev-layout.toptitle.title h2 {
  font-size: 1.5em;
  font-family: var(--neversink-title-font);
  font-weight: 300;
  letter-spacing: 0.07em;
}

.slidev-layout.toptitle.title h3 {
  font-size: 1.1em;
  font-family: var(--neversink-title-font);
  font-weight: 300;
  letter-spacing: 0.07em;
}

.slidev-layout.toptitle.title h1 + p,
.slidev-layout.toptitle.title h2 + p,
.slidev-layout.toptitle.title h3 + p {
  margin-top: 0.85em;
  margin-bottom: 0.3em;
}
</style>

<style scoped>
.slidev-layout.toptitle.content .col-left {
  flex: v-bind(colwidth.l);
  margin-right: 10px;
}

.slidev-layout.toptitle.content .col-center {
  flex: v-bind(colwidth.c);
  margin-right: 10px;
  margin-left: 10px;
}

.slidev-layout.toptitle.content .col-right {
  flex: v-bind(colwidth.r);
  margin-left: 10px;
}
</style>