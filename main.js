const timerDis = document.querySelector(".section-time");
const timeLap = document.querySelector(".show-laps");
const start = document.querySelector(".start"),
  stop = document.querySelector(".stop"),
  reset = document.querySelector(".reset"),
    laps = document.querySelector(".laps"),
        clear = document.querySelector(".clear-laps");
let count = 0;
let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0],
    interval = null;

let timeN;

start.addEventListener("click", () => {
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval( displayTimer, 10);
});


stop.addEventListener("click", () => {
    clearInterval(interval);
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerDis.innerHTML = "00:00:00:000";
    timeN = "";
});

function displayTimer() {
    miliseconds += 10;
    if (miliseconds == 1000) {
        miliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

    timeN = `${h}:${m}:${s}:${ms}`;
    timerDis.innerHTML = timeN;
}

laps.addEventListener("click", () => {
    if ((interval !== null) && (timeN !== "")) {
        count++;
    
        let output = `<div class="lap">
                <span class="count">${count})</span>
                <div class="section-time">
                   ${timeN}
                </div>
            </div>`;
        timeLap.innerHTML += (output);
    }
});


clear.addEventListener("click", () => {
    count = 0;
    timeLap.innerHTML = "";
});