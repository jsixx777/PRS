let userScore = 0;
let compScore = 0;
const currentUserScore = document.getElementById("the-user's-score");
const currentCompScore = document.getElementById("the-comp's-score");
let resultMessage = document.querySelector(".message-display > p");
const scoreBoard = document.querySelector("score-board");
const rockMe = document.getElementById("rock");
const paperMe = document.getElementById("paper");
const scissorsMe = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(something){
  if (something === 'paper') return 'Paper';
  if (something === 'rock') return 'Rock';
  if (something === 'scissors') return 'Scissors';
    
}

function win(usersChoice, computerChoice){
  const smallWord = 'user'.fontsize(4).fontcolor('red');
  const smallComp = 'comp'.fontsize(4).fontcolor('red');
  userScore ++;
  currentUserScore.innerHTML = userScore;
  currentCompScore.innerHTML = compScore;
  resultMessage.innerHTML = `${convert(usersChoice)}${smallWord} beats ${convert(computerChoice)}${smallComp}.  You Win!`
  document.getElementById(usersChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(usersChoice).classList.remove('green-glow'), 500);
}

function lose(usersChoice, computerChoice){
  const smallWord = 'user'.fontsize(4).fontcolor('red');
  const smallComp = 'comp'.fontsize(4).fontcolor('red');
  compScore ++;
  currentUserScore.innerHTML = userScore;
  currentCompScore.innerHTML = compScore;
  resultMessage.innerHTML = `${convert(computerChoice)}${smallComp} beats ${convert(usersChoice)}${smallWord}. You Lose!`
  document.getElementById(usersChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(usersChoice).classList.remove('red-glow'), 500);
}

function draw(usersChoice, computerChoice){
  const smallWord = 'user'.fontsize(4).fontcolor('red');
  const smallComp = 'comp'.fontsize(4).fontcolor('red');
  currentUserScore.innerHTML = userScore;
  currentCompScore.innerHTML = compScore;
  resultMessage.innerHTML = `${convert(computerChoice)}${smallComp} equals ${convert(usersChoice)}${smallWord}. Draw Draw Draw!`
  document.getElementById(usersChoice).classList.add('gray-glow');
  setTimeout(() => document.getElementById(usersChoice).classList.remove('gray-glow'), 500);
}
function game(usersChoice) {
  const computerChoice = getComputerChoice();
  switch (usersChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(usersChoice, computerChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose(usersChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(usersChoice, computerChoice);
      break;
  }
}

function main() {
  rockMe.addEventListener("click", () => game("rock"));
  paperMe.addEventListener("click", () => game("paper"));
  scissorsMe.addEventListener("click", () => game("scissors"));
}

main();
