// Math.random() generates a random float between 0 to 1.
// the below function allows for random integers to be generated up to a desired max.
// choosing a max of 3 allows for numbers 0, 1, 2 to be generated randomly.
function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3)
    switch (randInt) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getHumanChoice() {
    return window.prompt("Rock, Paper or Scissors?");
}

function decideWinner() {
    const COMPUTERCHOICE = getComputerChoice()
    const HUMANCHOICE = getHumanChoice()

    console.log("Player chose ... " + HUMANCHOICE)
    console.log("Computer chose ... " + COMPUTERCHOICE)

    if (COMPUTERCHOICE === "Rock") {
        if (HUMANCHOICE === "Rock") {
            return "Draw"
        } else if (HUMANCHOICE === "Paper") {
            return "Player wins!"
        } else {
            return "Computer wins!"
        }
    } else if (COMPUTERCHOICE === "Scissors") {
        if (HUMANCHOICE === "Rock") {
            return "Player wins!"
        } else if (HUMANCHOICE === "Paper") {
            return "Computer wins!"
        } else {
            return "Draw"
        }
    } else {
        if (HUMANCHOICE === "Rock") {
            return "Computer wins!"
        } else if (HUMANCHOICE === "Paper") {
            return "Draw"
        } else {
            return "Player wins!"
        }
    }
}

function playRound() {
    console.log("Result ... " + decideWinner())
}

playRound()