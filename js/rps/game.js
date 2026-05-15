export function play(choice) {
  const options = ["rock", "paper", "scissors"];
  const cpu = options[Math.floor(Math.random() * 3)];

  if (choice === cpu) return { result: "Draw", cpu };

  switch (choice) {
    case "rock":
      return { result: cpu === "scissors" ? "Win" : "Lose", cpu };
    case "paper":
      return { result: cpu === "rock" ? "Win" : "Lose", cpu };
    case "scissors":
      return { result: cpu === "paper" ? "Win" : "Lose", cpu };
    default:
      return { result: "Lose", cpu };
  }
}
