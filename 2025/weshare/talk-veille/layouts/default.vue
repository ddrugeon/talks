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
    padding: 0 4rem 4rem 4rem; /* Pas de padding en haut, juste sur les côtés et en bas */
    overflow: auto;
}

/* Centrer les images avec hauteur limitée */
.main-content :deep(img) {
    display: block;
    margin: 0 auto;
    max-height: calc(
        80vh - 20rem
    ); /* Hauteur max pour ne pas toucher le footer */
    max-width: calc(100vw - 8rem); /* Largeur max avec padding */
    width: auto;
    height: auto;
    object-fit: contain;
}

/* Centrer les images avec hauteur limitée */
.main-content :deep(video) {
    display: block;
    margin: 0 auto;
    max-height: calc(
        80vh - 20rem
    ); /* Hauteur max pour ne pas toucher le footer */
    max-width: calc(100vw - 8rem); /* Largeur max avec padding */
    width: auto;
    height: auto;
    object-fit: contain;
}

/* Container de paragraphe avec plusieurs images */
.main-content :deep(p) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem; /* Espace entre les images */
    margin: 0;
    flex-wrap: wrap; /* Permet de passer à la ligne si nécessaire */
}

/* Images individuelles */
..main-content :deep(img) {
    display: block;
    max-height: calc(100vh - 28rem); /* Réduit de 20rem à 28rem */
    width: auto;
    max-width: 45%;
    object-fit: contain;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Si une seule image, elle peut prendre plus de place */
.main-content :deep(p:has(img:only-child)) img {
    max-width: 90%;
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
