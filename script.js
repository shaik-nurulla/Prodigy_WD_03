let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.game-status');
const restartBtn = document.querySelector('.restart-btn');

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameState[index] === '') {
      gameState[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkForWin();
      switchPlayer();
    }
  });
});

restartBtn.addEventListener('click', restartGame);

function checkForWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] === gameState[b] && gameState[b] === gameState[c] && gameState[a] !== '') {
      gameStatus.textContent = `Player ${gameState[a]} wins!`;
      disableCells();
      return;
    }
  }
  if (!gameState.includes('')) {
    gameStatus.textContent = 'It\'s a draw!';
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameStatus.textContent = '';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.pointerEvents = 'auto';
  });
}

function disableCells() {
  cells.forEach(cell => {
    cell.style.pointerEvents = 'none';
  });
}
