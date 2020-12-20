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
  const choices = ["rocky", "papel", "tijeras"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(something){
  if (something === 'papel') return 'Paper';
  if (something === 'rocky') return 'Rock';
  if (something === 'tijeras') return 'Scissors';
    
}

function win(usersChoice, computerChoice){
  userScore ++;
  currentUserScore.innerHTML = userScore;
  currentCompScore.innerHTML = compScore;
  const smallWord = 'user'.fontsize(4).fontcolor('red');
  const smallComp = 'comp'.fontsize(4).fontcolor('red');
  resultMessage.innerHTML = `${convert(usersChoice)}${smallWord} beats ${convert(computerChoice)}${smallComp}.  You Win!`
  document.getElementById(usersChoice).classList.add('green-glow');
}

function lose(usersChoice, computerChoice){
  compScore ++;
  currentUserScore.innerHTML = userScore;
  currentCompScore.innerHTML = compScore;
  const smallWord = 'user'.fontsize(4).fontcolor('red');
  const smallComp = 'comp'.fontsize(4).fontcolor('red');
  resultMessage.innerHTML = `${convert(computerChoice)}${smallComp} beats ${convert(usersChoice)}${smallWord}. You Lose!`
}

function draw(usersChoice, computerChoice){
  currentUserScore.innerHTML = userScore;
  currentCompScore.innerHTML = compScore;
  const smallWord = 'user'.fontsize(4).fontcolor('red');
  const smallComp = 'comp'.fontsize(4).fontcolor('red');
  resultMessage.innerHTML = `${convert(computerChoice)}${smallComp} equals ${convert(usersChoice)}${smallWord}. Draw Draw Draw!`
}
function game(usersChoice) {
  const computerChoice = getComputerChoice();
  switch (usersChoice + computerChoice) {
    case "rockytijeras":
    case "papelrocky":
    case "tijeraspapel":
      win(usersChoice, computerChoice);
      break;
    case "tijerasrocky":
    case "rockypapel":
    case "papeltijeras":
      lose(usersChoice, computerChoice);
      break;
    case "rockyrocky":
    case "papelpapel":
    case "tijerastijeras":
      draw(usersChoice, computerChoice);
      break;
  }
}

function main() {
  rockMe.addEventListener("click", () => game("rocky"));
  paperMe.addEventListener("click", () => game("papel"));
  scissorsMe.addEventListener("click", () => game("tijeras"));
}

main();
