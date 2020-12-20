let userScore = 0;
let compScore = 0;
const currentUserScore = document.getElementById("the-user's-score");
const currentCompScore = document.getElementById("the-comp's-score");
const resultMessage = document.querySelector('message-display');
const scoreBoard = document.querySelector('score-board');
const rockMe = document.getElementById('rock');
const paperMe = document.getElementById('paper');
const scissorsMe = document.getElementById('scissors');

function getComputerChoice(){
  const choices = ['rocky', 'papel', 'tijeras'];
  const randomNumber = (Math.floor(Math.random() *3));
  return choices[randomNumber]; 
} 
getComputerChoice();

function game(usersChoice){
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
}

function main(){
  rockMe.addEventListener('click', () => game('rocky'));
  paperMe.addEventListener('click', () => game('papel'));
  scissorsMe.addEventListener('click', () => game('tijeras'));
};

main();
