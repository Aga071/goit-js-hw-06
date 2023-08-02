const inputName = document.querySelector("#name-input");

const spanName = document.querySelector("#name-output");

const hendler = (e) => {
  const ourInput = e.currentTarget;
  spanName.textContent = ourInput.value;
  if (spanName.textContent === "") {
    spanName.textContent = "Anonymous";
  }
};

inputName.addEventListener("input", hendler);
