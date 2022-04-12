// Stored const variables 
const optionsRPC = ['rock', 'paper', 'scissors'];
const logicRPC = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' };
const playButtons = document.querySelectorAll('.buttons-wrap button');
const playerOption = document.querySelector('.player-op span');
const compOption = document.querySelector('.comp-op span');
const playerScore = document.querySelector('.player-score span');
const compScore = document.querySelector('.comp-score span');
const roundNumber = document.querySelector('.game-round span');
const roundResult = document.querySelector('.round-result span');


// Global variables to store
let playerSelection,
    gameTracker = {
        'round': 0,
        'player': 0,
        'computer': 0
    };

// Function - Computer randomly select option 
function computerPlay() {
    let randomRPC = optionsRPC[Math.floor(Math.random() * optionsRPC.length)];
    return randomRPC;
}

// Function - Get player option and play round
function playerChoice(e) {
    playerSelection = this.getAttribute('data-pick');
    playRound(playerSelection, computerPlay())
}


// Function - Play a single round
function playRound(player, comp) {
    let result;

    // Option comparison logic
    if (logicRPC[player] === comp) { // If player option beats computer option 
        result = 'player win';
    } else if (player !== comp) { // If computer option beats player option 
        result = 'computer win';
    } else { // If both choices are the same
        // return 'draw';
        result = 'its a draw';
    }

    printResults(player, comp, result);
    return result;
}

// Print selected options per round onto DOM
function printResults(playerPrint, compPrint, result) {
    playerOption.innerText = playerPrint;
    compOption.innerText = compPrint;
    roundResult.innerText = result;
}

// Check who the winner of the round is and update DOM and variable
function printUpdateScores(score) {
    if (score === 'player win') {
        gameTracker.player++
    } else if (score === 'computer win') {
        gameTracker.computer++
    }
    gameTracker.round++

    playerScore.innerText = gameTracker.player;
    compScore.innerText = gameTracker.computer;
    roundNumber.innerText = gameTracker.round;
}

function gameEnd() {
    if ()
}

// Update player and computer score in DOM
// Function to track score and console.log round and game winner/loser
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