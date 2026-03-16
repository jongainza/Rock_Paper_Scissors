
function getComputerChoice(){

let computerChoice = Math.floor(Math.random() * 3) + 1;
switch (computerChoice){
 case 1:
  console.log('Rock')
  return 'Rock'
 case 2:
   console.log("Paper");
   return 'Paper'
 case 3: 
   console.log("Scissors");
   return 'Scissors'
}



}
getComputerChoice()