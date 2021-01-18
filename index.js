const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')

const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')

const message = document.getElementById('message')

let player1Score = 0
let player2Score = 0
let player1Turn = true

function displayBtn() {
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'block';
} 


rollBtn.addEventListener('click', function() {
 let numberRandom = Math.floor(Math.random()*6) +1
 if (player1Turn) {
     player1Dice.innerHTML = numberRandom;
     player1Score += numberRandom;
     player1Scoreboard.innerHTML = player1Score;
     player2Dice.classList.remove('active');
     player1Dice.classList.add('active');
     message.innerHTML = 'NEXT: Player 2 turn'
 } else {
    player2Dice.innerHTML = numberRandom;
    player2Score += numberRandom;
    player2Scoreboard.innerHTML = player2Score;
    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.innerHTML = 'NEXT: Player 1 turn'
 }

player1Turn = !player1Turn;

if (player1Score >= 20) {
    message.innerHTML = 'Player 1 has won!!!'
    displayBtn() 
}
if (player2Score >= 20) {
    message.innerHTML = 'Player 2 has won!!!'
    displayBtn() 
} 


})

resetBtn.addEventListener('click', function reset(){
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player1Scoreboard.innerHTML='0';
    player2Scoreboard.innerHTML='0';
    player1Dice.innerHTML='-';
    player2Dice.innerHTML='-';
    player1Score = 0;
    player2Score = 0;
    message.innerHTML = "Player 1 turn";     player2Dice.classList.remove('active');
    player2Dice.classList.remove('active');
    player1Dice.classList.remove('active');

})