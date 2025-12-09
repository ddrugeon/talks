// Mise à jour du numéro de slide
function updateSlideNumber() {
    const slides = document.querySelectorAll('.sd-slide');
    const currentSlide = document.querySelector('.sd-slide.sd-current');
    const slideNumberElement = document.querySelector('.slide-number');

    if (currentSlide && slideNumberElement) {
        const currentIndex = Array.from(slides).indexOf(currentSlide) + 1;
        const totalSlides = slides.length;
        slideNumberElement.textContent = `${currentIndex} / ${totalSlides}`;
    }
}

// Observer les changements de slide
const observer = new MutationObserver(updateSlideNumber);

document.addEventListener('DOMContentLoaded', () => {
    updateSlideNumber();

    // Observer les changements de classe sur les slides
    const slidesContainer = document.querySelector('.sd-slides') || document.body;
    observer.observe(slidesContainer, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class']
    });
});
