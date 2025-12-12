<script setup>
const props = defineProps({
    titre: String,
    subtitle: String,
    image: String,
    auteur: String,
    date: String,
});
</script>

<template>
    <div class="cover-layout">
        <div class="cover-background">
            <div class="cover-header">
                <img
                    src="/logos/wescale.svg"
                    alt="WeScale"
                    class="cover-logo"
                />
            </div>

            <div class="cover-content">
                <!-- Titre -->
                <h1 v-if="titre">{{ titre }}</h1>

                <!-- Sous-titre avec tiret - STRUCTURE CORRIGÉE -->
                <p v-if="subtitle" class="subtitle-with-dash">
                    <span class="dash">—</span>
                    <span class="subtitle-text">{{ subtitle }}</span>
                </p>

                <!-- Fallback sur le slot -->
                <slot v-if="!titre" />

                <!-- Auteur et date - PROPS CORRIGÉES -->
                <p v-if="auteur || date" class="author-date">
                    <span v-if="auteur">{{ auteur }}</span>
                    <span v-if="auteur && date"> — </span>
                    <span v-if="date">{{ date }}</span>
                </p>
            </div>
        </div>

        <div class="cover-circle">
            <div class="cover-image-container">
                <img
                    :src="image || '/images/banner.jpg'"
                    alt="Cover"
                    class="cover-image"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.cover-layout {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
}

.cover-background {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #2b8a8c 0%, #1b3a4b 100%);
    padding: 10rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cover-header {
    position: relative;
    z-index: 2;
}

.cover-logo {
    height: 3rem;
    width: auto;
    filter: brightness(0) invert(1);
}

.cover-content {
    position: relative;
    z-index: 2;
    color: white;
    max-width: 45rem; /* Encore plus étroit */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 4rem;
}

.cover-content h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

/* Sous-titre avec tiret */
.subtitle-with-dash {
    color: white;
    font-size: 2rem; /* Taille de base augmentée */
    font-weight: 300;
    opacity: 0.95;
    line-height: 1.4;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.subtitle-text {
    font-size: 2rem; /* Fonte plus grosse pour le sous-titre */
    font-weight: 300;
}

.dash {
    flex-shrink: 0;
    opacity: 0.8;
    font-size: 2rem; /* Tiret de la même taille */
}

/* Style pour auteur et date */
.author-date {
    color: white;
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.8;
    margin-top: 2rem;
}

.cover-circle {
    position: absolute;
    right: -5vw;
    top: 25%;
    transform: translateY(-50%);
    width: 35vw;
    height: 35vw;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    background: white;
    overflow: visible;
    box-shadow: -20px 0 50px rgba(0, 0, 0, 0.15);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cover-image-container {
    width: 75%;
    height: 75%;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
