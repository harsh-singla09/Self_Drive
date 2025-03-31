const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Function to update slide position
function updateSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Show previous slide
prevBtn.addEventListener('click', () => {
    updateSlide(currentIndex - 1);
});

// Show next slide
nextBtn.addEventListener('click', () => {
    updateSlide(currentIndex + 1);
});

// Auto slide every 5 seconds (optional)
setInterval(() => {
    updateSlide(currentIndex + 1);
}, 5000);
