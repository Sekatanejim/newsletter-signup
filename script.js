const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');
const signupContainer = document.getElementById('signupContainer');
const successContainer = document.getElementById('successContainer');
const userEmailSpan = document.getElementById('userEmail');
const dismissBtn = document.getElementById('dismissBtn');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        errorMsg.textContent = 'Valid email required';
        emailInput.classList.add('error');
    } else {
        errorMsg.textContent = '';
        emailInput.classList.remove('error');
        userEmailSpan.textContent = email;
        signupContainer.style.display = 'none';
        successContainer.style.display = 'flex';
    }
});

dismissBtn.addEventListener('click', function() {
    successContainer.style.display = 'none';
    signupContainer.style.display = 'flex';
    emailInput.value = '';
});
