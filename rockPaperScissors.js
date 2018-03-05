var playersScore = 0;
var computerScore = 0;
//This function is linked to the button in HTML and gets the value
function userInput(userChoice) {
  //This is getting the computers move
  var computerChoice = Math.random();
  if (computerChoice <= 0.34) {
    computerChoice = 'rock';
  } else if (computerChoice >= 0.66) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  //This section gets the text into the div with #pick
  var gamePlay = document.getElementById('pick');
  gamePlay.innerHTML =
    'you chose : ' + userChoice + ' they chose : ' + computerChoice;
  //This section adds text to the div with #result
  var whoWon = document.getElementById('result');
  //This is calling the compare function with the arguments that returns the results
  whoWon.innerHTML = compare(userChoice, computerChoice);
  //This is to see the scores on the screen
  var scoreCount = document.getElementById('score');
  scoreCount.innerHTML =
    'players score : ' + playersScore + ' computers score : ' + computerScore;
}
//This function will reset the div values due to the empty string ""
function playAgain() {
  playersScore = 0;
  computerScore = 0;
  var scoreCount = document.getElementById('score');
  scoreCount.innerHTML = '';
  var test = document.getElementById('pick');
  test.innerHTML = '';
  var whoWon = document.getElementById('result');
  whoWon.innerHTML = '';
}
//This function will return the result and takes in the input of userChoice/computerChoice
function compare(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'NO-ONE WINS';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      playersScore++;
      return 'Great job you beat up some scissors';
    } else {
      computerScore++;
      return 'Paper kicked your ass the shame';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      playersScore++;
      return 'Wrapped up nicely there you win';
    } else {
      computerScore++;
      return 'Dont be too cut up over the loose';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      return 'SMASHING GAME OVER';
    } else {
      playersScore++;
      return 'Cut above the rest you are';
    }
  }
}
