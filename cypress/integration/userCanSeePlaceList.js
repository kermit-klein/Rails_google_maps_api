describe("User can see places list", () => {
  it("visits home page", () => {
    cy.visit("localhost:3000/places");
    cy.get("table").contains("Buckingham Palace");
    cy.get("table").contains("Westminster Abbey");
    cy.get("table").contains("Big Ben");
  });
});
