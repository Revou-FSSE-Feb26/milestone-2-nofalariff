export function createUI() {
  const cells = document.querySelectorAll(".cell");
  const status = document.getElementById("status");

  function render(board) {
    cells.forEach((cell, i) => {
      cell.textContent = board[i];
    });
  }

  function setStatus(text) {
    status.textContent = text;
  }

  function bindClick(handler) {
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        handler(cell.dataset.index);
      });
    });
  }

  return { render, setStatus, bindClick };
}
