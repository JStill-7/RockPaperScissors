
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




//logic for 1 round
function playRound(humanSelection,computerSelection) {
    let result;
    if(humanSelection == computerSelection) {
        console.log('draw');
        result = 'D';
    } else if (humanSelection == 0 && computerSelection == 2 || humanSelection == 1 && computerSelection == 0 || humanSelection == 2 && computerSelection == 1) {
        console.log('human wins this round')
        result = 'H'
    } else if (humanSelection == 0 && computerSelection == 1 || humanSelection == 1 && computerSelection == 2 || humanSelection == 2 && computerSelection == 0) {
        console.log('computer wins this round')
       result = 'C';
    }
    console.log(result);
    return result;
    
}


let humanScore = 0;
let computerScore = 0;

function playGame() {

    while (humanScore <= 4 && computerScore <= 4) {
         // Get new selections for each round
         let humanSelection = getHumanChoice();
         let computerSelection = getComputerChoice();

         // Play a round and get the result
        let result = playRound(humanSelection, computerSelection);
       
    //count score
    if(result == 'H') {
        humanScore++;
        console.log('human score is ' + humanScore);
        alert('the winner of this round is the human: human score is : ' + humanScore);
        playRound(humanSelection,computerSelection);
    } else if (result == 'C'){
        computerScore++
        console.log('computer score is ' + computerScore);
        alert('the winner of this round is the computer: computer score is : ' + computerScore);
        playRound(humanSelection,computerSelection);
    } else if (result == 'D'){
        alert('DRAW no winner this round');
        playRound(humanSelection,computerSelection);
    }
}

//let user know who won
if(humanScore > 4) {
    alert('human wins the game')
} else if (computerScore > 4) {
    alert('computer wins the game')
}
 
}


playGame();