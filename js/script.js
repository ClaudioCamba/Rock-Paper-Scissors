// Stored const variables 
const optionsRPC = ['rock', 'paper', 'scissors'];
const logicRPC = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' };
const elemDOM = {
    playButtons: document.querySelectorAll('.buttons-wrap button'),
    playerOption: document.querySelector('.player-op span'),
    compOption: document.querySelector('.comp-op span'),
    playerScore: document.querySelector('.player-score span'),
    compScore: document.querySelector('.comp-score span'),
    roundResult: document.querySelector('.round-result span')
}

// Global variables to store
let playerSelection,
    computerSelection,
    gameTracker = {
        'player': [],
        'playerOp': [],
        'computer': [],
        'computerOp': [],
        'roundWin': []
    };

// Function - Computer randomly select option 
function computerPlay() {
    let randomRPC = optionsRPC[Math.floor(Math.random() * optionsRPC.length)];
    return randomRPC;
}

// Function - Play a single round
function playRound(e) {

    playerSelection = this.getAttribute('data-pick'); // Get player selection from click event
    computerSelection = computerPlay(); // Storing computer selection in order to compare

    // Option comparison logic
    if (logicRPC[playerSelection] === computerSelection) { // If player selection beats computer option 
        updateGameTracker('player', 'computer', playerSelection, computerSelection);
    } else if (playerSelection !== computerSelection) { // If computer selection beats player option 
        updateGameTracker('player', 'computer', playerSelection, computerSelection);
    } else {
        updateGameTracker('draw', 'draw', playerSelection, computerSelection);
    }
}

// Update gameTracker Object
function updateGameTracker(winner, loser, playerOp, compOp) {

    if (winner !== 'draw') {
        gameTracker[winner].push(1);
        gameTracker[loser].push(0);
    } else {
        gameTracker.player.push(0);
        gameTracker.computer.push(0);
    }

    gameTracker.roundWin.push(winner);
    gameTracker.playerOp.push(playerOp);
    gameTracker.computerOp.push(compOp);

    console.log(gameTracker);
}

// Update DOM elements with player / computer selections and round result
function updateDOM(trackP, trackPO, trackC, trackCO) {
    console.log(trackP);
    console.log(trackPO);
    console.log(trackC);
    console.log(trackCO);
}

// // Check who the winner of the round is and update DOM and variable
// function printUpdateScores(score) {
//     if (score === 'player win') {
//         gameTracker.player++
//         gameTracker.round++
//     } else if (score === 'computer win') {
//         gameTracker.computer++
//         gameTracker.round++
//     }

//     playerScore.innerText = gameTracker.player;
//     compScore.innerText = gameTracker.computer;

// }

function gameEnd() {

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

elemDOM.playButtons.forEach(playButtons => playButtons.addEventListener('click', playRound));