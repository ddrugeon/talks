<script setup>
import Footer from "../components/Footer.vue";

const props = defineProps({
    image: String,
});
</script>

<template>
    <div class="image-left-layout">
        <!-- Wrapper pour les deux colonnes -->
        <div class="content-wrapper">
            <!-- Colonne de gauche : image -->
            <div class="image-content">
                <img :src="image" alt="Image" />
            </div>

            <!-- Colonne de droite : contenu avec fond teal -->
            <div class="text-content">
                <slot />
            </div>
        </div>

        <!-- Footer -->
        <Footer fg-color="white" logo-color="white" />
    </div>
</template>

<style scoped>
.image-left-layout {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: var(--wescale-teal);
}

.content-wrapper {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: 60fr 40fr; /* Image 60%, Texte 40% */
    gap: 0;
}

/* Image à gauche - pleine hauteur */
.image-content {
    position: relative;
    overflow: hidden;
}

.image-content img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Contenu à droite avec fond teal */
.text-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #2b8a8c 0%, #1b3a4b 100%);
}

/* Titre */
.text-content :deep(h1) {
    color: white;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 4rem;
    text-align: center;
}

/* QR Code centré */
.text-content :deep(p) {
    display: flex;
    margin: 0;
}

.text-content :deep(img) {
    width: 20rem;
    height: auto;
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
