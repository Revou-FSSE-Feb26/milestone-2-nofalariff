export function createGame() {
  let board = Array(9).fill("");
  let currentPlayer = "X";
  let active = true;

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function play(index) {
    if (!active || board[index]) return null;

    board[index] = currentPlayer;

    if (checkWin()) {
      active = false;
      return { board, winner: currentPlayer };
    }

    if (!board.includes("")) {
      active = false;
      return { board, draw: true };
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    return { board, currentPlayer };
  }

  function checkWin() {
    return winPatterns.some(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);
  }

  function reset() {
    board = Array(9).fill("");
    currentPlayer = "X";
    active = true;
  }

  return { play, reset };
}
