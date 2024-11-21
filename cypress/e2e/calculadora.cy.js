describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#cadena").type(0);
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "0");
  });
});
