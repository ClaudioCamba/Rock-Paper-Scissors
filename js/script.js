// Stored const variables 
const optionsRPC = ['rock', 'paper', 'scissors'];
const logicRPC = { 'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper' };
const elemDOM = {
    mainContainer: document.querySelector('.main-container'),
    playButtons: document.querySelectorAll('.buttons-wrap button[data-pick]'),
    resetButton: document.querySelector('.buttons-wrap button.reset-game'),
    playerOption: document.querySelector('.player-op span'),
    compOption: document.querySelector('.comp-op span'),
    // playerScore: document.querySelector('.player-score span'),
    playerScore: document.querySelector('#player'),
    // compScore: document.querySelector('.comp-score span'),
    compScore: document.querySelector('#computer'),
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
    let pScore = gameTracker.player.reduce((previousValue, currentValue) => previousValue + currentValue, 0),
        cScore = gameTracker.computer.reduce((previousValue, currentValue) => previousValue + currentValue, 0),
        pOp = gameTracker.playerOp[gameTracker.playerOp.length - 1],
        cOp = gameTracker.computerOp[gameTracker.computerOp.length - 1],
        round = gameTracker.roundWin[gameTracker.roundWin.length - 1],
        numRound = gameTracker.roundWin.length,
        endResult = '';


    // Update player / computer scores
    // elemDOM.playerScore.textContent = pScore;
    elemDOM.playerScore.setAttribute('value', pScore)
    // elemDOM.compScore.textContent = cScore;
    elemDOM.compScore.setAttribute('value', cScore)
    // Update selected options
    elemDOM.playerOption.textContent = pOp;
    elemDOM.compOption.textContent = cOp;
    // Update round result
    if (pScore === 5) {
        endResult = 'You win!!';
        endResetGame(endResult);
    } else if (cScore === 5) {
        endResult = 'You lose!!';
        endResetGame(endResult);
    } else if (round) {
        (round === 'draw') ? endResult = 'Round ' + numRound + ' is a Draw!' : endResult = round + ' Wins Round ' + numRound;
    }

    elemDOM.roundResult.textContent = endResult;

}

// Checks score and resets game
function endResetGame(result) {

    switch (result) {
        case 'You win!!':
            console.log('WIN WIN');
            elemDOM.mainContainer.classList.add('player-win')
            break;
        case 'You lose!!':
            console.log('LOSE LOSE');
            elemDOM.mainContainer.classList.add('player-lose')
            break;
        case 'reset':
            elemDOM.mainContainer.classList.remove('player-win');
            elemDOM.mainContainer.classList.remove('player-lose');

            console.log('RESET GAME!');
    }
}

// Reset Game
elemDOM.resetButton.addEventListener('click', function () {
    endResetGame('reset');
    gameTracker.player = [0];
    gameTracker.playerOp = [];
    gameTracker.computer = [0];
    gameTracker.computerOp = [];
    gameTracker.roundWin = [];
    updateDOM(); // Update DOM
})

elemDOM.playButtons.forEach(playButtons => playButtons.addEventListener('click', playRound));