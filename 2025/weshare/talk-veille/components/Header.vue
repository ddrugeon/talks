<script setup>
const props = defineProps({
    section: {
        type: String,
        default: "01",
    },
    sectionName: {
        type: String,
        default: "Section",
    },
    slideName: {
        type: String,
        default: "Titre",
    },
    fgColor: {
        type: String,
        default: "#45989E", // var(--wescale-teal)
    },
    showBorder: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <header
        class="page-header"
        :class="{ 'with-border': showBorder }"
        :style="{ color: fgColor }"
    >
        <div class="section-number">{{ section }}</div>
        <div class="section-content">
            <div class="section-name">{{ sectionName }}</div>
            <div class="slide-name">
                <span class="dash">—</span>{{ slideName }}
            </div>
        </div>
    </header>
</template>

<style scoped>
.page-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: white;
}

.page-header.with-border {
    border-bottom: 2px solid #f3f4f6;
}

.section-number {
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
    margin-left: -2rem; /* Décale vers la gauche pour couper le 0 */
}

.section-name {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
}

.slide-name {
    font-size: 3rem;
    font-weight: 400;
    line-height: 1;
    color: var(--wescale-navy);
}

.dash {
    font-size: 3rem;
    color: var(--wescale-navy);
    font-weight: 400;
}
</style>
