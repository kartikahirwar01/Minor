// JavaScript to handle form validation and submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const license = document.getElementById('license').value;

    // Basic validation (could be expanded further)
    if (!firstName || !lastName || !dob || !email || !phone || !license) {
        document.getElementById('form-message').textContent = 'Please fill out all fields!';
        document.getElementById('form-message').style.color = 'red';
        return;
    }

    // Simulate successful form submission
    document.getElementById('form-message').textContent = 'Signup successful! Welcome, ' + firstName + '!';
    document.getElementById('form-message').style.color = 'green';

    // Optionally, here you can send the form data to a server using an AJAX request or fetch
    // For now, we just display a success message.
});
