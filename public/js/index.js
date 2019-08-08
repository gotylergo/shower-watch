let gallons = 0;
let gpm = 2.5;
let time = 0;
let minutes = 0;
let seconds = 0;

let setGallons = function () {
  gallons = gallons + (gpm / 60);
  document.getElementById('gallonTimer').innerHTML = gallons.toFixed(2);
}
let setTimer = function () {
  time = time + 1;
  minutes = Math.floor(time / 60);
  seconds = time % 60;
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  } 
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}

let myGallonTimer = function () { };
let myTimer = function () { };

function startTimer() {
  document.getElementById('startScreen').style.display = "none";
  document.getElementById('timerScreen').style.display = "block";

  gpm = document.getElementById('gpm').value;

  myGallonTimer = setInterval(setGallons, 1000);
  myTimer = setInterval(setTimer, 1000)

}

function stopTimer() {
  clearInterval(myGallonTimer);
  clearInterval(myTimer);
  document.getElementById('stopButton').style.display = "none";
  document.getElementById('resetButton').style.display = "block";
  document.getElementById('saveButton').style.display = "block";
}

function save() {
  alert(`Used ${gallons.toFixed(2)} gallons in ${time} seconds`);
}

function resetTimer() {
  document.getElementById('timerScreen').style.display = "none";
  document.getElementById('startScreen').style.display = "block";
  document.getElementById('stopButton').style.display = "block";
  document.getElementById('resetButton').style.display = "none";
  document.getElementById('saveButton').style.display = "none";

  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ getTimes }"})
    ,
  })
  .then(res => res.json())
  .then(data => console.log('Data returned:', data));

  gallons = 0;
  gpm = 2.5;
}