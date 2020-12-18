let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("score-board");
const message_div = document.querySelector(".message > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(result) {
  if (result === "rock") return "Rock";
  if (result === "paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3);
  const smallCompWord = "comp".fontsize(3);
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  message_div.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallCompWord}. You Win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 1000);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3);
  const smallCompWord = "comp".fontsize(3);
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  message_div.innerHTML = `${convertToWord(
    computerChoice
  )}${smallCompWord} beats ${convertToWord(
    userChoice
  )}${smallUserWord}. You Lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3);
  const smallCompWord = "comp".fontsize(3);
  const userChoice_div = document.getElementById(userChoice);
  computerScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  message_div.innerHTML = `${convertToWord(
    computerChoice
  )}${smallCompWord} equals ${convertToWord(
    userChoice
  )}${smallUserWord}. It's a Draw I Tell You!`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 1000);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });
  paper_div.addEventListener("click", function () {
    game("paper");
  });
  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}

main();
