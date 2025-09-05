document.addEventListener('DOMContentLoaded', function() {
    const greetElement = document.getElementById('greet');
    const welcomeElement = document.getElementById('welcome');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const submitButton = document.getElementById('submit');

    greetElement.textContent = 'Hello!';

    submitButton.addEventListener('click', function() {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        welcomeElement.textContent = `Welcome, ${firstName} ${lastName}!`;
    });

    document.getElementById('welcome-button').addEventListener('click', function() {
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const welcomeMessage = document.getElementById('welcome-message');
        if (firstName && lastName) {
            welcomeMessage.textContent = `Welcome, ${firstName} ${lastName}!`;
        } else {
            welcomeMessage.textContent = '';
        }
    });
});