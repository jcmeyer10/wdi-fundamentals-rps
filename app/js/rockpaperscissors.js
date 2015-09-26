////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


var move;
var playerMove;
var computerMove;
var winner;
var playerWins;
var computerWins;
var randomPlay;


function getPlayerMove() {
   return move || getInput();
}

function getComputerMove() {
   return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();

    if ((playerMove === 'rock' && computerMove === 'scissors') 
    || (playerMove === 'paper' && computerMove === 'rock') 
    || (playerMove === 'scissors' && computerMove === 'paper'))
    {
        winner = "Jeff";
    }

    else if ((playerMove === 'rock' && computerMove === 'paper')     
    || (playerMove === 'paper' && computerMove === 'scissors') 
    || (playerMove === 'scissors' && computerMove === 'rock'))
    {
        winner = "Kristin";
    }
    else if (playerMove === computerMove)
    { winner = "Tie";
    } else {
        winner = ("Kristin");
    }
console.log("You chose " + playerMove + "and Kristin chose " + computerMove);
return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while((playerWins <5) && (computerWins <5)){
        winner = getWinner(playerMove, computerMove);

        if (winner === "Jeff"){
        
            playerWins++;
        }
        else if (winner === "Kristin"){
            console.log("You chose " + playerMove + "and Kristin chose " + computerMove + ". Kristin wins this round!");
            computerWins++;
        }
        else{
            winner === "Tie"
            console.log("This round is a tie");
        }

        console.log("Jeff: " + playerWins + " Kristin: " + computerWins);

    }
    return [playerWins, computerWins];
}

console.log(playToFive());

