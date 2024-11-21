function calcular(cadena) {
  // Extraer delimitadores personalizados y los números
  const delimitadorRegex = /^\/\/(\[.*?\])+\s*/;
  let delimitadores = [',', '-']; // Delimitadores por defecto
  let numerosParte = cadena;

  if (delimitadorRegex.test(cadena)) {
      // Extraer delimitadores personalizados
      const delimitadoresPersonalizados = cadena.match(/(?<=\[).*?(?=\])/g);
      if (delimitadoresPersonalizados) {
          delimitadores.push(...delimitadoresPersonalizados);
      }
      // Extraer la parte de los números eliminando la cabecera
      numerosParte = cadena.replace(delimitadorRegex, '');
  }

  // Crear un regex dinámico para dividir los números por los delimitadores
  const delimitadoresRegex = new RegExp(`[${delimitadores.map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('')}]`);
  const numeros = numerosParte
      .split(delimitadoresRegex) // Separar por delimitadores
      .map(Number)              // Convertir a números
      .filter(num => !isNaN(num) && num <= 1000); // Filtrar números válidos y <= 1000

  // Sumar los números
  const suma = numeros.reduce((acc, num) => acc + num, 0);

  return suma;
}

module.exports = calcular;




