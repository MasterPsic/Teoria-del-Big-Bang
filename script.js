// JavaScript para el carrusel de fotos
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });

    currentSlide = slideIndex;
}

showSlide(currentSlide);

// Cambiar la diapositiva cada 5 segundos
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
