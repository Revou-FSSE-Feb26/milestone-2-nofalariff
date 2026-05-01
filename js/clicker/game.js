export function createClickerGame(duration = 10) {
  let score = 0;
  let timeLeft = duration;
  let isActive = false;
  let timerId = null;

  function start(onTick, onEnd) {
    score = 0;
    timeLeft = duration;
    isActive = true;

    timerId = setInterval(() => {
      timeLeft--;

      onTick(timeLeft);

      if (timeLeft <= 0) {
        isActive = false;
        clearInterval(timerId);
        onEnd(score);
      }
    }, 1000);
  }

  function click() {
    if (!isActive) return null;

    score++;
    return score;
  }

  function reset() {
    clearInterval(timerId);
    score = 0;
    timeLeft = duration;
    isActive = false;
  }

  return {
    start,
    click,
    reset,
  };
}
