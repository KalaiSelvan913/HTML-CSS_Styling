document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            showError('All fields are required.');
        } else if (password.length < 6) {
            showError('Password must be at least 6 characters.');
        } else {
            showSuccess('Login successful.');
            // Perform actual login here (e.g., send data to server)
        }
    });

    const showError = (message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        loginForm.insertBefore(errorDiv, loginForm.firstChild);
        setTimeout(() => errorDiv.remove(), 3000);
    };

    const showSuccess = (message) => {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        loginForm.insertBefore(successDiv, loginForm.firstChild);
        setTimeout(() => successDiv.remove(), 3000);
    };
});
