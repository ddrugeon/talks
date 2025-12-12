<script setup>
import { computed } from "vue";

const props = defineProps({
    date: {
        type: String,
        default: "15 Décembre 2025",
    },
    title: {
        type: String,
        default: "Comment je fais ma veille technologique",
    },
    fgColor: {
        type: String,
        default: "#45989E", // var(--wescale-teal)
    },
    logoColor: {
        type: String,
        default: "#45989E", // "normal" ou "white"
    },
});

// Récupère le numéro de page depuis Slidev
const pageNumber = computed(() => {
    return `${$slidev?.nav?.currentPage || 1} / ${$slidev?.nav?.total || 1}`;
});

// Style dynamique pour le logo
const logoStyle = computed(() => {
    if (props.logoColor === "white") {
        return { filter: "brightness(0) invert(1)" };
    } else if (props.logoColor === "teal") {
        // Filtre pour transformer en vert teal (#45989E)
        return {
            filter: "brightness(0) saturate(100%) invert(56%) sepia(17%) saturate(1165%) hue-rotate(134deg) brightness(91%) contrast(88%)",
        };
    }
    return {}; // Logo normal
});
</script>

<template>
    <div class="footer" :style="{ color: fgColor }">
        <span class="footer-date">{{ date }}</span>
        <span class="footer-title">{{ title }}</span>
        <span class="footer-page">{{ pageNumber }}</span>
        <img
            src="/logos/wescale.svg"
            alt="WeScale"
            class="footer-logo"
            :style="logoStyle"
        />
    </div>
</template>

<style scoped>
.footer {
    position: absolute;
    bottom: 1rem;
    left: 2rem;
    right: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    z-index: 10;
}

.footer-logo {
    height: 1.5rem;
    width: auto;
}
</style>
