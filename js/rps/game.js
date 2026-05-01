export function play(choice) {
  const options = ["rock", "paper", "scissors"];
  const cpu = options[Math.floor(Math.random() * 3)];

  if (choice === cpu) return { result: "Draw", cpu };

  if ((choice === "rock" && cpu === "scissors") || (choice === "paper" && cpu === "rock") || (choice === "scissors" && cpu === "paper")) {
    return { result: "Win", cpu };
  }

  return { result: "Lose", cpu };
}
