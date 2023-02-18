const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const Scissors = document.querySelector("#scissors-button");
let pChoice = document.querySelector(".p-choice");
let cChoice = document.querySelector(".c-choice");
let getValue;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let res = document.querySelector(".result");
const div = document.querySelector(".buttons");

function rockSetter() {
  getValue = 1;
  playRound(getValue);
}
function paperSetter() {
  getValue = 2;
  playRound(getValue);
}
function scissorsSetter() {
  getValue = 3;
  playRound(getValue);
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  return randomNum;
}

function playRound(getValue) {
  const computerChoice = getComputerChoice();

  if (getValue == 1) {
    playerChoice = "Rock";
  } else if (getValue == 2) {
    playerChoice = "Paper";
  } else {
    playerChoice = "Scissors";
  }

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
}

function game() {
  for (let round = 1; (computerScore || playerScore) != 3; round++) {
    console.log(`\nRound ${round}\n`);
    playRound();
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}\n`);
  }
  if (computerScore > playerScore) {
    console.log("\n\nComputer Won!");
  } else {
    console.log("\n\nYou Won!");
  }
}
