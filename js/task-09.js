function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBtn = document.querySelector("button.change-color");

const changeBody = document.querySelector("body");
const colorBg = document.querySelector("span.color");

changeBtn.addEventListener("click", () => {
  changeBody.style.backgroundColor = getRandomHexColor();
  colorBg.textContent = getRandomHexColor();
});
