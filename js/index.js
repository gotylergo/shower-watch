function startTimer () {
  document.getElementById('startScreen').style.display = "none";
  document.getElementById('timer').style.display = "block";
}

function stopTimer () {
  document.getElementById('stopButton').style.display = "none";
  document.getElementById('resetButton').style.display = "block";
}

function resetTimer () {
  document.getElementById('timer').style.display = "none";
  document.getElementById('startScreen').style.display = "block";
  document.getElementById('stopButton').style.display = "block";
  document.getElementById('resetButton').style.display = "none";
}