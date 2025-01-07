document.addEventListener("DOMContentLoaded", () => {
    const carousels = [
        {
            container: document.querySelector("#carouselAntiquite .carousel__images"),
            slides: document.querySelectorAll("#carouselAntiquite .film__trilogie-item"),
            prevButton: document.querySelector("#prevButtonAntiquite"),
            nextButton: document.querySelector("#nextButtonAntiquite")
        },
        {
            container: document.querySelector("#carouselContemporain .carousel__images"),
            slides: document.querySelectorAll("#carouselContemporain .film__trilogie-item"),
            prevButton: document.querySelector("#prevButtonContemporain"),
            nextButton: document.querySelector("#nextButtonContemporain")
        },
        {
            container: document.querySelector("#carouselFutur .carousel__images"),
            slides: document.querySelectorAll("#carouselFutur .film__trilogie-item"),
            prevButton: document.querySelector("#prevButtonFutur"),
            nextButton: document.querySelector("#nextButtonFutur")
        },
        {
            container: document.querySelector("#carouselFilm .carousel__images"),
            slides: document.querySelectorAll("#carouselFilm .film__trilogie-item"),
            prevButton: document.querySelector("#prevButtonFilm"),
            nextButton: document.querySelector("#nextButtonFilm")
        }
    ];

    carousels.forEach((carousel) => {
        if (!carousel.container || !carousel.prevButton || !carousel.nextButton) {
            console.warn("Carousel elements not found");
            return;
        }

        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carousel.container.style.transform = `translateX(${offset}%)`;
        }

        carousel.prevButton.addEventListener("click", () => {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : carousel.slides.length - 1;
            updateCarousel();
        });

        carousel.nextButton.addEventListener("click", () => {
            currentIndex = currentIndex < carousel.slides.length - 1 ? currentIndex + 1 : 0;
            updateCarousel();
        });
    });
});