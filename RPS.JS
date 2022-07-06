
const computerPlay=()=>{
    const rps=["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random()*rps.length)];
}

const playRound=(playerSelection,computerSelection)=>{
    playerSelection=playerSelection.toLowerCase();
    if((playerSelection=='paper' && computerSelection=='rock')||(playerSelection=='rock' && computerSelection=='scissors')||(playerSelection=='scissors' && computerSelection=='paper')){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if((playerSelection=='paper' && computerSelection=='scissors')||(playerSelection=='rock' && computerSelection=='paper')||(playerSelection=='scissors' && computerSelection=='rock')){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else{
        return "Tie!";
    }
}


for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(`Type either 'rock', 'paper' or 'scissors' to begin the game`);
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
 }