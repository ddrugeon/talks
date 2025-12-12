<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const props = defineProps({
    section: String,
    sectionName: String,
    slideName: String,
    image: String,
});
</script>

<template>
    <div class="image-right-layout">
        <!-- Wrapper pour les deux colonnes -->
        <div class="content-wrapper">
            <!-- Colonne de texte à gauche -->
            <div class="text-content">
                <!-- Header -->
                <div class="header-wrapper">
                    <Header
                        :section="section"
                        :sectionName="sectionName"
                        :slideName="slideName"
                        fg-color="#45989E"
                    />
                </div>

                <!-- Texte centré -->
                <div class="text-wrapper">
                    <slot />
                </div>
            </div>

            <!-- Colonne de droite : image -->
            <div class="image-content">
                <img :src="image" alt="Image" />
            </div>
        </div>

        <!-- Footer -->
        <Footer fg-color="#45989E" logo-color="teal" />
    </div>
</template>

<style scoped>
.image-right-layout {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: white;
}

.content-wrapper {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.text-content {
    position: relative;
    display: flex;
    flex-direction: column;
    background: white;
}

.header-wrapper {
    position: relative;
    z-index: 10;
}

/* Texte centré - ajusté pour vraiment être au centre */
.text-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    margin-top: -20rem; /* Décale vers le haut pour compenser le header */
    margin-bottom: 4rem; /* Espace pour le footer */
}

.text-wrapper :deep(p) {
    color: var(--wescale-teal);
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0;
}

.image-content {
    position: relative;
    height: 100vh;
    overflow: hidden;
}
.image-content img {
    position: absolute;
    right: 0; /* Colle au bord droit */
    top: 0;
    width: 80%;
    height: 80%;
    object-fit: cover;
    object-position: center center;
}
</style>
