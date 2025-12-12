<script setup>
import Footer from "../components/Footer.vue";
</script>

<template>
    <div class="section-layout">
        <!-- Grand cercle blanc à gauche -->
        <div class="section-circle">
            <div class="section-content">
                <div class="section-number">{{ $attrs.number || "01" }}</div>
                <div class="section-name">
                    <slot />
                </div>
            </div>
        </div>

        <!-- Fond teal qui occupe tout -->
        <div class="section-background"></div>

        <Footer fg-color="white" logo-color="white" />
    </div>
</template>

<style scoped>
.section-layout {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/* Fond teal */
.section-background {
    position: absolute;
    background: linear-gradient(135deg, #2b8a8c 0%, #1b3a4b 100%);
    inset: 0;
    z-index: 1;
}

/* Grand cercle blanc qui déborde à gauche */
.section-circle {
    position: absolute;
    right: -5vw; /* Ajusté pour que ça déborde moins */
    top: 25%;
    transform: translateY(-50%) translateX(-130%);

    width: 50vw;
    height: 50vw; /* Carré parfait */
    max-width: 500px; /* Limite maximale pour les très grands écrans */
    max-height: 500px;

    border-radius: 50%;
    background: white;
    overflow: visible;
    box-shadow: -20px 0 50px rgba(0, 0, 0, 0.15);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Container pour le numéro et le nom - empilés verticalement */
.section-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}

/* Numéro de section */
.section-number {
    font-size: 10rem;
    font-weight: 700;
    color: var(--wescale-teal);
    line-height: 0.9;
}

/* Nom de la section */
.section-name {
    font-size: 3rem;
    font-weight: 700;
    color: var(--wescale-navy);
}

.section-name :deep(h1),
.section-name :deep(p) {
    margin: 0;
    padding: 0;
    font-size: 3rem;
    font-weight: 700;
    color: var(--wescale-navy);
}
</style>
