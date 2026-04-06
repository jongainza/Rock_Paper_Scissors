// function getComputerChoice() {
//   let computerChoice = Math.floor(Math.random() * 3) + 1;
//   switch (computerChoice) {
//     case 1:
//       console.log("Rock");
//       return "rock";
//     case 2:
//       console.log("Paper");
//       return "paper";
//     case 3:
//       console.log("Scissors");
//       return "scissors";
//   }
// }

// function getHumanChoice() {
//   let humanChoice = prompt("Rock, Paper or Scissors?", "");
//   if (
//     humanChoice.toLocaleLowerCase() !== "rock" &&
//     humanChoice.toLowerCase() !== "paper" &&
//     humanChoice.toLocaleLowerCase() !== "scissors"
//   ) {
//     alert("WRONG INPUT!");
//   }
//   console.log(humanChoice.toLowerCase());

//   return humanChoice.toLowerCase();
// }

// let humanScore = 0;
// let computerScore = 0;

// function getScore() {
//   console.log(`Player=${humanScore} - Computer=${computerScore}`);
// }

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === "rock" && computerChoice === "rock") {
//     alert("Both players choose Rock");
//     getScore();
//     return;
//   } else if (humanChoice === "rock" && computerChoice === "paper") {
//     alert(
//       "Player choose Rock and Computer choose Paper therefor Computer wins",
//     );
//     computerScore++;
//     getScore();
//     return;
//   } else if (humanChoice === "rock" && computerChoice === "scissors") {
//     alert(
//       "Player choose Rock and Computer choose Scissors therefor Player wins",
//     );
//     humanScore++;
//     getScore();
//     return;
//   } else if (humanChoice === "paper" && computerChoice === "rock") {
//     alert("Player choose Paper and Computer choose Rock therefor Player wins");
//     humanScore++;
//     getScore();
//     return;
//   } else if (humanChoice === "paper" && computerChoice === "paper") {
//     alert("Both players choose Paper");
//     getScore();
//     return;
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     alert(
//       "Player choose Paper and Computer choose Scissors therefor Computer wins",
//     );
//     computerScore++;
//     getScore();
//     return;
//   } else if (humanChoice === "scissors" && computerChoice === "rock") {
//     alert("Player Scissors and Computer choose Rock therefor Computer wins");
//     computerScore++;
//     getScore();
//     return;
//   } else if (humanChoice === "scissors" && computerChoice === "paper") {
//     alert("Player Scissors and Computer choose Paper therefor Player wins");
//     humanScore++;
//     getScore();
//     return;
//   } else if (humanChoice === "scissors" && computerChoice === "scissors") {
//     alert("Both players choose Scissors");
//     getScore();
//     return;
//   }
// }
// function declareWinner() {
//   if (humanScore > computerScore) {
//     alert(`Player wins ${humanScore} to ${computerScore}`);
//     console.log(`Player wins ${humanScore} to ${computerScore}`);
//   } else {
//     alert(`Computer wins ${computerScore} to ${humanScore}`);
//     console.log(`Player wins ${computerScore} to ${humanScore}`);
//   }
// }
// while (humanScore + computerScore < 5) {
//   console.log(`HS + CS = ${humanScore + computerScore}`);
//   playRound(getHumanChoice(), getComputerChoice());
// }
// declareWinner();

// for (let i = 2; i <= 10; i++) {
//   if (i % 2) continue;
//   alert(i);
// }

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// let i = 0
// while (i<3){
//   alert(`number ${i}!`);
//   i++
// }

// let number = Number(prompt("Enter a number greater than 100?", ""))

// while(number < 100 && number){
//   number = Number(prompt("Enter a number greater than 100?", 0));
//   console.log(number);
// }

// let arr = [1,5,3,43,56,12,4,6,7,15,134]

// function sumOfTripledEvens(array){

//   return array
//   .filter((n)=>n%2!==0)
//   .map(n=>n*3)
//   .reduce((acc,cur)=>acc+cur,0)
// }

  
  // console.log(sumOfTripledEvens(arr));
  // function camelize(str){

  //   console.log(
  //     (str
  //       .split("-")
  //       .map((word,index) => index ===0? word : word[0].toUpperCase() + word.slice(1)
  //   ).join("")
  //   ))
   
    
    
    
  // }
  
  // camelize("background-color");
  // camelize("list-style-image");
  // camelize("-webkit-transition");

//    let arr = [5, 3, 8, 1];

// // let filtered = filterRange(arr, 1, 4);

// // alert( filtered ); // 3,1 (matching values)

// // alert( arr ); // 5,3,8,1 (not modified)

// function filterRange(arr,a,b){
//   if (a === undefined || a === null || a===NaN && b === undefined || b === null || b===NaN) return arr
//   let newArr = arr.filter(x=>x>=a&&x<b)
//   return newArr
// }
// console.log(filterRange(arr, 1, 4));
// console.log(filterRange(arr));
// console.log(arr);


// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1,9,12,16,17,22];

// // removed the numbers except from 1 to 4


// function  filterRangeInPlace(arr,a,b){
//   // arr.filter((x,index)=>{if(a>x||b<x)arr.splice(index,1)})
//   for (let i = arr.length-1 ; i >=0 ; i--){
//     let x = arr[i]
//     if(x<a || x>b) arr.splice(i,1)
//   }
 
// return arr
// }
// console.log(filterRangeInPlace(arr, 4, 15));
// 
// let arr = [1, 2, 3];

// function shuffle(array){

// }
let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
function unique(arr){
  let newArr = []
  arr.map(x=>newArr.includes(x)?newArr:newArr.push(x))
  return newArr

}
console.log(unique(strings));
