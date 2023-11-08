const squares = document.querySelectorAll('[data-function="square"]');
const startGame = document.createElement('button');
startGame.textContent = 'Start!';
document.body.appendChild(startGame);

let interval;
let secondsLeft = 30;
let score = 0;
let gameActive = false;

function updateTimer() {
    document.querySelector('[data-function="time-left"]').textContent = secondsLeft;
}

function seconds() {
    if (secondsLeft > 0) {
        secondsLeft--;
        updateTimer();
        setTimeout(seconds, 1000);
    } else if (secondsLeft === 0) {
        clearInterval(interval);
        alert(`Game over! Your score: ${score}`);
        gameActive = false;
        startGame.style.display = 'block';
    }
}

function revealAndHide() {
    let randomIndexOfSquares = Math.floor(Math.random() * squares.length);
    squares.forEach(square => square.classList.remove('b-mole'));
    squares[randomIndexOfSquares].classList.add('b-mole');
}

function resetGame() {
    clearInterval(interval);
    secondsLeft = 30;
    updateTimer();
    document.querySelector('[data-function="score"]').textContent = '0';
    score = 0;
    squares.forEach(square => square.classList.remove('b-mole'));
}

startGame.addEventListener('click', function() {
    if (!gameActive) {
        resetGame();
        gameActive = true;
        startGame.style.display = 'none';
        interval = setInterval(revealAndHide, 1000);
        updateTimer();
        seconds();
    }
});

for (let square of squares) {
    square.addEventListener('click', function() {
        if (gameActive && square.classList.contains('b-mole')) {
            score++;
            document.querySelector('[data-function="score"]').textContent = score;
        }
    });
}
