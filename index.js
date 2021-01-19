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
rollBtn.addEventListener('click', function(){
    randomScore = Math.floor(Math.random()*6) + 1;
    if (player1Turn) {
        player1Dice.innerHTML = randomScore;
        player1Score += randomScore;
        player1Scoreboard.innerHTML = player1Score;
        player1Turn = false;
        message.innerHTML = "Next: Player 2 Turn";
        player2Dice.classList.remove('active');
        player1Dice.classList.add('active');
    } else {
        player2Dice.innerHTML = randomScore;
        player2Score += randomScore;
        player2Scoreboard.innerHTML = player2Score;
        player1Turn = true;
        message.innerHTML = "Next: Player 1 Turn";
        player1Dice.classList.remove('active');
        player2Dice.classList.add('active');
    }

    if (player1Score >=20) {
        message.innerHTML = "Player 1 has won!!";
        rollBtn.style.display="none";
        resetBtn.style.display="block";
        player1Turn = true;
    }


    if (player2Score >=20) {
        message.innerHTML = "Player 2 has won!!";
        rollBtn.style.display="none";
        resetBtn.style.display="block";
        player1Turn = false;
    }
})

resetBtn.addEventListener('click', function(){
    resetBtn.style.display="none";
    rollBtn.style.display="block";
    player1Dice.innerHTML="-";
    player1Score = 0;
    player1Scoreboard.innerHTML ="0";
    player2Dice.innerHTML="-";
    player2Score = 0;
    player2Scoreboard.innerHTML ="0";

    if (player1Turn) {
        message.innerHTML = "Player 1 Turn First"
    } else {
        message.innerHTML = "Player 2 Turn First"
    }
})

