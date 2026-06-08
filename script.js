// Get DOM elements
const signupCard = document.getElementById('signupCard');
const successCard = document.getElementById('successCard');
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('emailInput');
const errorMsg = document.getElementById('errorMsg');
const submittedEmailSpan = document.getElementById('submittedEmail');
const dismissBtn = document.getElementById('dismissBtn');

// Email validation regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to show error
function showError() {
    errorMsg.style.display = 'block';
    emailInput.classList.add('error-input');
}

// Function to hide error
function hideError() {
    errorMsg.style.display = 'none';
    emailInput.classList.remove('error-input');
}

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (email === '') {
        showError();
    } else if (!emailPattern.test(email)) {
        showError();
    } else {
        hideError();
        // Update the success message with the submitted email
        submittedEmailSpan.textContent = email;
        // Show success card, hide signup card
        signupCard.style.display = 'none';
        successCard.style.display = 'block';
    }
});

// Dismiss button handler - returns to signup form
dismissBtn.addEventListener('click', function() {
    successCard.style.display = 'none';
    signupCard.style.display = 'block';
    // Clear the email input and remove error styling
    emailInput.value = '';
    hideError();
});

// Remove error when user starts typing valid input
emailInput.addEventListener('input', function() {
    const email = emailInput.value.trim();
    if (email !== '' && emailPattern.test(email)) {
        hideError();
    }
});