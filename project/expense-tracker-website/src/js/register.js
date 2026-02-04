document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.register-form');
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (!fullname || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Send registration data to backend
        const res = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname, email, password })
        });
        const data = await res.json();
        if (data.success) {
            alert('Registration successful!');
            window.location.href = 'login.html';
        } else {
            alert(data.message || 'Registration failed.');
        }
    });
});