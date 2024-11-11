// Adding a click animation for button
document.querySelector("button").addEventListener("click", function(event) {
    let button = event.currentTarget;

    // Simulate button being pressed and then released
    button.style.transform = 'translateZ(5px) scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = 'translateZ(20px) scale(1.05)';
    }, 150);
    
    // After submitting form (placeholder for form submission)
    setTimeout(() => {
        alert("Form Submitted Successfully!"); // This is just for demo purposes
    }, 500);
});
