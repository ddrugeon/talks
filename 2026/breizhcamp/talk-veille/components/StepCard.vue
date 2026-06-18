<script setup>
defineProps({
  icon: {
    type: String,
    required: false,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="step-card">
    <div v-if="icon" class="step-icon">
      {{ icon }}
    </div>
    <h3 class="step-title">{{ title }}</h3>
    <p class="step-content">
      <slot />
    </p>
  </div>
</template>

<style scoped>
.step-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 1.5rem;
  border: 2px solid #00ff41;
  border-radius: 1rem;
  gap: 1rem;
  flex: 1;
  height: 100%;
}

.step-icon {
  font-size: 3rem;
  min-width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
  font-family: var(--neversink-title-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
}

.step-content {
  font-size: 1.1rem;
  color: #0f1b2d;
  margin: 0;
  line-height: 1.6;
  flex-grow: 1;
  display: flex;
  align-items: center;
}
</style>
