const choices = document.querySelectorAll(".choice");
const board = document.getElementById("board");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const userSelect = document.getElementById("user");
const compSelect = document.getElementById("comp");
const reset = document.getElementById("reset");

uScore = parseInt(userScore.textContent);
cScore = parseInt(compScore.textContent);

function generateChoice() {
    const randNumber = Math.floor(Math.random() * 3);
    const compChoice = choices[randNumber].getAttribute("id");
    console.log("comp choice is ", compChoice);
    return compChoice;
};

function winner(userWin) {
    if (userWin) {
        console.log("you win");
        board.textContent = "you won";
        userScore.textContent = ++uScore;
    } else {
        console.log("you loose");
        board.textContent = "you loose";
        compScore.textContent = ++cScore;
    }
}

function draw(userChoice, compChoice) {
    if (userChoice === compChoice) {
        console.log("draw");
        board.textContent = "it was Draw";
        return true;
    }
    return false;
}

function playGame(userChoice, compChoice) {
    let userWin = true;
    userSelect.textContent = userChoice;
    compSelect.textContent = compChoice;

    if (draw(userChoice, compChoice)) {
        return;
    };
    if (userChoice === "stone") {
        //paper, scissors
        userWin = compChoice === "paper" ? false : true;
        userWin = compChoice === "scissors" ? true : false;
    } else
    if (userChoice === "paper") {
        //stone, scissors
        userWin = compChoice === "stone" ? true : false;
        userWin = compChoice === "scissors" ? false : true;
    } else
    if (userChoice === "scissors") {
        //stone, paper
        userWin = compChoice === "stone" ? false : true;
        userWin = compChoice === "paper" ? true : false;
    }
    winner(userWin);
};
choices.forEach(ele => {
    const userChoice = ele.getAttribute("id");
    ele.addEventListener("click", () => {
        console.log("user choice is ", userChoice);
        playGame(userChoice, generateChoice());
    })
});
reset.addEventListener("click", () => {
    userScore.textContent = 0;
    compScore.textContent = 0;
});