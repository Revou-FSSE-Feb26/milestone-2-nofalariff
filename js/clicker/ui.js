export function createUI() {
  const scoreEl = document.getElementById("score");
  const timerEl = document.getElementById("timer");
  const resultEl = document.getElementById("result");
  const button = document.getElementById("clickBtn");

  function setScore(score) {
    scoreEl.textContent = `Score: ${score}`;
  }

  function setTimer(time) {
    timerEl.textContent = `Time: ${time}`;
  }

  function showResult(score) {
    resultEl.textContent = `Final Score: ${score}`;
  }

  function setButtonState(enabled) {
    button.disabled = !enabled;
    button.classList.toggle("opacity-50", !enabled);
  }

  function bindClick(handler) {
    button.addEventListener("click", handler);
  }

  function bindRestart(handler) {
    document.getElementById("restart").addEventListener("click", handler);
  }

  return {
    setScore,
    setTimer,
    showResult,
    setButtonState,
    bindClick,
    bindRestart,
  };
}
