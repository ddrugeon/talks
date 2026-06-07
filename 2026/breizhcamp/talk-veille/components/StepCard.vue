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
  padding: 1.5rem;
  border: 2px solid #5dd9c1;
  border-radius: 1rem;
  gap: 1rem;
  height: 100%;
}

.step-icon {
  font-size: 2rem;
  min-width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
  font-family: var(--neversink-title-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
}

.step-content {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
  flex-grow: 1;
  display: flex;
  align-items: center;
}
</style>
