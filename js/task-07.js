const inputControlSize = document.querySelector("#font-size-control");

const textSize = document.querySelector("#text");

inputControlSize.addEventListener("input", (e) => {
  textSize.style.fontSize = `${e.currentTarget.value}px`;
});
