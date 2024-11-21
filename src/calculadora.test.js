import calcularNumeroEnCadena from "./calculadora.js";

describe("Calculadora de cadena", () => {
  it("deberia retornar 0 si la cadena esta vacia", () => {
    expect(calcularNumeroEnCadena("")).toEqual(0);
  });
  it("deberia retorna una suma si los numeros estan separados por comas", () => {
    expect(calcularNumeroEnCadena("1,2,3,4")).toEqual(10)
  })
  it("deberia retornar una suma si los numeros estan separados por comas", () => {
    expect(calcularNumeroEnCadena("1-2-3-4")).toEqual(10)
  })
  it("debería sumar los números cuando se especifica un delimitador junto con los predeterminados", () => {
    expect(calcularNumeroEnCadena("//[;]6,3-2;1")).toEqual(12);
  });
  it("debería ignorar los números mayores a 1000", () => {
    expect(calcularNumeroEnCadena("2,1001")).toEqual(2);
  });
  it("debería soportar delimitadores de cualquier longitud", () => {
    expect(calcularNumeroEnCadena("//[***]1***2***3")).toEqual(6);
  });
  it("debería soportar múltiples delimitadores", () => {
    expect(calcularNumeroEnCadena("//[*][%]1*2%3,7-9")).toEqual(22);
  });
  

});
