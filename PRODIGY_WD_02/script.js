let startTime; // To store time when the stopwatch starts
let elapsedTime = 0; // To store elapsed time
let timerInterval; // Interval ID of the stopwatch

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const lapResetButton = document.getElementById('lapReset');
const lapsList = document.getElementById('laps');

function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor(time % 1000);
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function startStop() {
  if (!startTime) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startStopButton.textContent = 'Pause';
    lapResetButton.textContent = 'Lap';
  } else {
    clearInterval(timerInterval);
    startTime = null;
    startStopButton.textContent = 'Resume';
    lapResetButton.textContent = 'Reset';
  }
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function lapReset() {
  if (!startTime) {
    // Reset the stopwatch
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
    lapsList.innerHTML = '';
  } else {
    // Record lap time
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapsList.childElementCount + 1}: ${lapTime}`;
    lapsList.prepend(lapItem);
  }
}

startStopButton.addEventListener('click', startStop);
lapResetButton.addEventListener('click', lapReset);
