let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let gameover=false


function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function ConvertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}

function win(userChoice, ComputerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  if(gameover){
      
    return;
}
  userScore++;
 
 
  if (userScore === 4) {
    gameover = true;
  } else {
    userScore_span.innerHTML = userScore;
    ComputerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${ConvertToWord(userChoice)} beats  ${ConvertToWord(
      ComputerChoice
    )} . You win! `;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
  }
}

function lose(userChoice, ComputerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  if(gameover){
    return;
}
  computerScore++;
  
  
  if (computerScore ===4) {
    gameover = true;
  } else {
    userScore_span.innerHTML = userScore;
    ComputerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${ConvertToWord(
      userChoice
    )} loses to  ${ConvertToWord(ComputerChoice)} . You lost... `;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
  }
}
function draw(userChoice, ComputerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  ComputerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${ConvertToWord(userChoice)} and  ${ConvertToWord(
    ComputerChoice
  )} are equal . Draw `;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
    if(userScore ==3){return}
    if(computerScore==3){return}
  const ComputerChoice = getComputerChoice();
  const ComputerChoice_full = ConvertToWord(ComputerChoice);
  document.getElementById("comp-choice").style.display = "block";
  document.getElementById("comp-choice").src = ComputerChoice_full + ".png";

  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, ComputerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, ComputerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
