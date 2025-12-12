<script setup>
import Footer from "../components/Footer.vue";
</script>

<template>
    <div class="end-layout">
        <!-- Image à gauche -->
        <div class="end-image">
            <img :src="$attrs.image || '/images/goodbye.jpg'" alt="Goodbye" />
        </div>

        <!-- Contenu à droite -->
        <div class="end-content">
            <slot />
        </div>

        <Footer />
    </div>
</template>

<style scoped>
.end-layout {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.end-image {
    position: relative;
    overflow: hidden;
}

.end-image img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.end-content {
    background: var(--wescale-teal);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;
}

.end-content h1 {
    color: white;
    font-size: 5rem;
    margin-bottom: 3rem;
}
</style>
