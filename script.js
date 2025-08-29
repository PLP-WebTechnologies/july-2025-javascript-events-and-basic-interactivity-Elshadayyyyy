// Part 1: Event Handling
const darkModeBtn = document.getElementById('darkModeToggle');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Part 2: Interactive Counter
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

const form = document.getElementById('sampleForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    if(name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        isValid = false;
    }

    const password = document.getElementById('password').value.trim();
    if(password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }


    if(isValid) {
        document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
        form.reset();
    }
});
