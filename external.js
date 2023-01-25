function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  return randomNum;
}

const computerChoice = getComputerChoice();

const getChoice = prompt("Enter Choice");

function getChoiceNumber() {
  if (getChoice == "rock" || "Rock" || "ROCK") {
    return 1;
  } else if (getChoice == "paper" || "Paper" || "PAPER") {
    return 2;
  } else if (getChoice == "scissors" || "Scissors" || "SCISSORS") {
    return 3;
  } else {
    alert("Choose Rock or Paper or Scissors!");
    exit;
  }
}

const playerChoice = getChoiceNumber();
console.log(`Computer Pulled a ${computerChoice}`);

function playRound() {
  if (computerChoice == playerChoice) {
    console.log("It's a Draw!");
  } else if (computerChoice == 1 && playerChoice == 2) {
    console.log("You Won!, Computer Lost!");
  } else if (computerChoice == 1 && playerChoice == 3) {
    console.log("You Lost!, Computer Won!");
  } else if (computerChoice == 2 && playerChoice == 1) {
    console.log("You Lost!, Computer Won!");
  } else if (computerChoice == 2 && playerChoice == 3) {
    console.log("You Won!, Computer Lost!");
  } else if (computerChoice == 3 && playerChoice == 1) {
    console.log("You Lost!, Computer Won!");
  } else if (computerChoice == 3 && playerChoice == 2) {
    console.log("You Lost!, Computer Won!");
  }
}

playRound();
