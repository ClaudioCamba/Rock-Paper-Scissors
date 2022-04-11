// Stored const/let variables 
const optionsRPC = ['rock', 'paper', 'scissors'],
    logicRPC = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' };

// Global variables to store
let playerSelection,
    computerSelection,
    gameTracker = {
        'Player': 0,
        'Computer': 0
    };

//  Function - Computer randomly select option 
function computerPlay() {
    randomRPC = optionsRPC[Math.floor(Math.random() * optionsRPC.length)];
    return randomRPC;
}

// Function - Play a single round
function playRound(playerSelection, computerSelection) {

    // Get player / computer options
    playerSelection = prompt().toLowerCase();
    computerSelection = computerPlay();

    // Option comparison logic
    if (logicRPC[playerSelection] === computerSelection) { // If player option beats computer option 
        return 'Player Win! Player: ' + playerSelection + ' beats Computer: ' + computerSelection;
    } else if (playerSelection !== computerSelection) { // If computer option beats player option 
        return 'Computer Win! Computer: ' + computerSelection + ' beats Player: ' + playerSelection;
    } else {
        return 'Draw! Player: ' + computerSelection + ' & Computer: ' + playerSelection + ' are equal';
    }

}

// Function to track score and console.log round and game winner/loser
function game() {
    // Reset scores for new game
    gameTracker.Player = 0;
    gameTracker.Computer = 0;
    // Loop playRound function to play multiple times
    for (let i = 0; i < 5; i++) {
        playRoundScore = playRound();
        if (playRoundScore.indexOf('Player Win') > -1) {
            gameTracker.Player++;
        } else if (playRoundScore.indexOf('Computer Win') > -1) {
            gameTracker.Computer++;
        }
        console.log('ROUND[' + (i + 1) + '] | ' + playRoundScore);
    }
    // Final console.log for the winner/loser
    if (gameTracker.Player > gameTracker.Computer) {
        console.log('YOU WIN!! - Player ' + gameTracker.Player + ' | Computer: ' + gameTracker.Computer);
    } else if (gameTracker.Player < gameTracker.Computer) {
        console.log('YOU LOSE!! - Player ' + gameTracker.Player + ' | Computer: ' + gameTracker.Computer);
    } else {
        console.log('ITS A DRAW!! - Player ' + gameTracker.Player + ' | Computer: ' + gameTracker.Computer);
    }
}

// Run the game 
game();

