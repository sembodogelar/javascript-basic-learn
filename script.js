document.getElementById('greetButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');

    if (name) {
        greetingMessage.textContent = 'Hello, ' + name + '!';
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
});
