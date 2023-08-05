const inputPassword = document.querySelector("#validation-input");

inputPassword.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === parseInt(inputPassword.dataset.length)) {
    inputPassword.classList.add("valid");
    inputPassword.classList.remove("invalid");
  } else {
    inputPassword.classList.remove("valid");
    inputPassword.classList.add("invalid");
  }
});
