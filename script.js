document.getElementById('greetButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
    var homeFrame = document.getElementById('homeFrame')

    if (name) {
        greetingMessage.textContent = 'Hello, ' + name + '!';
        homeFrame.style.display = 'block';
    } else {
        greetingMessage.textContent = 'Please enter your name.';
        homeFrame.style.display = 'none';
    }
});
