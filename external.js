function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  return randomNum;
}

console.log("The Rock Paper Scissors Game\n");
console.log("Rules are:\n");
console.log("1. The First one to reach Score 3 Wins!\n");
console.log("2. You Should Have Fun!!\n\n");
let playerScore = 0;
let computerScore = 0;

function playRound() {
  const computerChoice = getComputerChoice();
  const getChoice = prompt("Enter Choice");
  console.log(`You Pulled a ${getChoice}`);
  let playerChoice;

  if (getChoice == ("rock" || "Rock" || "ROCK")) {
    playerChoice = 1;
  } else if (getChoice == ("paper" || "Paper" || "PAPER")) {
    playerChoice = 2;
  } else {
    playerChoice = 3;
  }

  if (computerChoice == 1) {
    console.log(`Computer Pulled a Rock`);
  } else if (computerChoice == 2) {
    console.log(`Computer Pulled a Paper`);
  } else {
    console.log(`Computer Pulled a Scissors`);
  }

  if (computerChoice == playerChoice) {
    console.log("It's a Draw!");
  } else if (computerChoice == 1 && playerChoice == 2) {
    console.log("You Won!, Computer Lost!");
    playerScore++;
  } else if (computerChoice == 1 && playerChoice == 3) {
    console.log("You Lost!, Computer Won!");
    computerScore++;
  } else if (computerChoice == 2 && playerChoice == 1) {
    console.log("You Lost!, Computer Won!");
    computerScore++;
  } else if (computerChoice == 2 && playerChoice == 3) {
    console.log("You Won!, Computer Lost!");
    playerScore++;
  } else if (computerChoice == 3 && playerChoice == 1) {
    console.log("You Won!, Computer Lost!");
    playerScore++;
  } else if (computerChoice == 3 && playerChoice == 2) {
    console.log("You Lost!, Computer Won!");
    computerScore++;
  }
}

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
