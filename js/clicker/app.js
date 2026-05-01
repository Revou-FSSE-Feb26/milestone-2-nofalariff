// Import

import { createClickerGame } from "./game.js";
import { createUI } from "./ui.js";

const game = createClickerGame(10);
const ui = createUI();

function startGame() {
  ui.setScore(0);
  ui.setTimer(10);
  ui.showResult("");
  ui.setButtonState(true);

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

startGame();
