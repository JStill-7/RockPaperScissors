let paperBtn = document.querySelector('#paper')
let rockBtn = document.querySelector('#rock')
let scissorsBtn = document.querySelector('#scissors')
let scoreBoard = document.querySelector('#score')
let resetBtn = document.querySelector('#reset')

let humanScore = 0;
let computerScore = 0;
let drawCount = 0;

paperBtn.addEventListener('click',(e)=>  {
    let computerChoice = getComputerChoice()
    playRound(1, computerChoice);
    console.log('paper clicked');
    console.log(humanScore);
    
});

rockBtn.addEventListener('click',(e)=>  {
    let computerChoice = getComputerChoice()
    playRound(0, computerChoice);
    console.log('rock clicked');
    console.log(humanScore);
});

scissorsBtn.addEventListener('click',(e)=>  {
    let computerChoice = getComputerChoice()
    playRound(2, computerChoice);
    console.log('scissors clicked');
    console.log(humanScore);
});


resetBtn.addEventListener('click', ()=>{
    humanScore = 0;
    computerScore = 0;
    drawCount = 0;
    updateScoreBoard("Game Reset");
})

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


//logic for 1 round
function playRound(humanSelection,computerSelection) {
    let result;
    if(humanSelection == computerSelection) {
        console.log('draw');
        drawCount++;
        result = 'DRAW GO AGAIN';

    } else if (humanSelection == 0 && computerSelection == 2 || humanSelection == 1 && computerSelection == 0 || humanSelection == 2 && computerSelection == 1) {
        console.log('human wins this round')
        result = 'HUMAN WINS'
        humanScore++;
    } else if (humanSelection == 0 && computerSelection == 1 || humanSelection == 1 && computerSelection == 2 || humanSelection == 2 && computerSelection == 0) {
        console.log('computer wins this round')
       result = 'COMPUTER WINS';
       computerScore++;
    }
    updateScoreBoard(result);
    console.log(result);
    return result;
    
}

function updateScoreBoard(result) {
    let scoreBoard = document.querySelector('#score');
    scoreBoard.innerHTML = `   <p>round result:${result}<br>  
    Human: ${humanScore} | Computer: ${computerScore} | Draws: ${drawCount}</p>`;

    if(humanScore >=5) {
        scoreBoard.innerHTML = `Human wins the game`
    } else if (computerScore >= 5) {
        scoreBoard.innerHTML = `Computer wins the game`
    }
}
