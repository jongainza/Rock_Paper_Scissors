// computer choice

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

// human choice

let options = document.querySelector('.options')
let resultsP=document.querySelector('.results>p')
let scoreP=document.querySelector('.score>p')
let pickP=document.querySelector('.pick>p')
let resetBtn = document.querySelector('reset-btn')
let humanChoice

function handleSelection(e){
  if (e.target.classList.contains('rock')) {
    humanChoice='rock';
    console.log(humanChoice);
  }
    
  else if (e.target.classList.contains('scissors'))humanChoice='scissors';
  else if (e.target.classList.contains('paper'))humanChoice='paper'

if (humanScore + computerScore < 5 ) {
  console.log(`HS + CS = ${humanScore + computerScore}`);
  playRound(humanChoice, getComputerChoice());
}
}

options.addEventListener('click',handleSelection)



let humanScore = 0;
let computerScore = 0;

function getScore() {
  scoreP.textContent=(`Player=${humanScore} - Computer=${computerScore}`);
  if (humanScore + computerScore >= 5){
    declareWinner();
  }
}

function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === "rock" && computerChoice === "rock") {
    pickP.textContent=("Both players choose Rock");
    getScore();
    return;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    pickP.textContent=(
      "Player choose Rock and Computer choose Paper therefor Computer wins"
    );
    computerScore++;
    getScore();
    return;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    pickP.textContent=(
      "Player choose Rock and Computer choose Scissors therefor Player wins"
    );
    humanScore++;
    getScore();
    return;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    pickP.textContent=("Player choose Paper and Computer choose Rock therefor Player wins");
    humanScore++;
    getScore();
    return;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    pickP.textContent="Both players choose Paper";
    getScore();
    return;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    pickP.textContent=(
      "Player choose Paper and Computer choose Scissors therefor Computer wins"
    );
    computerScore++;
    getScore();
    return;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    pickP.textContent=("Player Scissors and Computer choose Rock therefor Computer wins");
    computerScore++;
    getScore();
    return;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    pickP.textContent=("Player Scissors and Computer choose Paper therefor Player wins");
    humanScore++;
    getScore();
    return;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    pickP.textContent=("Both players choose Scissors");
    getScore();
    return;
  }
}
function declareWinner() {
  if (humanScore > computerScore) {
    resultsP.textContent=(`Player wins ${humanScore} to ${computerScore}`);
    console.log(`Player wins ${humanScore} to ${computerScore}`);
  } else {
    resultsP.textContent=(`Computer wins ${computerScore} to ${humanScore}`);
    console.log(`Player wins ${computerScore} to ${humanScore}`);
  }
}


