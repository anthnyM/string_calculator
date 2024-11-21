import calcular from "./calculadora";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#calcular-form")
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadenaValue = cadena.value
  
  div.innerHTML = "<p>" + calcular(cadenaValue) + "</p>";
});
