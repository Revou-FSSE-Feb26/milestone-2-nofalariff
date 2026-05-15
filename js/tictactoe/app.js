import { createGame } from "./game.js";
import { createUI } from "./ui.js";

const game = createGame();
const ui = createUI();
const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("nameInput");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const greetingEl = document.getElementById("greeting");
let playerName = "";
let started = false;

function startGame() {
  game.reset();
  ui.render(Array(9).fill(""));
  ui.setStatus(`Giliran X - ${playerName}`);
  started = true;
}

function handleStart() {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Masukkan nama dulu sebelum memulai.");
    return;
  }

  playerName = name;
  greetingEl.textContent = `Halo, ${playerName}!`;
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startGame();
}

startBtn.addEventListener("click", handleStart);

ui.bindClick((index) => {
  if (!started) return;

  const result = game.play(index);
  if (!result) return;

  ui.render(result.board);

  if (result.winner) {
    ui.setStatus(`${result.winner} Wins!`);
  } else if (result.draw) {
    ui.setStatus("Draw!");
  } else {
    ui.setStatus("Next Player");
  }
});

document.getElementById("restart").addEventListener("click", () => {
  if (!playerName) return;
  startGame();
});
