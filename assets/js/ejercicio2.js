const btn = document.querySelector("#btn");
const message = document.querySelector("#message");
const cantUno = document.querySelector("#input1");
const cantDos = document.querySelector("#input2");
const cantTres = document.querySelector("#input3");

btn.addEventListener("click", () => {
  message.innerHTML = total = +cantUno.value + +cantDos.value + +cantTres.value;
  if (total <= 0) {
    message.innerHTML = "Debes seleccionar al menos una unidad";
  } else if (total <= 10) {
    message.innerHTML =
      "Llevas " + `${total}` + " stickers." + "Estamos ok! con tu pedido";
  } else {
    message.innerHTML = "Son demasiados sticker, solo puedes llevar 10!";
  }
});
