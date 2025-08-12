
let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#PLAYER_SCORE");
const compScorePara = document.querySelector("#COMP_SCORE");


function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playRound(userChoice) {
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
        msg.innerText = "It's a draw! Both chose " + userChoice;
        return;
    }

    let userWin = false;
    if (userChoice === "rock") {
        userWin = compChoice === "scissor";
    } else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } else if (userChoice === "scissor") {
        userWin = compChoice === "paper";
    }

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    }
}


choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playRound(userChoice);
    });
});
