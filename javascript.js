function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  switch (computerChoice) {
    case 1:
      console.log("Rock");
      return "rock";
    case 2:
      console.log("Paper");
      return "paper";
    case 3:
      console.log("Scissors");
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?", "");
  if (
    humanChoice.toLocaleLowerCase() !== "rock" &&
    humanChoice.toLowerCase() !== "paper" &&
    humanChoice.toLocaleLowerCase() !== "scissors"
  ) {
    alert("WRONG INPUT!");
  }
  console.log(humanChoice.toLowerCase());

  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function getScore() {
  console.log(`Player=${humanScore} - Computer=${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    alert("Both players choose Rock");
    getScore();
    return;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    alert(
      "Player choose Rock and Computer choose Paper therefor Computer wins",
    );
    computerScore++;
    getScore();
    return;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert(
      "Player choose Rock and Computer choose Scissors therefor Player wins",
    );
    humanScore++;
    getScore();
    return;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("Player choose Paper and Computer choose Rock therefor Player wins");
    humanScore++;
    getScore();
    return;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    alert("Both players choose Paper");
    getScore();
    return;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    alert(
      "Player choose Paper and Computer choose Scissors therefor Computer wins",
    );
    computerScore++;
    getScore();
    return;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("Player Scissors and Computer choose Rock therefor Computer wins");
    computerScore++;
    getScore();
    return;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    alert("Player Scissors and Computer choose Paper therefor Player wins");
    humanScore++;
    getScore();
    return;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    alert("Both players choose Scissors");
    getScore();
    return;
  }
}
function declareWinner() {
  if (humanScore > computerScore) {
    alert(`Player wins ${humanScore} to ${computerScore}`);
    console.log(`Player wins ${humanScore} to ${computerScore}`);
  } else {
    alert(`Computer wins ${computerScore} to ${humanScore}`);
    console.log(`Player wins ${computerScore} to ${humanScore}`);
  }
}
while (humanScore + computerScore < 5) {
  console.log(`HS + CS = ${humanScore + computerScore}`);
  playRound(getHumanChoice(), getComputerChoice());
}
declareWinner();
