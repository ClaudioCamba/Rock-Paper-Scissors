console.log('Start Rock Paper Scissors Game!');

const optionsRPC = ['rock', 'paper', 'scissors'];

function playerSelection(selection) {
    if (optionsRPC.includes(selection.toLowerCase())) {
        return selection.toLowerCase();
    } else {
        return 'Please input valid option (rock, paper or scissors)';
    }
}

function computerPlay() {
    randomRPC = optionsRPC[Math.floor(Math.random() * optionsRPC.length)];
    return randomRPC;
}

