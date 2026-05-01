// ui.js
// ==============================
// HANDLE DOM
// ==============================

export function createUI() {
  const scoreEl = document.getElementById("score");
  const timerEl = document.getElementById("timer");
  const resultEl = document.getElementById("result");
  const button = document.getElementById("clickBtn");

  // ==============================
  // UPDATE SCORE
  // ==============================
  function setScore(score) {
    scoreEl.textContent = `Score: ${score}`;
  }

  // ==============================
  // UPDATE TIMER
  // ==============================
  function setTimer(time) {
    timerEl.textContent = `Time: ${time}`;
  }

  // ==============================
  // SHOW RESULT
  // ==============================
  function showResult(score) {
    resultEl.textContent = `Final Score: ${score}`;
  }

  // ==============================
  // ENABLE / DISABLE BUTTON
  // ==============================
  function setButtonState(enabled) {
    button.disabled = !enabled;
    button.classList.toggle("opacity-50", !enabled);
  }

  // ==============================
  // BIND CLICK
  // ==============================
  function bindClick(handler) {
    button.addEventListener("click", handler);
  }

  // ==============================
  // BIND RESTART
  // ==============================
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
