const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

console.log(list);
const items = [];
for (let i = 0; i < ingredients.length; i++) {
  const newElementList = document.createElement("li");
  newElementList.textContent = ingredients[i];
  newElementList.classList.add("item");
  items.push(newElementList);
}
list.append(...items);
