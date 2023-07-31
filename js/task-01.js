const category = document.querySelectorAll(".item");
console.log(`Number of categories: ${category.length}`);

for (let i = 0; i < category.length; i++) {
  console.log(`Category: ${category[i].firstElementChild.textContent}`);
  console.log(`Elements: ${category[i].querySelectorAll("li").length}`);
}
