let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carouselImages = document.querySelector('.carousel-images');

// Function to change the image when the next button is clicked
function changeImage(direction) {
    // Update the current index based on the direction
    currentIndex += direction;

    // Loop back to the first image if we reach the last image
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Apply smooth transition effect for sliding
    const offset = -currentIndex * 100;  // Move by 100% for one image at a time
    carouselImages.style.transition = 'transform 0.5s ease'; // Smooth transition
    carouselImages.style.transform = `translateX(${offset}%)`;
}
