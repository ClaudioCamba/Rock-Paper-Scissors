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
        updateGameTracker('computer', 'player', playerSelection, computerSelection);
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

    updateDOM(); // Update DOM
}

// Update DOM elements with player / computer selections and round result
function updateDOM() {
    let pScore = gameTracker.player,
        cScore = gameTracker.computer,
        pOp = gameTracker.playerOp,
        cOp = gameTracker.computerOp,
        round = gameTracker.roundWin[gameTracker.roundWin.length - 1],
        numRound = gameTracker.roundWin.length;

    // Update player / computer scores
    elemDOM.playerScore.textContent = pScore.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    elemDOM.compScore.textContent = cScore.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    // Update selected options
    elemDOM.playerOption.textContent = pOp[pOp.length - 1];
    elemDOM.compOption.textContent = cOp[cOp.length - 1];
    // Update round result
    (round === 'draw') ? elemDOM.roundResult.textContent = 'Round ' + numRound + ' is a Draw!' : elemDOM.roundResult.textContent = round + ' Wins Round ' + numRound;
}


// 
function gameControl() {

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