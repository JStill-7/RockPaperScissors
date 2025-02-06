console.log('test')

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0 ) {
        console.log("rock");
    } else if (choice == 1) {
        console.log('paper')
    } else if (choice == 2) {
        console.log('scissors')
    }
    return choice;
}



function getHumanChoice() {

    //let humanChoice = prompt('enter your choice: ROCK, PAPER, or SCISSORS').toLowerCase();

    // if(humanChoice != 'rock' || 'paper' || 'scissors') {
    //     console.log(`please enter ONLY: 'ROCK' , 'PAPER, OR SCISSORS`)
    //     humanChoice = prompt('please enter ONLY enter ROCK, PAPER, or SCISSORS').toLowerCase();
    // }

    let humanChoice;

    while (true) {
    humanChoice = prompt('Enter your choice: ROCK, PAPER, or SCISSORS').toLowerCase();

    if (!['rock', 'paper', 'scissors'].includes(humanChoice)) {
        console.log(`Please enter ONLY: 'ROCK', 'PAPER', or 'SCISSORS'`);
    } else {
        break;
    }
    }
    
    if(humanChoice == 'rock') {
        humanChoice = 0;
        console.log('rock')
    } else if (humanChoice == 'paper') {
        humanChoice = 1;
        console.log('paper')
    } else if (humanChoice == 'scissors') {
        humanChoice = 2;
        console.log('scissors')
    }

    console.log(humanChoice)
    return humanChoice;
}





function playRound(humanSelection,computerSelection) {
    if(humanSelection == computerSelection) {
        console.log('draw');
    } else if (humanSelection == 0 && computerSelection == 2 || humanSelection == 1 && computerSelection == 0 || humanSelection == 2 && computerSelection == 1) {
        console.log('human wins this round')
    } else if (humanSelection == 0 && computerSelection == 1 || humanSelection == 1 && computerSelection == 2 || humanSelection == 2 && computerSelection == 0) {
        console.log('computer wins this round')
    }
    
}

let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice();


playRound(humanSelection,computerSelection);

