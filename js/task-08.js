const formLogin = document.querySelector(".login-form");
const newObj = {};

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (email.value !== "" && password.value !== "") {
    newObj.push;
  } else {
    alert("All fields should be completed!!!");
  }
});
