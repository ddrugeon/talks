<script setup>
import Header from "../components/Header.vue";

const props = defineProps({
    section: {
        type: String,
        default: "01",
    },
    sectionName: {
        type: String,
        default: "",
    },
    slideName: {
        type: String,
        default: "Profil",
    },
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: "",
    },
    experience: {
        type: String,
        default: "",
    },
    quote: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "/images/avatar.jpg",
    },
});
</script>

<template>
    <div class="profile-layout">
        <!-- Header personnalisé avec nom -->
        <Header
            :section="section"
            :sectionName="sectionName"
            :slideName="slideName"
            fg-color="#45989E"
        />

        <!-- Contenu principal en trois colonnes -->
        <div class="profile-content">
            <!-- Colonne gauche : Photo et infos -->
            <div class="profile-left">
                <div class="profile-image-container">
                    <img :src="image" :alt="name" class="profile-image" />
                </div>

                <div v-if="experience" class="profile-experience">
                    <span class="experience-label">XP :</span>
                    <span class="experience-value">{{ experience }}</span>
                </div>

                <blockquote v-if="quote" class="profile-quote">
                    "{{ quote }}"
                </blockquote>
            </div>

            <!-- Colonne centrale : Description -->
            <div class="profile-center">
                <div class="profile-description">
                    <slot />
                </div>
            </div>

            <!-- Colonne droite : QR Code ou autre -->
            <div class="profile-right">
                <slot name="aside" />
            </div>
        </div>

        <!-- Footer en teal -->
        <Footer fg-color="#45989E" logo-color="teal" />
    </div>
</template>

<style scoped>
.profile-layout {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 0 0 2rem 0;
}

/* Contenu principal - 3 colonnes */
.profile-content {
    flex: 1;
    display: grid;
    grid-template-columns: 280px 1fr 280px;
    gap: 2rem;
    overflow: hidden;
    padding: 0 4rem;
}

/* Colonne gauche - Photo */
.profile-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.profile-image-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--wescale-teal);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
}

.profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-experience {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--wescale-teal);
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
}

.experience-label {
    font-weight: 400;
}

.experience-value {
    font-weight: 600;
}

.profile-quote {
    font-style: italic;
    font-size: 1rem;
    color: var(--wescale-gray);
    line-height: 1.4;
    margin: 0;
    padding: 0 1rem;
}

/* Colonne centrale - Description */
.profile-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.profile-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.profile-description :deep(p) {
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--wescale-navy);
    margin: 0 0 1rem 0;
    font-weight: 500;
}

.profile-description :deep(ul) {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.profile-description :deep(li) {
    font-size: 1.5rem;
    line-height: 1.4;
    color: var(--wescale-navy);
    font-weight: 500;
    padding-left: 2rem;
    position: relative;
    white-space: normal;
}

.profile-description :deep(li::before) {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 10px;
    height: 10px;
    background: var(--wescale-teal);
    border-radius: 50%;
}

.profile-description :deep(strong) {
    color: var(--wescale-teal);
    font-weight: 600;
}

/* Colonne droite - QR Code */
.profile-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.profile-right :deep(img) {
    max-width: 100%;
    max-height: 280px;
    object-fit: contain;
}

/* Filtre pour coloriser le QR code en teal */
.profile-right :deep(img.teal) {
    filter: invert(52%) sepia(45%) saturate(400%) hue-rotate(130deg) brightness(95%) contrast(90%);
}
</style>
