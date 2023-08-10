const emailForm = document.querySelector('form-email');
const emailInput = document.querySelector('js-email-input');

emailForm.addEventListener('submit', function(event) {
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function isValidEmail(email) {
    // A simple regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}