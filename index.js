let userChoice = '';
let computerChoice = '';
function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber >= 0 && randomNumber < 1) {
        computerChoice = 'rock';
    } else if (randomNumber >= 1 && randomNumber < 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log('Computer chose ' + computerChoice);
    return computerChoice;
}

function computeResult() {  
    generateComputerChoice();  // Generate computer's choice once
    let scoreStr = localStorage.getItem('Result');
    let score = JSON.parse(scoreStr) || {
        win: 0,
        lost: 0,
        tie: 0,
    };

    let result = '';
    if (computerChoice === 'rock' && userChoice === 'paper' ||
        computerChoice === 'scissors' && userChoice === 'rock' ||
        computerChoice === 'paper' && userChoice === 'scissors') {
        console.log('User Won');
        result = 'User Won';
        score.win += 1;
    } else if (computerChoice === userChoice) {
        console.log('It\'s a draw');
        result = 'Match Drawn';
        score.tie += 1;
    } else {
        console.log('Computer Won');
        result = 'Computer Won';
        score.lost += 1;
    }
    document.querySelector('#area').value = ` 
    User Chose ${userChoice}\n Computer Chose ${computerChoice}\n Result is ${result}\n Total Score is: \n Win: ${JSON.stringify(score.win)}\n Lose: ${JSON.stringify(score.lost)}\n Tie: ${JSON.stringify(score.tie)}`;
    localStorage.setItem(`Result`,JSON.stringify(score));
}
