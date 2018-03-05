var playersScore = 0;
var computerScore = 0;

userInput = userChoice => {
  var computerChoice = Math.random();
  computerChoice <= 0.34
    ? (computerChoice = 'rock')
    : computerChoice >= 0.66
      ? (computerChoice = 'paper')
      : (computerChoice = 'scissors');
  var gamePlay = document.getElementById('pick');
  gamePlay.innerHTML =
    'you chose : ' + userChoice + ' they chose : ' + computerChoice;
  var whoWon = document.getElementById('result');
  whoWon.innerHTML = compare(userChoice, computerChoice);
  var scoreCount = document.getElementById('score');
  scoreCount.innerHTML =
    'players score : ' + playersScore + ' computers score : ' + computerScore;
};

playAgain = () => {
  var playersScore = 0;
  var computerScore = 0;
  var scoreCount = document.getElementById('score');
  scoreCount.innerHTML = '';
  var pick = document.getElementById('pick');
  pick.innerHTML = '';
  var whoWon = document.getElementById('result');
  whoWon.innerHTML = '';
};

compare = (userChoice, computerChoice) => {
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
};
