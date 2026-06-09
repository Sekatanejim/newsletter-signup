const signupCard = document.getElementById('signupCard');
const successCard = document.getElementById('successCard');
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('emailInput');
const errorMsg = document.getElementById('errorMsg');
const submittedEmailSpan = document.getElementById('submittedEmail');
const dismissBtn = document.getElementById('dismissBtn');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError() {
    errorMsg.style.display = 'block';
    emailInput.classList.add('error-input');
}

function hideError() {
    errorMsg.style.display = 'none';
    emailInput.classList.remove('error-input');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (email === '') {
        showError();
    } else if (!emailPattern.test(email)) {
        showError();
    } else {
        hideError();
        submittedEmailSpan.textContent = email;
        signupCard.style.display = 'none';
        successCard.style.display = 'block';
    }
});

dismissBtn.addEventListener('click', function() {
    successCard.style.display = 'none';
    signupCard.style.display = 'block';
    emailInput.value = '';
    hideError();
});

emailInput.addEventListener('input', function() {
    const email = emailInput.value.trim();
    if (email !== '' && emailPattern.test(email)) {
        hideError();
    }
});