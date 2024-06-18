document.getElementById('greetButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');

    if (name) {
        // Store the name in localStorage to use it on the home page
        localStorage.setItem('username', name);
        // Redirect to home.html
        window.location.href = 'home.html';
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
});
