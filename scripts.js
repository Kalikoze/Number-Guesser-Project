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
setButton.disabled = true;

  /* Random Number Generator */
var random = function(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  return parseInt(random);
}

var min = 1;
var max = 100;

var randomNumber = random(1, 100);

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

/*Function for listening to Min-Max */
function minMaxListener() {
  setButton.disabled = false;
  setButton.style.backgroundColor = '#929497';
    if ((minInput.value === "") || (maxInput.value === "")) {
      setButton.disabled = true;
      setButton.style.backgroundColor = '#D0D2D3';
    }
}

minInput.addEventListener('input', minMaxListener);

maxInput.addEventListener('input', minMaxListener);


/* Buttons*/


setButton.addEventListener('click', function(event) {
  event.preventDefault();
  randomNumber = random(parseInt(minInput.value), parseInt(maxInput.value));
  min = minInput.value;
  max = maxInput.value;
  minInput.value = "";
  maxInput.value = "";
  setButton.disabled = true;
  setButton.style.backgroundColor = '#D0D2D3';
});

guessButton.addEventListener('click', function () {
  lastGuess.innerText = "Your last guess was"
  var lastNumber = parseInt(guessNumber.value);
  number.innerText = lastNumber;
  return boom();
});

clearButton.addEventListener('click', function() {
  guessNumber.value=""
  guessButton.disabled = true;
  clearButton.disabled = true;
  guessButton.style.backgroundColor = '#D0D2D3';
  clearButton.style.backgroundColor = '#D0D2D3';
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
  if ((parseInt(guessNumber.value) < min) || (parseInt(guessNumber.value) > max)) {
    highLow.innerText = "Please choose a number between " + min + " and " + max;
    console.log('error1')
  } else if (parseInt(guessNumber.value) < randomNumber) {
      highLow.innerText = 'That is too low!';
}   else if (parseInt(guessNumber.value) > randomNumber) {
      highLow.innerText = 'That is too high!';
}   else if (parseInt(guessNumber.value) != randomNumber) {
      highLow.innerText = "Try again!";
}   else {
      highLow.innerText = 'Boom!';
}
}













/*
function range (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
} */
