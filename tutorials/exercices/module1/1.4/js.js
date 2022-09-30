/*
const firstDiv = document.querySelector('.red');
const secondDiv = document.querySelector('.orange');
const thirdDiv = document.querySelector('.green');

var myIntervalId ;
//Start a timer 
startClock();

function startClock() {
  myIntervalId = setInterval(firstFunction, 2000);
 
}


//Display the Red 
function firstFunction() {
   firstDiv.style.backgroundColor = "red";
}

//Display the Yellow
function secondFunction() {
    secondDiv.style.backgroundColor = "orange";
 }

 //Display the Green
 function thirdFunction() {
    thirdDiv.style.backgroundColor = "green";
 }

//Display the white --> Use after the 2seconds to remove the background color
 function lastFunction() {
     firstDiv.style.backgroundColor = "white";
 }
*/

const lightSequence = ['red', 'orange', 'green', 'orange'];
const delaysBetweenLightChanges = 1000;
let currentLightIndex = 0;
const redLightWrapper = document.querySelector('#red-light-wrapper');

cycleThroughLights();

function cycleThroughLights() {
  const currentLightColor = lightSequence[currentLightIndex];
  redLightWrapper.className = `${currentLightColor}-light`;
  setTimeout(() => {
    currentLightIndex = (currentLightIndex + 1) % lightSequence.length;
    cycleThroughLights();
  }, delaysBetweenLightChanges);
}





