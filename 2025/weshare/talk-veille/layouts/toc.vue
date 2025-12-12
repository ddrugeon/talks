<script setup>
import Footer from "../components/Footer.vue";
</script>

<template>
    <div class="toc-layout">
        <!-- Titre avec tiret -->
        <h1 class="toc-title"><span class="dash">—</span> Sommaire</h1>

        <!-- Liste des sections -->
        <div class="toc-content">
            <slot />
        </div>

        <Footer logo-color="teal" />
    </div>
</template>

<style scoped>
.toc-layout {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 4rem;
    background: white;
    display: flex;
    flex-direction: column;
}

.toc-title {
    font-size: 3.5rem;
    padding-bottom: 3%;
    font-weight: 700;
    color: var(--wescale-navy);
    display: flex;
    align-items: center;
    gap: 1rem;
}

.dash {
    color: var(--wescale-teal);
    font-weight: 400;
}

.toc-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0;
}

/* Style pour les items du sommaire */
.toc-content :deep(.toc-item) {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 1rem 0;
    border-bottom: 1px solid #e5e7eb;
}

.toc-content :deep(.toc-item:last-child) {
    border-bottom: none;
}

.toc-content :deep(.toc-number) {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--wescale-teal);
    min-width: 5rem;
    line-height: 1;
}

.toc-content :deep(.toc-text) {
    font-size: 1.5rem;
    color: var(--wescale-teal);
    font-weight: 400;
}

.toc-content :deep(ol) {
    list-style: none;
    counter-reset: toc-counter;
    display: flex;
    flex-direction: column;
    gap: 0;
}

.toc-content :deep(li) {
    counter-increment: toc-counter;
    display: flex;
    align-items: center;
    gap: 3rem;
    color: var(--wescale-navy); /* ← Cette ligne était manquante */
    border-bottom: 1px solid #e5e7eb;
    font-size: 2rem;
}

.toc-content :deep(li::before) {
    content: counter(toc-counter);
    font-size: 4rem;
    font-weight: 700;
    color: var(--wescale-teal);
    min-width: 5rem;
}

.toc-content :deep(li:last-child) {
    border-bottom: none;
}
</style>
