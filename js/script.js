// Stored const variables 
const optionsRPC = ['rock', 'paper', 'scissors'];
const logicRPC = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' };
const playButtons = document.querySelectorAll('.buttons-wrap button');

// Global variables to store
let playerSelection,
    gameTracker = {
        'Player': 0,
        'Computer': 0
    };

// Function - Computer randomly select option 
function computerPlay() {
    let randomRPC = optionsRPC[Math.floor(Math.random() * optionsRPC.length)];
    // return randomRPC;
    return randomRPC;
}

// Function - Get player option and play round
function playerChoice(e) {
    playerSelection = this.getAttribute('data-pick');
    playRound(playerSelection, computerPlay())
}


// Function - Play a single round
function playRound(player, comp) {

    // Option comparison logic
    if (logicRPC[player] === comp) { // If player option beats computer option 
        // return 'Player Win! Player: ' + player + ' beats Computer: ' + comp;
        console.log('Player Win! Player: ' + player + ' beats Computer: ' + comp);
    } else if (player !== comp) { // If computer option beats player option 
        // return 'Computer Win! Computer: ' + comp + ' beats Player: ' + player;
        console.log('Computer Win! Computer: ' + comp + ' beats Player: ' + player);
    } else {
        // return 'Draw! Player: ' + comp + ' & Computer: ' + player + ' are equal';
        console.log('Draw! Player: ' + comp + ' & Computer: ' + player + ' are equal');
    }

}

// // Function to track score and console.log round and game winner/loser
// function game() {
//     // Reset scores for new game
//     gameTracker.Player = 0;
//     gameTracker.Computer = 0;
//     // Loop playRound function to play multiple times
//     for (let i = 0; i < 5; i++) {
//         playRoundScore = playRound();
//         if (playRoundScore.indexOf('Player Win') > -1) {
//             gameTracker.Player++;
//         } else if (playRoundScore.indexOf('Computer Win') > -1) {
//             gameTracker.Computer++;
//         }
//         console.log('ROUND[' + (i + 1) + '] | ' + playRoundScore);
//     }
//     // Final console.log for the winner/loser
//     if (gameTracker.Player > gameTracker.Computer) {
//         console.log('YOU WIN!! - Player ' + gameTracker.Player + ' | Computer: ' + gameTracker.Computer);
//     } else if (gameTracker.Player < gameTracker.Computer) {
//         console.log('YOU LOSE!! - Player ' + gameTracker.Player + ' | Computer: ' + gameTracker.Computer);
//     } else {
//         console.log('ITS A DRAW!! - Player ' + gameTracker.Player + ' | Computer: ' + gameTracker.Computer);
//     }
// }

// Run the game
// game();

playButtons.forEach(playButtons => playButtons.addEventListener('click', playerChoice));