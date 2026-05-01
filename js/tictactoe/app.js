import { createGame } from "./game.js";
import { createUI } from "./ui.js";

const game = createGame();
const ui = createUI();

ui.setStatus("Player X Turn");

ui.bindClick((index) => {
  const result = game.play(index);
  if (!result) return;

  ui.render(result.board);

  if (result.winner) {
    ui.setStatus(result.winner + " Wins!");
  } else if (result.draw) {
    ui.setStatus("Draw!");
  } else {
    ui.setStatus("Next Player");
  }
});

document.getElementById("restart").addEventListener("click", () => {
  game.reset();
  ui.render(Array(9).fill(""));
  ui.setStatus("Player X Turn");
});
