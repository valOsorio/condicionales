const btn = document.querySelector("#btn");
const message = document.querySelector("#message");
const num1 = document.querySelector("#select1");
const num2 = document.querySelector("#select2");
const num3 = document.querySelector("#select3");

btn.addEventListener("click", () => {
  message.innerHTML = password = num1.value + num2.value + num3.value;
  if (password === "911" ) {
    message.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    message.innerHTML = "Password 2 correcto";
  } else {
    message.innerHTML = "El password es incorrecto, prueba otra vez!";
  }
});