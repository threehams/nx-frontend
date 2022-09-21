describe("consumer", () => {
  beforeEach(() => cy.visit("/"));

  it("displays a welcome message", () => {
    cy.get("[data-test='greeting']").as("greeting");
    cy.alias("greeting").should("contain.text", "Welcome consumer");
  });
});
