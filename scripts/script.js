function getComputerChoice() {
    let options = ["ROCK", "PAPER", "SCISSORS"];
    let choice = options[Math.floor(Math.random() * 3)];

    return choice;
};

function singleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection) {
        return "You tie.";

    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")) {
        return "You win.";

    } else {
        return "You loose.";
    };
};

function game() {

    let wins = 0;

    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Type rock, paper, or scissors:");
        let computerInput = getComputerChoice();

        let result = singleRound(userInput, computerInput);
        console.log(result);

        if (result == "You win.") {
            wins++;
        }

    }

    if (wins >= 3) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game. Whoops lol.");
    }

}

game();