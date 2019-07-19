let gallons = 0;
let gpm = 2.5;

let setGallons = function() {
  gallons = gallons + (gpm/60);
  console.log(gallons/60);
  document.getElementById('timer').innerHTML = gallons.toFixed(2);
}

let myTimer = function() {};

function startTimer () {
  document.getElementById('startScreen').style.display = "none";
  document.getElementById('timerScreen').style.display = "block";

  gpm = document.getElementById('gpm').value;

  myTimer = setInterval(setGallons, 1000);

}

function stopTimer () {
  clearInterval(myTimer);
  document.getElementById('stopButton').style.display = "none";
  document.getElementById('resetButton').style.display = "block";
}

function resetTimer () {
  document.getElementById('timerScreen').style.display = "none";
  document.getElementById('startScreen').style.display = "block";
  document.getElementById('stopButton').style.display = "block";
  document.getElementById('resetButton').style.display = "none";

  gallons = 0;
  gpm = 2.5;
}