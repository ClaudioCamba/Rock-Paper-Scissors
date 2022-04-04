// console.log('Start Rock Paper Scissors Game!');

// Stored const/let variables 
const optionsRPC = ['rock', 'paper', 'scissors'],
    logicRPC = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

let playerSelection,
    computerSelection,
    numOfRounds = 5;
scoreTracker = {
    'player': 0,
    'computer': 0,
    'draw': 0
};


//  Function - Computer randomly select option 
function computerPlay() {
    randomRPC = optionsRPC[Math.floor(Math.random() * optionsRPC.length)];
    return randomRPC;
}

// Function - Play a single round
function playRound(playerSelection, computerSelection) {

    // If same its a draw
    if (playerSelection === computerSelection) {
        return 'draw';
        // return "Its a Draw! " + computerSelection + " equals " + playerSelection;
    } else if (logicRPC[playerSelection] === computerSelection) {
        return 'win';
        // return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return 'lose';
        // return "You Lose! " + computerSelection + " beats " + playerSelection;
    }

}

// Number of rounds
function game() {
    scoreTracker.player = 0;
    scoreTracker.computer = 0;
    scoreTracker.draw = 0;

    for (let i = 0; i < numOfRounds; i++) {
        playerSelection = prompt().toLowerCase();
        computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection) === 'win') {
            scoreTracker.player++
        } else if (playRound(playerSelection, computerSelection) === 'lose') {
            scoreTracker.computer++
        } else {
            scoreTracker.draw++
        }
    }

    if (scoreTracker.player > scoreTracker.computer) {
        console.log('YOU WIN!');
        console.log(scoreTracker)
    } else if (scoreTracker.player < scoreTracker.computer) {
        console.log('YOU LOSE!');
        console.log(scoreTracker)
    } else {
        console.log('YOU DRAW!');
        console.log(scoreTracker)
    }
}

game();