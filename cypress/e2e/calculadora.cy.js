describe("Calculadora", () => {
  it("Sumar los numeros en una cadena", () => {
    cy.visit("/");
    cy.get("#cadena").type(0);
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "0");
  });
});
