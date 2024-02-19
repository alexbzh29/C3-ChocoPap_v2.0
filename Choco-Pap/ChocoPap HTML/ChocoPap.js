document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;

    function showImage(index) {
        const itemWidth = document.querySelector(".carousel img").clientWidth;
        carousel.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3;
        showImage(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 3) % 3;
        showImage(currentIndex);
    }

    setInterval(nextSlide, 5000); // Change d'image toutes les 3 secondes (3000 ms)
});