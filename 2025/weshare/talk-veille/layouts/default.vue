<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const props = defineProps({
    section: String,
    sectionName: String,
    slideName: String,
});
</script>

<template>
    <div class="default-layout">
        <!-- Header avec numéro et nom de section -->
        <Header
            :section="section"
            :sectionName="sectionName"
            :slideName="slideName"
            fg-color="#45989E"
        />

        <!-- Contenu principal -->
        <div class="main-content">
            <slot />
        </div>

        <!-- Footer en teal -->
        <Footer fg-color="#45989E" logo-color="teal" />
    </div>
</template>

<style scoped>
.default-layout {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
}

/* Contenu principal avec padding réduit */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4vw 4vh 4vw;
    overflow: auto;
}

/* Container de paragraphe avec images */
.main-content :deep(p) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin: 0;
    flex-wrap: wrap;
    flex: 1;
}

/* Images - style par défaut (multiples images) */
.main-content :deep(img) {
    display: block;
    margin: 0;
    max-height: 45vh;
    max-width: 40vw;
    width: auto;
    height: auto;
    object-fit: contain;
}

/* Si une seule image, elle peut prendre plus de place */
.main-content :deep(p:has(img:only-child)) img {
    display: block;
    margin: 0;
    max-height: 70vh;
    max-width: 45vw;
    width: auto;
    height: auto;
    object-fit: contain;
}

/* Videos */
.main-content :deep(video) {
    display: block;
    margin: 0 auto;
    max-height: 45vh;
    max-width: 40vw;
    width: auto;
    object-fit: contain;
}

/* Container du tableau */
.main-content :deep(table) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 3rem auto;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Header du tableau - fond teal */
.main-content :deep(thead) {
    background: var(--wescale-teal);
}

.main-content :deep(thead th) {
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem;
    text-align: center;
    border: none;
}

/* Première cellule du header - coins arrondis en haut à gauche */
.main-content :deep(thead th:first-child) {
    border-top-left-radius: 1rem;
}

/* Dernière cellule du header - coins arrondis en haut à droite */
.main-content :deep(thead th:last-child) {
    border-top-right-radius: 1rem;
}

/* Corps du tableau */
.main-content :deep(tbody tr) {
    background: white;
}

/* Alternance de couleurs - lignes paires en gris clair */
.main-content :deep(tbody tr:nth-child(even)) {
    background: #f3f4f6;
}

.main-content :deep(tbody td) {
    color: var(--wescale-navy);
    font-weight: 400;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    border: none;
}

/* Dernière ligne - coins arrondis en bas */
.main-content :deep(tbody tr:last-child td:first-child) {
    border-bottom-left-radius: 1rem;
}

.main-content :deep(tbody tr:last-child td:last-child) {
    border-bottom-right-radius: 1rem;
}
</style>
