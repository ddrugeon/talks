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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}

.content-wrapper {
    display: contents;
}

.text-content {
    display: flex;
    flex-direction: column;
    background: white;
    height: 100%;
}

.header-wrapper {
    flex-shrink: 0;
}

/* Texte centré verticalement */
.text-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 4rem 6rem 4rem;
}

.text-wrapper :deep(p) {
    color: var(--wescale-navy);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.6;
    margin: 0 0 1rem 0;
}

.text-wrapper :deep(strong) {
    color: var(--wescale-teal);
    font-weight: 700;
}

.image-content {
    position: relative;
    height: 100%;
    overflow: hidden;
}

.image-content img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
}
</style>
