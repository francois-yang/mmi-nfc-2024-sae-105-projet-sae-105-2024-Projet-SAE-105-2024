document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carousel__images");
    const slides = document.querySelectorAll(".film__trilogie-item");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    var currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        updateCarousel();
    });
});

function isLandscapeMode() {
    return window.matchMedia("(orientation: landscape)").matches && window.innerWidth <= 844;
}

function manageCarouselMode() {
    const carouselContainer = document.querySelector(".carousel__container");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    if (isLandscapeMode()) {
        carouselContainer.style.overflow = "hidden";
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    }
    else {
        carouselContainer.style.overflow = "auto";
        prevButton.style.display = "block";
        nextButton.style.display = "block";
    }
}

window.addEventListener("load", manageCarouselMode);
window.addEventListener("resize", manageCarouselMode);