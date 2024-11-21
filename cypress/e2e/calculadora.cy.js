describe("Calculadora", () => {
  it("Sumar los numeros en una cadena", () => {
    cy.visit("/");
    cy.get("#cadena").type(0);
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "0");
  });
  it("Suma números separados por delimitadores por defecto", () => {
    cy.visit("/");
    cy.get("#cadena").type("1,2-3");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "6"); // 1 + 2 + 3
  });

  it("Suma números usando delimitadores personalizados", () => {
    cy.visit("/");
    cy.get("#cadena").type("//[*][%] 1*2%3");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "6"); // 1 + 2 + 3
  });

  it("Maneja múltiples delimitadores personalizados", () => {
    cy.visit("/");
    cy.get("#cadena").type("//[;][|] 4;5|6");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "15"); // 4 + 5 + 6
  });

  it("Ignora números mayores a 1000", () => {
    cy.visit("/");
    cy.get("#cadena").type("//[*][%] 2*1001%3");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "5"); // 2 + 3, ignora 1001
  });

  it("Devuelve 0 si no hay números válidos", () => {
    cy.visit("/");
    cy.get("#cadena").type("//[*] ");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "0"); // No hay números válidos
  });

  it("Suma correctamente con solo delimitadores por defecto", () => {
    cy.visit("/");
    cy.get("#cadena").type("7,8-9");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "24"); // 7 + 8 + 9
  });
});
