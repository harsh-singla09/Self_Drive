// CODE FOR IMAGE SLIDE IN INDEX

// Set initial slide index
let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

// Show current slide
function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0; // Loop back to first slide
    } else if (index < 0) {
        slideIndex = totalSlides - 1; // Loop to last slide
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Show next slide
function nextSlide() {
    showSlide(slideIndex + 1);
}

// Show previous slide
function prevSlide() {
    showSlide(slideIndex - 1);
}

// Show the first slide when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});



