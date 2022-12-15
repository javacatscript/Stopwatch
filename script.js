//initializing the stopwatch
let seconds = 0;
let milliseconds = 0;
let myInterval;

//fetching the elements
let getSec = document.getElementById("seconds");
let getMillisec = document.getElementById("milliseconds");
let startButton = document.getElementById("btn-start");
let stopButton = document.getElementById("btn-stop");
let resetButton = document.getElementById("btn-reset");

function startTimer() {
  milliseconds++;

  if (milliseconds <= 9) {
    getMillisec.innerHTML = "0" + milliseconds; //appending '0' if value is <= 9
  }
  if (milliseconds > 9) {
    getMillisec.innerHTML = milliseconds;
  }
  if (milliseconds > 99) {
    seconds++;
    getSec.innerHTML = "0" + seconds;
    milliseconds = 0;
    getMillisec.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    getSec.innerHTML = seconds;
  }
}

//adding a listener to Start button and starting the setInterval every 10ms
startButton.addEventListener("click", () => {
  myInterval = setInterval(startTimer, 10);
});

//adding a click event to Stop button
stopButton.addEventListener("click", () => {
  clearInterval(myInterval);
});

//adding a click event to Rest button
resetButton.addEventListener("click", () => {
  clearInterval(myInterval);
  getSec.innerHTML = "00";
  getMillisec.innerHTML = "00";
});
