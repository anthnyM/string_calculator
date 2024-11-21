import calcular from "./calculadora.js";

describe("Calcular", () => {
  it("deberia sumar los numeros en una cadena", () => {
    expect(calcular(0)).toEqual(0);
  });
});
