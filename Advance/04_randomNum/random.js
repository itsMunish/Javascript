const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if(isNaN(guess)){
    alert("please enter a valid number")
  } else if (guess < 1){
    alert('please enter a number more than 1')
    } else if (guess >100){
    alert('please enter a number less than 100')
  }else {
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      dispalyMessage(`Game Over. Random Number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess) {
  if(guess === randomNumber){
    dispalyMessage('You Guessed it right')
    endGame()
  }else if(guess < randomNumber){
    dispalyMessage('Number is too low')
  }else if(guess > randomNumber){
    dispalyMessage('Number is too High')
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  Remaining.innerHTML= `${11 - numGuess}`
}
function dispalyMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
userInput.value = ''
userInput.setAttribute('disabled', '')
p.classList.add(`button`)  
p.innerHTML= `<h2 id="newGame">Start New Game</h2>`;
startOver.appendChild(p)
playGame = false
newGame();
}
function newGame() {
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess =1
    guessSlot.innerHTML =''
    Remaining.innerHTML= `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;

  })

}
