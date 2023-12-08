const userInput = document.getElementById('guessField');
const submitBtn = document.getElementById('subt');
const privGuess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const randomNumber = parseInt(Math.random() * 100 + 1);
const submitValues = [];

submitBtn.addEventListener('click', submitHandlear);
function submitHandlear(e) {
  e.preventDefault();

  if (userInput.value != '') {
    if (randomNumber == userInput.value) {
      // winn
      alert('woo!');
    }
    submitValues.push(userInput.value);
  }
  const remmingGuesses = 10 - submitValues.length;
  lastResult.innerHTML = remmingGuesses;
  if (submitValues.length >= 10) {
    //
    return;
  }
  console.log(randomNumber);
  privGuess.innerHTML = `${submitValues.join(', ')}`;
  submitValues.length;
}
