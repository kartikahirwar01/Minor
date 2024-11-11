// Open the profile set modal
document.getElementById('edit-info').addEventListener('click', function () {
    document.getElementById('profile-set').classList.add('show');
});

// Close the profile set modal when clicking outside the content
document.getElementById('profile-set').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('show');
    }
});

// Profile Set form submit
document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const companyName = document.getElementById('new-company-name').value;
    const description = document.getElementById('new-description').value;
    const newPhoto = document.getElementById('new-photo').files[0];

    // Update company name if present
    if (companyName) {
        document.getElementById('company-name').textContent = companyName;
    }

    // Update description if present
    if (description) {
        document.getElementById('description').textContent = description;
    }

    // Update profile photo if a new one is selected
    if (newPhoto) {
        const reader = new FileReader();
        reader.onload = function (event) {
            document.getElementById('profile-photo').src = event.target.result;
        };
        reader.readAsDataURL(newPhoto);
    }

    // Close the modal after form submission
    document.getElementById('profile-set').classList.remove('show');
});

// Function to trigger 3D animation on scroll
window.addEventListener('scroll', function () {
    const servicesSection = document.querySelector('.services');
    const contactSection = document.querySelector('.contact');

    const servicesTop = servicesSection.getBoundingClientRect().top;
    const contactTop = contactSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // When services section comes into view
    if (servicesTop < windowHeight - 100) {
        servicesSection.style.transform = 'rotateY(15deg) rotateX(10deg)';
        servicesSection.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
    } else {
        servicesSection.style.transform = 'rotateY(0deg) rotateX(0deg)';
        servicesSection.style.boxShadow = 'none';
    }

    // When contact section comes into view
    if (contactTop < windowHeight - 100) {
        contactSection.style.transform = 'rotateY(15deg) rotateX(10deg)';
        contactSection.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
    } else {
        contactSection.style.transform = 'rotateY(0deg) rotateX(0deg)';
        contactSection.style.boxShadow = 'none';
    }
});
