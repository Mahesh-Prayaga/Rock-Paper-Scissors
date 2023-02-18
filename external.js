const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const Scissors = document.querySelector("#scissors-button");
let pChoice = document.querySelector(".p-choice");
let cChoice = document.querySelector(".c-choice");
let getValue;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let numberRound = document.querySelector(".round-no");
let res = document.querySelector(".result");
const div = document.querySelector(".buttons");
let cWon = document.querySelector(".computer-won");
let pWon = document.querySelector(".player-won");
let pScore = document.querySelector(".player-score");
let cScore = document.querySelector(".computer-score");
let round = 0;

function rockSetter() {
  getValue = 1;
  round += 1;
  playRound();
}
function paperSetter() {
  getValue = 2;
  playRound();
}
function scissorsSetter() {
  getValue = 3;
  playRound();
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  return randomNum;
}

function playRound() {
  const computerChoice = getComputerChoice();

  if (getValue == 1) {
    playerChoice = "Rock";
  } else if (getValue == 2) {
    playerChoice = "Paper";
  } else {
    playerChoice = "Scissors";
  }

  numberRound.innerText = `Round ${round}`;

  pChoice.innerText = `You Pulled a ${playerChoice}`;

  if (computerChoice == 1) {
    cChoice.innerText = `Computer Pulled a Rock`;
  } else if (computerChoice == 2) {
    cChoice.innerText = `Computer Pulled a Paper`;
  } else {
    cChoice.innerText = `Computer Pulled a Scissors`;
  }

  if (computerChoice == getValue) {
    res.innerText = "It's a Draw!";
  } else if (computerChoice == 1 && getValue == 2) {
    res.innerText = "You Won!, Computer Lost!";
    playerScore++;
  } else if (computerChoice == 1 && getValue == 3) {
    res.innerText = "You Lost!, Computer Won!";
    computerScore++;
  } else if (computerChoice == 2 && getValue == 1) {
    res.innerText = "You Lost!, Computer Won!";
    computerScore++;
  } else if (computerChoice == 2 && getValue == 3) {
    res.innerText = "You Won!, Computer Lost!";
    playerScore++;
  } else if (computerChoice == 3 && getValue == 1) {
    res.innerText = "You Won!, Computer Lost!";
    playerScore++;
  } else if (computerChoice == 3 && getValue == 2) {
    res.innerText = "You Lost!, Computer Won!";
    computerScore++;
  }

  pScore.innerText = `Your Score: ${playerScore}`;
  cScore.innerText = `Computer Score: ${computerScore}`;

  if ((computerScore || playerScore) == 3) {
    if (computerScore > playerScore) {
      cWon.innerText = `Computer Won!`;
    } else {
      pWon.innerText = "You Won!";
    }
    round = 0;
    computerScore = 0;
    playerScore = 0;
  } else {
    cWon.innerText = ``;
    pWon.innerText = ``;
  }
}
