function calcular(cadena) {
  if (!cadena) return 0;

  let delimitadores = /,|-/; // Delimitadores por defecto
  if (cadena.startsWith("//[")) {
    const finDelimitador = cadena.indexOf("]");
    const delimitadorPersonalizado = cadena.slice(3, finDelimitador);
    delimitadores = new RegExp(`[${delimitadorPersonalizado},-]`); // Combina delimitador personalizado con los predeterminados
    cadena = cadena.slice(finDelimitador + 1);
  }

  const numeros = cadena.split(delimitadores).map(Number);
  return numeros
    .filter((num) => num <= 1000) // Ignorar números mayores a 1000
    .reduce((acum, num) => acum + num, 0);
}

module.exports = calcular;




