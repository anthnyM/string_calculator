import calcular from "./calculadora.js";

describe("Calculadora de cadena", () => {
  it("deberia retornar 0 si la cadena esta vacia", () => {
    expect(calcular("")).toEqual(0);
  });
  it("deberia retorna una suma si los numeros estan separados por comas", () => {
    expect(calcular("1,2,3,4")).toEqual(10)
  })

});
