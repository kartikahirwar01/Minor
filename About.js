// script.js
window.onload = function() {
    // Truck animation
    const truck = document.getElementById('truck');
    truck.style.transition = "left 5s linear";
    truck.style.left = "100%"; // Move the truck across the screen

    // Image animations
    const images = document.querySelectorAll('.image-gallery img');
    
    // Delay and fade in each image sequentially
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1"; // Fade in the image
            img.style.transform = "scale(1.05)"; // Slight zoom effect
        }, index * 1000); // Delay based on index (1 second apart)
    });

    // Add animation for each content div when the page loads
    const contentDivs = document.querySelectorAll('.content-div');
    contentDivs.forEach((div, index) => {
        setTimeout(() => {
            div.style.opacity = "1"; // Fade in content div
            div.style.transform = "rotateY(0deg)"; // Reset the 3D rotation effect
        }, index * 1000); // Delay based on index
    });
};
