function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberSquares = document.querySelector("input");
const boxDiv = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destoryBtn = document.querySelector("button[data-destroy]");
let a = 0;

numberSquares.addEventListener("input", (e) => {
  a = e.currentTarget.value;
});
const clickHandler = () => createBoxes(a);

createBtn.addEventListener("click", clickHandler);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newElement = document.createElement("div");
    newElement.style.backgroundColor = getRandomHexColor();
    newElement.style.width = `${30 + i * 10}px`;
    newElement.style.height = `${30 + i * 10}px`;
    boxDiv.append(newElement);
  }
}
destoryBtn.addEventListener("click", () => destroyBoxes());
function destroyBoxes() {
  console.log(boxDiv.children.length);
  if (boxDiv.children.length !== 0) {
    const arrayDiv = boxDiv.children;
    console.log(arrayDiv);
    for (let i = 0; (i = arrayDiv.length); i++) {
      boxDiv.firstChild.remove();
    }
  }
}
