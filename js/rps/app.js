import { play } from "./game.js";

const buttons = document.querySelectorAll("button[data-choice]");
const resultText = document.getElementById("result");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    const { result, cpu } = play(choice);

    resultText.textContent = `You: ${choice} | CPU: ${cpu} → ${result}`;
  });
});
