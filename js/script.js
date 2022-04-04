console.log('Start Rock Paper Scissors Game!');

// Stored const/let variables 
const optionsRPC = ['rock', 'paper', 'scissors'],
    playerSelection = 'Rock'.toLowerCase(),
    computerSelection = computerPlay();

// function playerSelection(selection) {
//     if (optionsRPC.includes(selection.toLowerCase())) {
//         return selection.toLowerCase();
//     } else {
//         return 'Please input valid option (rock, paper or scissors)';
//     }
// }

//  Function - Computer randomly select option 
function computerPlay() {
    randomRPC = optionsRPC[Math.floor(Math.random() * optionsRPC.length)];
    return randomRPC;
}

// Function - Play a single round
function playRound(playerSelection, computerSelection) {
    // let playerWinText = '',
    //     playerLoseText = '';
    // console.log('computer: ' + computerSelection)
    // console.log('player: ' + playerSelection)
    // If same its a draw
    if (playerSelection === computerSelection) {
        console.log('draw');
        // If paper it beats rock
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('win')
        // If rock it beats scissors
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('win')
        // If scissors it beats paper
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('win')
        // Else you lose
    } else {
        console.log('lose');
    }
}

playRound(playerSelection, computerSelection);