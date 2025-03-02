// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Booking Form Submission
    const bookingForm = document.getElementById('bookingForm');
    const bookingSuccess = document.getElementById('bookingSuccess');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const bookingData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            pickupDateTime: document.getElementById('pickupDateTime').value,
            pickupLocation: document.getElementById('pickupLocation').value,
            dropoffLocation: document.getElementById('dropoffLocation').value,
            vehicleType: document.getElementById('vehicleType').value
        };

        // TODO: Send bookingData to the server or process it as needed

        // Display success message
        bookingSuccess.style.display = 'block';

        // Reset form
        bookingForm.reset();
    });

    // Sign-Up Form Submission
    const signupForm = document.getElementById('signupForm');
    const signupSuccess = document.getElementById('signupSuccess');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate password and confirm password
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        const signupData = {
            name: document.getElementById('signupName').value,
            email: document.getElementById('signupEmail').value,
            password: password
        };

        // TODO: Send signupData to the server or process it as needed

        // Display success message
        signupSuccess.style.display = 'block';

        // Reset form
        signupForm.reset();
    });
});