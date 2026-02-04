document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.styled-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const found = users.find(u => u.email === email && u.password === password);
        if (found) {
            alert('Login successful! Welcome back.');
            // window.location.href = 'dashboard.html'; // Redirect if needed
        } else {
            alert('Invalid email or password.');
        }
    });

    // Fix the "Sign up" link to go to register page
    const signupLink = document.querySelector('a[href="#"]');
    if (signupLink) {
        signupLink.setAttribute('href', 'register.html');
    }
});