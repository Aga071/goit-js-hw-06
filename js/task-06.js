const inputPassword = document.querySelector("#validation-input");
const lengthImput = document.querySelector('input[data-length="6"]');

inputPassword.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === parseInt(lengthImput.dataset.length)) {
    inputPassword.classList.add("valid");
    inputPassword.classList.remove("invalid");
  } else {
    inputPassword.classList.remove("valid");
    inputPassword.classList.add("invalid");
  }
});
