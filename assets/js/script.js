// script.js

const modeSwitch = document.getElementById('modeSwitch');
const stylesheet = document.getElementById('stylesheet');

modeSwitch.addEventListener('change', () => {
    if (modeSwitch.checked) {
        // Dark mode
        stylesheet.href = 'assets/css/resume-style-dark.css';
    } else {
        // Light mode
        stylesheet.href = 'assets/css/resume-style-light.css';
    }
});