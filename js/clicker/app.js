// Import

import { createClickerGame } from "./game.js";
import { createUI } from "./ui.js";

const game = createClickerGame(10);
const ui = createUI();
const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("nameInput");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const greetingEl = document.getElementById("greeting");
let playerName = "";

function startGame() {
  ui.setScore(0);
  ui.setTimer(10);
  ui.showResult("");
  ui.setButtonState(true);
  game.reset();

  game.start(
    (time) => {
      ui.setTimer(time);
    },

    (finalScore) => {
      ui.setButtonState(false);
      ui.showResult(finalScore);
    },
  );
}

function handleStart() {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Masukkan nama dulu sebelum memulai.");
    return;
  }

  playerName = name;
  greetingEl.textContent = `Halo, ${playerName}! Selamat bermain.`;
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startGame();
}

startBtn.addEventListener("click", handleStart);

ui.bindClick(() => {
  const score = game.click();
  if (score !== null) {
    ui.setScore(score);
  }
});

// RESTART
ui.bindRestart(() => {
  game.reset();
  startGame();
});
