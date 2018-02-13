// save images
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var red = document.getElementById('red');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');

// save buttons
var greenButton = document.querySelector('.greenbutton');
var blueButton = document.querySelector('.bluebutton');
var redButton = document.querySelector('.redbutton');
var pinkButton = document.querySelector('.pinkbutton');
var purpleButton = document.querySelector('.purplebutton');
var orangeButton = document.querySelector('.orangebutton');
var yellowButton = document.querySelector('.yellowbutton');

function displayGreen () {
  greenButton.style.border = "solid #dfe6e9";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "block";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayBlue () {
  greenButton.style.border = "none";
  blueButton.style.border = "solid #dfe6e9";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "block";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayRed () {
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "solid #dfe6e9";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "block";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayPink () {
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "solid #dfe6e9";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "block";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayPurple () {
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "solid #dfe6e9";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "block";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayOrange () {
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "solid #dfe6e9";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "block";
  yellow.style.display = "none";
}

function displayYellow () {
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "solid #dfe6e9";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "block";
}
