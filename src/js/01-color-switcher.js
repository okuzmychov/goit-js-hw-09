const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;
let currentColor = '';

const startColorChange = () => {
  startButton.disabled = true;
  intervalId = setInterval(() => {
    currentColor = getRandomHexColor();
    document.body.style.backgroundColor = currentColor;
  }, 1000);
};

const stopColorChange = () => {
  startButton.disabled = false;
  clearInterval(intervalId);
};

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}