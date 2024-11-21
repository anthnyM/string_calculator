function calcular(cadena) {
  if (!cadena) return 0; // Manejo del caso vacío
  const numeros = cadena.split(",").map(Number); // Divide la cadena y convierte a números
  return numeros.reduce((acum, num) => acum + num, 0); // Suma todos los números
}

module.exports = calcular;

