/* Input for Number Guesser, Minimum, and Maximum */
var guessNumber = document.getElementById("#guess-number");
var minInput = document.getElementById('minimum-number');
var maxInput = document.getElementById('maximum-number');
// var minNumber = 1
// var maxNumber = 100

/* Buttons for Number Guesser */
var setButton = document.querySelector('.set');
var guessButton = document.querySelector('.guess');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');

/* Changes in Text */
var lastGuess = document.querySelector('.last-guess');
var number = document.querySelector('.number');
var highLow = document.querySelector('.high-low');

/* Disable buttons in beginning */
guessButton.disabled = true;
clearButton.disabled = true;

  /* Random Number Generator */
var random = function(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  return parseInt(random);

}

var randomNumber = random(1, 100);

/* Buttons*/
setButton.addEventListener('click', function(event) {
  event.preventDefault();
  randomNumber = random(parseInt(minInput.value), parseInt(maxInput.value));
  console.log(randomNumber);
})

guessButton.addEventListener('click', function () {
  lastGuess.innerText = "Your last guess was"
  var lastNumber = parseInt(guessNumber.value);
  number.innerText = lastNumber;
  return boom();
});

clearButton.addEventListener('click', function() {
  guessNumber.value=""
});

resetButton.addEventListener('click', function(){
  randomNumber = random();
  console.log(randomNumber);
  guessNumber.value= "";
  lastGuess.innerText = "";
  number.innerText = "?";
  highLow.innerText = "";
});

/* Resets input after clicking Guess button*/
guessButton.addEventListener('click', function() {
  guessNumber.value = "";
  guessButton.disabled = true;
  clearButton.disabled = true;
  guessButton.style.backgroundColor = '#D0D2D3';
  clearButton.style.backgroundColor = '#D0D2D3';
})

/* Too high, too low, or just right */
function boom () {
  if ((parseInt(guessNumber.value) < minInput) || (parseInt(guessNumber.value) < maxInput)) {
    highLow.innerText = "Please choose a number between " + minInput + " and " + maxInput;
  } else if (parseInt(guessNumber.value) < randomNumber) {
    highLow.innerText = 'That is too low!';
} else if (parseInt(guessNumber.value) > randomNumber) {
    highLow.innerText = 'That is too high!';
} else if (parseInt(guessNumber.value) != randomNumber) {
    highLow.innerText = "Try again!";
} else {
    highLow.innerText = 'Boom!';
}
}

/* Colors of buttons when active or non-active */

guessNumber.addEventListener('input', function(){
  guessButton.disabled = false;
  clearButton.disabled = false;
  guessButton.style.backgroundColor = '#929497';
  clearButton.style.backgroundColor = '#929497';
  if (guessNumber.value === "") {
    guessButton.disabled = true;
    clearButton.disabled = true;
    guessButton.style.backgroundColor = '#D0D2D3';
    clearButton.style.backgroundColor = '#D0D2D3';
  }
});











/*
function range (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
} */