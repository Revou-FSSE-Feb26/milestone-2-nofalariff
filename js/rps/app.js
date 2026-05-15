import { play } from "./game.js";

const buttons = document.querySelectorAll("button[data-choice]");
const resultText = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const nameInput = document.getElementById("nameInput");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const greetingEl = document.getElementById("greeting");

function setChoiceButtonsState(enabled) {
  buttons.forEach((btn) => {
    btn.disabled = !enabled;
  });
}

function handleStart() {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Masukkan nama dulu sebelum memulai.");
    return;
  }

  greetingEl.textContent = `Halo, ${name}! Pilih satu.`;
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  setChoiceButtonsState(true);
}

startBtn.addEventListener("click", handleStart);
setChoiceButtonsState(false);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    const { result, cpu } = play(choice);

    resultText.textContent = `You: ${choice} | CPU: ${cpu} → ${result}`;
  });
});
