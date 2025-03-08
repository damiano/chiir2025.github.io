document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.getElementsByClassName("Containers");
    let dots = document.getElementsByClassName("dots");
    let slideInterval; // Declare global interval variable

    function showSlides() {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Reset slide index if it exceeds number of slides
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }

        // Show current slide
        slides[slideIndex - 1].style.display = "block";

        // Reset dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("enable");
        }

        // Activate current dot
        dots[slideIndex - 1].classList.add("enable");
    }

    function startSlideshow() {
        // Clear any existing interval before setting a new one
        clearInterval(slideInterval);
        slideInterval = setInterval(showSlides, 4000); // Rotate every 4 seconds
    }

    function currentSlide(n) {
        slideIndex = n - 1; // Adjust for zero-based index
        showSlides();
        startSlideshow(); // Restart auto-rotation after manual interaction
    }

    // Attach click event listeners for manual control
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function () {
            currentSlide(i + 1);
        });
    }

    // Start slideshow on page load
    showSlides();
    startSlideshow();
});
