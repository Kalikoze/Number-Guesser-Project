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

  /* Random Number Generator  with variables*/
var random = function(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  return parseInt(random);
}

var min = 1;
var max = 100;

var randomNumber = random(min, max);

/* Colors of buttons when active or non-active */

guessNumber.addEventListener('input', function(){
  guessButton.disabled = false;
  clearButton.disabled = false;
  if (guessNumber.value === "") {
    guessButton.disabled = true;
    clearButton.disabled = true;
  }
});

/*Function for listening to Min-Max */
function minMaxListener() {
  setButton.disabled = false;
    if ((minInput.value === "") || (maxInput.value === "")) {
      setButton.disabled = true;
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
  lastGuess.innerText = "Please choose a number between " + min + " and " + max;
  highLow.innerText = "";
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
});

resetButton.addEventListener('click', function(){
  min = 1;
  max = 100;
  randomNumber = random(min, max);
  guessNumber.value= "";
  lastGuess.innerText = "Guess a number between 1 and 100";
  number.innerText = "?";
  highLow.innerText = "";
});

/* Resets input after clicking Guess button*/
guessButton.addEventListener('click', function() {
  guessNumber.value = "";
  guessButton.disabled = true;
  clearButton.disabled = true;
})

/* Too high, too low, or just right */
function boom () {
  if ((parseInt(guessNumber.value) < min) || (parseInt(guessNumber.value) > max)) {
    highLow.innerText = "Please choose a number between " + min + " and " + max;
  } else if (parseInt(guessNumber.value) < randomNumber) {
      highLow.innerText = 'That is too low!';
}   else if (parseInt(guessNumber.value) > randomNumber) {
      highLow.innerText = 'That is too high!';
}   else if (parseInt(guessNumber.value) != randomNumber) {
      number.innerText = "Invalid";
      highLow.innerText = "Please use numbers only";
}   else {
      min = parseInt(min) - 10;
      max = parseInt(max) + 10;
      lastGuess.innerText = "The new range is " + min + " to " + max;
      number.innerText = "Boom!";
      highLow.innerText = "";
      randomNumber = random(min, max);
      return randomNumber;

}
}
