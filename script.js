let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const user = document.querySelector("#user-score");
const computer = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rdmInx = Math.floor(Math.random() * 3);
  return options[rdmInx];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw😶‍🌫️";
};

const playGame = (userChoice) => {
  console.log("UserChoice =", userChoice);
  //Generate Computer choice ---> we use modular way of programming to increase reading scalibility of code.
  const compChoice = genCompChoice();
  console.log("computerChoice =", compChoice);

  const showWinner = (userWin) => {
    if (userWin) {
      console.log("You Win!");
      msg.innerText = "You Win😁🙌";
      userScore++;
      user.innerHTML=userScore;
    } else {
      console.log("You Lost!");
      msg.innerText = "You Lose🙂👍";
      compScore++;
      computer.innerHTML=compScore;
    }
  };

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper, scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "scissors") {
      // paper, rock
      userWin = compChoice === "rock" ? false : true;
    } else {
      // rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
