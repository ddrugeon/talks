<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
  color: {
    type: String,
    default: 'emerald',
  },
  variant: {
    type: String,
    default: 'light',
    // Options: 'light' ou 'regular'
  },
  showBorder: {
    type: Boolean,
    default: true,
  },
  numberColor: {
    type: String,
    default: 'var(--neversink-fg-color)',
    // Peut être une couleur CSS ou une variable CSS
  },
})

const colorClass = `neversink-${props.color}${props.variant === 'regular' ? '' : '-light'}-scheme`
</script>

<template>
  <div class="flex flex-col items-center gap-5 mt-5">
    <div class="flex flex-col gap-2 w-full max-w-lg" :class="colorClass">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-start gap-4 p-3 rounded-xl bg-white shadow-sm transition-all"
        :style="{
          borderColor: props.showBorder ? 'var(--neversink-fg-color)' : 'transparent',
          borderWidth: '2px',
          color: 'var(--neversink-text-color)',
        }"
      >
        <div
          class="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold flex-shrink-0"
          :style="{
            backgroundColor: props.numberColor,
          }"
        >
          {{ index + 1 }}
        </div>
        <div class="flex-1">
          <div class="font-semibold">
            <slot :name="`step-${index}`">
              {{ step.text }}
            </slot>
          </div>
          <p v-if="step.subtitle" class="text-sm mt-1" :style="{ color: 'var(--neversink-fg-color)', opacity: 0.7 }">
            <slot :name="`step-${index}-subtitle`">
              {{ step.subtitle }}
            </slot>
          </p>
        </div>
      </div>
    </div>
    <p class="text-white/60 text-sm italic">
      <slot name="footer">Le reste vient après.</slot>
    </p>
  </div>
</template>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>
