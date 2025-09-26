let score1 = 0;
let score2 = 0;
let gameStarted = false;
let gameTimeout;
let gameColorTimeout;
let currentWinner = null;
let gameActive = false;


function startGame() {
    if (gameActive) return;

    gameActive = true;
    currentWinner = null;
    document.getElementById('message').textContent = 'Aguarde a cor mudar...';
    document.getElementById('game-container').style.backgroundColor = '#d3d3d3';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;

    gameTimeout = Math.floor(Math.random() * 2000) + 3000;

    gameColorTimeout = setTimeout(() => {
        document.getElementById('game-container').style.backgroundColor = 'green';
        document.getElementById('message').textContent = 'Clique rapidamente!';
        gameStarted = true;
    }, gameTimeout);
}


function playerClick(player) {
    if (!gameStarted) return;

    if (currentWinner !== null) return;

    currentWinner = player;

    clearTimeout(gameColorTimeout);

    if (player === 1) {
        score1++;
        document.getElementById('score1').textContent = score1;
    } else {
        score2++;
        document.getElementById('score2').textContent = score2;
    }

    document.getElementById('message').textContent = `Jogador ${player} venceu!`;
    document.getElementById('game-container').style.backgroundColor = '#d3d3d3';

    setTimeout(() => {
        gameActive = false;
        startGame();
    }, 1000);
}


document.addEventListener('keydown', (event) => {
    if (gameStarted) {
        if (event.key === 'f' || event.key === 'F') {
            playerClick(1);
        } else if (event.key === 'j' || event.key === 'J') {
            playerClick(2);
        }
    }
});


window.onload = () => {
    startGame();
};
