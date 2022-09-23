const btn = document.querySelector("button");
const clockHolder = document.querySelector("span");

btn.addEventListener("click", stopOrResumeClock);

var myIntervalId;

startClock();

function startClock() {
  myIntervalId = setInterval(printCurrentTime);
}

function printCurrentTime() {
  const time = new Date().toLocaleTimeString();
  clockHolder.innerText = time;
}

function stopOrResumeClock() {
  if (myIntervalId) {
    clearInterval(myIntervalId);
    myIntervalId = undefined;
  } else startClock();
}
