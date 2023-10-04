
function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros if the values are less than 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var clockDiv = document.getElementById("clock");
  clockDiv.textContent = hours + ":" + minutes + ":" + seconds;
}

// Call updateClock function every second
setInterval(updateClock, 1000);




var startTime; // To store the start time
var elapsedTime = 0; // To store the elapsed time
var timerInterval; // To store the interval ID

function startStopwatch() {
  startTime = Date.now() - elapsedTime; // Start time is the current time minus elapsed time
  timerInterval = setInterval(updateStopwatch, 10); // Update stopwatch every 10 milliseconds
}

function stopStopwatch() {
  clearInterval(timerInterval); // Stop the interval
}

function resetStopwatch() {
  clearInterval(timerInterval); // Stop the interval
  elapsedTime = 0; // Reset the elapsed time
  updateStopwatch(); // Update the stopwatch display
}

function updateStopwatch() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime; // Calculate the elapsed time

  var milliseconds = Math.floor(elapsedTime % 1000 / 10);
  var seconds = Math.floor(elapsedTime / 1000 % 60);
  var minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60 % 24);

  // Add leading zeros if the values are less than 10
  milliseconds = (milliseconds < 10 ? "0" : "") + milliseconds;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  hours = (hours < 10 ? "0" : "") + hours;

  var stopwatchDiv = document.getElementById("stopwatch");
  stopwatchDiv.textContent = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}




























































