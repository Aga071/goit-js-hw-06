const inputControlSize = document.querySelector("#font-size-control");

const textSize = document.querySelector("#text");

textSize.style.fontSize = "57px";

console.log(textSize);
inputControlSize.addEventListener("input", (e) => {
  textSize.style.fontSize = `${e.currentTarget.value}px`;
  console.log(e.currentTarget.value);
});
