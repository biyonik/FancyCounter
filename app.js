/**
 * Elements
 * - increase button
 * - decrease button
 * - reset button
 * - counter value
 * - counter title
 * - counter
* */
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const titleEl = document.querySelector(".counter__title");
const counterEl = document.querySelector(".counter");

/**
 * Events
 * */
increaseButtonEl.addEventListener("click", onIncrease);
decreaseButtonEl.addEventListener("click", onDecrease);
resetButtonEl.addEventListener("click", onReset);

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", onIncrease);
  document.addEventListener("keydown", onDecrease);
});

/**
 * Event handlers
 * - increase button click
 * - decrease button click
 * - reset button click
 * */

function onIncrease(event) {
  if (
    event instanceof PointerEvent ||
    (event instanceof KeyboardEvent &&
      (event.code === "ArrowUp" ||
        event.code === "NumpadAdd" ||
        event.code === "KeyW"))
  ) {
    const currentValue = Number(counterValueEl.textContent);
    const nextValue = currentValue + 1;

    if (nextValue > 5) {
      counterEl.classList.add("counter--limit");
      titleEl.innerHTML = "You have reached the maximum value";
      increaseButtonEl.disabled = true;
      decreaseButtonEl.disabled = true;
      document.removeEventListener("keydown", onIncrease);
      document.removeEventListener("keydown", onDecrease);
      increaseButtonEl.blur();
      return;
    }

    counterValueEl.textContent = nextValue;
  }
}

function onDecrease(event) {
  if (
    event instanceof PointerEvent ||
    (event instanceof KeyboardEvent &&
      (event.code === "ArrowDown" ||
        event.code === "NumpadSubtract" ||
        event.code === "KeyS"))
  ) {
    const currentValue = Number(counterValueEl.textContent);
    let nextValue = currentValue - 1;
    if (nextValue < 0) {
      nextValue = 0;
    }
    counterValueEl.textContent = nextValue;
  }
}

function onReset() {
  counterValueEl.textContent = 0;
  if (counterEl.classList.contains("counter--limit")) {
    counterEl.classList.remove("counter--limit");
    titleEl.innerHTML = "Fancy Counter";
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;
    document.addEventListener("keydown", onIncrease);
    document.addEventListener("keydown", onDecrease);
  }
}
