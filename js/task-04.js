let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const clickSpan = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  clickSpan.textContent = `${counterValue}`;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  clickSpan.textContent = `${counterValue}`;
});
